# Example

import requests
from bs4 import BeautifulSoup

# Collect and parse first page
page = requests.get(
    'https://news.ycombinator.com/news'
    # 'https://web.archive.org/web/20121007172955/https://www.nga.gov/collection/anZ1.htm'
)
soup = BeautifulSoup(page.text, 'html.parser')

# # Pull all text from the BodyText div
# artist_name_list = soup.find(class_='BodyText')
article_name_list = soup.find_all(class_='storylink')

# # Pull text from all instances of <a> tag within BodyText div
# artist_name_list_items = artist_name_list.find_all('a')
# article_name_list_items = article_name_list.find('a')

# # Use .contents to pull out the <a> tag’s children
# for artist_name in artist_name_list_items:
#     names = artist_name.contents[0]
#     print(names)
for  article_name in article_name_list:
    article = article_name.contents[0]
    print(article)
# print(article_name_list_items)