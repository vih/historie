---
title: Ole Damgaard
author_name: "ole_damgaard"
start_date: 
  year: 2010
end_date:
  year: 2018
header:
  teaser: /assets/images/persons/ole-damgaard.jpg
media: 
  url: https://vih.dk/sites/vih.local/files/profile_pictures/laerere-150.jpg
  credit: arkiv.dk
  caption: *title
  thumbnail: //images.weserv.nl/?url=vih.dk/sites/vih.local/files/profile_pictures/laerere-150.jpg&w=100
category:
  - Forstander
tags:
  - Ole Damgaard
  - forstander
excerpt: "Ole Damgaard kommer til at indgå i et ledelsesteam med efterskoleforstander, Frank Rasmussen, og forretningsudvikler, Peter Sebastian Pedersen. Ole er tidligere toptræner i håndbold, og han er bl.a. med tl at få bygget Center for Sundhed, Test og Læring og sætte gang i Outdoor AquaScape."
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
