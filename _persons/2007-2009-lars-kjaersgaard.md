---
title: Lars Kjærsgård
author_name: "lars_kjærsgård"
start_date: 
  year: 2007
end_date:
  year: 2009
header:
  teaser: /assets/images/persons/lars-kjaersgaard.jpg
media: 
  url: https://drive.google.com/uc?id=0B5v4mAibvkKXR1VBeEEwVUhMa1E
  credit: "Vejle Idrætshøjskoles arkiv"
  caption: "Lars Kjærsgård"
  thumbnail: //images.weserv.nl/?url=drive.google.com/uc?id=0B5v4mAibvkKXR1VBeEEwVUhMa1E&w=100
category:
  - Forstander
tags:
  - Lars Kjærsgård
  - forstander
excerpt: "Forstander fra 2007 til 2009 i en krisetid, hvor bl.a. efterskolens startede. Det blev en vanskelig forstandertid."
description: "Lars Kjærsgaard overtager roret i en krisetid - og hvor bestyrelsen har besluttet at der samtidig skal starte en efterskole. Det blev en vanskelig forstandertid."
---

{{ page.description }}

_Vi er først lige begyndt at lave biografier på nogle af de væsentlige personligheder på Vejle Idrætshøjskole. Vi vil være rigtig taknemmelige for al den hjælp, vi kan få._
{: .notice--info}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
