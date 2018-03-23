---
title: Hans Erik Jensen
author_name: "hans_erik_jensen"
start_date: 
  year: 1972
end_date:
  year: 1983
header:
  teaser: https://www.aoh.dk/storyimage/AO/20141018/ARTIKEL/141018583/AR/0/AR-141018583.jpg&MaxH=415&imageVersion=default&Q=95&MT=DT20141021101450
media: 
  url: https://www.aoh.dk/storyimage/AO/20141018/ARTIKEL/141018583/AR/0/AR-141018583.jpg&MaxH=415&imageVersion=default&Q=95&MT=DT20141021101450
  credit: arkiv.dk
  caption: *title
  thumbnail: www.aoh.dk/storyimage/AO/20141018/ARTIKEL/141018583/AR/0/AR-141018583.jpg&MaxH=415&imageVersion=default&Q=95&MT=DT20141021101450
category:
  - Bestyrelsesformænd
tags:
  - Hans Erik Jensen
  - bestyrelsesformand
excerpt: "Hans Erik Jensen var formand i to perioder - først fra 1972-1980 og derefter fra 1981-1983, da Vagn Mikkelsen døde."
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
