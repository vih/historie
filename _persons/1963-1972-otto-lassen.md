---
title: Otto Lassen
author_name: "otto_lassen"
start_date: 
  year: 1963
end_date:
  year: 1972
header:
  teaser: https://filer.arkibas.dk/filer/visning/18605c69752319ba1de600b02302a5d0?t=c86b44b307e70f543b6d57d45ddff7afde73e8155d5e049f6f8d00e7f4f7ab9e
media: 
  url: https://filer.arkibas.dk/filer/visning/18605c69752319ba1de600b02302a5d0?t=c86b44b307e70f543b6d57d45ddff7afde73e8155d5e049f6f8d00e7f4f7ab9e
  credit: arkiv.dk
  caption: *title
  thumbnail: https://filer.arkibas.dk/filer/visning/18605c69752319ba1de600b02302a5d0?t=c86b44b307e70f543b6d57d45ddff7afde73e8155d5e049f6f8d00e7f4f7ab9e
category:
  - Bestyrelsesformænd
tags:
  - Otto Lassen
  - bestyrelsesformand
excerpt: "Kontorchef, Otto Lassen, var bestyrelsesformand i en lang årrække."
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
