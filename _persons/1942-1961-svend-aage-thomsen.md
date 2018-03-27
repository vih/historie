---
title: Svend Aage Thomsen
author_name: "svend_aage_thomsen"
permalink: /svaat/
start_date: 
  year: 1942
end_date:
  year: 1961
header:
  teaser: https://filer.arkibas.dk/filer/visning/e5a2f9523f5a4503813fce7ac631abc8?t=5f931f71134641488e88bb66bec2c67657df7422b7f5e0be0fbb0dd7e3987119
media: 
  url: https://filer.arkibas.dk/filer/visning/e5a2f9523f5a4503813fce7ac631abc8?t=5f931f71134641488e88bb66bec2c67657df7422b7f5e0be0fbb0dd7e3987119
  credit: arkiv.dk
  caption: "Svend Aage Thomsen"
  thumbnail: //images.weserv.nl/?url=filer.arkibas.dk/filer/visning/e5a2f9523f5a4503813fce7ac631abc8?t=5f931f71134641488e88bb66bec2c67657df7422b7f5e0be0fbb0dd7e3987119&w=100
category:
  - Forstander
tags:
  - Svend Aage Thomsen
  - forstander
excerpt: "Skolens grundlægger og forstander fra 1942. Arbejdede hårdt for at bygge en Idrætsskole. Det blev hans store mission, og efter slidsomt arbejdede kunne han se sin vision stå der i 1958 - desværre kun kort før hans alt for tidlige død i 1961."
description: "Skolens grundlægger som arbejdede hårdt for at bygge en Idrætsskole, der kunne forbedre uddannelsen af idrætsledere i Jylland. Det blev hans store mission, og efter slidsomt arbejdede kunne han se sin vision stå der i 1958 - desværre kort før hans alt for tidlige død i 1961."
sidebar:
  - title: Svend Aage Thomsen
    image: https://lh3.googleusercontent.com/Hs26_hk6fVFwvkiKP2lzT7EQdUXfxkexuyKPM7C-pVeoBUnnBBKfor-S7F_agHe0DjyHzxA0I-jM6e7y3O-r1k4uJZNMcxecbdOKCrO7XShZ6wu9dEpSJuVOkG91sju-8TJnI8Tt2g
    image_alt: Svend Aage Thomsen
    text: "Skolens grundlægger som arbejdede hårdt for at bygge en Idrætsskole, der kunne forbedre uddannelsen af idrætsledere i Jylland. Det blev hans store mission, og efter slidsomt arbejdede kunne han se sin vision stå der i 1958 - desværre kort før hans alt for tidlige død i 1961."
---

{{ page.description }}

_Vi er først lige begyndt at lave biografier på nogle af de væsentlige personligheder på Vejle Idrætshøjskole. Vi vil være rigtig taknemmelige for al den hjælp, vi kan få._
{: .notice--info}

## Referencer

- [Svend Aage Thomsen på Wikipedia](https://da.wikipedia.org/wiki/Svend_Aage_Thomsen)

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
