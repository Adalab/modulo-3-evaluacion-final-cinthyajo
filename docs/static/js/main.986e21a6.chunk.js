(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(3),s=c.n(r),i=(c(9),c(4)),o=c.p+"static/media/logo.9d64fca1.png",j=c(0),u=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("article",{className:"card",children:[Object(j.jsx)("img",{className:"card__img",src:e.image,alt:"Foto de ".concat(e.name),title:"Foto de ".concat(e.name)}),Object(j.jsx)("h4",{className:"card__title",children:e.name}),Object(j.jsx)("p",{className:"card__description",children:e.species})]})})},m=function(e){var t=e.characters.map((function(e){return Object(j.jsx)(u,{name:e.name,species:e.species,image:e.image},e.id)}));return Object(j.jsx)("section",{children:Object(j.jsx)("ul",{className:"cards",children:t})})},l=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{image:e.image,name:e.name,species:e.species,id:e.id}}))}))},d={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},h=function(){var e=Object(n.useState)(d.get("characters",[])),t=Object(i.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){0===c.length&&l().then((function(e){a(e)}))}),[]),Object(n.useEffect)((function(){d.set("characters",c)}),[c]);var r=c;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:o,alt:"Rick and Morty"}),Object(j.jsx)("div",{children:Object(j.jsx)(m,{characters:r})})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.986e21a6.chunk.js.map