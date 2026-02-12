---
layout: archive
title: Dagbog
permalink: /dagbog/
classes: wide
author_profile: true
---

Hvert år i årsskriftet er der blevet skrevet lidt om årets gang på skolen. Her kan du se de forskellige dagbøger.

Men vi har en udfordring, for der er perioder hvor der ikke er udgivet et årsskrift, og derfor mangler vi disse for at få overblik over historien.

Vi håber, at du kan hjælpe med at fylde de blanke huller.

Dyk ned i de år, hvor du ved noget om skolen og udfyld de blanke huller i vores _crowdsourcede_ åbne dokumenter.

## Liste over alle manglende dagbøger

{% assign site_posts = site.posts | where: "tags", "dagbog" | where: "tags", "mangler" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}


## Liste over alle dagbøger

{% assign site_posts = site.posts | where: "tags", "dagbog" | sort: "date" %}

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
