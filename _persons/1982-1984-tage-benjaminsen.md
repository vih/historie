---
title: Tage Benjaminsen
author_name: "tage_benjaminsen"
start_date: 
  year: 1982
end_date:
  year: 1984
header:
  teaser: https://filer.arkibas.dk/filer/visning/4f590955db935f8b97b63f90f0e7abf9?t=da85b8643e1afcd010584bdd81f60cbb8363973b334dd7466b7a04cba37c8fdf
media: 
  url: https://filer.arkibas.dk/filer/visning/4f590955db935f8b97b63f90f0e7abf9?t=da85b8643e1afcd010584bdd81f60cbb8363973b334dd7466b7a04cba37c8fdf
  credit: arkiv.dk
  caption: *title
  thumbnail: https://filer.arkibas.dk/filer/visning/4f590955db935f8b97b63f90f0e7abf9?t=da85b8643e1afcd010584bdd81f60cbb8363973b334dd7466b7a04cba37c8fdf
category:
  - Forstander
tags:
  - Tage Benjaminsen
  - forstander
excerpt: "Bliver ansat med stor opbakning fra bestyrelsen. Træder ind i et splittet lærerkollegium og vælger efter to år at få nye udfordringer med at starte en ny højskole i Skagen."
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
