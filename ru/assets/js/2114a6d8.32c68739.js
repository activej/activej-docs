"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1820],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,l=void 0===i||i,p=e.children,o=(0,r.Z)().siteConfig,c=t.startsWith("/examples")?o.customFields.githubExamplesBranch:o.customFields.githubBranch;return a.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:o.customFields.githubUrl+"/"+c+t,target:"_blank"},n||p)}},77815:function(e,t,n){n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},24046:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(77815),p=n(77618),o=["components"],c={title:"ActiveJ | \u041f\u0440\u043e\u0441\u0442\u043e\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0435\u0439 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430",sidebar_label:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432",keywords:["java","java framework","\u0443\u0447\u0435\u0431\u043d\u0438\u043a","java \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","http-\u0441\u0435\u0440\u0432\u0435\u0440","\u0432\u0435\u0441\u0435\u043d\u043d\u044f\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u043d\u0435\u0442\u0440\u0438\u0432\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 \u043f\u0440\u0438\u0447\u0430\u043b\u0443","\u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432","\u0443\u0441\u044b","\u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u043e\u043f\u0440\u043e\u0441"],description:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ActiveJ \u0438 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430 Mustache. \u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 100 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u043a\u043e\u0434\u0430 \u0438 \u0431\u0435\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 xml."},u="\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432",s={unversionedId:"tutorials/template-engine-integration",id:"tutorials/template-engine-integration",isDocsHomePage:!1,title:"ActiveJ | \u041f\u0440\u043e\u0441\u0442\u043e\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0435\u0439 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430",description:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ActiveJ \u0438 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430 Mustache. \u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 100 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u043a\u043e\u0434\u0430 \u0438 \u0431\u0435\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 xml.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tutorials/template-engine-integration.mdx",sourceDirName:"tutorials",slug:"/tutorials/template-engine-integration",permalink:"/ru/tutorials/template-engine-integration",tags:[],version:"current",frontMatter:{title:"ActiveJ | \u041f\u0440\u043e\u0441\u0442\u043e\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0435\u0439 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430",sidebar_label:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432",keywords:["java","java framework","\u0443\u0447\u0435\u0431\u043d\u0438\u043a","java \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445","\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e","http-\u0441\u0435\u0440\u0432\u0435\u0440","\u0432\u0435\u0441\u0435\u043d\u043d\u044f\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u043d\u0435\u0442\u0440\u0438\u0432\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 \u043f\u0440\u0438\u0447\u0430\u043b\u0443","\u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432","\u0443\u0441\u044b","\u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u043e\u043f\u0440\u043e\u0441"],description:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ActiveJ \u0438 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430 Mustache. \u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 100 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u043a\u043e\u0434\u0430 \u0438 \u0431\u0435\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 xml."},sidebar:"tutorials",previous:{title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/ru/tutorials/getting-started"},next:{title:"HTTP-\u0434\u0435\u043a\u043e\u0434\u0435\u0440",permalink:"/ru/tutorials/http-decoder"}},m=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0443\u0441\u043a\u043e\u0432\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043f\u0443\u0441\u043a\u043e\u0432\u043e\u0439-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438",children:[],level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[],level:2}],d={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432"),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u044b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445 ActiveJ. \u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Poll, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u044b\u0435 \u043e\u043f\u0440\u043e\u0441\u044b \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438. \u041a\u0430\u0436\u0434\u044b\u0439 \u043d\u043e\u0432\u044b\u0439 \u043e\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u0435\u0434\u0435\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c."),(0,i.kt)("p",null,"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u043a\u0430\u043a \u043f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ActiveJ: \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0435\u0433\u043e \u043e\u043a\u043e\u043b\u043e ",(0,i.kt)("strong",{parentName:"p"},"100 \u0441\u0442\u0440\u043e\u043a \u043a\u043e\u0434\u0430")," \u0441 ",(0,i.kt)("strong",{parentName:"p"},"\u0431\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 xml-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439"),". \u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 ",(0,i.kt)("a",{parentName:"p",href:"https://mustache.github.io/"},(0,i.kt)("strong",{parentName:"a"},"Mustache"))," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430."),(0,i.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0430\u0441\u0441 ",(0,i.kt)("a",{parentName:"p",href:"#creating-launcher"},(0,i.kt)("inlineCode",{parentName:"a"},"ApplicationLauncher")),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041f\u043e\u043b\u043d\u044b\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0442\u0435\u043a\u0441\u0442\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 ",(0,i.kt)(p.Z,{text:"GitHub",url:"/examples/tutorials/template-engine",mdxType:"Githublink"})),(0,i.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043f\u0443\u0441\u043a\u043e\u0432\u043e\u0439-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0443\u0441\u043a\u043e\u0432\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043d\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u0441\u044f \u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u043d\u0430 HTML-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445. \u041c\u044b \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u043c ActiveJ ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u043e\u043f\u0443\u0441\u0442\u0438\u043c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043e\u0448\u0438\u0431\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0431\u044b\u043b\u043e \u043a\u0440\u0430\u0442\u043a\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_1",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_1"},"public final class ApplicationLauncher extends HttpServerLauncher {\n\n  private static ByteBuf applyTemplate(Mustache mustache, Map<String, Object> scopes) {\n    ByteBufWriter writer = new ByteBufWriter();\n    mustache.execute(writer, scopes);\n    return writer.getBuf();\n  }\n\n  @Provides\n  PollDao pollRepo() {\n    return new PollDaoImpl();\n  }\n\n")),(0,i.kt)("p",null,"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430 \u043f\u0443\u0441\u043a\u043e\u0432\u0443\u044e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u043f\u043e\u0431\u043b\u0438\u0436\u0435. \u041e\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0430:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"applyTemplate(Mustache mustache, Map<String, Object> scopes)")," \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d Mustache \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("a",{parentName:"li",href:"/ru/misc/bytebuf"},(0,i.kt)("inlineCode",{parentName:"a"},"ByteBuf"))," - \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f ByteBuffer;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pollRepo()")," \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443 \u043d\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0410\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"@Provides")," \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("a",{parentName:"li",href:"/ru/inject"},"ActiveJ Inject DI"),".\n\u0414\u0430\u043b\u0435\u0435 \u043c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncServlet"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_1",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_1"},"public final class ApplicationLauncher extends HttpServerLauncher {\n\n  private static ByteBuf applyTemplate(Mustache mustache, Map<String, Object> scopes) {\n    ByteBufWriter writer = new ByteBufWriter();\n    mustache.execute(writer, scopes);\n    return writer.getBuf();\n  }\n\n  @Provides\n  PollDao pollRepo() {\n    return new PollDaoImpl();\n  }\n\n")),(0,i.kt)("p",null,"\u0412 ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncServlet")," \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0442\u0440\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 Mustache, \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 HTML-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0427\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044e, \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingServlet"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 Express.js. \u0412 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u043c \u0432\u044b\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," .\n\u041c\u0435\u0442\u043e\u0434",(0,i.kt)("inlineCode",{parentName:"p"},"map(@Nullable HttpMethod method, String path, AsyncServlet servlet)")," \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 \u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"RoutingServlet"),": ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"method")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0438\u0437 HTTP \u043c\u0435\u0442\u043e\u0434\u043e\u0432 (",(0,i.kt)("inlineCode",{parentName:"em"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"POST")," \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435) ")," ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0442\u0435\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"servlet")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043b\u043e\u0433\u0438\u043a\u0443 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 "),"\u0437\u0430\u043f\u0440\u043e\u0441\u0430",(0,i.kt)("em",{parentName:"p"}," \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c: ")," ",(0,i.kt)("inlineCode",{parentName:"p"},"request.getPathParameter(String key)"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"request.getQueryParameter(String key)")," (\u0441\u043c. \u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.kt)("a",{parentName:"p",href:"/http/examples#request-parameters-example"},(0,i.kt)("inlineCode",{parentName:"a"},"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")),"') \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"request.getPostParameters()")," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u044b \u0432\u0441\u0435\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.\n\u0412 \u044d\u0442\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0432\u0441\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043d\u0438\u0445, \u0447\u0442\u043e\u0431\u044b \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "),"listPolls* .\n\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0435\u0449\u0435 \u043e\u0434\u0438\u043d \u0437\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_3",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_3"},'.map(GET, "/poll/:id", request -> {\n  int id = Integer.parseInt(request.getPathParameter("id"));\n  return HttpResponse.ok200()\n      .withBody(applyTemplate(singlePollView, mapOf("id", id, "poll", pollDao.find(id))));\n})\n')),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u043e\u043f\u0440\u043e\u0441\u043e\u043c, id \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b \u0443\u043a\u0430\u0437\u0430\u043d \u0432 \u043f\u0443\u0442\u0438. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0443\u0442\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"/poll/:id")," . ",(0,i.kt)("inlineCode",{parentName:"p"},":")," \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442, \u0447\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0434\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 ; \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u0430\u043c \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043e\u043f\u0440\u043e\u0441\u0430 \u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443.\n\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0441 \u043f\u0443\u0442\u044f\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"/create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/vote"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/add")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"/delete")," \u0437\u0430\u0431\u043e\u0442\u044f\u0442\u0441\u044f \u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 ",(0,i.kt)("em",{parentName:"p"},"pollDao")," \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438\u0445 \u0438\u0437 \u043d\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_3",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_3"},'.map(GET, "/poll/:id", request -> {\n  int id = Integer.parseInt(request.getPathParameter("id"));\n  return HttpResponse.ok200()\n      .withBody(applyTemplate(singlePollView, mapOf("id", id, "poll", pollDao.find(id))));\n})\n')),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043b\u0438 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," , \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u043d\u0430\u0448\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u0437\u0430\u043f\u0443\u0441\u043a\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java tag=REGION_5",url:"/examples/tutorials/template-engine/src/main/java/ApplicationLauncher.java",tag:"REGION_5"},"public static void main(String[] args) throws Exception {\n  Launcher launcher = new ApplicationLauncher();\n  launcher.launch(args);\n}\n")),(0,i.kt)("p",null,"\u0412\u043e\u0442 \u0438 \u0432\u0441\u0435, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u0440\u043e\u0441\u043e\u0432!"),(0,i.kt)("h2",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441 GitHub \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u043e\u0435\u043a\u0442 Maven. \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432\u0435\u0442\u043a\u0443 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"})),". \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u0431\u043e\u0440\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (",(0,i.kt)("strong",{parentName:"p"},"Ctrl F9")," \u0434\u043b\u044f IntelliJ IDEA). \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u043b\u0430\u0441\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationLauncher")," \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," . \u0417\u0430\u0442\u0435\u043c \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080.")))}g.isMDXComponent=!0}}]);