---
title: Bjarne Hauger
author_name: "bjarne_hauger"
start_date: 
  year: 1967
end_date:
  year: 1982
header:
  teaser: https://lh3.googleusercontent.com/3_whfQ-SVwaEXAIC90KlMIrjSeZ7HolB6VO11cnsvtnYp5nhvDZlBVyGHDPh-lR-bQJK_Cz2CHkHKupV1vTrjfm3Qkuf1BO5vb3l6oHqB9l9OxAybxv67jGVPUodapbxMFZEJEq5TQ=w2400
media: 
  url: https://lh3.googleusercontent.com/3_whfQ-SVwaEXAIC90KlMIrjSeZ7HolB6VO11cnsvtnYp5nhvDZlBVyGHDPh-lR-bQJK_Cz2CHkHKupV1vTrjfm3Qkuf1BO5vb3l6oHqB9l9OxAybxv67jGVPUodapbxMFZEJEq5TQ=w2400
  credit: "Vejle Idrætshøjskoles arkiv"
  caption: "Bjarne Hauger"
  thumbnail: //images.weserv.nl/?url=lh3.googleusercontent.com/3_whfQ-SVwaEXAIC90KlMIrjSeZ7HolB6VO11cnsvtnYp5nhvDZlBVyGHDPh-lR-bQJK_Cz2CHkHKupV1vTrjfm3Qkuf1BO5vb3l6oHqB9l9OxAybxv67jGVPUodapbxMFZEJEq5TQ=w2400&w=100
category:
  - Forstander
tags:
  - Bjarne Hauger
  - forstander
excerpt: "Bjarne Hauger var forstander fra 1967 - 1982. Indfører bl.a. 8 måneders skole og indvier DIF-kursusfløjen og træningssalen."
description: "Bjarne Hauger får ret frie rammer af bestyrelsen til at reformere skolevirksomheden. Han indfører 8 måneders skolen med en breddeperiode om efteråret og en specialeperiode om foråret både inden for idrætten og højskolefagene. Han beskriver tankerne nøjere i Årsskriftet fra 1967. Under Bjarne Hauger udvides skolen også med DIF kursuscenter og træningssal."
---

{{ page.description }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
