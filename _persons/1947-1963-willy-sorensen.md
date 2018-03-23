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
  credit: arkiv.dk
  caption: *title
  thumbnail: //images.weserv.nl/?url=http://www.vejlewiki.dk/images/4/41/Willy1.jpg&w=100
category:
  - Bestyrelsesformænd
tags:
  - Willy Sørensen
  - bestyrelsesformand
excerpt: "Vejles daværende borgmester overtog formandsposten i bestyrelsen for Den Jyske Idrætshøjskole efter sin borgmesterkollega."
description: *excerpt
---

{{ page.excerpt }}

## Referencer

- [Vejle Wiki om Hans Willy Sørensen](http://www.vejlewiki.dk/index.php?title=Willy_S%C3%B8rensen)

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
