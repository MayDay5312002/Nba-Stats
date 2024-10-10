import scrapy
from nbascrapper.items import NbascrapperItem
import time
import random

class NbaspiderSpider(scrapy.Spider):
    name = "nbaspider"
    allowed_domains = ["nba.com"]
    start_urls = ["https://www.nba.com/stats"]

    def parse(self, response):
        #this is the the div that contains all information needed.
        data = response.css('div[class^="LeaderBoardCard_lbcWrapper"]')

        counter = 0
        for i in range(0, 9):  # First 9 are for player stats
            row = data[i].css('tr')
            name_cat = data[i].css('h2::text').get()

            for j in range(0, len(row)):
                # print(f"Processing player {counter}...")

                person = NbascrapperItem()
                person['category'] = name_cat
                person['place'] = int(row[j].css('td::text').get())
                person['player_name'] = row[j].css('a::text')[0].get()
                person['team_name'] = row[j].css('span::text').get()

                if i == 8:
                    person['stat'] = float(row[j].css('a::text')[1].get())
                else:
                    person['stat'] = int(row[j].css('a::text')[1].get())

                link = "https://www.nba.com" + row[j].css('a::attr(href)')[0].get() 
                person['player_link'] = link
                counter += 1

                #link to scrape more data about player. dont_filter is used to allow/or not allow duplicate requests based on URL.(TAKE NOTE OF THIS)
                yield scrapy.Request(link, callback=self.parse_player, meta={'player': person}, dont_filter=True)
            

    def parse_player(self, response):
        person = response.meta['player']

        valPlayer = response.css('p[class^="PlayerSummary_playerStatValue"]::text')
        print(len(valPlayer))
        if len(valPlayer) == 4:
            person['photo'] = response.css('img[class^="PlayerImage_image"]::attr(src)').get(default="NONE")
            person['ppg'] = valPlayer[0].get()
            person['rpg'] = valPlayer[1].get()
            person['apg'] = valPlayer[2].get()
            person['pie'] = valPlayer[3].get()
        elif len(valPlayer) == 3:
            person['photo'] = response.css('img[class^="PlayerImage_image"]::attr(src)').get(default="NONE")
            person['ppg'] = valPlayer[0].get()
            person['rpg'] = valPlayer[1].get()
            person['apg'] = valPlayer[2].get()
            person['pie'] = "--"
        else:
            person['photo'] = "unknown.png"
            person['ppg'] = "--"
            person['rpg'] = "--"
            person['apg'] = "--"
            person['pie'] = "--"

        yield person
