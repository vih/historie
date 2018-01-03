---
title: Oversigtsbilleder
permalink: /oversigtsbilleder/
date:   2017-08-15 16:16:01 +0100
category:
  - oversigtsbillede
tags:
  - oversigtsbillede
excerpt: "Oversigtsbilleder fra skolens historie"
landscape:
  - headline: 1944
    url: https://drive.google.com/uc?id=0B5v4mAibvkKXVWFJY2MxZ29UT0E
    caption: "Oversigtsbillede over Nørreskoven taget af Luftwaffe 1944"
    credit: Luftwaffe 1944
  - headline: 1950
    url: https://drive.google.com/uc?id=0B5v4mAibvkKXWDQ3bEZVT0lJSUk
    caption: "Oversigtsbillede over skolen fra 1940'erne eller 1950'erne"
  - headline: 1958
    url: https://drive.google.com/uc?id=0B5v4mAibvkKXVUw2RTRyTlpBVnM
    caption: "Oversigtsbillede fra 1958 efter bygning af hal og svømmebassin"
  - headline: 2012
    url: https://drive.google.com/uc?id=0B5v4mAibvkKXN0RnMmczQW9oc2c
    caption: "Luftbillede fra 2012 kort før bygning af Center for Sundhed, Test og Læring"
toc: true
---

{% for picture in page.landscape %}

{% include figure
    image_path=picture.url
    alt=picture.caption
    caption=picture.caption %}

{% endfor %}

<div class="juxtapose">
    <img src="https://drive.google.com/uc?id=0B5v4mAibvkKXVWFJY2MxZ29UT0E" data-credit="Oversigtsbillede over Nørreskoven taget af Luftwaffe 1944" />
    <img src="https://drive.google.com/uc?id=0B5v4mAibvkKXWDQ3bEZVT0lJSUk" data-credit="Oversigtsbillede over skolen fra 1940'erne eller 1950'erne" />
</div>

<div class="juxtapose">
    <img src="https://drive.google.com/uc?id=0B5v4mAibvkKXWDQ3bEZVT0lJSUk" data-credit="Oversigtsbillede over skolen fra 1940'erne eller 1950'erne" />
    <img src="https://drive.google.com/uc?id=0B5v4mAibvkKXVUw2RTRyTlpBVnM" data-credit="Oversigtsbillede fra 1958 efter bygning af hal og svømmebassin" />
</div>

<div class="juxtapose">
    <img src="https://drive.google.com/uc?id=0B5v4mAibvkKXVUw2RTRyTlpBVnM" data-credit="Oversigtsbillede fra 1958 efter bygning af hal og svømmebassin" />
    <img src="https://drive.google.com/uc?id=0B5v4mAibvkKXN0RnMmczQW9oc2c" data-credit="Luftbillede fra 2012 kort før bygning af Center for Sundhed, Test og Læring" />
</div>
<script src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"></script>
<link rel="stylesheet" href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css">
