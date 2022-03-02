"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91916],{57624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["devnet","load-balanced","HTTP REST API","MQTT","reference"]},c="Devnet",s={unversionedId:"devnet",id:"devnet",title:"Devnet",description:"The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.",source:"@site/external/chrysalis-docs/docs/devnet.md",sourceDirName:".",slug:"/devnet",permalink:"/chrysalis-docs/devnet",editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/main/external/chrysalis-docs/docs/devnet.md",tags:[],version:"current",frontMatter:{description:"The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["devnet","load-balanced","HTTP REST API","MQTT","reference"]},sidebar:"mySidebar",previous:{title:"Mainnet",permalink:"/chrysalis-docs/mainnet"},next:{title:'Deploy Your Own Tangle "In One Click" Tutorial',permalink:"/chrysalis-docs/tutorials/one_click_private_tangle"}},p=[{value:"Public Infrastructure",id:"public-infrastructure",children:[],level:2},{value:"Developer Tools",id:"developer-tools",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"devnet"},"Devnet"),(0,i.kt)("p",null,"Since the Chrysalis update, the ",(0,i.kt)("inlineCode",{parentName:"p"},"testnet")," is now called ",(0,i.kt)("inlineCode",{parentName:"p"},"devnet"),".  We recommend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"devnet")," to develop and test your application.  "),(0,i.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,i.kt)("p",null,"IOTA currently provides a load-balanced public devNet endpoint:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.lb-0.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-0.h.chrysalis-devnet.iota.cafe/"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"),".")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend using the load balancer for most scenarios."))),(0,i.kt)("p",null,"We also provide single node endpoints that expose native ",(0,i.kt)("a",{parentName:"p",href:"https://mqtt.org/"},"MQTT"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe"},"https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.thin-hornet-1.h.chrysalis-devnet.iota.cafe"},"https://api.thin-hornet-1.h.chrysalis-devnet.iota.cafe")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883"},"mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883"},"mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883"))),(0,i.kt)("p",null,"These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml"},"specification"),") over TLS."),(0,i.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://explorer.iota.org/devnet"},"Explorer"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://faucet.chrysalis-devnet.iota.cafe"},"Online Faucet"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet"},"cli-wallet"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/chrysalis-faucet"},"chrysalis-faucet Code (nodejs + svelte)"),".")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);