# Modules
import requests
from bs4 import BeautifulSoup

# Site address
site = 'https://www.amazon.com/s?k=jean+shorts+men&crid=3I902TX8F6XLF&sprefix=jean+shorts+men%2Caps%2C268&ref=nb_sb_ss_i_1_15'

# Collect and parse first page
page = requests.get(site)
soup = BeautifulSoup(page.text, 'html.parser')

# Print scraped and parsed info
print(soup)
