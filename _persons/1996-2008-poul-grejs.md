---
title: Poul Grejs
author_name: "poul_grejs"
start_date: 
  year: 1996
end_date:
  year: 2008
header:
  #teaser: https://lh3.googleusercontent.com/9L1aclZ3d1bdeKPRxIy3mlTEZb7W2gYwpx0g85lU64rPpkohdP9RWNqDiyQ_tCkXZJABZdY3z_cc7qhI8slkMtWjA1fk1_GkyvNJMEVQ_Dbik7cgccJi5vI71uzzFHZRL5rtBgfppg=w2400
media: 
  #url: https://lh3.googleusercontent.com/9L1aclZ3d1bdeKPRxIy3mlTEZb7W2gYwpx0g85lU64rPpkohdP9RWNqDiyQ_tCkXZJABZdY3z_cc7qhI8slkMtWjA1fk1_GkyvNJMEVQ_Dbik7cgccJi5vI71uzzFHZRL5rtBgfppg=w2400
  #credit: arkiv.dk
  #caption: *title
  #thumbnail: https://lh3.googleusercontent.com/9L1aclZ3d1bdeKPRxIy3mlTEZb7W2gYwpx0g85lU64rPpkohdP9RWNqDiyQ_tCkXZJABZdY3z_cc7qhI8slkMtWjA1fk1_GkyvNJMEVQ_Dbik7cgccJi5vI71uzzFHZRL5rtBgfppg=w2400
category:
  - Bestyrelsesformænd
tags:
  - Poul Grejs
  - bestyrelsesformand
excerpt: "Poul Grejs fra Dansk Sejlunion var formand i 22 år."
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
