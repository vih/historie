---
title: Svend Aage Thomsen
author_name: "svend_aage_thomsen"
permalink: /svaat/
start_date: 
  year: 1942
end_date:
  year: 1961
header:
  teaser: https://filer.arkibas.dk/filer/visning/e5a2f9523f5a4503813fce7ac631abc8?t=5f931f71134641488e88bb66bec2c67657df7422b7f5e0be0fbb0dd7e3987119
media: 
  url: https://filer.arkibas.dk/filer/visning/e5a2f9523f5a4503813fce7ac631abc8?t=5f931f71134641488e88bb66bec2c67657df7422b7f5e0be0fbb0dd7e3987119
  credit: arkiv.dk
  caption: *title
  thumbnail: https://filer.arkibas.dk/filer/visning/e5a2f9523f5a4503813fce7ac631abc8?t=5f931f71134641488e88bb66bec2c67657df7422b7f5e0be0fbb0dd7e3987119
category:
  - Forstander
tags:
  - Svend Aage Thomsen
  - forstander
excerpt: "Skolens grundlægger som arbejdede hårdt for at bygge en Idrætsskole, der kunne forbedre uddannelsen af idrætsledere i Jylland. Det blev hans store mission, og efter slidsomt arbejdede kunne han se sin vision stå der i 1958 - desværre kort før hans alt for tidlige død i 1961."
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
