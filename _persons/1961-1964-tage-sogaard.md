---
title: Tage Søgård
author_name: "tage_søgård"
start_date: 
  year: 1961
end_date:
  year: 1964
header:
#  teaser: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
media: 
#  url: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
#  credit: arkiv.dk
#  caption: *title
#  thumbnail: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
category:
  - Forstander
tags:
  - Tage Søgård
  - forstander
excerpt: "Var tidligere højskolelærer på skolen. Pga. skolens DIF relationer fik han en medforstander i Aksel Bjerregaard. Samarbejdet kom dog aldrigt til at fungere optimalt, hvilket man kan læse mere om i Jubilæumsskriftet fra 1992."
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
