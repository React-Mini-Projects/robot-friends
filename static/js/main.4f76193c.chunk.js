(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),o=(n(9),n(3)),i=(n(10),n(0)),h=function(e){var t=e.id,n=e.name,c=e.username,s=e.email;return Object(i.jsxs)("div",{className:"tc card w-25 dib br2 pa2 ma3 grow bw2 shadow-5",children:[Object(i.jsx)("h2",{className:"f4",children:n}),Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(i.jsx)("h2",{className:"f4",children:c}),Object(i.jsx)("h2",{className:"f5",children:s})]})},j=function(e){var t=e.robots.map((function(e){return Object(i.jsx)(h,{id:e.id,name:e.name,username:e.username,email:e.email},e.id)}));return Object(i.jsx)("div",{children:t})},l=function(e){e.searchField;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa3 ",children:Object(i.jsx)("input",{type:"search",placeholder:"Search Robots",className:"pa3 search bg-lightest-blue",onChange:t})})},b=(n(12),function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",height:"600px"},children:e.children})}),u=function(){return Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("h3",{className:"h2 ",children:["Get the Robot API from ",Object(i.jsx)("a",{href:"https://robohash.org/",children:"robohash"})," "]})})};var d=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(o.a)(r,2),h=a[0],d=a[1];Object(c.useEffect)((function(){fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}),[]);var f=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?Object(i.jsxs)("div",{className:"App tc",children:[Object(i.jsx)("h1",{className:"f1",children:"Robo Friends"}),Object(i.jsx)(l,{searchChange:function(e){d(e.target.value)}}),Object(i.jsx)(b,{children:Object(i.jsx)(j,{robots:f})}),Object(i.jsx)(u,{})]}):Object(i.jsx)("h2",{children:"Loading"})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.4f76193c.chunk.js.map