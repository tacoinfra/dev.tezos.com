(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(t,e,n){"use strict";n.r(e);n(158);var i=n(9),o=(n(0),n(162)),r=n(161),l=n(160),a=n(163),c=n(170),u=n(169);e.default=function(t){var e=t.location;return Object(i.d)(o.a,{location:e,title:"Resources",compact:!0},Object(i.d)(r.a,{title:"Resources"}),Object(i.d)(l.a,null,Object(i.d)(c.a,{columns:u.a.length},function(t){return u.a.map(function(e,n){var o=e.slug,r=e.title,l=e.posts;return Object(i.d)(a.a,{key:o,id:o,titleRef:t[n],title:Object(i.d)("h3",null,r)},Object(i.d)("ul",null,l.map(function(t){var e=t.link,n=t.title,o=t.body;return Object(i.d)("li",{key:e},Object(i.d)("p",null,Object(i.d)("a",{href:e,target:"_blank",rel:"noopener noreferrer"},n)),Object(i.d)("p",null,Object(i.d)("small",null,o)))})))})})))}},158:function(t,e,n){"use strict";n(159)("link",function(t){return function(e){return t(this,"a","href",e)}})},159:function(t,e,n){var i=n(12),o=n(21),r=n(22),l=/"/g,a=function(t,e,n,i){var o=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(i).replace(l,"&quot;")+'"'),a+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),i(i.P+i.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},163:function(t,e,n){"use strict";n(158);var i=n(156),o=n(9),r=(n(0),n(157)),l=n(164),a=n.n(l),c=Object(i.a)("header",{target:"e1h982jz0"})("display:flex;border-bottom:3px solid ",r.b.blue,";padding-bottom:20px;width:100%;"),u=Object(i.a)("div",{target:"e1h982jz1"})({name:"lcx8je",styles:"flex-grow:1;h3{margin-bottom:0;}"}),s=Object(i.a)("div",{target:"e1h982jz2"})({name:"fqhmwx",styles:"white-space:nowrap;span{margin-right:5px;}svg{position:relative;top:2px;}a{font-weight:400;&:hover,&:focus{text-decoration:none;span{text-decoration:underline;}}}"}),f=Object(i.a)("div",{target:"e1h982jz3"})("margin-top:30px;& > * + *{margin-top:10px;}h4{margin-top:25px;margin-bottom:18px;}ul{list-style:none;margin:0;}li{margin:0;padding:0 0 8px 0;border-bottom:1px solid ",r.b.grey,";& + li{padding-top:8px;}p{margin:0;& + p{margin-top:-4px;}}}");e.a=function(t){var e=t.titleRef,n=t.id,i=t.title,r=t.link,l=t.children;return Object(o.d)("div",{id:n},Object(o.d)(c,{ref:e},Object(o.d)(u,null,i),r&&Object(o.d)(s,null,Object(o.d)("a",{href:r},Object(o.d)("span",null,"View All")," ",Object(o.d)(a.a,null)))),Object(o.d)(f,null,l))}},164:function(t,e,n){var i=n(0);function o(t){return i.createElement("svg",t,i.createElement("path",{d:"M0 15l7.5-7.5L0 0z",fill:"#7691C4",fillRule:"evenodd"}))}o.defaultProps={width:"8",height:"15"},t.exports=o,o.default=o},165:function(t,e,n){var i=n(12),o=n(166)(!1);i(i.S,"Object",{values:function(t){return o(t)}})},166:function(t,e,n){var i=n(39),o=n(38),r=n(81).f;t.exports=function(t){return function(e){for(var n,l=o(e),a=i(l),c=a.length,u=0,s=[];c>u;)r.call(l,n=a[u++])&&s.push(t?[n,l[n]]:l[n]);return s}}},167:function(t,e,n){(function(e){var n="Expected a function",i=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,p=s||f||Function("return this")(),d=Object.prototype.toString,g=Math.max,h=Math.min,b=function(){return p.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&d.call(t)==o}(t))return i;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=a.test(t);return n||c.test(t)?u(t.slice(2),n?2:8):l.test(t)?i:+t}t.exports=function(t,e,i){var o,r,l,a,c,u,s=0,f=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError(n);function v(e){var n=o,i=r;return o=r=void 0,s=e,a=t.apply(i,n)}function j(t){var n=t-u;return void 0===u||n>=e||n<0||p&&t-s>=l}function O(){var t=b();if(j(t))return w(t);c=setTimeout(O,function(t){var n=e-(t-u);return p?h(n,l-(t-s)):n}(t))}function w(t){return c=void 0,d&&o?v(t):(o=r=void 0,a)}function x(){var t=b(),n=j(t);if(o=arguments,r=this,u=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(O,e),f?v(t):a}(u);if(p)return c=setTimeout(O,e),v(u)}return void 0===c&&(c=setTimeout(O,e)),a}return e=y(e)||0,m(i)&&(f=!!i.leading,l=(p="maxWait"in i)?g(y(i.maxWait)||0,e):l,d="trailing"in i?!!i.trailing:d),x.cancel=function(){void 0!==c&&clearTimeout(c),s=0,o=u=r=c=void 0},x.flush=function(){return void 0===c?a:w(b())},x}}).call(this,n(79))},169:function(t,e,n){"use strict";e.a=[{slug:"languages",title:"Languages",link:"/resources#languages",posts:[{link:"https://gitlab.com/gabriel.alfour/ligo",title:"Ligo ",body:"A syntax-agnostic, high-level smart contract language"},{link:"http://hackage.haskell.org/package/morley",title:"Morley/Lorentz",body:"Haskell-like Michelson Programming Language"},{link:"https://fi-code.com/",title:"Fi",body:"High level language, currently in Alpha"},{link:"http://smartpy.io/",title:"SmartPy",body:"Tezos smart contracts with Python syntax"}]},{slug:"libraries",title:"Libraries",link:"/resources#libraries",posts:[{link:"https://www.npmjs.com/package/sotez",title:"Sotez",body:"Javascript library for interacting with Tezos"},{link:"https://github.com/BrianGuo/MichelsonExecutionEngine",title:"M.E.L.",body:"Michelson Execution library"},{link:"https://github.com/Cryptonomic/Conseil/ ",title:"Conseil",body:"API tool for querying against nodes"},{link:"https://cryptonomic.github.io/ConseilJS/#/",title:"Conseiljs",body:"Javascript library for building tezos dapps"},{link:"https://github.com/TezTech/eztz",title:"Eztz",body:"Javascript library for interacting with Tezos "},{link:"https://github.com/murbard/pytezos",title:"PyTezos",body:"Python Library for interacting with Tezos "},{link:"https://github.com/DefinitelyNotAGoat/go-tezos",title:"Go-Tezos",body:"Golang Library for interacting with Tezos "},{link:"https://www.tezbridge.com/",title:"TezBridge",body:"Web wallet storing Tezos accounts"}]},{slug:"tools",title:"Tools",link:"/resources#tools",posts:[{link:"https://www.plugin-dev.com/project/tezos-michelson/",title:"Tezos - intellij ",body:"Michelson Plugin for IntelliJ"},{link:"https://stove-labs.github.io/granary/",title:"Granary",body:"Tezos Development Toolkit"},{link:"https://github.com/tezos/tezos/tree/master/emacs",title:"Michelson emacs mode ",body:"Michelson Plugin for Emacs"},{link:"https://tezos.gitlab.io/alphanet/introduction/howtouse.html#faucet",title:"Testnet Faucet",body:"Faucet for the Tezos Alphanet"},{link:"https://tzscan.io/",title:"TzScan",body:"Block Explorer"}]}]},170:function(t,e,n){"use strict";var i=n(156),o=n(9),r=n(0),l=n.n(r),a=(n(80),n(60),n(37),n(165),n(167)),c=n.n(a),u=function(t){var e=t.nodes,n=t.children,i=c()(function(){var t=e.map(function(t){return t.current}).filter(function(t){return t}).map(function(t){t.style.height="auto",t.style.maxHeight="",t.style.minHeight="";var e=t.getBoundingClientRect();return{node:t,top:e.top,height:e.height}});Object.values(t.reduce(function(t,e){var n=e.node,i=e.top,o=e.height;return t[i]||(t[i]=[]),t[i].push({node:n,height:o}),t},{})).forEach(function(t){var e=t.map(function(t){return t.height}),n=Math.max.apply(Math,e);t.forEach(function(t){t.node.style.height=n+"px"})})},50);return Object(r.useEffect)(function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),setTimeout(i),Object(o.d)(l.a.Fragment,null,n)},s=n(157),f=Object(o.c)("@media (min-width:",s.a.mobile,"){grid-template-columns:repeat(auto-fill,minmax(30%,1fr));}@media (min-width:",s.a.tablet,"){}"),p=Object(o.c)("@media (min-width:",s.a.mobile,"){grid-template-columns:repeat(auto-fill,minmax(45%,1fr));}@media (min-width:",s.a.tablet,"){grid-template-columns:repeat(auto-fill,minmax(20%,1fr));}"),d=Object(i.a)("div",{target:"eejqw190"})("display:grid;grid-template-columns:repeat(auto-fill,minmax(100%,1fr));grid-gap:40px;",function(t){return 3===t.columns?f:p});e.a=function(t){var e=t.columns,n=void 0===e?3:e,i=t.children,l=[Object(r.useRef)(null),Object(r.useRef)(null),Object(r.useRef)(null),Object(r.useRef)(null)];return Object(o.d)(u,{nodes:l},Object(o.d)(d,{columns:n},i(l)))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-200e0ba0e847aa2d73c7.js.map