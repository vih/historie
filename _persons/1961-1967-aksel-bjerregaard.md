---
title: Aksel Bjerregaard
author_name: "aksel_bjerregaard"
start_date: 
  year: 1961
end_date:
  year: 1967
header:
  teaser: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
media: 
  url: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
  credit: arkiv.dk
  caption: *title
  thumbnail: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
category:
  - Forstander
tags:
  - Aksel Bjerregaard
  - forstander
excerpt: "En af de fremmeste eksponenter for træning, bl.a. circuit træning. Blev medforstander for Tage Søgård. Samarbejdet blev aldrig optimalt og det antydes i Jubilæumsskriftet fra 1992, at Bjerregaard blev nødt til at stoppe, fordi hans livsstil ikke kunne forenes med at være forstander på en Idrætsskole."
timeline_excerpt: *excerpt
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
