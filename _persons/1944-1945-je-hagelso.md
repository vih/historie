---
title: Jens Ejlert Hagelsø
author_name: "hagelsø"
start_date: 
  year: 1944
end_date:
  year: 1945
header:
  teaser: http://www.vojensbilleder.dk/kendte/tejlert_hagelsoe.jpg
media: 
  url: http://www.vojensbilleder.dk/kendte/tejlert_hagelsoe.jpg
  credit: arkiv.dk
  caption: *title
  thumbnail: http://www.vojensbilleder.dk/kendte/tejlert_hagelsoe.jpg
category:
  - Medforstander
tags:
  - Jens Ejlert Hagelsø
  - forstander
excerpt: "J.E. Hagelsø var ansat som medforstander for Svend Aage Thomsen, så højskolen kunne få godkendelse efter højskoleloven. J.E. Hagelsø var forstander for Vojens Ungdomsskole, som var beslaglagt af tyskerne. Hagelsøs alvor og stærke ord betød meget for vinterholdet, som bl.a. talte en del modstandsfolk, fx Thormod Petersen (se Jubilæumsskrift fra 1992, s. 21)"
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
