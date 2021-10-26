"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[63412],{39829:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(74034),i=r(79973),o=(r(67294),r(3905)),a=r(22013),c=["components"],l={title:"IOTA 1.5",description:"My document description from SEO"},d=void 0,s={unversionedId:"networks/iota-1.5",id:"networks/iota-1.5",isDocsHomePage:!1,title:"IOTA 1.5",description:"My document description from SEO",source:"@site/internal/build/networks/iota-1.5.mdx",sourceDirName:"networks",slug:"/networks/iota-1.5",permalink:"/build/networks/iota-1.5",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/build/networks/iota-1.5.mdx",tags:[],version:"current",lastUpdatedAt:1635259133,formattedLastUpdatedAt:"10/26/2021",frontMatter:{title:"IOTA 1.5",description:"My document description from SEO"},sidebar:"build",previous:{title:"Welcome",permalink:"/build/welcome"},next:{title:"IOTA 2.0",permalink:"/build/networks/iota-2.0"}},u=[{value:"General documentation",id:"general-documentation",children:[],level:2},{value:"Node softwares",id:"node-softwares",children:[],level:2},{value:"Libraries",id:"libraries",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-documentation"},"General documentation"),(0,o.kt)("div",{className:"row"},(0,o.kt)(a.Z,{title:"Chrysalis",link:"/chrysalis-docs/welcome",description:"",icon:"\ue901",mdxType:"Card"})),(0,o.kt)("h2",{id:"node-softwares"},"Node softwares"),(0,o.kt)("div",{className:"row"},(0,o.kt)(a.Z,{title:"Hornet",link:"/hornet/welcome",description:"IOTA node written in Go",icon:"\ue904",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Bee",link:"/bee/getting_started/getting_started",description:"IOTA node written in Rust",icon:"\ue900",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Chronicle",link:"/chronicle.rs/welcome",description:"IOTA permanode written in Rust",icon:"\ue90c",mdxType:"Card"})),(0,o.kt)("h2",{id:"libraries"},"Libraries"),(0,o.kt)("div",{className:"row"},(0,o.kt)(a.Z,{title:"Client",link:"/iota.rs/welcome",description:"Interact with the IOTA network",icon:"\ue907",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Wallet",link:"/wallet.rs/welcome",description:"Build IOTA wallets",icon:"\ue90a",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Stronghold",link:"/stronghold.rs/welcome",description:"Handle secrets securely",icon:"\ue909",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Identity",link:"/identity.rs/introduction",description:"Identity framework",icon:"\ue905",mdxType:"Card"}),(0,o.kt)(a.Z,{title:"Streams",link:"/streams/welcome",description:"Share data securely",icon:"\ue908",mdxType:"Card"})))}m.isMDXComponent=!0},22013:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(67294),i="icon_WlpA",o=r(86010),a=r(5977),c=r(45697),l=r.n(c);function d(e){var t=e.title,r=e.link,c=e.description,l=e.icon,d=(0,a.k6)();return n.createElement("div",{className:"card card-background card--pointer margin-horiz--md margin-vert--md shadow--md",onClick:function(e){e.preventDefault(),d.push(r)}},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:(0,o.Z)(i,"card__body")},l),n.createElement("div",{className:"card__footer"},n.createElement("p",null,c)))}d.propTypes={title:l().string,icon:l().string,link:l().string,description:l().string}},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},86010:function(e,t,r){function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);