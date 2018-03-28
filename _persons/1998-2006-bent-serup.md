---
title: Bent Serup
author_name: "bent_serup"
start_date: 
  year: 1998
end_date:
  year: 2006
header:
  teaser: /assets/images/authors/default-profile.png
media: 
  url: /assets/images/authors/default-profile.png
  #credit: ""
  caption: "Bent Serup"
  thumbnail: /assets/images/authors/default-profile.png
category:
  - Forstander
tags:
  - Bent Serup
  - forstander
excerpt: "Forstander fra 1998 - 2006. Var bl.a. med til at etablere kunstgræsbanen."
description: "Bent Serup har tætte bånd til DIF og Team Danmark. Bent sørger bl.a. for at skolen ved hjælp af Vejle Kommune og DBU får anlagt en kunstgræsbane."
sidebar:
  - title: Bent Serup
    image: /assets/images/authors/default-profile.png
    image_alt: Bent Serup
    text: "Forstander fra 1998 - 2006. Var bl.a. med til at etablere kunstgræsbanen."
---

_Vi mangler et ordentligt billede af Bent Serup fra hans formandsperiode på Vejle Idrætshøjskole. Kan du hjælpe?_
{: .notice--info}

{{ page.description }}

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
