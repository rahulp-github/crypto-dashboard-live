(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){},165:function(e,t){},167:function(e,t){},180:function(e,t){},182:function(e,t){},210:function(e,t){},212:function(e,t){},213:function(e,t){},218:function(e,t){},220:function(e,t){},226:function(e,t){},228:function(e,t){},247:function(e,t){},259:function(e,t){},262:function(e,t){},279:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(143),c=a.n(s),i=(a(151),a(9)),o=a(5),l=(a(152),a(15)),u=a.n(l),j=a(4),d=a(22),b=["Bitcoin (BTC)","Ethereum (ETH)","Binance Coin (BNB)","Tether (USDT)","Solana (SOL)","Cardano (ADA)","XRP (XRP)","USD Coin (USDC)","Polkadot (DOT)","Terra (LUNA)","Dogecoin (DOGE)","Avalanche (AVAX)","SHIBA INU (SHIB)","Polygon (MATIC)","Crypto.com Coin (CRO)","Binance USD (BUSD)","Wrapped Bitcoin (WBTC)","Litecoin (LTC)","Uniswap (UNI)","Algorand (ALGO)","Chainlink (LINK)","TRON (TRX)","Bitcoin Cash (BCH)","TerraUSD (UST)","Stellar (XLM)","Decentraland (MANA)","Axie Infinity (AXS)","Dai (DAI)","VeChain (VET)","FTX Token (FTT)","Elrond (EGLD)","Internet Computer (ICP)","Cosmos (ATOM)","Filecoin (FIL)","Ethereum Classic (ETC)","Bitcoin BEP2 (BTCB)","NEAR Protocol (NEAR)","THETA (THETA)","Hedera (HBAR)","The Sandbox (SAND)","Tezos (XTZ)","Fantom (FTM)","Monero (XMR)","BitTorrent (BTT)","EOS (EOS)","Klaytn (KLAY)","The Graph (GRT)","UNUS SED LEO (LEO)","IOTA (MIOTA)","Loopring (LRC)","Gala (GALA)","Helium (HNT)","Flow (FLOW)","PancakeSwap (CAKE)","Stacks (STX)","Bitcoin SV (BSV)","Maker (MKR)","Aave (AAVE)","Kusama (KSM)","Amp (AMP)","eCash (XEC)","Enjin Coin (ENJ)","Zcash (ZEC)","Harmony (ONE)","Neo (NEO)","Waves (WAVES)","Quant (QNT)","THORChain (RUNE)","Chiliz (CHZ)","Basic Attention Token (BAT)","Kadena (KDA)","KuCoin Token (KCS)","Curve DAO Token (CRV)","Holo (HOT)","OKB (OKB)","Arweave (AR)","Huobi Token (HT)","Dash (DASH)","Celo (CELO)","Compound (COMP)","Nexo (NEXO)","Theta Fuel (TFUEL)","Decred (DCR)","NEM (XEM)","TrueUSD (TUSD)","Mina (MINA)","Qtum (QTUM)","Voyager Token (VGX)","1inch Network (1INCH)","IoTeX (IOTX)","WAX (WAXP)","Immutable X (IMX)","OMG Network (OMG)","Ankr (ANKR)","XDC Network (XDC)","Pax Dollar (USDP)","Ravencoin (RVN)","ICON (ICX)","Oasis Network (ROSE)","Siacoin (SC)"],h=["BTC","ETH","BNB","USDT","SOL","ADA","XRP","USDC","DOT","LUNA","DOGE","AVAX","SHIB","MATIC","CRO","BUSD","WBTC","LTC","UNI","ALGO","LINK","TRX","BCH","UST","XLM","MANA","AXS","DAI","VET","FTT","EGLD","ICP","ATOM","FIL","ETC","BTCB","NEAR","THETA","HBAR","SAND","XTZ","FTM","XMR","BTT","EOS","KLAY","GRT","LEO","MIOTA","LRC","GALA","HNT","FLOW","CAKE","STX","BSV","MKR","AAVE","KSM","AMP","XEC","ENJ","ZEC","ONE","NEO","WAVES","QNT","RUNE","CHZ","BAT","KDA","KCS","CRV","HOT","OKB","AR","HT","DASH","CELO","COMP","NEXO","TFUEL","DCR","XEM","TUSD","MINA","QTUM","VGX","1INCH","IOTX","WAXP","IMX","OMG","ANKR","XDC","USDP","RVN","ICX","ROSE","SC"],O=a(0);function p(e){var t=e.setNewFilter,a=e.clearAll,n=e.handleCompare;return console.log("Data",b),Object(O.jsxs)("div",{className:"filterPanel",children:[Object(O.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"form-select","aria-label":"Crypto Select",children:[Object(O.jsx)("option",{value:"ignore",defaultValue:!0,children:"Choose crypto currency to compare"}),b.map((function(e,t){return Object(O.jsx)("option",{value:h[t],children:e},t)}))]}),Object(O.jsx)("button",{type:"button",onClick:n,class:"btn btn-outline-primary",children:"Compare"}),Object(O.jsx)("button",{type:"button",onClick:a,class:"btn btn-outline-danger",children:"Clear"})]})}function m(e){var t=e.allFilters,a=e.removeFilter,n=Object(j.a)(t);return Object(O.jsx)("div",{className:"allFilters",children:n.map((function(e,t){return Object(O.jsx)("div",{className:"filter",children:Object(O.jsxs)("p",{children:[e," ",Object(O.jsx)("i",{id:e,onClick:function(e){a(e.target.id)},className:"bi bi-x-lg"})]})},t)}))})}a(56);var x=a(37),f=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toString(),e.next=3,fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=".concat(n,"&tsyms=").concat(a,"&api_key=\n    1df1aa65eb8d81605d977c7c1822b879e907e605ffba20c657432d2dbb84efb9"));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){return"rgb(".concat(Math.floor(255*Math.random()),",").concat(Math.floor(255*Math.random()),",").concat(Math.floor(255*Math.random()),")")};function N(e){var t=e.filters,a=Object(j.a)(t),r=Object(n.useState)({labels:a,datasets:[],options:{responsive:!0,maintainAspectRatio:!1}}),s=Object(o.a)(r,2),c=s[0],l=s[1];return Object(n.useEffect)((function(){f(a,"USD,EUR").then((function(e){return function(e,t,a){var n=[],r=[],s=[];for(var c in e)r.push(e[c].USD),s.push(e[c].EUR);n.push({label:"USD",backgroundColor:"rgba(255,99,132)",data:r},{label:"EUR",backgroundColor:"rgba(155,231,91)",data:s}),t(Object(i.a)(Object(i.a)({},a),{},{datasets:n}))}(e,l,c)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"bar-chart",children:[Object(O.jsx)("div",{className:"card-header",children:"Bar Chart showing prices in USD and EUR"}),Object(O.jsx)("ul",{className:"list-group list-group-flush",children:Object(O.jsx)("li",{className:"list-group-item",children:Object(O.jsx)(x.a,{data:c})})})]})})}function v(e){var t=e.filters,a=Object(j.a)(t),r=Object(n.useState)({labels:a,datasets:[],options:{responsive:!0,maintainAspectRatio:!1}}),s=Object(o.a)(r,2),c=s[0],l=s[1];return Object(n.useEffect)((function(){f(a,"USD").then((function(e){return function(e,t,a){var n=[],r=[],s=[];for(var c in e)r.push(e[c].USD),s.push(g());n.push({data:r,backgroundColor:s}),t(Object(i.a)(Object(i.a)({},a),{},{datasets:n}))}(e,l,c)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"pie-chart",children:[Object(O.jsx)("div",{className:"card-header",children:"Pie Chart Comparing prices In USD $"}),Object(O.jsx)("ul",{className:"list-group list-group-flush",children:Object(O.jsx)("li",{className:"list-group-item",children:Object(O.jsx)(x.c,{data:c,height:300,width:300})})})]})})}function S(e){var t=e.filters,a=Object(j.a)(t),r=Object(n.useState)({labels:"",datasets:[],options:{responsive:!0,maintainAspectRatio:!1}}),s=Object(o.a)(r,2),c=s[0],i=s[1];return Object(n.useEffect)((function(){f(a,"USD,EUR").then((function(e){return function(e,t){var a=[];for(var n in e){var r={};r.label=n,r.data=[],r.data.push(e[n].USD),r.data.push(e[n].EUR),r.borderColor=g(),a.push(r)}t({labels:["USD","EUR"],datasets:a})}(e,i)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"line-chart",children:[Object(O.jsx)("div",{className:"card-header",children:"Line Chart Comparing prices in USD and EUR"}),Object(O.jsx)("ul",{className:"list-group list-group-flush",children:Object(O.jsx)("li",{className:"list-group-item",children:Object(O.jsx)(x.b,{data:c,height:300,width:300})})})]})})}function C(e){var t=e.historyFilters,a=e.toggleHistory,r=e.isAuthenticated,s=Object(n.useState)(new Set),c=Object(o.a)(s,2),i=c[0],l=c[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),x=h[0],f=h[1];return Object(n.useEffect)((function(){t.length>1&&(l(new Set(t)),f(!0),a())}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"alertMsg",children:!r&&Object(O.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(O.jsx)("strong",{children:"Tip: "})," SignIn To store your comparisons in history",Object(O.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(p,{setNewFilter:function(e){"ignore"!==e&&l(new Set(i.add(e)))},clearAll:function(){l(new Set),f(!1)},handleCompare:function(){return g.apply(this,arguments)}}),Object(O.jsx)(m,{allFilters:i,removeFilter:function(e){var t=new Set;(t=i).delete(e),l(new Set(t))}}),x?Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-sm-6 pie",children:Object(O.jsx)(v,{filters:i})}),Object(O.jsx)("div",{className:"col-sm-6 line ",children:Object(O.jsx)(S,{filters:i})}),Object(O.jsx)("div",{className:"col-sm-6 bar",children:Object(O.jsx)(N,{filters:i})})]}):Object(O.jsx)("div",{className:"notCompared",children:Object(O.jsx)("h4",{children:"Select crypto currencies to compare and click on compare button "})})]}),Object(O.jsx)("div",{className:"dummy"})]});function g(){return(g=Object(d.a)(u.a.mark((function e(){var t,a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.size<=1)){e.next=2;break}return e.abrupt("return",alert("Choose atleast two currencies to compare"));case 2:if(x&&f(!1),!r){e.next=19;break}return t=new Date,a=Object(j.a)(i),n={currency:a,date:t},e.prev=7,e.next=10,fetch("https://crypto-dashboard-api-server.herokuapp.com/addHistory",{method:"POST",headers:{"x-access-token":localStorage.getItem("token"),"Content-Type":"application/json"},body:JSON.stringify(n)});case 10:return s=e.sent,e.next=13,s.json();case 13:e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),alert("Error ".concat(e.t0));case 19:setTimeout((function(){f(!0)}),1);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})))).apply(this,arguments)}}var T=a.p+"static/media/BTC_Logo.e5be9797.png",A=a(11);var y=function(e){var t=e.isAuthenticated,a=e.handleLogout;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:"navbarUl",children:[Object(O.jsx)("li",{className:"navbarLi",children:Object(O.jsx)("a",{className:"icon",href:"#",children:Object(O.jsx)("img",{src:T,alt:"logo",width:"40",height:"40"})})}),Object(O.jsx)("li",{className:"home navbarLi",children:Object(O.jsx)(A.b,{className:"navLink",to:"/",children:"Home"})}),t&&Object(O.jsx)("li",{className:"history navbarLi",children:Object(O.jsx)(A.b,{className:"navLink",to:"/history",children:"History"})}),t?Object(O.jsx)("li",{className:"signup navbarLi",children:Object(O.jsx)(A.b,{to:"/",onClick:a,children:"Logout"})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"signup navbarLi",children:Object(O.jsx)(A.b,{to:"/signup",children:"SignUp"})}),Object(O.jsx)("li",{className:"signin navbarLi",children:Object(O.jsx)(A.b,{to:"/signin",children:"SignIn"})})]})]})})})},E=a(6);function U(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),c=Object(o.a)(s,2),i=c[0],l=c[1],j=Object(E.g)();function b(){return(b=Object(d.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://crypto-dashboard-api-server.herokuapp.com/signup",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:a,password:i})});case 4:return n=e.sent,e.next=7,n.json();case 7:"ok"===(s=e.sent).status?(alert("Signup Successfull !! \n Login With your Username and password"),j.push("/signin")):alert("Error ".concat(s.message)),r(""),l(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert("Error ".concat(e.t0));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}return Object(O.jsx)("div",{className:"container signupPage",children:Object(O.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card-header login",children:["Sign Up ",Object(O.jsx)("i",{className:"bi bi-person-plus-fill"})]}),Object(O.jsxs)("div",{className:"list-group list-group-flush",children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsxs)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:["Enter your Username ",Object(O.jsx)("span",{className:"star",children:"*"})]}),Object(O.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return r(e.target.value)},value:a,name:"username",id:"signupUsername",placeholder:"Enter your username",required:!0})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsxs)("label",{htmlFor:"password",className:"form-label",children:["Enter your Password ",Object(O.jsx)("span",{className:"star",children:"*"})]}),Object(O.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return l(e.target.value)},value:i,name:"password",id:"signupPassword",placeholder:"Your Passwords are hashed !!",required:!0})]})]})]}),Object(O.jsxs)("div",{id:"btn",children:[Object(O.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:" Signup "}),Object(O.jsxs)("p",{children:["Already Signed Up ? ",Object(O.jsx)(A.b,{to:"/signin",children:"SignIn"})," "]})]})]})})}function D(e){var t=e.handleAuthentication,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],c=r[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),j=l[0],b=l[1],h=Object(E.g)();function p(){return(p=Object(d.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,fetch("https://crypto-dashboard-api-server.herokuapp.com/signin",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:s,password:j})});case 4:return n=e.sent,e.next=7,n.json();case 7:"ok"===(r=e.sent).status?(localStorage.setItem("token",r.token),alert("Login successfull"),t(),h.push("/")):alert("Error ".concat(r.message)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert("Error ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(O.jsx)("div",{className:"container signupPage",children:Object(O.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card-header login",children:["Sign In ",Object(O.jsx)("i",{className:"bi bi-box-arrow-right"})]}),Object(O.jsxs)("div",{className:"list-group list-group-flush",children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsxs)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:["Enter your Username ",Object(O.jsx)("span",{className:"star",children:"*"})]}),Object(O.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return c(e.target.value)},value:s,name:"username",id:"signinUsername",placeholder:"Enter your username",required:!0})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsxs)("label",{htmlFor:"password",className:"form-label",children:["Enter your Password ",Object(O.jsx)("span",{className:"star",children:"*"})]}),Object(O.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return b(e.target.value)},value:j,name:"password",id:"signinPassword",placeholder:"Your Passwords are hashed !!",required:!0})]})]})]}),Object(O.jsxs)("div",{id:"btn",children:[Object(O.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:" SignIn "}),Object(O.jsxs)("p",{children:["Not  Signed Up ? ",Object(O.jsx)(A.b,{to:"/signup",children:"SignUp"})," "]})]})]})})}var k=a(146),w=a.n(k);function I(e){var t=e.handleSearchAgain,a=Object(n.useState)([]),r=Object(o.a)(a,2),s=r[0],c=r[1],i=Object(n.useState)(!0),l=Object(o.a)(i,2),j=l[0],b=l[1];function h(){return(h=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://crypto-dashboard-api-server.herokuapp.com/getHistory",{method:"GET",headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.json();case 6:"ok"===(a=e.sent).status?c(a.history):alert("Error ".concat(a.message)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Error : ".concat(e.t0));case 13:b(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:"container",children:[j?Object(O.jsx)("h4",{className:"historyTitle",children:"Loading.."}):Object(O.jsxs)("h4",{className:"historyTitle",children:["Search History  [Total result(s)- ",s.length,"]"]}),s.map((function(e,a){return Object(O.jsxs)("div",{className:"card border-primary historyCard",children:[Object(O.jsxs)("div",{className:"card-header",children:["Time and date - ",e.date]}),Object(O.jsxs)("div",{className:"card-body text-primary historyCardBody",children:[Object(O.jsx)("h5",{className:"card-title ",children:"All Currencies Selected"}),Object(O.jsx)("p",{className:"card-text",children:Object(O.jsx)("div",{className:"currency",children:e.currency.map((function(e,t){return Object(O.jsx)("p",{className:"historyFilter",children:e},t)}))})}),Object(O.jsx)("div",{className:"historyButton",children:Object(O.jsxs)(A.b,{to:"/",onClick:function(){return t(s,a)},className:"btn btn-outline-primary ",children:[Object(O.jsx)("i",{class:"bi bi-search"})," Search again"]})})]})]},a)})),Object(O.jsx)("div",{className:"dummy"})]})}var L=a(53),R=["component","isAuthenticated"];function B(e){var t=e.component,a=e.isAuthenticated,n=Object(L.a)(e,R),r=t;return Object(O.jsx)(E.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return a?Object(O.jsx)(r,Object(i.a)(Object(i.a)({},e),n)):a?void 0:Object(O.jsx)(E.a,{to:{path:"/"}})}}))}var M=function(){var e=Object(E.g)(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)([]),l=Object(o.a)(c,2),u=l[0],j=l[1];return Object(n.useEffect)((function(){var t=localStorage.getItem("token");t&&(w.a.decode(t)?s(!0):(localStorage.removeItem("token"),e.push("/signin")))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{isAuthenticated:r,handleLogout:function(){localStorage.removeItem("token"),s(!1)}}),Object(O.jsxs)(E.d,{children:[Object(O.jsx)(E.b,{exact:!0,path:"/",render:function(e){return Object(O.jsx)(C,Object(i.a)({historyFilters:u,toggleHistory:b,isAuthenticated:r},e))}}),Object(O.jsx)(E.b,{exact:!0,path:"/signup",component:U}),Object(O.jsx)(E.b,{exact:!0,path:"/signin",render:function(e){return Object(O.jsx)(D,Object(i.a)({handleAuthentication:d},e))}}),Object(O.jsx)(B,{path:"/history",handleSearchAgain:function(e,t){j(e[t].currency)},isAuthenticated:r,component:I})]})]});function d(){s(!0)}function b(){j([])}};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(A.a,{children:Object(O.jsx)(M,{})})}),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.660d28f9.chunk.js.map