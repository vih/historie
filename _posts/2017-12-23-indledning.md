---
title: Så udgiver vi igen årsskrift på Vejle Idrætshøjskole
permalink: /aarsskrift/2017/indledning/
author: lsolesen
category:
  - Årsskrift
tags:
  - Årsskrift 2017
excerpt: "Efter at have hvilet siden 2006 udsender vi igen årsskrift på Vejle Idrætshøjskole. Lars Olesen, viceforstander, fortæller lidt om baggrunden for at genopstarte årsskriftet."
header:
  overlay_color: "#1aa2dd"
toc: true
sidebar:
  nav: "yearbook-2017"
---

Vi har gjort det igen! Det er alt for mange år siden, vi gjorde det sidst. Og det er virkelig på tide at få gjort det igen. I 2007 besluttede nogen på Vejle Idrætshøjskole sig for, at skolen ikke længere skulle udgive årsskrifter. I 2017 har vi besluttet os for, at selvfølgelig skal vi have et årsskrift. Vi skal på højskolen igen nedfælde nogle af oplevelserne, tankerne og begivenhederne fra året, der er gået.

Det har vi især gjort, fordi vi i år har 75 års jubilæum og i den forbindelse er dykket dybt ned i højskolens historie - og i den forbindelse har årsskrifterne været en uvurderlig kilde til kendskab om de forgangne år. Uden årsskrifterne kan store dele af højskolens historie gå i glemmebogen, og det ønsker vi ikke. Derfor forsøger vi også i dette årsskrift at samle op på de seneste 10 år i glemmebogen, men vi laver også tilbageblik tilbage til de ældre årsskrifter. Derudover dykker vi også lige ned i nutiden og sætter rammer om skolens hverdag og udvikling lige nu.

## Årsskriftet er digitalt

Vi har haft mange overvejelser om, hvilken form årsskriftet skal have. Når man kigger tilbage på historien, er der ikke noget som at kunne hente årsskriftet på hylden og bladre det igennem, men de gamle årsskrifter er også noget skrøbelige i deres limninger. 

Det kan også være rart at omfavne den moderne teknologi, hvor man kan inkludere billeder, lydklip, videoklip på en helt anden måde, og da bæredygtighed er en del af skolens strategi frem mod 2020, så har vi altså valgt at årsskriftet genopstår som noget digitalt. 

Så find jeres computere, tablets og smartphones frem - og bliv revet med. 

## Årsskriftets oprindelse, lukning og genopståelse

Oprindeligt var årsskriftet en måde for elevforeningen at kommunikere med tidligere elever om skolens virke. Elevforeningen blev stiftet 25. marts 1944 på foranledning af Eigil Salomonsen, som var lærer på skolen i pionérårene. Det første årsskrift blev udgivet senere på året og indeholder ud over beretninger om skolens oprindelse, dagbog og kursusoversigter også hilsener fra gamle elever (Årsskrift 1944). Officielt blev årsskriftet udgivet af Den Jyske Idrætsskoles Elevforening, men skolen spillede også en væsentlig rolle i udgivelsen - og var så vidt jeg kan bedømme med i redaktionen (i de første par årtier er der ikke en præcis kolofon i årsskriftet).

Men det var ikke kun de tidligere elever, der fik tilsendt årsskriftet. Svend Aage Thomsen sendte også årsskriftet til Hans Majestæt, Frederik IX, som holdt sig godt orienteret om, hvad der foregik på idrætsskolen i det jyske, hvilket kulminerer med kongens besøg i forbindelse med (gen)indvielsen og udvidelsen i 1958.

I 1966 er der i de lidt turbulente år med Tage Søgaard og Aksel Bjerregaard i forstanderstolene en konflikt, hvor Aksel Bjerregaard tilsyneladende egenhændigt tager en beslutning om, at skolen udgiver sit eget årsskrift. Det stopper dog ikke elevforeningen for at fastholde den fine tradition, hvor de “For første gang kan … placere ansvaret fuldt ud.” (Årsskift 1966, side 3). Skolen selv udgiver dette år en årbog, som nærmere kan karakteriseres som en lille pamflet, hvor nogle af artiklerne fra elevforeningens årsskrift også er trykt. 

Det virker som om skolen igen bliver involveret i redaktionen af årsskriftet fra 1967 og fra 1968 står både Elevforeningen og Den Jyske Idrætsskole sammen som udgivere af årsskriftet. Indtil 2001 fortsætter samarbejdet om at udgive årsskriftet, mens det det ser ud til, at skolen fra 2002 alene udgiver årsskriftet. I 2006 vælger skolen at udgive deres hidtil sidste årsskrift. Dette blødende hul i højskolens historie sætter vi en stopper for i dag!

Indholdet af årsskriftet har gennem historien skiftet med hovedsageligt at koncentrere sig om skolens virke, have samfundsmæssige temaer og kommentarer til de livsvilkår vi alle lever under. I årsskriftet har der også været hilsener fra elever og elevlister for de enkelte årgange.

Vi (gen)opstarter årsskriftet med at hædre princippet, som redaktøren Ove Sørensen beskriver i årsskriftet fra 1967: 

> "det skal være læseværdigt og orienterende, hovedsageligt omhandlende Den Jyske Idrætsskole og de personer, der har tilknytning dertil." 

Så lad dette årsskrift primært omhandle Vejle Idrætshøjskole.

## Hvad kan du læse om?

{% assign site_posts = site.posts | where: "tags", "Årsskrift 2017" | sort: "date" | shift %}

<dl>
{% for post in site_posts %}
  <dt><a href="{{ post.url | relative_url }}" rel="permalink">{{ post.title }}</a></dt>
  <dd>{{ post.excerpt }}</dd>
{% endfor %}
</dl>
