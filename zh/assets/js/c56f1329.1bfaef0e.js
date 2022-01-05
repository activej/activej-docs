"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[5852],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,v=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"ActiveJ 5.1 - Boot and ActiveJ FS improvements",hide_table_of_contents:!1},l=void 0,p={permalink:"/zh/blog/2022/01/04/v5.1",source:"@site/blog/2022-01-04-v5.1.md",title:"ActiveJ 5.1 - Boot and ActiveJ FS improvements",description:"ActiveJ v5.1 was released Jan 4,",date:"2022-01-04T00:00:00.000Z",formattedDate:"2022\u5e741\u67084\u65e5",tags:[],readingTime:.535,truncated:!1,authors:[],nextItem:{title:"ActiveJ 5.0 - New major release",permalink:"/zh/blog/2021/10/29/v5.0"}},s={authorsImageUrls:[]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ActiveJ v5.1 was released Jan 4,\n2022 (",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.1"},"see on Maven"),"). This release includes\nimprovements to ",(0,o.kt)("a",{parentName:"p",href:"/fs"},"ActiveJ FS"),", ",(0,o.kt)("a",{parentName:"p",href:"/inject"},"ActiveJ Inject")," and ",(0,o.kt)("a",{parentName:"p",href:"/boot/launcher"},"boot")," modules in general."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject")," and ",(0,o.kt)("a",{parentName:"li",href:"/boot/launcher"},"boot")," modules",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1/boot-triggers/src/main/java/io/activej/trigger/TriggersModule.java"},"TriggersModule"),"\nnow properly handles ",(0,o.kt)("a",{parentName:"li",href:"/inject/optional-dependencies"},"optional dependencies")),(0,o.kt)("li",{parentName:"ul"},"Nested optional dependencies (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"OptionalDependency<OptionalDependency<?>>"),") are prohibited"),(0,o.kt)("li",{parentName:"ul"},"Services (as well as those obtained from an optional dependencies) are guaranteed to start/stop exactly once"),(0,o.kt)("li",{parentName:"ul"},"Added shortcuts for obtaining optional dependencies from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1/core-inject/src/main/java/io/activej/inject/Injector.java"},"Injector")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fs"},"ActiveJ FS"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added a new ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/exception/ActiveFsStructureException.java"},"exception")," to\nindicate errors in a structure of a file system."),(0,o.kt)("li",{parentName:"ul"},"Added a precondition that checks whether local file systems (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalActiveFs.java"},"LocalActiveFs")," and\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalBlockingFs.java"},"LocalBlockingFs"),") were started before being used.")))))}f.isMDXComponent=!0}}]);