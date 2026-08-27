import sqlite3
import os
from bs4 import BeautifulSoup

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, 'database', 'jai_india_voyage.db')

def parse():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT raw_html FROM pages WHERE id=3")
    row = cursor.fetchone()
    if not row:
        print("Page not found.")
        return
        
    html = row[0]
    soup = BeautifulSoup(html, 'html.parser')
    
    output_file = os.path.join(BASE_DIR, 'scripts', 'parsed_reviews.txt')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("--- Searching for reviews in HTML ---\n")
        paragraphs = soup.find_all('p')
        for idx, p in enumerate(paragraphs):
            text = p.get_text().strip()
            if len(text) > 40 and ('voyage' in text.lower() or 'mittal' in text.lower() or 'homestay' in text.lower() or 'dev' in text.lower() or 'experience' in text.lower()):
                f.write(f"\n[Paragraph {idx}] Length: {len(text)}\n")
                f.write(text + "\n")
                
                # Check parents and siblings for author names
                parent = p.parent
                f.write(f"Parent Tag: {parent.name}\n")
                
                # print all text in parent
                f.write(f"Parent Full Text: {parent.get_text().strip()[:500]}\n")
                f.write("-" * 40 + "\n")
                
    print(f"Parsed reviews written to: {output_file}")
    conn.close()

if __name__ == '__main__':
    parse()
