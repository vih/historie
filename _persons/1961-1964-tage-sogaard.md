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
  credit: "Jubilæumsskriftet 1992"
  caption: Tage Søgaard
  thumbnail: //images.weserv.nl/?url=lh3.googleusercontent.com/OOCTVD3dEsm7nMBuSIvy8AMGT1Xwz8nlY14RpZmx_aBPDgCT1ETnFvOq9J8MRf9QG2q4M3OQ7qdUk8pDQyWZueKHvAiEmQUVgXXcXr2wGN-7BnCNyR8iKiymjnzpy0lKoC_DcGqXdu8&w=100
category:
  - Forstander
tags:
  - Tage Søgård
  - forstander
excerpt: "Ansat som højskoleforstander efter Svend Aage Thomsens død i 1961. Blev forstander sammen med Aksel Bjerregaard. Sagde op i 1964."
description: "Var tidligere højskolelærer på skolen. Pga. skolens DIF relationer fik han en medforstander i Aksel Bjerregaard. Samarbejdet kom dog aldrigt til at fungere optimalt, hvilket man kan læse mere om i Jubilæumsskriftet fra 1992."
---

{{ page.description }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
