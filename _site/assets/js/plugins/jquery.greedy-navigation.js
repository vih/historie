$(function(){var c=$("nav.greedy-nav .greedy-nav__toggle"),g=$("nav.greedy-nav .visible-links"),d=$("nav.greedy-nav .hidden-links"),s=$("nav.greedy-nav"),n=$('nav.greedy-nav .site-logo'),i=$('nav.greedy-nav .site-logo img'),t=$("nav.greedy-nav .site-title"),m=$('nav.greedy-nav button.search__toggle'),h,k,p,e,b,q,l,a,r,j;function o(){h=0,k=0,p=1e3,e=[];function a(b,a){k+=a,h+=1,e.push(k)}function b(c){var b=c.clone();b.css("visibility","hidden"),g.append(b),a(0,b.outerWidth()),b.remove()}g.children().outerWidth(a),d.children().each(function(){b($(this))})}o(),b=$(window).width(),q=b<768?0:b<1024?1:b<1280?2:3;function f(){b=$(window).width();var i=b<768?0:b<1024?1:b<1280?2:3;i!==q&&o(),q=i,a=g.children().length,l=s.innerWidth()-(n.length!==0?n.outerWidth(!0):0)-t.outerWidth(!0)-(m.length!==0?m.outerWidth(!0):0)-(a!==e.length?c.outerWidth(!0):0),r=e[a-1],r>l?(g.children().last().prependTo(d),a-=1,f()):l+(a===e.length-1?c.outerWidth(!0):0)>e[a]&&(d.children().first().appendTo(g),a+=1,f()),c.attr("count",h-a),a===h?c.addClass('hidden'):c.removeClass('hidden')}$(window).resize(function(){f()}),c.on('click',function(){d.toggleClass('hidden'),$(this).toggleClass('close'),clearTimeout(j)}),d.on('mouseleave',function(){j=setTimeout(function(){d.addClass('hidden')},p)}).on('mouseenter',function(){clearTimeout(j)}),i.length!==0?i[0].complete||i[0].naturalWidth!==0?f():i.one("load error",f):f()})