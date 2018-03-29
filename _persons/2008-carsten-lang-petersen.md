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

## Det kendte

- Elev årgang 78/79
- Med i Elevforeningen siden – fra 1980 som kasserer – nu ”økonomiansvarlig” med ganske få opgaver
- Med i repræsentantskabet siden 1979
- Fra 2001 med i skolens bestyrelse
- Fra 2008 formand for bestyrelsen

## Det ”ukendte”

- Født 1/6-1959 i Odense
- Boet i Vejle siden 1981 + de 8 mdr. i 78/79
- Gift med Dorrit siden 1983
- Har to drenge – født 1984 og 1990
- Pt. 1 svigerdatter og 3 børnebørn
- Uddannet EDB-assistent
- Ansat i Aktivbanken/Sydbank 1981-1994
- Ansat i Bankdata 1994-
- Har arbejdet med sikkerhed, projektledelse, afdelingsledelse – pt. Situation Manager = Driftsopfølgning/-rapportering, håndtering af alvorlige hændelser
- Har været træner/håndboldformand mm. i Vinding SF siden 1999
- Fritidsinteresser = Hus/have, kystfiskeri (begrænset tid), cykling – cykel til arbejde i sommerhalvåret/spinning i vinterhalvåret

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
