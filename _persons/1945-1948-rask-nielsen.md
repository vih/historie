---
title: Rask Nielsen
author_name: "rask_nielsen"
start_date: 
  year: 1945
  month: 5
  day: 1
end_date:
  year: 1948
  month: 8
  day: 31
header:
  teaser: /assets/images/persons/rask-nielsen.png
media: 
  url: http://aalbaek-nielsen.dk/____impro/1/onewebmedia/Den%20unge%20Rask%20Nielsen.jpg?etag=W%2F%222b07-58f8ca6a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=136%2B200&extract=0%2B0%2B136%2B200&quality=85
  credit: "Bent Aalbæk-Nielsens hjemmeside"
  caption: "Rask Nielsen"
  thumbnail: http://aalbaek-nielsen.dk/____impro/1/onewebmedia/Den%20unge%20Rask%20Nielsen.jpg?etag=W%2F%222b07-58f8ca6a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=136%2B200&extract=0%2B0%2B136%2B200&quality=85
category:
  - Medforstander
tags:
  - Rask Nielsen
  - forstander
excerpt: "Ansat som medforstander for Svend Aage Thomsen fra 1945-1948. Han kom fra en stilling som lærer på Ollerup Gymnastikhøjskole, som blev okkuperet af tyskerne. I 1948 tog Rask tilbage til Ollerup."
description: "Rask Nielsen var medforstander for Svend Aage Thomsen. Han kom fra en stilling som lærer på Ollerup Gymnastikhøjskole. Fra 1944 blev Ollerup Gymnastiskhøjskole også okkuperet af tyskerne. I 1948 tog Rask tilbage til Ollerup. Herfra var Svend Aage Nielsen godkendt som eneforstander."
sidebar:
  - title: Rask Nielsen
    image: http://aalbaek-nielsen.dk/____impro/1/onewebmedia/Den%20unge%20Rask%20Nielsen.jpg?etag=W%2F%222b07-58f8ca6a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=136%2B200&extract=0%2B0%2B136%2B200&quality=85
    image_alt: Rask Nielsen
    text: "Ansat som medforstander for Svend Aage Thomsen fra 1945-1948. Han kom fra en stilling som lærer på Ollerup Gymnastikhøjskole, som blev okkuperet af tyskerne. I 1948 tog Rask tilbage til Ollerup."
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
