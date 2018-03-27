---
title: Aksel Bjerregaard
author_name: "aksel_bjerregaard"
start_date: 
  year: 1961
end_date:
  year: 1967
header:
  teaser: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
media: 
  url: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
  credit: arkiv.dk
  caption: "Aksel Bjerregaard"
  thumbnail: //images.weserv.nl/?url=filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806&w=100
category:
  - Forstander
tags:
  - Aksel Bjerregaard
  - forstander
excerpt: "Ansat som forstander efter Svend Aage Thomsens død i 1961 med stor opbakning fra DIF-baglandet. Forstander sammen med Tage Søgaard. Sluttede som forstander i 1967."
description: "En af de fremmeste eksponenter for træning, bl.a. circuit træning. Blev medforstander for Tage Søgaard. Samarbejdet blev aldrig optimalt og det antydes i Jubilæumsskriftet fra 1992, at Bjerregaard blev nødt til at stoppe, fordi hans livsstil ikke kunne forenes med at være forstander på en Idrætsskole."
sidebar:
  - title: Aksel Bjerregaard
    image: https://filer.arkibas.dk/filer/visning/a655e9b122816edd43a700ef88d6aa25?t=860f81500e9065900ac37d117d3889c38d1aa7cc591aedad4e2629e0c3414806
    image_alt: Aksel Bjerregaard
    text: "Ansat som forstander efter Svend Aage Thomsens død i 1961 med stor opbakning fra DIF-baglandet. Forstander sammen med Tage Søgaard. Sluttede som forstander i 1967."
---

{{ page.description }}

_Vi er først lige begyndt at lave biografier på nogle af de væsentlige personligheder på Vejle Idrætshøjskole. Vi vil være rigtig taknemmelige for al den hjælp, vi kan få._
{: .notice--info}

## Referencer

- [Aksel Bjerregaard på Wikipedia](https://da.wikipedia.org/wiki/Aksel_Bjerregaard)

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
