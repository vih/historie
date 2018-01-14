---
layout: archive
title: FAQ - Ofte stillede spørgsmål
permalink: /faq/
---

Hvis du har spørgsmål, du gerne vil have besvaret, der ikke fremgår af denne side, så [stil meget gerne spørgsmålet her](/faq-ideer/).

<div class="grid__wrapper">
    {% for post in site.faq %}
    {% include archive-single.html %}
    {% endfor %}
</div>
