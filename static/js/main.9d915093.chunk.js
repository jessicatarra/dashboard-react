(this["webpackJsonpdashboard-react"]=this["webpackJsonpdashboard-react"]||[]).push([[0],[,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(2),o=t.n(n);t(8),t(9),t(10);function s(e){var a=e.children;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"header-grid"},c.a.createElement("div",null,c.a.createElement("h1",null,"Social Media Dashboard"),c.a.createElement("p",{className:"header-total"},"Total Followers: 23,004")),a)))}t(11);function l(e){var a=e.username,t=e.followers,r=e.todayFollowers,n=e.icon,o=e.color,s="card ".concat(o);return c.a.createElement("articles",{className:s},c.a.createElement("p",{className:"card-title"},c.a.createElement("img",{src:n,alt:""}),c.a.createElement("a",{href:"https://www.facebook.com/jessictarra",target:"_blank"},a)),c.a.createElement("p",{className:"card-followers"},c.a.createElement("span",{className:"card-followers-number"},t),c.a.createElement("span",{className:"card-followers-title"},"Followers")),c.a.createElement("p",{className:"card-today"},c.a.createElement("img",{src:"./images/icon-up.svg",alt:""}),r," Today"))}var i=[{username:"@jessicatarra",id:1,followers:1987,todayFollowers:12,icon:"../images/icon-facebook.svg",color:"facebook"},{username:"@jessicatarra",id:2,followers:1044,todayFollowers:12,icon:"../images/icon-twitter.svg",color:"twitter"},{username:"@jessicatarra",id:3,followers:"11k",todayFollowers:12,icon:"../images/icon-instagram.svg",color:"instagram"},{username:"@jessicatarra",id:4,followers:8239,todayFollowers:12,icon:"../images/icon-youtube.svg",color:"youtube"}];function m(){return c.a.createElement("section",{className:"top-cards"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"grid"},i.map((function(e){return c.a.createElement(l,Object.assign({key:e.id},e))})))))}t(12);function d(){var e=Object(r.useRef)(null);return c.a.createElement("div",{className:"dark-mode"},c.a.createElement("p",{className:"dark-mode-title"},"Dark Mode"),c.a.createElement("input",{ref:e,onChange:function(){e.current.checked?(document.body.classList.remove("is-light-mode"),document.body.classList.add("is-dark-mode")):(document.body.classList.remove("is-dark-mode"),document.body.classList.add("is-light-mode"))},type:"checkbox",id:"checkbox",className:"checkbox"}),c.a.createElement("label",{className:"switch",htmlFor:"checkbox"}))}t(13);function u(e){var a=e.growth,t=e.pageViews,r=e.icon;return c.a.createElement("div",{className:"card-small"},c.a.createElement("p",{className:"card-small-views"},"Page Views"),c.a.createElement("p",{className:"card-small-icon"},c.a.createElement("img",{src:r,alt:""})),c.a.createElement("p",{className:"card-small-number"},t),c.a.createElement("p",{className:"card-small-percentage"},c.a.createElement("span",null,c.a.createElement("img",{src:"./images/icon-up.svg",alt:""}),a,"%")))}var g=[{icon:"./images/icon-facebook.svg",pageViews:"87",growth:3,key:1},{icon:"./images/icon-twitter.svg",pageViews:"52",growth:2257,key:2},{icon:"./images/icon-instagram.svg",pageViews:"5462",growth:1375,key:3},{icon:"./images/icon-youtube.svg",pageViews:"117",growth:303,key:4}];function w(){return c.a.createElement("section",{className:"overview"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",null,"Overview - Today"),c.a.createElement("div",{className:"grid"},g.map((function(e){var a=e.icon,t=e.pageViews,r=e.growth,n=e.key;return c.a.createElement(u,{icon:a,key:n,pageViews:t,growth:r})})))))}var E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null,c.a.createElement(d,null)),c.a.createElement(m,null),c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.9d915093.chunk.js.map