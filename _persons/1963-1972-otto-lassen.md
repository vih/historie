---
title: Otto Lassen
author_name: "otto_lassen"
start_date: 
  year: 1963
end_date:
  year: 1972
header:
  teaser: https://lh3.googleusercontent.com/sMu7O-jkXF_eOpIeiQgMz9sSCgh7QyDuVmx9_71AlZyTM6JWBLT6I8_dPaScWX6Slncw666y_nR4ziK4eEYzbRURRSfmJz01aBqgbLpPUfM_gOZiSkgB4fWu6UcZdDzL4dbsrAQgUQ=w2400
media: 
  url: https://lh3.googleusercontent.com/sMu7O-jkXF_eOpIeiQgMz9sSCgh7QyDuVmx9_71AlZyTM6JWBLT6I8_dPaScWX6Slncw666y_nR4ziK4eEYzbRURRSfmJz01aBqgbLpPUfM_gOZiSkgB4fWu6UcZdDzL4dbsrAQgUQ=w2400
  credit: arkiv.dk
  caption: *title
  thumbnail: //images.weserv.nl/?url=lh3.googleusercontent.com/sMu7O-jkXF_eOpIeiQgMz9sSCgh7QyDuVmx9_71AlZyTM6JWBLT6I8_dPaScWX6Slncw666y_nR4ziK4eEYzbRURRSfmJz01aBqgbLpPUfM_gOZiSkgB4fWu6UcZdDzL4dbsrAQgUQ=w2400&w=100
category:
  - Bestyrelsesformænd
tags:
  - Otto Lassen
  - bestyrelsesformand
excerpt: "Kontorchef, Otto Lassen, var bestyrelsesformand i en lang årrække."
description: *excerpt
---

{{ page.excerpt }}

## Artikler om {{ page.title }}

{% assign posts = site.posts | where: "tags", page.title | sort: "date" %}

{% include post-list.html posts=posts %}

## Skrevet af {{ page.title }}

{% assign author = site.posts | where: "author", page.author_name | sort: "date" %}

{% include post-list.html posts=author %}
