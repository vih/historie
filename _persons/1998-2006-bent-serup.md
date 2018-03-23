---
title: Bent Serup
author_name: "bent_serup"
start_date: 
  year: 1998
end_date:
  year: 2006
header:
  teaser: https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0cb/2ac/3a8897a.jpg
media: 
  url: https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0cb/2ac/3a8897a.jpg
  credit: arkiv.dk
  caption: *title
  thumbnail: https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0cb/2ac/3a8897a.jpg
category:
  - Forstander
tags:
  - Bent Serup
  - forstander
excerpt: "Bent Serup har tætte bånd til DIF og Team Danmark. Bent sørger bl.a. for at skolen ved hjælp af Vejle Kommune og DBU får anlagt en kunstgræsbane."
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
