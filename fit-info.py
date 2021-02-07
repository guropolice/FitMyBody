from typing import Text
import requests
from bs4 import BeautifulSoup


URL = "https://store.musinsa.com/app/goods/1760748"
# https://store.musinsa.com/app/
# https://store.musinsa.com/app/goods/1760748
# https://store.musinsa.com/app/goods/978464

webpage = requests.get(URL)
soup = BeautifulSoup(webpage.content, "html.parser")

sizeTitle = soup.select_one(
    "#page_product_detail > div.right_area.page_detail_product > div.right_contents.section_product_summary > div.wrap_product > div.product_left > div.box_material > h4").text

# fitInfo = soup.select_one(
#     "#page_product_detail > div.right_area.page_detail_product > div.right_contents.section_product_summary > div.wrap_product > div.product_left > div.box_material")

# cm = soup.select_one("#size_table > thead > tr > th:nth-child(1)")
print(sizeTitle)

# 전체 정보 가져올때
'''
infos = soup.select("#size_table > thead > tr >th ")
info2 = soup.select("#size_table > tbody > tr")

for info in infos:
    print(info.text.strip())

for info1 in info2:
    print(info1.text.strip())

'''


table = soup.find('table', {'class': 'table_th_grey'})

thead = table.find_all('th')

theadList = []
theadLen = len(thead)
for i in range(0, theadLen):
    thead = table.find_all('th')[i].text.strip()
    theadList.append(thead)

rowTheadList = theadList[:5]
columnTheadList = theadList[6:]

print(rowTheadList)
print(columnTheadList)


tbody = table.find_all('td')
tbodyList = []
tbodyLen = len(tbody)
for k in range(0, tbodyLen):
    tbody = table.find_all('td')[k].text
    tbodyList.append(tbody)

infoTbodyList = tbodyList[2:]

con = [infoTbodyList[0:4], infoTbodyList[4:8],
       infoTbodyList[8:12], infoTbodyList[12:16]]
print(con)
#pd.DataFrame(con, columns=col, index=ind)
