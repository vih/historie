---
title: Carsten Lang Petersen
author_name: "carsten_lang_petersen"
start_date: 
  year: 2008
end_date:
  year: 2018
header:
  teaser: /assets/images/persons/carsten-lang-petersen.png
media: 
  url: https://fond.vih.dk/sites/fond-vih.local/files/styles/panopoly_image_full/public/general/carsten-lang.jpg
  credit: "Vejle Idrætshøjskoles arkiv"
  caption: "Carsten Lang Petersen"
  thumbnail: //images.weserv.nl/?url=fond.vih.dk/sites/fond-vih.local/files/styles/panopoly_image_full/public/general/carsten-lang.jpg&w=100
category:
  - Bestyrelsesformænd
tags:
  - Carsten Lang Petersen
  - bestyrelsesformand
excerpt: "Blev formand for bestyrelsen i 2008 efter at have været elev i 1978/79 og kasserer i Elevforeningen lige siden."
description: "Carsten Lang Petersen er den nuværende formand"
sidebar:
  - title: Carsten Lang Petersen
    image: https://fond.vih.dk/sites/fond-vih.local/files/styles/panopoly_image_full/public/general/carsten-lang.jpg
    image_alt: Carsten Lang Petersen
    text: "Blev formand for bestyrelsen i 2008 efter at have været elev i 1978/79 og kasserer i Elevforeningen lige siden."
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
