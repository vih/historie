---
title: Bent Serup
author_name: "bent_serup"
start_date: 
  year: 1998
end_date:
  year: 2006
header:
  teaser: /assets/images/authors/default-profile.png
media: 
  url: /assets/images/authors/default-profile.png
  #credit: ""
  caption: "Bent Serup"
  thumbnail: /assets/images/authors/default-profile.png
category:
  - Forstander
tags:
  - Bent Serup
  - forstander
excerpt: "Forstander fra 1998 - 2006. Var bl.a. med til at etablere kunstgræsbanen."
description: "Bent Serup har tætte bånd til DIF og Team Danmark. Bent sørger bl.a. for at skolen ved hjælp af Vejle Kommune og DBU får anlagt en kunstgræsbane."
sidebar:
  - title: Bent Serup
    image: https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0cb/2ac/3a8897a.jpg
    image_alt: Bent Serup
    text: "Forstander fra 1998 - 2006. Var bl.a. med til at etablere kunstgræsbanen."
---

_Vi mangler et ordentligt billede af Bent Serup fra hans formandsperiode på Vejle Idrætshøjskole. Kan du hjælpe?_
{: .notice--info}

{{ page.description }}

_Vi er først lige begyndt at lave biografier på nogle af de væsentlige personligheder på Vejle Idrætshøjskole. Vi vil være rigtig taknemmelige for al den hjælp, vi kan få._
{: .notice--info}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
