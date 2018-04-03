---
layout: single
title: Bestyrelsesformænd og -kvinder
excerpt: "Liste med bestyrelsesformænd og -kvinder på Den Jyske Idrætsskole og Vejle Idrætshøjskole"
permalink: /bestyrelse/
author_profile: false
classes: wide
---

{% assign bestyrelse = site.persons | where: "tags", "bestyrelsesformand" | sort: "date" %}

{% include timeline.html persons=bestyrelse %}

Hvis du vil bidrage til tidslinjen, så er du meget velkommen til bruge kommentarerne.
{: .notice--info}
