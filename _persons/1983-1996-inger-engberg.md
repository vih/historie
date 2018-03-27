---
title: Inger Engberg
author_name: "inger_engberg"
start_date: 
  year: 1983
end_date:
  year: 1996
header:
  teaser: https://lh3.googleusercontent.com/9L1aclZ3d1bdeKPRxIy3mlTEZb7W2gYwpx0g85lU64rPpkohdP9RWNqDiyQ_tCkXZJABZdY3z_cc7qhI8slkMtWjA1fk1_GkyvNJMEVQ_Dbik7cgccJi5vI71uzzFHZRL5rtBgfppg=w2400
media: 
  url: https://lh3.googleusercontent.com/9L1aclZ3d1bdeKPRxIy3mlTEZb7W2gYwpx0g85lU64rPpkohdP9RWNqDiyQ_tCkXZJABZdY3z_cc7qhI8slkMtWjA1fk1_GkyvNJMEVQ_Dbik7cgccJi5vI71uzzFHZRL5rtBgfppg=w2400
  credit: "Vejle Idrætshøjskoles arkiv"
  caption: "Inger Engberg"
  thumbnail: //images.weserv.nl/?url=lh3.googleusercontent.com/9L1aclZ3d1bdeKPRxIy3mlTEZb7W2gYwpx0g85lU64rPpkohdP9RWNqDiyQ_tCkXZJABZdY3z_cc7qhI8slkMtWjA1fk1_GkyvNJMEVQ_Dbik7cgccJi5vI71uzzFHZRL5rtBgfppg=w2400&w=100
category:
  - Bestyrelsesformænd
tags:
  - Inger Engberg
  - bestyrelsesformand
excerpt: "Formand fra 1983 til 1996 og var bl.a. med til at få bygget Globen og den nye kursuscenterafdeling."
description: "Inger Engberg sad på formandsposten i rigtig mange år."
---

{{ page.description }}

## Referencer

- [Inger Engberg i Kvindebiografisk Leksikon](http://www.kvinfo.dk/side/171/bio/802/)

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
