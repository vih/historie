---
layout: single
title: Forstandere
excerpt: "Liste med forstandere på Den Jyske Idrætsskole og Vejle Idrætshøjskole"
description: *excerpt
permalink: /forstandere/
author_profile: false
classes: wide
---

{% assign forstandere = site.persons | where: "tags", "forstander" | sort: "date" %}

{% include timeline.html persons=forstandere %}

Hvis du vil bidrage til tidslinjen, så er du meget velkommen til bruge kommentarerne.
{: .notice--info}
