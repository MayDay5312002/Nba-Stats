import scrapy
from nbascrapper.items import NbascrapperItem

class NbaspiderSpider(scrapy.Spider):
    name = "nbaspider"
    allowed_domains = ["nba.com"]
    start_urls = ["https://www.nba.com/stats"]

    def parse(self, response):
        #'div[class^="LeaderBoardCard_lbcWrapper"]' this is what we want to tatal of 28: 9 players col, 9 teams col, 10 about season stat leaders
        data = response.css('div[class^="LeaderBoardCard_lbcWrapper"]')
        # print((len)(response.css('div[class^="LeaderBoardCard_lbcWrapper"]')))
        for i in range(0, 9):
            row = data[i].css('tr')
            name_cat = data[i].css('h2::text').get()
            # print(row[0].get())
            for j in range(0, len(row)):
                person = NbascrapperItem()
                person['category'] = name_cat
                person['place'] = int(row[j].css('td::text').get())
                person['player_name'] = row[j].css('a::text')[0].get()
                person['team_name'] = row[j].css('span::text').get()
                if(i == 8):
                        person['stat'] = float(row[j].css('a::text')[1].get())
                else:
                    person['stat'] = int(row[j].css('a::text')[1].get())
                yield person
                # yield {
                #     'category': person['category'],
                #     'place': person['place'],
                #     'player_name': person['player_name'],
                #     'team_name': person['team_name'],
                #     'stat': person['stat'],
                # }
                # print(person)

                

            

            
