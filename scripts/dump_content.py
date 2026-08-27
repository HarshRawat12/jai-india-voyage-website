import sqlite3
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, 'database', 'jai_india_voyage.db')

def dump():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    print("\n=============================================")
    print("      DUMPING FOUNDER BACKGROUND TABLE")
    print("=============================================")
    cursor.execute("SELECT subject, info_type, content FROM founder_background")
    for row in cursor.fetchall():
        print(f"\n--- Subject: {row[0]} | Type: {row[1]} ---")
        print(row[2])

    print("\n=============================================")
    print("      DUMPING ABOUT US PAGE CONTENT (ID 2)")
    print("=============================================")
    cursor.execute("SELECT content_text FROM pages WHERE id=2")
    about_content = cursor.fetchone()
    if about_content:
        print(about_content[0][:5000]) # Print first 5000 chars
    else:
        print("About Us page content not found in database.")

    print("\n=============================================")
    print("      DUMPING TESTIMONIALS")
    print("=============================================")
    cursor.execute("SELECT author, content, source_page FROM testimonials")
    for idx, row in enumerate(cursor.fetchall()):
        print(f"\n--- Testimonial {idx+1} | Author: {row[0]} ---")
        print(f"Source: {row[2]}")
        print(row[1])

    conn.close()

if __name__ == '__main__':
    dump()
