---
title: Tage Søgaard
author_name: "tage_søgaard"
start_date: 
  year: 1961
end_date:
  year: 1964
header:
  teaser: https://lh3.googleusercontent.com/OOCTVD3dEsm7nMBuSIvy8AMGT1Xwz8nlY14RpZmx_aBPDgCT1ETnFvOq9J8MRf9QG2q4M3OQ7qdUk8pDQyWZueKHvAiEmQUVgXXcXr2wGN-7BnCNyR8iKiymjnzpy0lKoC_DcGqXdu8
media: 
  url: https://lh3.googleusercontent.com/OOCTVD3dEsm7nMBuSIvy8AMGT1Xwz8nlY14RpZmx_aBPDgCT1ETnFvOq9J8MRf9QG2q4M3OQ7qdUk8pDQyWZueKHvAiEmQUVgXXcXr2wGN-7BnCNyR8iKiymjnzpy0lKoC_DcGqXdu8
  credit: arkiv.dk
  caption: *title
  thumbnail: https://lh3.googleusercontent.com/OOCTVD3dEsm7nMBuSIvy8AMGT1Xwz8nlY14RpZmx_aBPDgCT1ETnFvOq9J8MRf9QG2q4M3OQ7qdUk8pDQyWZueKHvAiEmQUVgXXcXr2wGN-7BnCNyR8iKiymjnzpy0lKoC_DcGqXdu8
category:
  - Forstander
tags:
  - Tage Søgård
  - forstander
excerpt: "Var tidligere højskolelærer på skolen. Pga. skolens DIF relationer fik han en medforstander i Aksel Bjerregaard. Samarbejdet kom dog aldrigt til at fungere optimalt, hvilket man kan læse mere om i Jubilæumsskriftet fra 1992."
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
