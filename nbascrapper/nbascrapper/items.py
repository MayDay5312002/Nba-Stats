# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class NbascrapperItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    category = scrapy.Field()
    place = scrapy.Field()
    player_name = scrapy.Field()
    team_name = scrapy.Field()
    stat = scrapy.Field()
    pass
