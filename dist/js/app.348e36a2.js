(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"010c":function(e,t,n){},"0759":function(e,t,n){},"140f":function(e,t,n){},"16c3":function(e,t,n){"use strict";var r=n("140f"),s=n.n(r);s.a},1730:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:e.task.completed?"bg-green-1":"bg-white-1",attrs:{clickable:""},on:{click:e.updateTask}},[n("q-item-section",{attrs:{side:"",top:""}},[n("q-checkbox",{attrs:{color:"primary"},model:{value:e.task.completed,callback:function(t){e.$set(e.task,"completed",t)},expression:"task.completed"}})],1),n("q-item-section",[n("q-item-label",{class:{"text-strikethrough":e.task.completed}},[e._v("\n          "+e._s(e.task.name)+" "+e._s(e.id)+"\n          ")])],1),e.task.completed?n("q-item-section",{attrs:{side:""}},[n("q-btn",{attrs:{flat:"",round:"",dense:"",color:"primary",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteTask(e.index)}}})],1):e._e(),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"row"},[n("div",{staticClass:"column justify-center"},[n("q-icon",{staticClass:"q-mr-xs",attrs:{name:"event",size:"18px"}})],1),n("div",{staticClass:"column"},[n("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[e._v(e._s(e.task.dueDate))]),n("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[n("small",[e._v(e._s(e.task.studyTime))])])],1)])])],1)},s=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={props:["task","id"],methods:c({},Object(o["b"])(["updateTask"]))},u=l,p=n("2877"),d=Object(p["a"])(u,r,s,!1,null,null,null);t["default"]=d.exports},"4f61":function(e,t,n){"use strict";var r=n("0759"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view",{staticClass:"route"}),n("NavBar")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-toolbar",{ref:"navToolbar",staticClass:"text-white",class:e.computeClasses},[n("q-tabs",{ref:"navTabs",staticClass:"text-white full-width full-height",class:e.computeBackground,attrs:{"inline-label":!e.$q.screen.sm},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.pages,(function(e){return n("q-route-tab",{key:e.name,attrs:{name:e.name,icon:e.icon,label:e.name,to:e.route,disable:e.disable}})})),1)],1)},i=[],c={data:function(){return{pages:[{route:"/calendar",name:"Calendar",icon:"calendar_today",disable:!1},{route:"/",name:"Grades",icon:"spellcheck",disable:!1},{route:"/profile",name:"Profile",icon:"account_circle",disable:!1}],tab:null}},computed:{computeClasses:function(){return this.$q.screen.md||this.$q.screen.sm?{"nav-mobile":!0,"bg-secondary":!0}:{"nav-desktop":!0,"bg-primary":!0}},computeBackground:function(){return this.$q.screen.md||this.$q.screen.sm?{"bg-secondary":!0}:{"bg-primary":!0}},spacerHeight:function(){return(this.$q.screen.md||this.$q.screen.sm)&&this.$refs.navToolbar?{"padding-bottom":getComputedStyle(this.$refs.navToolbar.$el).height}:{"padding-bottom":"0px"}}},methods:{t:function(e){console.log(e)}},mounted:function(){this.$q.screen.setSizes({sm:300,md:600,lg:1e3,xl:2e3})}},l=c,u=(n("4f61"),n("2877")),p=Object(u["a"])(l,o,i,!1,null,"fdb2f96e",null),d=p.exports,g={components:{NavBar:d}},f=g,h=(n("5c0b"),Object(u["a"])(f,s,a,!1,null,null,null)),m=h.exports,v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.dim},[n("q-toolbar",{staticClass:"toolbar bg-secondary text-white"},[n("q-btn",{attrs:{flat:"",round:"",dense:""}},[n("q-icon",{attrs:{name:"r_menu"}})],1),n("q-toolbar-title",[e._v("Calendar")]),n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"search"}})],1),n("CalendarWeek",{attrs:{date:new Date}}),n("LoginHandle",{on:{loggedIn:e.fetchData}})],1)},w=[],_=(n("28a5"),n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("96cf"),n("3b8d")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calWeek"},e._l(e.dates,(function(e){return n("CalendarDay",{key:e.toString(),staticClass:"cDay",attrs:{date:e}})})),1)},x=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dayContents"},[n("div",{staticClass:"day"},[e._v(e._s(e.month)+" "+e._s(e.day))]),e._l(e.tasks,(function(e){return n("q-expansion-item",{key:e.name,attrs:{"expand-separator":"",label:e.name}},[n("q-card",[n("q-card-section")],1)],1)}))],2)},q=[],C={data:function(){return{tasks:[{name:"Study for Calc",howLong:"20 Minutes",testDay:"Assingment on 4th"},{name:"Study for Chem",howLong:"15 Minutes",testDay:"Assingment on 6th"},{name:"Study for Biology",howLong:"15 Minutes",testDay:"Assingment on 5th"}]}},props:["date"],computed:{day:function(){return this.date.getDate()},month:function(){return this.date.toLocaleString("default",{month:"short"})}},methods:{}},j=C,S=(n("f250"),Object(u["a"])(j,k,q,!1,null,"15d51e3c",null)),D=S.exports,O={props:["date"],computed:{dates:function(){for(var e=[],t=0;t<7;t++)e.push(new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+t));return e}},components:{CalendarDay:D}},I=O,T=(n("ab1e"),Object(u["a"])(I,y,x,!1,null,"65dfc19a",null)),$=T.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loginHandle"},[r("q-dialog",{attrs:{seamless:""},on:{show:e.dialogOpen},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.authLoaded?r("q-card",[r("q-card-section",{staticClass:"row items-center"},[r("div",{attrs:{id:"gSignInWrapper"},on:{click:e.handleLogin}},[r("img",{staticClass:"signInImage",attrs:{src:n("8305")}})])])],1):e._e()],1)],1)},L=[],E=(n("4917"),n("7618")),A=(n("a481"),n("55dd"),window.gapi=window.gapi||{});A._bs=(new Date).getTime(),function(){var e=function(){this.g=""};e.prototype.toString=function(){return"SafeScript{"+this.g+"}"},e.prototype.a=function(e){this.g=e},(new e).a("");var t=function(){this.j=""};t.prototype.toString=function(){return"SafeStyle{"+this.j+"}"},t.prototype.a=function(e){this.j=e},(new t).a("");var n=function(){this.i=""};n.prototype.toString=function(){return"SafeStyleSheet{"+this.i+"}"},n.prototype.a=function(e){this.i=e},(new n).a("");var r=function(){this.f=""};r.prototype.toString=function(){return"SafeHtml{"+this.f+"}"},r.prototype.a=function(e){this.f=e},(new r).a("<!DOCTYPE html>"),(new r).a(""),(new r).a("<br>");var s,a=window,o=document,i=a.location,c=function(){},l=/\[native code\]/,u=function(e,t,n){return e[t]=e[t]||n},p=function(e){e=e.sort();for(var t=[],n=void 0,r=0;r<e.length;r++){var s=e[r];s!=n&&t.push(s),n=s}return t},d=function(){var e;if((e=Object.create)&&l.test(e))e=e(null);else for(var t in e={},e)e[t]=void 0;return e},g=u(a,"gapi",{});s=u(a,"___jsl",d()),u(s,"I",0),u(s,"hel",10);var f=function(){var e=i.href;if(s.dpo)var t=s.h;else{t=s.h;var n=/([#].*&|[#])jsh=([^&#]*)/g,r=/([?#].*&|[?#])jsh=([^&#]*)/g;if(e=e&&(n.exec(e)||r.exec(e)))try{t=decodeURIComponent(e[2])}catch(a){}}return t},h=function(e){var t=u(s,"PQ",[]);s.PQ=[];var n=t.length;if(0===n)e();else for(var r=0,a=function(){++r===n&&e()},o=0;o<n;o++)t[o](a)},m=function(e){return u(u(s,"H",d()),e,d())},v=u(s,"perf",d()),b=u(v,"g",d()),w=u(v,"i",d());u(v,"r",[]),d(),d();var _=function(e,t,n){var r=v.r;"function"===typeof r?r(e,t,n):r.push([e,t,n])},y=function(e,t,n){t&&0<t.length&&(t=x(t),n&&0<n.length&&(t+="___"+x(n)),28<t.length&&(t=t.substr(0,28)+(t.length-28)),n=t,t=u(w,"_p",d()),u(t,n,d())[e]=(new Date).getTime(),_(e,"_p",n))},x=function(e){return e.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")},k=d(),q=[],C=function(e){throw Error("Bad hint"+(e?": "+e:""))};q.push(["jsl",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=e[t];"object"==Object(E["a"])(n)?s[t]=u(s,t,[]).concat(n):u(s,t,n)}(t=e.u)&&(e=u(s,"us",[]),e.push(t),(t=/^https:(.*)$/.exec(t))&&e.push("http:"+t[1]))}]);var j=/^(\/[a-zA-Z0-9_\-]+)+$/,S=[/\/amp\//,/\/amp$/,/^\/amp$/],D=/^[a-zA-Z0-9\-_\.,!]+$/,O=/^gapi\.loaded_[0-9]+$/,I=/^[a-zA-Z0-9,._-]+$/,T=function(e,t,n,r){var s=e.split(";"),a=s.shift(),o=k[a],i=null;return o?i=o(s,t,n,r):C("no hint processor for: "+a),i||C("failed to generate load url"),t=i,n=t.match(W),(r=t.match(U))&&1===r.length&&z.test(t)&&n&&1===n.length||C("failed sanity: "+e),i},$=function(e,t,n,r){e=P(e),O.test(n)||C("invalid_callback"),t=L(t),r=r&&r.length?L(r):null;var s=function(e){return encodeURIComponent(e).replace(/%2C/g,",")};return[encodeURIComponent(e.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",s(e.version),"/m=",s(t),r?"/exm="+s(r):"","/rt=j/sv=1/d=1/ed=1",e.b?"/am="+s(e.b):"",e.l?"/rs="+s(e.l):"",e.o?"/t="+s(e.o):"","/cb=",s(n)].join("")},P=function(e){"/"!==e.charAt(0)&&C("relative path");for(var t=e.substring(1).split("/"),n=[];t.length;){if(e=t.shift(),e.length&&0!=e.indexOf(".")){if(0<e.indexOf("=")){t.unshift(e);break}}else C("empty/relative directory");n.push(e)}e={};for(var r=0,s=t.length;r<s;++r){var a=t[r].split("="),o=decodeURIComponent(a[0]),i=decodeURIComponent(a[1]);2==a.length&&o&&i&&(e[o]=e[o]||i)}for(t="/"+n.join("/"),j.test(t)||C("invalid_prefix"),n=0,r=S.length;n<r;++n)S[n].test(t)&&C("invalid_prefix");return n=A(e,"k",!0),r=A(e,"am"),s=A(e,"rs"),e=A(e,"t"),{pathPrefix:t,version:n,b:r,l:s,o:e}},L=function(e){for(var t=[],n=0,r=e.length;n<r;++n){var s=e[n].replace(/\./g,"_").replace(/-/g,"_");I.test(s)&&t.push(s)}return t.join(",")},A=function(e,t,n){if(e=e[t],!e&&n&&C("missing: "+t),e){if(D.test(e))return e;C("invalid: "+t)}return null},z=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,U=/\/cb=/g,W=/\/\//g,F=function(){var e=f();if(!e)throw Error("Bad hint");return e};k.m=function(e,t,n,r){return(e=e[0])||C("missing_hint"),"https://apis.google.com"+$(e,t,n,r)};var B=decodeURI("%73cript"),R=/^[-+_0-9\/A-Za-z]+={0,2}$/,M=function(e,t){for(var n=[],r=0;r<e.length;++r){var s,a=e[r];if(s=a){e:{for(s=0;s<t.length;s++)if(t[s]===a)break e;s=-1}s=0>s}s&&n.push(a)}return n},G=function(){var e=s.nonce;return void 0!==e?e&&e===String(e)&&e.match(R)?e:s.nonce=null:o.querySelector&&(e=o.querySelector("script[nonce]"))?(e=e.nonce||e.getAttribute("nonce")||"",e&&e===String(e)&&e.match(R)?s.nonce=e:s.nonce=null):null},Y=function(e){if("loading"!=o.readyState)Z(e);else{var t=G(),n="";null!==t&&(n=' nonce="'+t+'"'),e="<"+B+' src="'+encodeURI(e)+'"'+n+"></"+B+">",o.write(e)}},Z=function(e){var t=o.createElement(B);t.setAttribute("src",e),e=G(),null!==e&&t.setAttribute("nonce",e),t.async="true",(e=o.getElementsByTagName(B)[0])?e.parentNode.insertBefore(t,e):(o.head||o.body||o.documentElement).appendChild(t)},H=function(e,t){var n=t&&t._c;if(n)for(var r=0;r<q.length;r++){var s=q[r][0],a=q[r][1];a&&Object.prototype.hasOwnProperty.call(n,s)&&a(n[s],e,t)}},N=function(e,t,n){X((function(){var n=t===f()?u(g,"_",d()):d();n=u(m(t),"_",n),e(n)}),n)},V=function(e,t){var n=t||{};"function"==typeof t&&(n={},n.callback=t),H(e,n),t=e?e.split(":"):[];var r=n.h||F(),a=u(s,"ah",d());if(a["::"]&&t.length){e=[];for(var o=null;o=t.shift();){var i=o.split(".");i=a[o]||a[i[1]&&"ns:"+i[0]||""]||r;var c=e.length&&e[e.length-1]||null,l=c;c&&c.hint==i||(l={hint:i,c:[]},e.push(l)),l.c.push(o)}var p=e.length;if(1<p){var g=n.callback;g&&(n.callback=function(){0==--p&&g()})}for(;t=e.shift();)Q(t.c,n,t.hint)}else Q(t||[],n,r)},Q=function(e,t,n){e=p(e)||[];var r=t.callback,o=t.config,i=t.timeout,l=t.ontimeout,d=t.onerror,f=void 0;"function"==typeof d&&(f=d);var v=null,b=!1;if(i&&!l||!i&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";d=u(m(n),"r",[]).sort();var w=u(m(n),"L",[]).sort(),_=[].concat(d),x=function(e,t){if(b)return 0;a.clearTimeout(v),w.push.apply(w,k);var r=((g||{}).config||{}).update;if(r?r(o):o&&u(s,"cu",[]).push(o),t){y("me0",e,_);try{N(t,n,f)}finally{y("me1",e,_)}}return 1};0<i&&(v=a.setTimeout((function(){b=!0,l()}),i));var k=M(e,w);if(k.length){k=M(e,d);var q=u(s,"CP",[]),C=q.length;if(q[C]=function(e){if(!e)return 0;y("ml1",k,_);var t=function(t){q[C]=null,x(k,e)&&h((function(){r&&r(),t()}))},n=function(){var e=q[C+1];e&&e()};0<C&&q[C-1]?q[C]=function(){t(n)}:t(n)},k.length){var j="loaded_"+s.I++;g[j]=function(e){q[C](e),g[j]=null},e=T(n,k,"gapi."+j,d),d.push.apply(d,k),y("ml0",k,_),t.sync||a.___gapisync?Y(e):Z(e)}else q[C](c)}else x(k)&&r&&r()},X=function(e,t){if(s.hee&&0<s.hel)try{return e()}catch(n){t&&t(n),s.hel--,V("debug_error",(function(){try{window.___jsl.hefn(n)}catch(e){throw n}}))}else try{return e()}catch(n){throw t&&t(n),n}};g.load=function(e,t){return X((function(){return V(e,t)}))},b.bs0=window.gapi._bs||(new Date).getTime(),_("bs0"),b.bs1=(new Date).getTime(),_("bs1"),delete window.gapi._bs}.call(void 0),A.load("",{callback:window["gapi_onload"],_c:{jsl:{ci:{deviceType:"desktop","oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",disableOpt:!0,idpIframeUrl:"https://accounts.google.com/o/oauth2/iframe",usegapi:!1},debug:{reportExceptionRate:.05,forceIm:!1,rethrowException:!1,host:"https://apis.google.com"},enableMultilogin:!0,"googleapis.config":{auth:{useFirstPartyAuthV2:!0}},isPlusUser:!1,inline:{css:1},disableRealtimeCallback:!1,drive_share:{skipInitCommand:!0},csi:{rate:.01},client:{cors:!1},isLoggedIn:!0,signInDeprecation:{rate:0},include_granted_scopes:!0,llang:"en",iframes:{youtube:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",methods:["scroll","openwindow"]},ytsubscribe:{url:"https://www.youtube.com/subscribe_embed?usegapi=1"},plus_circle:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"},plus_share:{params:{url:""},url:":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"},rbr_s:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},":source:":"3p",playemm:{url:"https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"},savetoandroidpay:{url:"https://pay.google.com/gp/v/widget/save"},blogger:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",methods:["scroll","openwindow"]},evwidget:{params:{url:""},url:":socialhost:/:session_prefix:_/events/widget?usegapi=1"},partnersbadge:{url:"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"},dataconnector:{url:"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"},surveyoptin:{url:"https://www.google.com/shopping/customerreviews/optin?usegapi=1"},":socialhost:":"https://apis.google.com",shortlists:{url:""},hangout:{url:"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},plus_followers:{params:{url:""},url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},post:{params:{url:""},url:":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"},":gplus_url:":"https://plus.google.com",signin:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",methods:["onauth"]},rbr_i:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},donation:{url:"https://onetoday.google.com/home/donationWidget?usegapi=1"},share:{url:":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"},plusone:{params:{count:"",size:"",url:""},url:":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"},comments:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",methods:["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com",backdrop:{url:"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"},visibility:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"},autocomplete:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/autocomplete"},additnow:{url:"https://apis.google.com/marketplace/button?usegapi=1",methods:["launchurl"]},":signuphost:":"https://plus.google.com",ratingbadge:{url:"https://www.google.com/shopping/customerreviews/badge?usegapi=1"},appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},sharetoclassroom:{url:"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi=1"},ytshare:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"},plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},family_creation:{params:{url:""},url:"https://families.google.com/webcreation?usegapi=1&usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},zoomableimage:{url:"https://ssl.gstatic.com/microscope/embed/"},appfinder:{url:"https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},savetowallet:{url:"https://pay.google.com/gp/v/widget/save"},person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},savetodrive:{url:"https://drive.google.com/savetodrivebutton?usegapi=1",methods:["save"]},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},card:{url:":socialhost:/:session_prefix:_/hovercard/card"}}},h:"m;/_/scs/apps-static/_/js/k=oz.gapi.en.7kWSr24wXFc.O/am=wQE/d=1/ct=zgms/rs=AGLTcCN-4ZptW5UzimRFZRBm6izu5h2ZaQ/m=__features__",u:"https://apis.google.com/js/api.js",hee:!0,fp:"099e179eeab1be8c339ac2c410efb4ef6f9b33b7",dpo:!1},fp:"099e179eeab1be8c339ac2c410efb4ef6f9b33b7",annotation:["interactivepost","recobar","signin2","autocomplete","profile"],bimodal:["signin","share"]}});var z={data:function(){return{dialog:!0,maximizedToggle:!0,authLoaded:!1}},methods:{onSuccess:function(e){if(e){var t=gapi.auth2.getAuthInstance();this.dialog=!1,this.$store.commit("googleLogin",t),this.$emit("loggedIn")}},onFailure:function(e){this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error Logging In"}),console.log(e)},dialogOpen:function(){var e=this;gapi.load("client:auth2",(function(){gapi.client.init({apiKey:"AIzaSyDXtlY0qIL3pYu8P3zTMxB3Zf5W3XAP9sg",clientId:"356679115182-60a1e40t5i2neo5l2472l0sbtre8ju9v.apps.googleusercontent.com",discoveryDocs:["https://classroom.googleapis.com/$discovery/rest?version=v1"],scope:"https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.announcements.readonly https://www.googleapis.com/auth/classroom.coursework.me"}).then((function(){e.authLoaded=!0,gapi.auth2.getAuthInstance().isSignedIn.get()&&e.onSuccess(!0),gapi.auth2.getAuthInstance().isSignedIn.listen((function(t){return e.onSuccess(t)}))}))}))},handleLogin:function(){gapi.auth2.getAuthInstance().signIn()}},name:"LoginHandle"},U=z,W=(n("dfbe"),Object(u["a"])(U,P,L,!1,null,"5c2330ca",null)),F=W.exports,B={components:{CalendarWeek:$,LoginHandle:F},data:function(){return{assignments:{},courses:[]}},computed:{dim:function(){return{dimmed:!this.$store.getters.googleUser}}},methods:{fetchData:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,a,o,i,c,l,u,p,d,g,f,h,m,v,b,w,_,y,x,k,q,C,j,S,D,O,I,T,$,P,L,E,A,z,U,W,F,B;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.classroom.courses.list({courseStates:"ACTIVE"});case 2:for(t=e.sent,this.courses=t.result.courses,n=[],r=[],s=!0,a=!1,o=void 0,e.prev=9,i=t.result.courses[Symbol.iterator]();!(s=(c=i.next()).done);s=!0)l=c.value,n.push(gapi.client.classroom.courses.announcements.list({courseId:l.id,pageSize:10})),r.push(gapi.client.classroom.courses.courseWork.list({courseId:l.id}));e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](9),a=!0,o=e.t0;case 17:e.prev=17,e.prev=18,s||null==i.return||i.return();case 20:if(e.prev=20,!a){e.next=23;break}throw o;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return e.next=27,Promise.all(n);case 27:return e.t1=function(e){return e.result.announcements},u=e.sent.flatMap(e.t1),e.next=31,Promise.all(r);case 31:e.t2=function(e){return e.result.courseWork},p=e.sent.flatMap(e.t2),d=!0,g=!1,f=void 0,e.prev=36,h=u[Symbol.iterator]();case 38:if(d=(m=h.next()).done){e.next=89;break}if(v=m.value,v){e.next=42;break}return e.abrupt("continue",86);case 42:for(b=v.text.split("\n"),w=[],_=!0,y=!1,x=void 0,e.prev=47,k=b[Symbol.iterator]();!(_=(q=k.next()).done);_=!0)C=q.value,j=/([0-9]*)(\/)([0-9]*)/g.exec(C),j&&j[1]<12&&j[3]<33&&w.push({date:j[0],text:C});e.next=55;break;case 51:e.prev=51,e.t3=e["catch"](47),y=!0,x=e.t3;case 55:e.prev=55,e.prev=56,_||null==k.return||k.return();case 58:if(e.prev=58,!y){e.next=61;break}throw x;case 61:return e.finish(58);case 62:return e.finish(55);case 63:if(!(w.length>1)){e.next=85;break}for(S=!0,D=!1,O=void 0,e.prev=67,I=w[Symbol.iterator]();!(S=(T=I.next()).done);S=!0)$=T.value,P=Date.parse("".concat($.date,"/").concat((new Date).getFullYear())),Date.parse(v.updateTime)>P&&(P=Date.parse("".concat($.date,"/").concat((new Date).getFullYear()+1))),this.assignments[P]||(this.assignments[P]=[]),this.assignments[P].push({work:$,announce:v});e.next=75;break;case 71:e.prev=71,e.t4=e["catch"](67),D=!0,O=e.t4;case 75:e.prev=75,e.prev=76,S||null==I.return||I.return();case 78:if(e.prev=78,!D){e.next=81;break}throw O;case 81:return e.finish(78);case 82:return e.finish(75);case 83:e.next=86;break;case 85:1==w.length&&(L=Date.parse("".concat(w[0].date,"/").concat((new Date).getFullYear())),Date.parse(v.updateTime)>L&&(L=Date.parse("".concat(w[0].date,"/").concat((new Date).getFullYear()+1))),this.assignments[L]||(this.assignments[L]=[]),this.assignments[L].push({work:v.text,announce:v}));case 86:d=!0,e.next=38;break;case 89:e.next=95;break;case 91:e.prev=91,e.t5=e["catch"](36),g=!0,f=e.t5;case 95:e.prev=95,e.prev=96,d||null==h.return||h.return();case 98:if(e.prev=98,!g){e.next=101;break}throw f;case 101:return e.finish(98);case 102:return e.finish(95);case 103:E=!0,A=!1,z=void 0,e.prev=106,U=p[Symbol.iterator]();case 108:if(E=(W=U.next()).done){e.next=118;break}if(F=W.value,F&&F.dueDate){e.next=112;break}return e.abrupt("continue",115);case 112:B=new Date(F.dueDate.year,F.dueDate.month-1,F.dueDate.day-1).getTime(),this.assignments[B]||(this.assignments[B]=[]),this.assignments[B].push({work:F.title,courseWork:F});case 115:E=!0,e.next=108;break;case 118:e.next=124;break;case 120:e.prev=120,e.t6=e["catch"](106),A=!0,z=e.t6;case 124:e.prev=124,e.prev=125,E||null==U.return||U.return();case 127:if(e.prev=127,!A){e.next=130;break}throw z;case 130:return e.finish(127);case 131:return e.finish(124);case 132:console.log(this.assignments);case 133:case"end":return e.stop()}}),e,this,[[9,13,17,25],[18,,20,24],[36,91,95,103],[47,51,55,63],[56,,58,62],[67,71,75,83],[76,,78,82],[96,,98,102],[106,120,124,132],[125,,127,131]])})));function t(){return e.apply(this,arguments)}return t}()}},R=B,M=(n("16c3"),Object(u["a"])(R,b,w,!1,null,"23bc0fbd",null)),G=M.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{dimmed:e.notLoggedIn}},[n("q-toolbar",{staticClass:"toolbar bg-primary text-white"},[n("q-btn",{attrs:{flat:"",round:"",dense:"",to:"/"}},[e.inCV?e._e():n("q-icon",{attrs:{name:"r_menu"}}),e.inCV?n("q-icon",{attrs:{name:"r_arrow_back"}}):e._e()],1),n("q-toolbar-title",[e._v("Grades")]),""!=e.gpaW&&""!=e.gpa?n("div",[n("q-chip",{attrs:{color:"accent","text-color":"white"}},[e._v("GPAW: "+e._s(e.gpaW))]),n("q-chip",{attrs:{color:"accent","text-color":"white"}},[e._v("GPAU: "+e._s(e.gpa))])],1):e._e()],1),e.inCV?e._e():n("div",{staticClass:"scroll"},[n("q-pull-to-refresh",{on:{refresh:e.refresh}},[n("q-list",{attrs:{bordered:"",separator:""}},e._l(e.courses,(function(t){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.name,staticClass:"courseItem",attrs:{clickable:"",to:"/"+t.id}},[n("q-item-section",[e._v(e._s(t.name))]),n("q-item-section",{attrs:{side:""}},[n("q-item-label",{attrs:{caption:""}},[n("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[n("q-avatar",{attrs:{size:"md",rounded:"",color:"accent","text-color":"white"}},[e._v(e._s(t.grade))])],1),n("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[e._v(e._s((100*+t.percentage).toFixed(0)+"%"))])],1)],1)],1)})),1)],1)],1),e.inCV?n("div",{staticClass:"scroll"},[n("q-pull-to-refresh",{on:{refresh:e.refresh}},[n("q-list",{attrs:{bordered:"",separator:""}},e._l(e.assignmentList,(function(t){return n("q-item",{key:t.name,staticClass:"courseItem",attrs:{clickable:""}},[n("q-item-section",[t.grade?n("q-avatar",{attrs:{size:"md",rounded:"",color:"primary","text-color":"white"}},[e._v(e._s(t.grade))]):e._e(),e._v("\n            "+e._s(t.name)+"\n          ")],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"column"},[n("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[t.grade?n("q-chip",{attrs:{dense:"",color:"accent","text-color":"white"}},[e._v(e._s(e.formatScore(t)))]):e._e()],1),n("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[e._v(e._s((100*+t.percentage).toFixed(1)+"%"))])],1)])],1)})),1)],1)],1):e._e(),n("q-dialog",{attrs:{seamless:""},model:{value:e.notLoggedIn,callback:function(t){e.notLoggedIn=t},expression:"notLoggedIn"}},[n("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Powerschool Login")])]),n("q-card-section",[n("div",[n("q-form",{staticClass:"q-gutter-md",on:{submit:e.signIn}},[n("q-input",{attrs:{filled:"",label:"Username",value:e.placeholder,hint:"Enter Your Powerschool Username","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Powerschool Username"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("q-input",{attrs:{filled:"",label:"Password",type:"password","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Powerschool Password"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("div",[n("q-btn",{attrs:{label:"Sign In",type:"submit",color:"primary"}})],1)],1)],1)]),e.fetching?n("q-spinner",{staticClass:"fixed-center",attrs:{color:"primary",size:"5%",thickness:10}}):e._e()],1)],1)],1)},Z=[],H=n("bd86"),N=(n("7f7f"),n("f559"),n("7514"),Object(H["a"])({data:function(){return{courses:[],terms:[],fetchedGrades:!1,notLoggedIn:!0,fetching:!1,username:"",password:"",gpaW:"",gpa:"",placeholder:""}},computed:{inCV:function(){return!!this.$route.params.id},assignmentList:function(){var e=this;if(0==this.courses.length)return[];var t=this.courses.find((function(t){return t.id==e.$route.params.id}));return t.assignments.sort((function(e,t){return new Date(t.dueDate).getTime()-new Date(e.dueDate).getTime()}))}},beforeMount:function(){var e=this.$store.getters.getLogin;this.password=e.password,this.username=e.username,this.password.length>0&&this.username.length>0&&(this.notLoggedIn=!1,this.courses=this.$store.getters.courseCache,this.gpaCalc(),this.fetchedGrades=!0)},methods:{fetchGrades:function(e,t,n){var r=this;"www.groundwrk.app"==window.location.hostname&&window.location.origin,this.fetching=!0,fetch("https://www.groundwrk.app".concat("/api/grades"),{method:"GET",headers:{username:e,password:t,url:"https://powerschool.er9.org/"}}).then((function(e){r.fetching=!1,(""+e.status).startsWith("40")?r.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Error Logging In"}):e.json().then((function(e){console.log(e),r.courses=e.courses.sort((function(e,t){return+e.expression[0]-+t.expression[0]})),r.terms=e.terms,r.fetchedGrades=!0,r.notLoggedIn=!1,r.gpaCalc(),r.$store.commit("cacheCourses",r.courses),n&&n()}))})).catch(console.error)},signIn:function(){localStorage.setItem("username",this.username),this.$store.commit("login",{username:this.username,password:this.password}),this.fetchGrades(this.username,this.password)},onRight:function(e){var t=e.reset;t()},refresh:function(e){this.fetchGrades(this.username,this.password,e)},formatScore:function(e){return"".concat((+e.score).toFixed(1)," / ").concat((+e.score/+e.percentage).toFixed(1))},gpaCalc:function(){var e=[[.93,4,5],[.9,3.7,4.7],[.87,3.3,4.3],[.83,3,4],[.8,2.7,3.7],[.77,2.3,2.3],[.73,2,2],[.7,1.7,1.7],[.67,1.3,1.3],[.63,1,1],[.6,.7,.7],[-1,0,0]],t=0,n=0,r=!0,s=!1,a=void 0;try{for(var o,i=this.courses[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var c=o.value,l=!0,u=!1,p=void 0;try{for(var d,g=e[Symbol.iterator]();!(l=(d=g.next()).done);l=!0){var f=d.value;if(f[0]<=+c.percentage){c.name.toLowerCase().startsWith("ap ")||c.name.toLowerCase().startsWith("honors ")||c.name.toLowerCase().startsWith("h ")?t+=f[2]:t+=f[1],n+=f[1],console.log(f[0],c.percentage,f[1],f[2]);break}}}catch(h){u=!0,p=h}finally{try{l||null==g.return||g.return()}finally{if(u)throw p}}}}catch(h){s=!0,a=h}finally{try{r||null==i.return||i.return()}finally{if(s)throw a}}this.gpaW=(t/this.courses.length).toFixed(2),this.gpa=(n/this.courses.length).toFixed(2)}}},"beforeMount",(function(){var e=localStorage.getItem("username");this.username=e}))),V=N,Q=(n("6554"),Object(u["a"])(V,Y,Z,!1,null,"515b26a4",null)),X=Q.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-toolbar",{staticClass:"toolbar bg-secondary text-white"},[n("q-btn",{attrs:{flat:"",round:"",dense:""}},[n("q-icon",{attrs:{name:"r_menu"}})],1),n("q-toolbar-title",[e._v("Profile")])],1),n("div",{staticClass:"rpw q-pa-sm bg-primary"},[n("q-input",{staticClass:"col",attrs:{color:"blue",filled:"","bg-color":"white",placeholder:"Add Task",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addTask}})]},proxy:!0}]),model:{value:e.newTask,callback:function(t){e.newTask=t},expression:"newTask"}},[n("q-input",{attrs:{filled:""},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),n("q-list",{attrs:{separator:"",bordered:""}},e._l(e.tasks,(function(e,t){return n("task",{key:t,attrs:{task:e,id:t}})})),1)],1)},K=[],ee={data:function(){return{date:""}},computed:{tasks:function(){return this.$store.getters.tasks}},components:{task:n("1730").default},methods:{addTask:function(){""!=this.newTask.replace(/\s/gm,"")&&(this.tasks.push({name:this.newTask,completed:!1}),this.newTask="")},deleteTask:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Delete? There is no going back.",cancel:!0,persistent:!0}).onOk((function(){t.tasks.splice(e,1),t.$q.notify({message:"Task Deleted",textColor:"white",timeout:750,icon:"delete_forever"})}))}}},te=ee,ne=Object(u["a"])(te,J,K,!1,null,null,null),re=ne.exports;r["a"].use(v["a"]);var se=new v["a"]({mode:"history",routes:[{path:"/profile",name:"profile",component:re},{path:"/calendar",name:"calendar",component:G},{path:"/:id?",name:"grades",component:X}]}),ae=n("2f62");r["a"].use(ae["a"]);var oe=new ae["a"].Store({namespaced:!0,state:{login:{username:"",password:""},courses:[],googleUser:null,tasks:{ID1:{name:"Study for Calc",completed:!1,dueDate:"2019/11/6",studyTime:"30 minutes"},ID2:{name:"Study for Chem",completed:!1,dueDate:"2019/11/7",studyTime:"20 minutes"},ID3:{name:"Study for Biology",completed:!1,dueDate:"2019/11/9",studyTime:"15 minutes"}}},mutations:{login:function(e,t){e.login=t},cacheCourses:function(e,t){e.courses=t},googleLogin:function(e,t){e.googleUser=t}},actions:{updateTask:function(){console.log("updateTask action")}},getters:{getLogin:function(e){return e.login},courseCache:function(e){return e.courses},googleUser:function(e){return e.googleUser},tasks:function(e){return e.tasks}},modules:{}}),ie=(n("a4ac"),n("7d6e"),n("e54f"),n("05bc"),n("b178"));r["a"].use(ie["a"],{config:{brand:{primary:"#DD5B1F",secondary:"#282828",accent:"#AF2D1C",dark:"#1d1d1d",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}}}),r["a"].config.productionTip=!1,new r["a"]({router:se,store:oe,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),s=n.n(r);s.a},6554:function(e,t,n){"use strict";var r=n("9537"),s=n.n(r);s.a},8305:function(e,t,n){e.exports=n.p+"img/Google_SignInButton.56f00e35.png"},"89f1":function(e,t,n){},9537:function(e,t,n){},a4ac:function(e,t,n){},ab1e:function(e,t,n){"use strict";var r=n("89f1"),s=n.n(r);s.a},dfbe:function(e,t,n){"use strict";var r=n("ffc5"),s=n.n(r);s.a},e332:function(e,t,n){},f250:function(e,t,n){"use strict";var r=n("010c"),s=n.n(r);s.a},ffc5:function(e,t,n){}});
//# sourceMappingURL=app.348e36a2.js.map