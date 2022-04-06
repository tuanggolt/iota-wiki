"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91740],{63375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={description:"Solidity smart contract ERC20.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","ERC20","eip-20","token creation","mint tokens","how to"]},s="ERC20 Example",c={unversionedId:"guide/evm/examples/ERC20",id:"guide/evm/examples/ERC20",title:"ERC20 Example",description:"Solidity smart contract ERC20.",source:"@site/external/wasp/documentation/docs/guide/evm/examples/ERC20.md",sourceDirName:"guide/evm/examples",slug:"/guide/evm/examples/ERC20",permalink:"/smart-contracts/guide/evm/examples/ERC20",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/evm/examples/ERC20.md",tags:[],version:"current",frontMatter:{description:"Solidity smart contract ERC20.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","ERC20","eip-20","token creation","mint tokens","how to"]},sidebar:"tutorialSidebar",previous:{title:"Solidity Smart Contract Example",permalink:"/smart-contracts/guide/evm/examples/introduction"},next:{title:"ERC721 Example",permalink:"/smart-contracts/guide/evm/examples/ERC721"}},p={},d=[{value:"1. Create a Smart Contract",id:"1-create-a-smart-contract",level:2},{value:"2. Compile",id:"2-compile",level:2},{value:"3. Deploy",id:"3-deploy",level:2},{value:"4. Add Your Token to MetaMask",id:"4-add-your-token-to-metamask",level:2},{value:"5. Have some Fun!",id:"5-have-some-fun",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erc20-example"},"ERC20 Example"),(0,r.kt)("p",null,"ERC20 is a standard for fungible tokens and is defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"EIP-20 Token Standard")," by Ethereum."),(0,r.kt)("p",null,"With the ERC20 standard you can create your own tokens and transfer them in the EVM on IOTA Smart Contracts without fees."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," to deploy any regular Solidity Smart Contract."),(0,r.kt)("p",null,"Set the environment to ",(0,r.kt)("inlineCode",{parentName:"p"},"Injected Web3"),", and connect Remix with your MetaMask wallet.\nRead this ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/testnet#interact-with-evm"},"how to connect your MetaMask with the public Testnet."),"."),(0,r.kt)("h2",{id:"1-create-a-smart-contract"},"1. Create a Smart Contract"),(0,r.kt)("p",null,"Create a new Solidity file, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"ERC20.sol")," in the contracts folder of your ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," and add this code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity ^0.8.7;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\ncontract ExampleERC20Token is ERC20 {\n    constructor() ERC20("ExampleERC20Token", "EET") {\n        _mint(msg.sender, 1000000 * 10 ** decimals());\n    }\n}\n')),(0,r.kt)("p",null,"This imports all functions from the OpenZeppelin smart contract and creates a new ERC20 token with your name and Symbol. OpenZeppelin provides many audited smart contracts and is a good point to start and learn."),(0,r.kt)("p",null,"You can change the token name ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleERC20Token")," and the token symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"EET"),"."),(0,r.kt)("h2",{id:"2-compile"},"2. Compile"),(0,r.kt)("p",null,'Go to the second tab and compile your smart contract with the "Compile ERC20.sol" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Compile ERC20.sol",src:n(84011).Z,width:"1187",height:"682"})),(0,r.kt)("h2",{id:"3-deploy"},"3. Deploy"),(0,r.kt)("p",null,"Go to the next tab and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Injected Web3")," as your environment. Ensure that your MetaMask is installed and setup correctly."),(0,r.kt)("p",null,"Choose your \xb4ExampleERC20Token\xb4 smart contract in the contract dropdown."),(0,r.kt)("p",null,'Press the "Deploy" button - then your MetaMask will popup and you need to accept the deployment. '),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Deploy ERC20.sol",src:n(89112).Z,width:"1204",height:"793"})),(0,r.kt)("p",null,"Your MetaMask browser extension will open automatically - press confirm.\n",(0,r.kt)("img",{loading:"lazy",alt:"Confirm in MetaMask",src:n(11363).Z,width:"405",height:"614"})),(0,r.kt)("h2",{id:"4-add-your-token-to-metamask"},"4. Add Your Token to MetaMask"),(0,r.kt)("p",null,"Get the ",(0,r.kt)("inlineCode",{parentName:"p"},"contract address")," from the transaction after successful deployment. You can click on the latest transaction in your MetaMask Activity tab. If your MetaMask is configured correctly, the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.wasp.sc.iota.org/"},"IOTA EVM Explorer")," opens the transaction. Copy the contract address and import your token into MetaMask."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Copy contract address",src:n(87796).Z,width:"1168",height:"737"})),(0,r.kt)("h2",{id:"5-have-some-fun"},"5. Have some Fun!"),(0,r.kt)("p",null,"Now you should see your token in MetaMask - send them to your friends without any fees or gas costs."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Copy contract address",src:n(74533).Z,width:"351",height:"595"})),(0,r.kt)("p",null,"You also can ask in the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.iota.org"},"Discord Chat Server")," to send them around and discover what the community is building on IOTA Smart Contracts."))}m.isMDXComponent=!0},84011:function(e,t,n){t.Z=n.p+"assets/images/compile-621c7bc25456ec53a8c4f260d303a67e.png"},11363:function(e,t,n){t.Z=n.p+"assets/images/deploy-metamask-fbebb3ebbd7826bc3ffcce6045229305.png"},89112:function(e,t,n){t.Z=n.p+"assets/images/deploy-02062e5b46995f16d172365dd1c06499.png"},74533:function(e,t,n){t.Z=n.p+"assets/images/erc20-balance-9b02bef852bb9198c5a73bcfcc9863fc.png"},87796:function(e,t,n){t.Z=n.p+"assets/images/explorer-contract-address-656644611d0074020963ee130fe0d8ae.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);