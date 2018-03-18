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
  credit: arkiv.dk
  caption: *title
  thumbnail: https://lh3.googleusercontent.com/9L1aclZ3d1bdeKPRxIy3mlTEZb7W2gYwpx0g85lU64rPpkohdP9RWNqDiyQ_tCkXZJABZdY3z_cc7qhI8slkMtWjA1fk1_GkyvNJMEVQ_Dbik7cgccJi5vI71uzzFHZRL5rtBgfppg=w2400
category:
  - Bestyrelsesformænd
tags:
  - Inger Engberg
  - bestyrelsesformand
excerpt: "Inger Engberg sad på formandsposten i rigtig mange år."
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% for post in author %}
  {% include archive-single.html %}
{% endfor %}
