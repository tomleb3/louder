(this.webpackJsonplouder=this.webpackJsonplouder||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(19),i=n.n(s),o=n(2),l=n(4),u=n.n(l),j=n(9),d=n(10),b=n(7),h={getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)},millisToMinsSecs:function(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return t+":"+(n<10?"0":"")+n},makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},saveToStorage:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},removeFromStorage:function(e){localStorage.removeItem(e)}};var f=function(e){var t=e.recentSearches,n=e.handleChange,r=e.onClearSearches;return Object(c.jsxs)("div",{className:"recent-searches-container",children:[Object(c.jsx)("label",{children:"Recent Searches"}),Object(c.jsxs)("div",{className:"recent-searches flex wrap j-between",children:[t.map((function(e){return Object(c.jsx)("button",{className:"btn-search-item",onClick:function(){return n(null,e)},children:Object(c.jsx)("span",{children:e})},h.makeId())})),Object(c.jsx)("button",{className:"btn-clear",onClick:r,children:"CLEAR"})]})]})},m=function(e){var t=e.onSetFilter,n=Object(r.useState)(""),a=Object(b.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)(!1),l=Object(b.a)(o,2),u=l[0],j=l[1],d="SEARCHES",m=h.loadFromStorage(d)||[],x=function(e,t){return i(t||e.target.value)};return Object(c.jsxs)("form",{className:"app-filter flex col a-center",onSubmit:function(e){e.preventDefault(),s&&(m.length>=5&&m.pop(),m.unshift(s),h.saveToStorage(d,m)),t(s),j(!1)},children:[Object(c.jsx)("input",{type:"text",name:"filter-input",value:s,onChange:x,autoComplete:"off",onFocus:function(){return j(!0)},onBlur:function(){return setTimeout((function(){return j(!1)}),150)}}),m.length&&u?Object(c.jsx)(f,{recentSearches:m,handleChange:x,onClearSearches:function(){i(""),h.removeFromStorage(d)}}):null,Object(c.jsx)("button",{type:"submit",className:s?"":"inactive",children:"Find"})]})},x=function(e){var t=e.trackState,n=e.dockMode,a=e.onTogglePlay,s=e.onSwitchTrack,i=t.track,o=t.isPlaying,l=Object({NODE_ENV:"production",PUBLIC_URL:"/louder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"ggX0UomnLs0VmW7qZnCzw"}),j=l.PUBLIC_URL,b=l.REACT_APP_CLIENT_ID,h="".concat(j,"/assets/imgs"),f=Object(r.useRef)(),m=i&&Object.keys(i).length;Object(r.useEffect)((function(){Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.isPlaying,!e.t0){e.next=5;break}return e.next=4,f.current.play();case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})))()})),Object(r.useEffect)((function(){a(!1),m&&x(),f.current=new Audio("".concat(i.stream_url,"?consumer_key=").concat(b))}),[i.stream_url]);var x=function(){f.current.pause(),f.current.currentTime=0};return Object(c.jsx)("article",{className:"media-player ".concat(n?"dock-mode":""),children:Object(c.jsxs)("div",{className:"main-layout flex j-between a-center",children:[Object(c.jsxs)("div",{className:"flex grow a-center",children:[Object(c.jsx)("img",{className:"media-img",alt:"",src:i.artwork_url||"".concat(h,"/track-img-fallback.png")}),m?Object(c.jsxs)("div",{className:"flex col",children:[Object(c.jsx)("label",{children:i.title}),Object(c.jsxs)("small",{children:[Object(c.jsx)("span",{className:"muted",children:"by\xa0"}),i.user.username]})]}):null]}),Object(c.jsxs)("div",{className:"btn-container flex",children:[Object(c.jsx)("button",{onClick:function(){return s("prev")},children:Object(c.jsx)("img",{src:"".concat(h,"/btn-prev.png"),alt:""})}),Object(c.jsx)("button",{className:o?"btn-pause":"btn-play",onClick:function(){o?f.current.pause():f.current.play(),m&&a(!t.isPlaying)},children:Object(c.jsx)("img",{src:"".concat(h,"/").concat(o?"btn-pause":"btn-play",".png"),alt:""})}),Object(c.jsx)("button",{onClick:function(){return s("next")},children:Object(c.jsx)("img",{src:"".concat(h,"/btn-next.png"),alt:""})})]})]})})},O=function(e){var t=e.track,n=e.onSelectTrack,r=e.gridView,a="".concat("/louder","/assets/imgs");return Object(c.jsxs)("article",{className:"track-preview pointer ".concat(r?"grid-view":"list-view"),onClick:function(){return n(t)},children:[Object(c.jsx)("img",{src:t.artwork_url||"".concat(a,"/track-img-fallback.png"),alt:""}),Object(c.jsxs)("div",{className:"flex col",children:[Object(c.jsx)("small",{children:t.user.username}),Object(c.jsx)("label",{children:t.title}),Object(c.jsxs)("div",{className:"flex a-self-end",children:[Object(c.jsxs)("div",{className:"flex a-center",children:[Object(c.jsx)("img",{className:"clock-img",src:"".concat(a,"/clock.png"),alt:""}),Object(c.jsx)("span",{children:h.millisToMinsSecs(t.duration)})]}),Object(c.jsxs)("div",{className:"flex a-center",children:[Object(c.jsx)("img",{className:"fav-img",src:"".concat(a,"/favorite.png"),alt:""}),Object(c.jsx)("span",{children:t.favoritings_count})]})]})]})]})},g=function(e){var t=e.tracks,n=e.onSelectTrack,a=e.onNextPage,s="IS_GRID_MODE",i="".concat("/louder","/assets/imgs"),o=h.loadFromStorage(s),l=Object(r.useState)(o||!1),u=Object(b.a)(l,2),j=u[0],d=u[1],f=function(e){d(e),h.saveToStorage(s,e)};return t.length?Object(c.jsxs)("section",{className:"track-list-container",children:[Object(c.jsx)("div",{className:"track-list ".concat(j?"grid-view":"list-view"),children:t.map((function(e){return Object(c.jsx)(O,{gridView:j,track:e,onSelectTrack:n},e.id)}))}),Object(c.jsxs)("div",{className:"btns-container flex grow",children:[Object(c.jsx)("button",{className:"btn-grid",onClick:function(){return f(!0)},children:Object(c.jsx)("img",{src:"".concat(i,"/grid.svg"),alt:"grid"})}),Object(c.jsx)("button",{className:"btn-list",onClick:function(){return f(!1)},children:Object(c.jsx)("img",{src:"".concat(i,"/list.svg"),alt:"list"})}),Object(c.jsx)("button",{className:"btn-next",onClick:a,children:"Next"})]})]}):Object(c.jsx)("div",{})};function p(e){var t=e.text,n="",a=Object(r.useState)(!1),s=Object(b.a)(a,2),i=s[0],o=s[1];return n=i?t:t.substring(0,150),Object(c.jsxs)("div",{className:"fs14 ".concat(n.length>=150?"pointer":""),onClick:function(){return o(!i)},children:[Object(c.jsx)("p",{className:"d-inline",children:n}),n.length>=150&&Object(c.jsx)("span",{className:"clr1",children:i?" \u25b2":"... \u25bc"})]})}var v=function(e){var t=e.trackState,n=e.onTogglePlay,r=t.track,a=t.isPlaying,s="".concat("/louder","/assets/imgs");return Object(c.jsxs)("section",{className:"track-details flex col",children:[Object(c.jsxs)("div",{className:"track-panel flex",children:[Object(c.jsx)("img",{src:r.artwork_url||"".concat(s,"/track-img-fallback.png"),className:"".concat(a?"":"active"),onClick:function(){return n(!0)},alt:""}),Object(c.jsxs)("div",{className:"flex col",children:[Object(c.jsx)("header",{className:"flex col",children:Object(c.jsx)("label",{children:r.title})}),Object(c.jsx)("main",{className:"grow",children:r.description?Object(c.jsx)(p,{text:r.description}):Object(c.jsx)("span",{className:"muted",children:"No description given..."})}),Object(c.jsxs)("footer",{className:"flex a-center",children:[Object(c.jsxs)("div",{className:"flex a-center",children:[Object(c.jsx)("img",{className:"clock-img",src:"".concat(s,"/clock.png"),alt:""}),Object(c.jsx)("span",{children:h.millisToMinsSecs(r.duration)})]}),Object(c.jsxs)("div",{className:"flex a-center",children:[Object(c.jsx)("img",{className:"fav-img",src:"".concat(s,"/favorite.png"),alt:""}),Object(c.jsx)("span",{children:r.favoritings_count})]})]})]})]}),Object(c.jsxs)("div",{className:"artist-panel flex col",children:[Object(c.jsx)("h4",{children:"Artist"}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("img",{src:r.user.avatar_url,alt:""}),Object(c.jsxs)("div",{className:"flex col",children:[Object(c.jsx)("small",{className:"grow",children:r.user.username}),Object(c.jsx)("a",{href:"https://soundcloud.com/octobersveryown",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("button",{children:"Visit"})})]})]})]})]})},k={query:function(){return N.apply(this,arguments)},nextPage:function(e){return y.apply(this,arguments)},getById:function(e){return S.apply(this,arguments)}},w="ggX0UomnLs0VmW7qZnCzw";function N(){return(N=Object(d.a)(u.a.mark((function e(){var t,n,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch("https://api.soundcloud.com/tracks?format=json&linked_partitioning=1\n    &client_id=".concat(w,"&q=").concat(t,"&limit=6"));case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.soundcloud.com/tracks/".concat(t,".json?client_id=").concat(w));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=Object(r.useRef)(null),t=Object(r.useState)({isPlaying:!1,track:{}}),n=Object(b.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)({query:"",nextPageUrl:"",tracks:[]}),o=Object(b.a)(i,2),l=o[0],h=o[1],f=a.track;Object(r.useEffect)((function(){Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.query("mob");case 2:t=e.sent,h(Object(j.a)(Object(j.a)({},l),{},{nextPageUrl:t.next_href,tracks:t.collection}));case 4:case"end":return e.stop()}}),e)})))()}),[]);var O=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.query(t);case 2:n=e.sent,h({query:t,nextPageUrl:n.next_href,tracks:t?n.collection:l.tracks});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){s(Object(j.a)(Object(j.a)({},a),{},{isPlaying:e}))},w=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.nextPage(l.nextPageUrl);case 2:t=e.sent,h(Object(j.a)(Object(j.a)({},l),{},{nextPageUrl:t.next_href,tracks:t.collection}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("section",{className:"home",children:[Object(c.jsx)("nav",{className:"result-bar",children:Object(c.jsxs)("div",{className:"main-layout flex col",children:[Object(c.jsx)("small",{children:l.query?"Search Results /":"Spotlight"}),Object(c.jsx)("label",{children:l.query?l.query:"Featured Tracks"})]})}),Object(c.jsxs)("div",{className:"main-layout pos-relative",children:[Object(c.jsx)("div",{ref:e,children:Object(c.jsx)(m,{onSetFilter:O})}),f&&Object.keys(f).length?Object(c.jsx)(v,{trackState:a,onTogglePlay:p}):null,Object(c.jsx)(g,{tracks:l.tracks,onSelectTrack:function(t){s(Object(j.a)(Object(j.a)({},a),{},{track:t})),e.current.scrollIntoView({behavior:"smooth"})},onNextPage:w})]}),Object(c.jsx)(x,{trackState:a,onTogglePlay:p,onSwitchTrack:function(e){var t=l.tracks,n=t.findIndex((function(e){return e.id===f.id}));s(Object(j.a)(Object(j.a)({},a),{},{track:"next"===e?n===t.length-1?t[n]:t[n+1]:n-1<0?t[0]:t[n-1]}))}})]})},T=n(12),_=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return window.addEventListener("scroll",(function(){return window.scrollY>=75?a(!0):a(!1)})),Object(c.jsx)("header",{className:n?"app-header active":"app-header",children:Object(c.jsxs)("section",{className:"main-layout flex j-between a-center",children:[Object(c.jsxs)(T.b,{to:"/",className:"logo flex a-center",onClick:function(){return window.location.reload()},children:[Object(c.jsx)("img",{src:"".concat("/louder","/favicon.png"),alt:""}),Object(c.jsx)("span",{children:"LOUDER"})]}),Object(c.jsx)("nav",{className:"flex a-center",children:Object(c.jsx)("a",{href:"https://github.com/tomleb3/louder",children:Object(c.jsx)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",className:"github-link",height:"1.5em",width:"1.5em",children:Object(c.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35\r 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65\r 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44\r 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})})})]})})};function P(){return Object(c.jsxs)("main",{className:"App",children:[Object(c.jsx)(_,{}),Object(c.jsx)(o.c,{children:Object(c.jsx)(o.a,{path:"/",component:C})})]})}n(32);var E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(T.a,{children:Object(c.jsx)(P,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/louder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/louder","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}))}}(),A()}},[[33,1,2]]]);
//# sourceMappingURL=main.ec431735.chunk.js.map