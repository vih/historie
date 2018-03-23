---
title: Lars Kjærsgård
author_name: "lars_kjærsgård"
start_date: 
  year: 2007
end_date:
  year: 2009
header:
  teaser: https://drive.google.com/uc?id=0B5v4mAibvkKXR1VBeEEwVUhMa1E
media: 
  url: https://drive.google.com/uc?id=0B5v4mAibvkKXR1VBeEEwVUhMa1E
  credit: arkiv.dk
  caption: *title
  thumbnail: https://drive.google.com/uc?id=0B5v4mAibvkKXR1VBeEEwVUhMa1E
category:
  - Forstander
tags:
  - Lars Kjærsgård
  - forstander
excerpt: "Lars Kjærsgaard overtager roret i en krisetid - og hvor bestyrelsen har besluttet at der samtidig skal starte en efterskole. Det blev en vanskelig forstandertid."
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
