"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36663],{46246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={description:"An Off-ledger request is not a transaction, but it contains the same information as an on-ledger request, and it is cryptographically signed. This kind of requests do not rely on the Tangle for confirmation, so they are much faster.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","requests","off-ledger","node","nonce","tangle","API calls","reference"]},s="Off-ledger Requests",l={unversionedId:"guide/core_concepts/smartcontract-interaction/off-ledger-requests",id:"guide/core_concepts/smartcontract-interaction/off-ledger-requests",title:"Off-ledger Requests",description:"An Off-ledger request is not a transaction, but it contains the same information as an on-ledger request, and it is cryptographically signed. This kind of requests do not rely on the Tangle for confirmation, so they are much faster.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/smartcontract-interaction/off-ledger-requests.md",sourceDirName:"guide/core_concepts/smartcontract-interaction",slug:"/guide/core_concepts/smartcontract-interaction/off-ledger-requests",permalink:"/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/core_concepts/smartcontract-interaction/off-ledger-requests.md",tags:[],version:"current",frontMatter:{description:"An Off-ledger request is not a transaction, but it contains the same information as an on-ledger request, and it is cryptographically signed. This kind of requests do not rely on the Tangle for confirmation, so they are much faster.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","requests","off-ledger","node","nonce","tangle","API calls","reference"]},sidebar:"tutorialSidebar",previous:{title:"On-ledger Requests",permalink:"/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests"},next:{title:"Solo",permalink:"/smart-contracts/guide/solo/what-is-solo"}},u={},d=[{value:"Nonce",id:"nonce",level:2},{value:"Using the WASP Web API",id:"using-the-wasp-web-api",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"off-ledger-requests"},"Off-ledger Requests"),(0,a.kt)("p",null,"You can send ",(0,a.kt)("inlineCode",{parentName:"p"},"off-ledger")," requests by sending an API call to a WASP node, which to the state of the target chain, an ",(0,a.kt)("inlineCode",{parentName:"p"},"access node")," (which can be a committee node, or not). Unlike ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests"},(0,a.kt)("inlineCode",{parentName:"a"},"on-leger")," requests"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"off-ledger")," request is not a transaction, it just contains the same information as an on-ledger request, and it is cryptographically signed. This kind of requests do not rely on the Tangle for confirmation, so they are much faster."),(0,a.kt)("h2",{id:"nonce"},"Nonce"),(0,a.kt)("p",null,"In order to prevent replay attacks, off-ledger requests must include a special parameter, the ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce"),".\nNonces are account-bound; the current nonce for a given account can be obtained via the ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"accounts"))," core contract ",(0,a.kt)("inlineCode",{parentName:"p"},"getAccountNonce")," view."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is highly recommended you use ",(0,a.kt)("strong",{parentName:"p"},"strictly monotonic increasing")," nonces in off-ledger requests (i.e. 1,2,3,4,5)."))),(0,a.kt)("h2",{id:"using-the-wasp-web-api"},"Using the WASP Web API"),(0,a.kt)("p",null,"After you have constructed an Off-ledger request, you can send it to a Wasp node webapi ",(0,a.kt)("inlineCode",{parentName:"p"},"/request/<chain_id>")," endpoint via POST with the request as the body binary, or as a base64 string (MIME-type must be defined accordingly)."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);