var indexNumber=0,colors=["#065E52","#FE8178","#E23A3E","#0093D0","#4765A0","#55606E","#F53477"],len=colors.length;function colorChange(){$(".barColor").css({background:colors[indexNumber],opacity:"0.6"}),$(".background,.after,.active,.link-support").css({background:colors[indexNumber]}),$(".resume-area .title h5").css({borderColor:colors[indexNumber]}),$(".text").css({color:colors[indexNumber]})}setInterval(()=>{colorChange(),++indexNumber===len&&(indexNumber=0)},2e3);var text=document.getElementsByClassName("percentage"),bar=document.getElementsByClassName("barColor"),list=[].map.call(text,e=>e.textContent),fragment=list.forEach((e,n)=>{let t=parseInt(e),o=bar[n],s=0;clearInterval(s);let i=setInterval(function(){s===t?clearInterval(i):(s++,o.style.width=s+"%")},50)});$(document).ready(function(){$(".nav-list li").click(function(){const e=$(this).attr("value");$("section").fadeOut(1e3),$("."+e).fadeIn(1e3)});mixitup(".filter-topic");$(".filter-menu").click(function(){$(".filter-title").animate({width:"toggle",display:"list-item"})}),$(".message-btn").click(function(){$(".connection").animate({width:"toggle",display:"block"})}),$(".message-btn").on({mouseenter:function(){$(".message-btn .link-support").css({display:"block"})},mouseleave:function(){$(".message-btn .link-support").css({display:"none"})}}),$(".nav-list").on("click","li",function(){$(this).addClass("active").css({background:colors[indexNumber]}).siblings().removeClass("active").css({background:"none"})}),$(".nav-list li").on({mouseenter:function(){$(".navSupport").css({background:colors[indexNumber]})},mouseleave:function(){$(".navSupport").css({background:"none"})}}),$(".home-area .social-link").on({mouseenter:function(){$(".link-support").css({display:"block"})},mouseleave:function(){$(".link-support").css({display:"none"})}}),window.matchMedia("(max-width: 980px)").matches&&$(".menu-btn,.menu-close,.nav-list li a").click(function(){$("header").animate({width:"toggle"})})});