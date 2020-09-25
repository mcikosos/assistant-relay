(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(159)),i={id:"webcore",title:"WebCore",description:"Connecting WebCore to Assistant Relay"},s={id:"integration/webcore",title:"WebCore",description:"Connecting WebCore to Assistant Relay",source:"@site/../docs/integration/webcore.mdx",permalink:"/docs/integration/webcore",editUrl:"https://github.com/greghesp/assistant-relay/edit/doc-src/../docs/integration/webcore.mdx",sidebar:"docs",previous:{title:"Stop Casting",permalink:"/docs/cast/stop"},next:{title:"Hass.io",permalink:"/docs/integration/hass"}},c=[{value:"Importing a Piston",id:"importing-a-piston",children:[]},{value:"Handling Audio Responses",id:"handling-audio-responses",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'WebCore is the "web Community\'s own Rule Engine", and is a general rule engine for SmartThings.  It works by allowing users to create scripts that are interpreted and executed by SmartThings to allow for complex decision making.'),Object(a.b)("p",null,"As Assistant Relay exposes the Assistant Service as a REST API, it is possible to call Assistant Relay from a WebCore piston."),Object(a.b)("h2",{id:"importing-a-piston"},"Importing a Piston"),Object(a.b)("p",null,"To make things simple, I have created a default piston that should help get your started.  Simply use the import code ",Object(a.b)("inlineCode",{parentName:"p"},"cg3ry")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"webcore.png",alt:"hide:Webcore"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"webcorepiston.png",alt:"hide:Webcore"}))),Object(a.b)("h2",{id:"handling-audio-responses"},"Handling Audio Responses"),Object(a.b)("p",null,"If you use something like cast-api, Sonos or any other network connect speaker, you can now send your Google Assistant audio responses to specific devices. It\u2019s not the same as a broadcast, so it will interrupt whatever is happening but its the best we have at the moment."),Object(a.b)("p",null,"In the below example, I am making a request to Assistant to tell me about my day. Assistant Relay saves the audio file and sends a URL to listen to it back in the response."),Object(a.b)("p",null,"What you can then do is tell a speaker to play that URL from the response, and it will play the Google Assistant response."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"webcorepiston.png",alt:"hide:Webcore"}))),Object(a.b)("p",null,"You can also play the audio response back using Assistant Relay Cast, by passing your Assistant Relay IP address and the audio response as a remote file to play.  For more information, see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../cast/casting"}),"Casting Media")))}l.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);