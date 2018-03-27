---
title: Vagn Mikkelsen
author_name: "vagn_mikkelsen"
start_date: 
  year: 1980
end_date:
  year: 1981
header:
  teaser: /assets/images/authors/default-profile.png
media: 
  url: /assets/images/authors/default-profile.png
  #credit: arkiv.dk
  caption: "Vagn Mikkelsen"
  thumbnail: /assets/images/authors/default-profile.png
category:
  - Bestyrelsesformænd
tags:
  - Vagn Mikkelsen
  - bestyrelsesformand
excerpt: "Blev formand i 1980, men nåede kun et år på formandsposten, inden hans alt for tidlige død i 1981."
description: "Vagn Mikkelsen nåede kun et år på formandsposten, inden han døde."
sidebar:
  - title: Vagn Mikkelsen
    image: /assets/images/authors/default-profile.png
    image_alt: Vagn Mikkelsen
    text: "Blev formand i 1980, men nåede kun et år på formandsposten, inden hans alt for tidlige død i 1981."
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
