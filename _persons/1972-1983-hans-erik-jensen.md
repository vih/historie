---
title: Hans Erik Jensen
author_name: "hans_erik_jensen"
start_date: 
  year: 1972
end_date:
  year: 1983
header:
  teaser: /assets/images/persons/hans-erik-jensen-1982.jpg
media: 
  url: /assets/images/persons/hans-erik-jensen-1982.jpg
  credit: "Årsskrift 1982"
  caption: "Hans Erik Jensen"
  thumbnail: /assets/images/persons/hans-erik-jensen-1982.jpg
category:
  - Bestyrelsesformænd
tags:
  - Hans Erik Jensen
  - bestyrelsesformand
excerpt: "Formand i to perioder - først fra 1972-1980 og derefter fra 1981-1983, da Vagn Mikkelsen døde."
description: "Hans Erik Jensen var formand i to perioder - først fra 1972-1980 og derefter fra 1981-1983, da Vagn Mikkelsen døde."
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
