---
title: Willy Sørensen
author_name: "willy_sørensen"
start_date: 
  year: 1947
end_date:
  year: 1963
header:
  teaser: http://www.vejlewiki.dk/images/4/41/Willy1.jpg
media: 
  url: http://www.vejlewiki.dk/images/4/41/Willy1.jpg
  credit: vejlewiki.dk
  caption: "Willy Sørensen"
  thumbnail: //images.weserv.nl/?url=http://www.vejlewiki.dk/images/4/41/Willy1.jpg&w=100
category:
  - Bestyrelsesformænd
tags:
  - Willy Sørensen
  - bestyrelsesformand
excerpt: "Vejles daværende borgmester overtog formandsposten for bestyrelsen i 1947 og sad på posten indtil 1963."
description: "Vejles daværende borgmester overtog formandsposten for bestyrelsen for Den Jyske Idrætshøjskole efter sin borgmesterkollega."
---

{{ page.description }}

_Vi er først lige begyndt at lave biografier på nogle af de væsentlige personligheder på Vejle Idrætshøjskole. Vi vil være rigtig taknemmelige for al den hjælp, vi kan få._
{: .notice--info}

## Referencer

- [Vejle Wiki om Hans Willy Sørensen](http://www.vejlewiki.dk/index.php?title=Willy_S%C3%B8rensen)

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
