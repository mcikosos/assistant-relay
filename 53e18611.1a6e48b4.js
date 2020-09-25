(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return l}));var r=n(2),o=n(9),i=(n(0),n(159)),a={id:"introduction",title:"Introduction",sidebar_label:"Introduction",description:"Assistant Relay documentation introduction"},c={id:"introduction",title:"Introduction",description:"Assistant Relay documentation introduction",source:"@site/../docs/introduction.md",permalink:"/docs/introduction",editUrl:"https://github.com/greghesp/assistant-relay/edit/doc-src/../docs/introduction.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Contributing",permalink:"/docs/contributing"}},s=[],u={rightToc:s};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Assistant Relay is a Node.js server that exposes the Google Assistant SDK as a REST API.",Object(i.b)("br",{parentName:"p"}),"\n","Simply send Assistant Relay any query you would normally send Google Assistant, and Assistant Relay will call the Assistant SDK an execute your command."),Object(i.b)("p",null,"It also supports the Google Home Broadcast command so you can send audio notifications to your Google Home devices without interrupting music."))}l.isMDXComponent=!0},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),f=r,y=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(y,c(c({ref:e},u),{},{components:n})):o.a.createElement(y,c({ref:e},u))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);