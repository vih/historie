---
title: Poul Grejs
author_name: "poul_grejs"
start_date: 
  year: 1996
end_date:
  year: 2008
header:
  teaser: /assets/images/authors/default-profile.png
media: 
  url: /assets/images/authors/default-profile.png
  #credit: ""
  caption: "Poul Grejs - vi mangler et billede"
  thumbnail: /assets/images/authors/default-profile.png
category:
  - Bestyrelsesformænd
tags:
  - Poul Grejs
  - bestyrelsesformand
excerpt: "Formand for bestyrelsen fra 1996 til 2008."
description: "Poul Grejs fra Dansk Sejlunion var formand i 22 år."
---

_Vi mangler et ordentligt billede af Poul Grejs fra hans formandsperiode på Vejle Idrætshøjskole. Kan du hjælpe?_
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
