(this.webpackJsonptimerapp=this.webpackJsonptimerapp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/timerLogo.5c999e8d.png"},15:function(e,t,a){e.exports=a(32)},20:function(e,t,a){},21:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),c=a.n(s),m=(a(20),a(8));a(21);var i=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.time.h>0?e.time.h:"00")," ",r.a.createElement("strong",{className:"timerDots"},":"),r.a.createElement("span",null,e.time.m>0?e.time.m:"00")," ",r.a.createElement("strong",{className:"timerDots"},":"),r.a.createElement("span",null,e.time.s>0?e.time.s:"00")," ",r.a.createElement("strong",{className:"timerDots"},":"),r.a.createElement("span",null,e.time.ms>0?e.time.ms:"00"))};var l=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.startTimer,className:"stopwatch-btn stopwatch-btn-green"},"  ",r.a.createElement("i",{className:"fa fa-play"})),r.a.createElement("button",{onClick:e.pauseTimer,className:"stopwatch-btn stopwatch-btn-yel"}," ",r.a.createElement("i",{className:"fa fa-pause"})),r.a.createElement("button",{onClick:e.resetTimer,className:"stopwatch-btn stopwatch-btn-red"}," ",r.a.createElement("i",{className:"fa fa-stop"})))},o=a(14),u=a.n(o);var p=function(){return r.a.createElement("div",{className:"headerSection"},r.a.createElement("span",null,"  ",r.a.createElement("img",{src:u.a,alt:"Timer Quiz",className:"timerlogo"})," ",r.a.createElement("strong",{className:"LogoText"},"Timer App")))};var d=function(){var e=Object(n.useState)({ms:0,s:0,m:0,h:0}),t=Object(m.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({}),o=Object(m.a)(c,2),u=o[0],d=o[1],E=Object(n.useState)(0),f=Object(m.a)(E,2),h=f[0],b=f[1],g=function(){1!==h&&(w(),b(1),d(setInterval(w,10)))},v=a.ms,N=a.s,T=a.m,k=a.h,w=function(){return 100===v&&(N++,v=0),60===N&&(T++,N=0),60===T&&(k++,N=0),v++,s({ms:v,s:N,m:T,h:k})};return r.a.createElement("div",null,r.a.createElement("div",{className:"main-section"},r.a.createElement(p,null),r.a.createElement("div",{className:"clock-holder"},r.a.createElement("div",{className:"stopwatch"},r.a.createElement(i,{time:a}),r.a.createElement(l,{timerStatus:h,resumeTimer:function(){g()},resetTimer:function(){clearInterval(Number(u)),b(0),s({ms:0,s:0,m:0,h:0})},pauseTimer:function(){clearInterval(Number(u)),b(2)},startTimer:g})))))};var E=a(10),f=a.n(E);f.a.initializeApp({apiKey:"AIzaSyDSl5ApODUQSmz7ptkh2aHxy95DGnsCMXg",authDomain:"timer-app-22dd9.firebaseapp.com",databaseURL:"https://timer-app-22dd9.firebaseio.com",projectId:"timer-app-22dd9",storageBucket:"timer-app-22dd9.appspot.com",messagingSenderId:"48540524499",appId:"1:48540524499:web:58422e2802b8dca639d926"});var h=f.a.messaging();h.requestPermission().then((function(){return h.getToken()})).then((function(e){console.log("Token : ",e)})),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),function(){var e="".concat("","/sw.js");navigator.serviceWorker.register(e).then((function(e){console.log("result",e.scope)})).catch((function(e){console.log("error",e)}))}()}},[[15,1,2]]]);
//# sourceMappingURL=main.f051c054.chunk.js.map