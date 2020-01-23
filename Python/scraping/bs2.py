# Modules
import requests
from bs4 import BeautifulSoup

# Site request
url = 'https://www.amazon.com/s?k=jean+shorts+men&crid=3I902TX8F6XLF&sprefix=jean+shorts+men%2Caps%2C268&ref=nb_sb_ss_i_1_15'
headers = { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36' }

# Collect and parse first page
page = requests.get(url, headers=headers)
soup = BeautifulSoup(page.text, 'html.parser')

# Pull all text sections from 
titles = soup.find_all(class_='s-image-overlay-white-semitransparent')

# Print scraped and parsed info
print(titles)
