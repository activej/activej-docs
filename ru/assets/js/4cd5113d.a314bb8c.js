"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1404],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84353:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],c={title:"ActiveJ 5.4.1 - Stream Codecs optimizations",hide_table_of_contents:!1},u=void 0,l={permalink:"/ru/blog/2022/08/31/v5.4.1",source:"@site/blog/2022-08-31-v5.4.1.md",title:"ActiveJ 5.4.1 - Stream Codecs optimizations",description:"ActiveJ v5.4.1 was released on Aug 31,",date:"2022-08-31T00:00:00.000Z",formattedDate:"31 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2022 \u0433.",tags:[],readingTime:.27,truncated:!1,authors:[],prevItem:{title:"ActiveJ 5.4.2 - Minor bug fixes",permalink:"/ru/blog/2022/09/05/v5.4.2"},nextItem:{title:"ActiveJ 5.4 - Codegen and Serializer optimizations",permalink:"/ru/blog/2022/08/19/v5.4"}},p={authorsImageUrls:[]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v5.4.1 was released on Aug 31,\n2022 (",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.4.1"},"see on Maven"),"). This release includes\noptimizations for Stream Codecs to optimize memory usage."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Optimized encoding and decoding of arrays of primitives, as well as arrays of variable-length ints and longs."),(0,i.kt)("li",{parentName:"ul"},"Minimized the required number of flushes when writing data to a byte array.")))}m.isMDXComponent=!0}}]);