"""Convert deployed raster assets to web-friendly WebP files.

Usage:
    python scripts/optimize_media.py public/images --report media-report.json
    python scripts/optimize_media.py public/images --delete-originals
"""

from __future__ import annotations

import argparse
import json
from collections import defaultdict
from pathlib import Path

from PIL import Image, ImageOps


RASTER_EXTENSIONS = {".jpg", ".jpeg", ".png"}


def target_paths(sources: list[Path]) -> dict[Path, Path]:
    by_stem: dict[tuple[Path, str], list[Path]] = defaultdict(list)
    for source in sources:
        by_stem[(source.parent, source.stem.lower())].append(source)

    targets: dict[Path, Path] = {}
    for source in sources:
        siblings = by_stem[(source.parent, source.stem.lower())]
        if len(siblings) == 1:
            targets[source] = source.with_suffix(".webp")
        else:
            targets[source] = source.with_name(
                f"{source.stem}-{source.suffix.removeprefix('.').lower()}.webp"
            )
    return targets


def convert_image(source: Path, target: Path, max_dimension: int, quality: int) -> dict:
    original_bytes = source.stat().st_size

    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        original_size = image.size

        if max(image.size) > max_dimension:
            image.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)

        has_alpha = image.mode in {"RGBA", "LA"} or "transparency" in image.info
        small_png = source.suffix.lower() == ".png" and image.width * image.height <= 512 * 512
        use_lossless = has_alpha or small_png

        if has_alpha:
            image = image.convert("RGBA")
        else:
            image = image.convert("RGB")

        save_options = {"format": "WEBP", "method": 6, "exact": has_alpha}
        if use_lossless:
            save_options["lossless"] = True
        else:
            save_options["quality"] = quality if original_bytes >= 500_000 else max(quality, 88)

        icc_profile = opened.info.get("icc_profile")
        if icc_profile:
            save_options["icc_profile"] = icc_profile

        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, **save_options)

    with Image.open(target) as check:
        check.verify()

    output_bytes = target.stat().st_size
    return {
        "source": source.as_posix(),
        "target": target.as_posix(),
        "original_bytes": original_bytes,
        "output_bytes": output_bytes,
        "saved_bytes": original_bytes - output_bytes,
        "original_size": list(original_size),
        "output_size": list(image.size),
        "lossless": use_lossless,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", type=Path)
    parser.add_argument("--max-dimension", type=int, default=2560)
    parser.add_argument("--quality", type=int, default=84)
    parser.add_argument("--report", type=Path)
    parser.add_argument("--delete-originals", action="store_true")
    args = parser.parse_args()

    root = args.root.resolve()
    sources = sorted(
        path for path in root.rglob("*")
        if path.is_file() and path.suffix.lower() in RASTER_EXTENSIONS
    )
    targets = target_paths(sources)
    results = []

    for index, source in enumerate(sources, start=1):
        target = targets[source]
        results.append(convert_image(source, target, args.max_dimension, args.quality))
        print(f"[{index:03}/{len(sources):03}] {source.name} -> {target.name}")

    if args.delete_originals:
        for source in sources:
            source.unlink()

    summary = {
        "files": len(results),
        "original_bytes": sum(item["original_bytes"] for item in results),
        "output_bytes": sum(item["output_bytes"] for item in results),
        "saved_bytes": sum(item["saved_bytes"] for item in results),
        "deleted_originals": args.delete_originals,
        "items": results,
    }

    print(json.dumps({key: value for key, value in summary.items() if key != "items"}, indent=2))
    if args.report:
        args.report.write_text(json.dumps(summary, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
