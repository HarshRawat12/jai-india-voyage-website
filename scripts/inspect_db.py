import os
import sqlite3

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, 'database', 'jai_india_voyage.db')

def inspect():
    if not os.path.exists(DB_PATH):
        print(f"Error: Database file not found at {DB_PATH}. Please run the scraper first.")
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("\n==================================================")
    print("   JAI INDIA VOYAGE DATABASE INSPECTION REPORT")
    print("==================================================\n")
    
    # 1. Row counts
    tables = ['pages', 'images', 'brochures', 'testimonials', 'founder_background']
    for table in tables:
        try:
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            count = cursor.fetchone()[0]
            print(f"Table '{table}': {count} entries found.")
        except Exception as e:
            print(f"Error reading table '{table}': {e}")
            
    print("\n--------------------------------------------------")
    print("   CRAWLED PAGES SUMMARY")
    print("--------------------------------------------------")
    try:
        cursor.execute("SELECT id, url, title FROM pages")
        for row in cursor.fetchall():
            print(f"ID {row[0]}: {row[2]} ({row[1]})")
    except Exception as e:
        print(f"Error: {e}")
        
    print("\n--------------------------------------------------")
    print("   FOUNDER & BRAND BACKGROUND (RESEARCHED DATA)")
    print("--------------------------------------------------")
    try:
        cursor.execute("SELECT subject, info_type, length(content) FROM founder_background")
        for row in cursor.fetchall():
            print(f"Subject: {row[0]} | Type: {row[1]} | Content Length: {row[2]} chars")
    except Exception as e:
        print(f"Error: {e}")

    print("\n--------------------------------------------------")
    print("   TESTIMONIALS SAMPLE")
    print("--------------------------------------------------")
    try:
        cursor.execute("SELECT author, source_page, content FROM testimonials LIMIT 3")
        rows = cursor.fetchall()
        if not rows:
            print("No testimonials parsed directly yet.")
        for row in rows:
            content_snippet = row[2][:120] + "..." if len(row[2]) > 120 else row[2]
            print(f"Author: {row[0]} (Source: {row[1]})\nReview: {content_snippet}\n")
    except Exception as e:
        print(f"Error: {e}")

    print("\n--------------------------------------------------")
    print("   DOWNLOADED BROCHURES SUMMARY")
    print("--------------------------------------------------")
    try:
        cursor.execute("SELECT id, original_url, local_path FROM brochures")
        rows = cursor.fetchall()
        if not rows:
            print("No brochures found.")
        for row in rows:
            print(f"ID {row[0]}: Local: {row[2]} | Orig: {row[1]}")
    except Exception as e:
        print(f"Error: {e}")
        
    print("\n--------------------------------------------------")
    print("   DOWNLOADED IMAGES SAMPLE")
    print("--------------------------------------------------")
    try:
        cursor.execute("SELECT id, local_path, alt_text FROM images LIMIT 5")
        rows = cursor.fetchall()
        if not rows:
            print("No images downloaded.")
        for row in rows:
            print(f"ID {row[0]}: Local: {row[1]} | Alt: {row[2]}")
    except Exception as e:
        print(f"Error: {e}")
        
    conn.close()
    print("\n==================================================")

if __name__ == '__main__':
    inspect()
