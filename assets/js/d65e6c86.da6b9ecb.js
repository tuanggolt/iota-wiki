"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93797],{80523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],s={id:"an-introduction-to-iota",title:"An Introduction to IOTA",description:"A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it."},c="Introduction to IOTA",l={unversionedId:"learn/about-iota/an-introduction-to-iota",id:"learn/about-iota/an-introduction-to-iota",isDocsHomePage:!1,title:"An Introduction to IOTA",description:"A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it.",source:"@site/docs/learn/about-iota/an-introduction-to-iota.md",sourceDirName:"learn/about-iota",slug:"/learn/about-iota/an-introduction-to-iota",permalink:"/docs/learn/about-iota/an-introduction-to-iota",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/docs/learn/about-iota/an-introduction-to-iota.md",tags:[],version:"current",frontMatter:{id:"an-introduction-to-iota",title:"An Introduction to IOTA",description:"A basic introduction to the IOTA DLT Technology. The use-cases and the Ecosystem developed around it."},sidebar:"learn",next:{title:"Data Transfer",permalink:"/docs/learn/about-iota/data-transfer"}},h=[{value:"<strong>The blockchain data structure</strong>",id:"the-blockchain-data-structure",children:[]},{value:"<strong>The Tangle data structure</strong>",id:"the-tangle-data-structure",children:[]},{value:"<strong>Consensus in a blockchain</strong>",id:"consensus-in-a-blockchain",children:[]},{value:"<strong>Consensus in the Tangle</strong>",id:"consensus-in-the-tangle",children:[]},{value:"<strong>The coordinator</strong>",id:"the-coordinator",children:[]}],d={toc:h};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-iota"},"Introduction to IOTA"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This topic describes some main differences between the Tangle and a blockchain.")),(0,r.kt)("p",null,"Blockchains and the Tangle both fall under the same category of distributed ledger technology (DLT)."),(0,r.kt)("p",null,"The main differences between blockchains and the Tangle are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In a Blockchain, new transactions can only be attached to a single point (a new block) that follows and is connected to the previous block. This leads to a race and competition for transactions to be part of a new Block."),(0,r.kt)("li",{parentName:"ul"},"In the Tangle, every user is free to attach new transactions on different parts of the Tangle. This allows many transactions to be attached and processed in parallel, which dramatically speeds up the processing of transactions"),(0,r.kt)("li",{parentName:"ul"},'A Blockchain must always select a single leader to attach a new Block to the Blockchain. This can lead to the well-known "Miner race," where only the Miner with the highest computational processing power, or Stakers with the highest stake, have a reasonable chance of becoming a Block-Producer and are allowed to attach new Block and to write their transactions to the Ledger. This is also seen as a form of centralization in Blockchains, as you need "middlemen" that process your transactions. Regular users are not allowed to write directly to the Ledger'),(0,r.kt)("li",{parentName:"ul"},"IOTA, in comparison, is a leaderless protocol. Everyone is free to attach transactions as long as they are following the basic layout design of the protocol. There is no need to elect a leader as the Tangle can implement new transactions in parallel processing. And therefore, IOTA removed the middlemen entirely from the protocol. This is one of the reasons why IOTA can reach a very high transaction throughput and also remains absolutely feeless.")),(0,r.kt)("p",null,"To explain these points, you need to understand the differences between the data structures and the consensus mechanisms in these DLTs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Blockchain vs. Tangle")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"layer1-tangle",src:n(72848).Z})),(0,r.kt)("h2",{id:"the-blockchain-data-structure"},(0,r.kt)("strong",{parentName:"h2"},"The blockchain data structure")),(0,r.kt)("p",null,"The blockchain data structure consists of a chain of sequential blocks, where each block contains a limited number of messages.\nAs a result, Validators can attach new messages to only one place: a block at the end of the chain. Due to this limitation, blockchain networks often experience slow confirmation times. This limitation is known as the blockchain bottleneck."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Blockchain bottleneck")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"blockchain-bottleneck",src:n(44782).Z})),(0,r.kt)("p",null,"All transactions in a Blockchain have to wait until they are included in a Block. Due to limitations in Blocksize and Block Production time, this creates congestion and waiting times for transactions."),(0,r.kt)("h2",{id:"the-tangle-data-structure"},(0,r.kt)("strong",{parentName:"h2"},"The Tangle data structure")),(0,r.kt)("p",null,"The Tangle data structure is a directed acyclic graph (DAG), where each message is attached to two to eight previous ones.\nRather than being limited to a single place for attaching new messages, you can attach messages in different places at the front of the Tangle. The protocol is able to process these various attachments in parallel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tangle bottleneck")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tangle-bottleneck",src:n(24149).Z})),(0,r.kt)("p",null,"Allowing parallel processing removes congestion."),(0,r.kt)("h2",{id:"consensus-in-a-blockchain"},(0,r.kt)("strong",{parentName:"h2"},"Consensus in a blockchain")),(0,r.kt)("p",null,"In blockchains, the network participants are split into validators (Miners, Stackers) and users.\nMiners consume large amounts of computing power to complete the proof of work (PoW) required to chain the blocks together.\nMiners and Stakers are incentivized to validate messages and do PoW because of the following:"),(0,r.kt)("p",null,"The fees that users are willing to pay to have their messages included in a block"),(0,r.kt)("p",null,"The reward that the network gives to Miners for producing the Block faster than other Miners.\nThe only way to reverse messages in a POW Blockchain is to mine a new blockchain in the same amount of time it takes other miners to mine a single block. To do so, a miner would need 51% of the network's ability to do PoW, known as hash power.\nAs a result, requiring validators to do PoW secures blockchain networks by making it difficult to attack, change, or stop. The more miners participate, the more secure the network is."),(0,r.kt)("p",null,'Producing Blocks as a Stacker in Proof of Stake Blockchain usually requires the staker to own vast amounts of staked tokens. Often only a few selected or fixed Validators are granted to be "Block - Producers". These entities are either pre-defined by the creators of the protocol (a form of centralization), or emerge as validators holding the most significant stake of tokens. Proof of Stake Blockchains do not require enormous amounts of energy wasted for PoW, but therefore only allow the wealthiest participants to write to the Ledger and produce new blocks. '),(0,r.kt)("h2",{id:"consensus-in-the-tangle"},(0,r.kt)("strong",{parentName:"h2"},"Consensus in the Tangle")),(0,r.kt)("p",null,"In the Tangle, messages require no fees because the network has no miners or stakers.\nIn the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages.\nTo reach a consensus, all IOTA nodes validate messages and use different functions alongside messages in their confirmation.\nCurrently, messages will only be considered valid if they have a reference to a milestone. These milestones are issued by a special network node - the Coordinator."),(0,r.kt)("h2",{id:"the-coordinator"},(0,r.kt)("strong",{parentName:"h2"},"The coordinator")),(0,r.kt)("p",null,"The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Coordinator is temporary. We will transition into removing the Coordinator: Coordicide in the upcoming IOTA 2.0 network. Below is how the Coordinator is currently deployed within IOTA.")),(0,r.kt)("p",null,"Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated."),(0,r.kt)("p",null,"To allow the nodes recognizing the milestones, all nodes that participate in the same IOTA network are configured with the Merkle root address of a Coordinator that they trust to confirm messages. Using this address, nodes can validate the signatures in milestones to verify whether the trusted Coordinator signs them."),(0,r.kt)("p",null,"To make sure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones at regular intervals. This way, nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"coordinator",src:n(30753).Z})))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44782:function(e,t,n){t.Z=n.p+"assets/images/blockchain-bottleneck-c807d504ff52169427d3ca4cf0179a8c.gif"},72848:function(e,t,n){t.Z=n.p+"assets/images/layer1-tangle-5def88eba0eda48929dd01d17a7d5510.png"},30753:function(e,t,n){t.Z=n.p+"assets/images/milestones-ca3479a44644b9ab2414b07e1e62d6ac.gif"},24149:function(e,t,n){t.Z=n.p+"assets/images/tangle-bottleneck-ad9ab01d5399a5cefbac1cbd1be3900a.gif"}}]);