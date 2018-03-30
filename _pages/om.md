---
layout: single
title: Om denne side
permalink: /om/
author_profile: true
toc: true
---

Denne side er oprettet i forbindelse med Vejle Idrætshøjskoles 75 års jubilæum. I den anledning har vi samlet alle arkiverne, som var spredt rundt omkring på højskolen.
{: .notice}

## Om sitet

Vejle Idrætshøjskole siger tak til alle, der har bidraget til sitets tilblivelse - og vi håber at sitet i mange år fremover vil være et levende stede at dykke ned i højskolens historie.

### Ansvarshavende redaktør

{% assign author=site.data.authors[lsolesen] %}
{% include author.html author=author %}

## Materialet på sitet

Materialet på siden stammer hovedsageligt fra vores eget arkiv, men vi har også brugt masser af tid på at søge på [Arkiv.dk](http://arkiv.dk) og siddet på læsesalen på [Vejle Stadsarkiv](http://vejlestadsarkiv.dk) og gennemgå materialet.

## Bidrag selv til sitet

Denne side er tænkt som et sted, hvor alle der har haft tilknytning til Vejle Idrætshøjskole kan [bidrage med ideer, historier og ny viden om højskolens historie](/bidrag/).

{% include figure
    image_path="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vejle_Stadsarkiv_-_Vejle_-_Danmark.JPG/1200px-Vejle_Stadsarkiv_-_Vejle_-_Danmark.JPG"
    alt="Vejle Stadsarkiv"
    caption="Vejle Stadsarkiv. Billede fra stadsarkivets Facebook-side" %}

## Forfattere

{% for authors in site.data.authors %}
  {% assign author=authors[1] %}
  {% if author.featured==true %}
    {% include author.html author=author %}
  {% endif%}
{% endfor %}
