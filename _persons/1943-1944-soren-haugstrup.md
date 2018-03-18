---
title: Søren Haugstrup Jensen
author_name: "haugstrup"
start_date: 
  year: 1943
end_date:
  year: 1944
header:
  teaser: http://hojskolehistorie.dk/media/749655/img_5675_474x286.jpg
media: 
  url: http://hojskolehistorie.dk/media/749655/img_5675_474x286.jpg
  credit: arkiv.dk
  caption: *title
  thumbnail: http://hojskolehistorie.dk/media/749655/img_5675_474x286.jpg
category:
  - Medforstander
tags:
  - Søren Haugstrup Jensen
  - forstander
excerpt: "Haugstrup var ansat som medforstander for Svend Aage Thomsen. Han var egentlig forstander på Ry Højskole, som var beslaglagt af tyskerne. Haugstrup var ikke idrætsmand, men højskolemand og cand. mag. i dansk og tysk. Han og hans kone, Karen, boede i Skovhytten. (se Jubilæumsskrift fra 1992, side 17)"
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
