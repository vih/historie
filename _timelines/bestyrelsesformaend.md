---
layout: single
title: Bestyrelsesformænd
excerpt: "Liste med bestyrelsesformænd på Den Jyske Idrætsskole og Vejle Idrætshøjskole"
permalink: /bestyrelse/
author_profile: false
classes: wide
---

{% assign bestyrelse = site.persons | where: "tags", "bestyrelsesformand" | sort: "date" %}

{% include timeline-manual.html persons=bestyrelse %}
