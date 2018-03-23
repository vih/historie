---
title: Vagn Mikkelsen
author_name: "vagn_mikkelsen"
start_date: 
  year: 1980
end_date:
  year: 1981
header:
  #teaser: https://www.aoh.dk/storyimage/AO/20141018/ARTIKEL/141018583/AR/0/AR-141018583.jpg&MaxH=415&imageVersion=default&Q=95&MT=DT20141021101450
media: 
  #url: https://www.aoh.dk/storyimage/AO/20141018/ARTIKEL/141018583/AR/0/AR-141018583.jpg&MaxH=415&imageVersion=default&Q=95&MT=DT20141021101450
  #credit: arkiv.dk
  #caption: *title
  #thumbnail: https://www.aoh.dk/storyimage/AO/20141018/ARTIKEL/141018583/AR/0/AR-141018583.jpg&MaxH=415&imageVersion=default&Q=95&MT=DT20141021101450
category:
  - Bestyrelsesformænd
tags:
  - Vagn Mikkelsen
  - bestyrelsesformand
excerpt: "Vagn Mikkelsen nåede kun et år på formandsposten, inden han døde."
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% for post in author %}
  {% include archive-single.html %}
{% endfor %}
