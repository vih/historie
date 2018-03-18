---
title: Rask Nielsen
author_name: "rask_nielsen"
start_date: 
  year: 1945
end_date:
  year: 1948
header:
  teaser: http://aalbaek-nielsen.dk/____impro/1/onewebmedia/Den%20unge%20Rask%20Nielsen.jpg?etag=W%2F%222b07-58f8ca6a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=136%2B200&extract=0%2B0%2B136%2B200&quality=85
media: 
  url: http://aalbaek-nielsen.dk/____impro/1/onewebmedia/Den%20unge%20Rask%20Nielsen.jpg?etag=W%2F%222b07-58f8ca6a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=136%2B200&extract=0%2B0%2B136%2B200&quality=85
  credit: arkiv.dk
  caption: *title
  thumbnail: http://aalbaek-nielsen.dk/____impro/1/onewebmedia/Den%20unge%20Rask%20Nielsen.jpg?etag=W%2F%222b07-58f8ca6a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=136%2B200&extract=0%2B0%2B136%2B200&quality=85
category:
  - Medforstander
tags:
  - Rask Nielsen
  - forstander
excerpt: "Rask Nielsen var medforstander for Svend Aage Thomsen. Han kom fra en stilling som lærer på Ollerup Gymnastikhøjskole. Fra 1944 blev Ollerup Gymnastiskhøjskole også okkuperet af tyskerne. I 1948 tog Rask tilbage til Ollerup. Herfra var Svend Aage Nielsen godkendt som eneforstander."
timeline_excerpt: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% for post in author %}
  {% include archive-single.html %}
{% endfor %}
