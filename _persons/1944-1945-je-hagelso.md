---
title: Jens Ejlert Hagelsø
author_name: "hagelsø"
start_date: 
  year: 1944
  month: 11
  day: 1
end_date:
  year: 1945
  month: 4
  day: 30
header:
  teaser: /assets/images/persons/jehagelsoe.png
media: 
  url: http://www.vojensbilleder.dk/kendte/tejlert_hagelsoe.jpg
  credit: "Vojens Billeder"
  caption: "Jens Ejlert Hagelsø"
  thumbnail: http://www.vojensbilleder.dk/kendte/tejlert_hagelsoe.jpg
category:
  - Medforstander
tags:
  - Jens Ejlert Hagelsø
  - forstander
excerpt: "Ansat som medforstander for Svend Aage Thomsen fra 1944-1945. J.E. Hagelsø var egentlig forstander for Vojens Ungdomsskole, som var beslaglagt af tyskerne."
description: "J.E. Hagelsø var ansat som medforstander for Svend Aage Thomsen, så højskolen kunne få godkendelse efter højskoleloven. J.E. Hagelsø var forstander for Vojens Ungdomsskole, som var beslaglagt af tyskerne. Hagelsøs alvor og stærke ord betød meget for vinterholdet, som bl.a. talte en del modstandsfolk, fx Thormod Petersen (se Jubilæumsskrift fra 1992, s. 21)"
sidebar:
  - title: Jens Ejlert Hagelsø
    image: http://www.vojensbilleder.dk/kendte/tejlert_hagelsoe.jpg
    image_alt: Jens Ejlert Hagelsø
    text: "Ansat som medforstander for Svend Aage Thomsen fra 1944-1945. J.E. Hagelsø var egentlig forstander for Vojens Ungdomsskole, som var beslaglagt af tyskerne."
---

{{ page.description }}

_Vi er først lige begyndt at lave biografier på nogle af de væsentlige personligheder på Vejle Idrætshøjskole. Vi vil være rigtig taknemmelige for al den hjælp, vi kan få._
{: .notice--info}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% if posts.size > 0 %}
## Artikler om {{ page.title }}
{% include post-list.html posts=posts %}
{% endif %}

{% assign author_posts = site.posts | where: "author", page.author_name | sort: "date" %}

{% if author_posts.size > 0 %}
## Skrevet af {{ page.title }}
{% include post-list.html posts=author_posts %}
{% endif %}
