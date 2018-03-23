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
  thumbnail: //images.weserv.nl/?url=filer.arkibas.dk/filer/visning/4f590955db935f8b97b63f90f0e7abf9?t=da85b8643e1afcd010584bdd81f60cbb8363973b334dd7466b7a04cba37c8fdf&w=100
category:
  - Forstander
tags:
  - Tage Benjaminsen
  - forstander
excerpt: "Bliver ansat med stor opbakning fra bestyrelsen. Træder ind i et splittet lærerkollegium og vælger efter to år at få nye udfordringer med at starte en ny højskole i Skagen."
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
