---
title: Carsten Lang Petersen
author_name: "carsten_lang_petersen"
start_date: 
  year: 2008
end_date:
  year: 2018
header:
  teaser: https://fond.vih.dk/sites/fond-vih.local/files/styles/panopoly_image_full/public/general/carsten-lang.jpg?itok=c0tZNbig
media: 
  url: https://fond.vih.dk/sites/fond-vih.local/files/styles/panopoly_image_full/public/general/carsten-lang.jpg?itok=c0tZNbig
  credit: arkiv.dk
  caption: *title
  thumbnail: //images.weserv.nl/?url=fond.vih.dk/sites/fond-vih.local/files/styles/panopoly_image_full/public/general/carsten-lang.jpg&w=100
category:
  - Bestyrelsesformænd
tags:
  - Carsten Lang Petersen
  - bestyrelsesformand
excerpt: "Carsten Lang Petersen er den nuværende formand"
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
