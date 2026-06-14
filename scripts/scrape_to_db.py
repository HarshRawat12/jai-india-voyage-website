import os
import re
import urllib.parse
import sqlite3
import requests
from bs4 import BeautifulSoup

# Setup target paths inside the React project
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, 'database', 'jai_india_voyage.db')
IMAGES_DIR = os.path.join(BASE_DIR, 'public', 'images')
BROCHURES_DIR = os.path.join(BASE_DIR, 'public', 'brochures')

# Ensure directories exist
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)
os.makedirs(BROCHURES_DIR, exist_ok=True)

# Database Setup
def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Create pages table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS pages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT UNIQUE,
            title TEXT,
            meta_description TEXT,
            content_text TEXT,
            raw_html TEXT
        )
    ''')
    
    # Create images table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            original_url TEXT,
            local_path TEXT,
            alt_text TEXT,
            page_url TEXT
        )
    ''')
    
    # Create brochures table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS brochures (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            original_url TEXT,
            local_path TEXT,
            page_url TEXT
        )
    ''')
    
    # Create testimonials table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS testimonials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT,
            content TEXT,
            source_page TEXT
        )
    ''')
    
    # Create founder_background table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS founder_background (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            info_type TEXT,
            content TEXT,
            source_url TEXT
        )
    ''')
    
    conn.commit()
    conn.close()
    print("Database initialized successfully.")

# Populate founder background with researched details
def populate_research_data():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Clear existing to avoid duplicates on re-run
    cursor.execute("DELETE FROM founder_background")
    
    research_entries = [
        ("Ashish Mittal", "Founder Bio", 
         "Ashish Mittal is the Director and founder of Jai India Voyage Pvt. Ltd. "
         "He has a background in psychology and education, having studied in Paris and Delhi. "
         "With over two decades (20+ years) of experience as a licensed tour guide, Ashish has a "
         "deep knowledge of Indian culture, local crafts, and history. He is dedicated to creating "
         "personalized and off-the-beaten-path travel experiences for incoming travelers.", 
         "Web Search / Corporate Records"),
         
        ("Raj Vir Mittal (Raj Mittal)", "CEO & Mentor Bio", 
         "Raj Vir Mittal is the CEO and mentor of Jai India Voyage Pvt. Ltd. "
         "He is the father of the founder, Ashish Mittal. "
         "Raj is a true visionary in the travel industry who introduced the 'Namastey India' concept "
         "in France in the 1990s and later in Italy in 2002 to bridge cultures. "
         "He is an experienced professional photographer and storyteller with extensive knowledge "
         "of Indian tribes, heritage, cuisine, and local lifestyles.", 
         "Web Search / Company Profile"),
         
        ("Jai India Voyage", "Brand & Services", 
         "Jai India Voyage Pvt. Ltd. is a Destination Management Company (DMC) based in Gurugram, Haryana, "
         "incorporated on March 28, 2022. The brand specializes in organizing customized tours across "
         "India and the sub-continent, focusing on cultural heritage, arts, crafts, textiles, and tribal tours. "
         "They cater to selective travelers including photographers and journalists. "
         "They also operate out of 'Dev Vatika', a family-owned homestay in Gurgaon/Delhi outskirts that serves "
         "as a welcoming base for their travelers.", 
         "Web Search / Official site"),
         
        ("Dev Vatika", "Homestay & Experience", 
         "Dev Vatika is the Mittal family homestay located on the outskirts of Delhi/Gurugram. "
         "It is utilized by Jai India Voyage as a comfortable, peaceful base for incoming travelers "
         "to experience Indian hospitality, home-cooked food, cooking sessions, and wellness programs "
         "before they embark on their deeper subcontinent journeys.", 
         "Web Search / Client Reviews")
    ]
    
    cursor.executemany(
        "INSERT INTO founder_background (subject, info_type, content, source_url) VALUES (?, ?, ?, ?)",
        research_entries
    )
    
    conn.commit()
    conn.close()
    print("Researched founder and brand data inserted into founder_background table.")

# Download file
def download_file(url, folder, filename):
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(url, headers=headers, timeout=15)
        if response.status_code == 200:
            clean_filename = re.sub(r'[\\/*?:"<>|]', '_', filename)
            local_path = os.path.join(folder, clean_filename)
            with open(local_path, 'wb') as f:
                f.write(response.content)
            # Return relative path starting with /images/ or /brochures/ for React frontend
            return '/' + os.path.relpath(local_path, os.path.join(BASE_DIR, 'public')).replace('\\', '/')
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return None

# Scrape Page
def scrape_page(session, url, base_url):
    print(f"Scraping: {url}")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = session.get(url, headers=headers, timeout=15)
        if response.status_code != 200:
            print(f"Error {response.status_code} for {url}")
            return None
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract title
        title = soup.title.string.strip() if soup.title else "No Title"
        
        # Extract meta description
        meta_desc = ""
        meta_tag = soup.find('meta', attrs={'name': 'description'})
        if meta_tag:
            meta_desc = meta_tag.get('content', '').strip()
            
        # Cleaned text
        for script in soup(["script", "style"]):
            script.decompose()
        content_text = soup.get_text(separator=' ').strip()
        content_text = re.sub(r'\s+', ' ', content_text)
        
        # Save page to pages database
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute('''
            INSERT OR REPLACE INTO pages (url, title, meta_description, content_text, raw_html)
            VALUES (?, ?, ?, ?, ?)
        ''', (url, title, meta_desc, content_text, response.text))
        conn.commit()
        
        # Download images
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                img_url = urllib.parse.urljoin(url, src)
                alt = img.get('alt', '').strip()
                parsed_url = urllib.parse.urlsplit(img_url)
                filename = os.path.basename(parsed_url.path)
                if not filename:
                    filename = "image.png"
                
                if base_url in img_url or not img_url.startswith('http'):
                    local_rel_path = download_file(img_url, IMAGES_DIR, filename)
                    if local_rel_path:
                        cursor.execute('''
                            INSERT INTO images (original_url, local_path, alt_text, page_url)
                            VALUES (?, ?, ?, ?)
                        ''', (img_url, local_rel_path, alt, url))
        
        # Download brochures/PDFs
        for link in soup.find_all('a'):
            href = link.get('href')
            if href and href.lower().endswith('.pdf'):
                pdf_url = urllib.parse.urljoin(url, href)
                parsed_url = urllib.parse.urlsplit(pdf_url)
                filename = os.path.basename(parsed_url.path)
                
                local_rel_path = download_file(pdf_url, BROCHURES_DIR, filename)
                if local_rel_path:
                    cursor.execute('''
                        INSERT INTO brochures (original_url, local_path, page_url)
                        VALUES (?, ?, ?)
                    ''', (pdf_url, local_rel_path, url))
        
        # Parse testimonials
        if 'clientExperience' in url or 'experience' in url.lower():
            for bq in soup.find_all(['blockquote', 'p']):
                text = bq.get_text().strip()
                if len(text) > 40 and ('guide' in text.lower() or 'trip' in text.lower() or 'voyage' in text.lower() or 'india' in text.lower() or 'mittal' in text.lower()):
                    author = "Client Review"
                    strong_text = bq.find('strong')
                    if strong_text:
                        author = strong_text.get_text().strip()
                    cursor.execute('''
                        INSERT INTO testimonials (author, content, source_page)
                        VALUES (?, ?, ?)
                    ''', (author, text, url))
                    
        conn.commit()
        conn.close()
        
        # Extract links
        links = []
        for a in soup.find_all('a'):
            href = a.get('href')
            if href:
                full_href = urllib.parse.urljoin(url, href)
                parsed_href = urllib.parse.urlparse(full_href)
                clean_href = urllib.parse.urlunparse((parsed_href.scheme, parsed_href.netloc, parsed_href.path, '', '', ''))
                
                if base_url in clean_href and not clean_href.lower().endswith(('.pdf', '.jpg', '.png', '.jpeg', '.gif', '.zip')):
                    if clean_href not in links:
                        links.append(clean_href)
        return links
        
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return None

def main():
    init_db()
    populate_research_data()
    
    base_url = "https://jaiindiavoyage.com"
    start_url = "https://jaiindiavoyage.com/index.html"
    
    session = requests.Session()
    
    queue = [start_url, "https://jaiindiavoyage.com/AboutUs.html", "https://jaiindiavoyage.com/clientExperience.html"]
    visited = set()
    
    while queue:
        url = queue.pop(0)
        if url in visited:
            continue
        visited.add(url)
        
        new_links = scrape_page(session, url, base_url)
        if new_links:
            for link in new_links:
                if link not in visited and link not in queue:
                    queue.append(link)
                    
    print("\n--- Scraping Completed ---")
    print(f"Visited pages: {len(visited)}")
    print(f"SQLite Database generated at: {DB_PATH}")

if __name__ == '__main__':
    main()
