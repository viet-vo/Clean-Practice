# Example

import requests
from bs4 import BeautifulSoup

# Collect and parse first page
page = requests.get(
    'https://news.ycombinator.com/news'
)
soup = BeautifulSoup(page.text, 'html.parser')

# Pull all text from the storyLink div
article_name_list = soup.find_all(class_='storylink')

# Use .contents to pull out the tag’s children
for  article_name in article_name_list:
    article = article_name.contents[0]
    print(article)