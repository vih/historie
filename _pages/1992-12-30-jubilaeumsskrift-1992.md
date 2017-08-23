---
layout: archive
title: Jubilæumsskrift 1992
permalink: /jub92/
header:
  image: https://lh3.googleusercontent.com/N8sJ_5syK3lhGIW9MgbaQLgLzs692pOoEWgxDKO6mcDbbLZrJqTaq1jiceOX8LtHnhrsCZMmJstVyg6dnu-kpeA8cFUm51bxzyI3Sxo3MPNn5WDPnNk93iMhlGwIyEWDuJOYMXNO98s
  teaser: https://lh3.googleusercontent.com/N8sJ_5syK3lhGIW9MgbaQLgLzs692pOoEWgxDKO6mcDbbLZrJqTaq1jiceOX8LtHnhrsCZMmJstVyg6dnu-kpeA8cFUm51bxzyI3Sxo3MPNn5WDPnNk93iMhlGwIyEWDuJOYMXNO98s
---

{% include base_path %}

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% if post.tags contains 'jubilæumsskrift 1992' %}
      {% include archive-single.html %}
    {% endif %}
  {% endfor %}
</div>
