"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9579],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),o=n(39962);t.Z=function(e){var t=e.url,n=e.text,r=e.isInline,l=void 0===r||r,i=e.children,s=(0,o.Z)().siteConfig,p=t.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return a.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+p+t,target:"_blank"},n||i)}},77815:function(e,t,n){n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},46458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return v}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=n(77618),i=n(77815),s=["components"],p={title:"ActiveJ | Eventloop, single-threaded event loop for developing asynchronous Java applications",description:"Node.js-inspired single-threaded Eventloop for developing asynchronous Java applications",sidebar_label:"Eventloop",keywords:["nodejs","node js","java","java framework","asynchronous","asynchronous application","client-server application"]},c="Eventloop",d={unversionedId:"async-io/eventloop",id:"async-io/eventloop",isDocsHomePage:!1,title:"ActiveJ | Eventloop, single-threaded event loop for developing asynchronous Java applications",description:"Node.js-inspired single-threaded Eventloop for developing asynchronous Java applications",source:"@site/docs/async-io/eventloop.mdx",sourceDirName:"async-io",slug:"/async-io/eventloop",permalink:"/async-io/eventloop",tags:[],version:"current",frontMatter:{title:"ActiveJ | Eventloop, single-threaded event loop for developing asynchronous Java applications",description:"Node.js-inspired single-threaded Eventloop for developing asynchronous Java applications",sidebar_label:"Eventloop",keywords:["nodejs","node js","java","java framework","asynchronous","asynchronous application","client-server application"]},sidebar:"docs",previous:{title:"Overview",permalink:"/overview"},next:{title:"Promise",permalink:"/async-io/promise"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Basic Example",id:"basic-example",children:[],level:3},{value:"Eventloop Example",id:"eventloop-example",children:[],level:3}],level:2}],m={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventloop"},"Eventloop"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Eventloop module is the foundation of other modules that run their code asynchronously inside event loops and threads.\nIt ",(0,r.kt)("strong",{parentName:"p"},"provides efficient management of asynchronous operations without multithreading overhead"),". Particularly useful\nfor building client-server applications with high-performance requirements."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eventloop utilizes Java's NIO to allow asynchronous computations and I/O operations (TCP, UDP)."),(0,r.kt)("li",{parentName:"ul"},"Eliminates traditional bottleneck of I/O for further business logic processing."),(0,r.kt)("li",{parentName:"ul"},"Can run multiple eventloop threads on available cores."),(0,r.kt)("li",{parentName:"ul"},"Minimal GC load: arrays and byte buffers are reused."),(0,r.kt)("li",{parentName:"ul"},"Eventloop can schedule/delay certain tasks for later execution or background execution."),(0,r.kt)("li",{parentName:"ul"},"Eventloop is single-threaded, so it doesn't have concurrency overhead.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Eventloop is a low-level tool that you won't use directly in most use cases. Yet, it is an\nextremely important component that will give you an understanding of ActiveJ async model set-up."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)(l.Z,{url:"/core-eventloop/src/main/java/io/activej/eventloop/Eventloop.java",mdxType:"Githublink"},(0,r.kt)("inlineCode",{parentName:"a"},"Eventloop")))," represents an infinite loop, where each ",(0,r.kt)("inlineCode",{parentName:"p"},"loop")," executes all the tasks that are provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector")," or stored in\nspecial queues. Each of these tasks should be small and its execution is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"tick"),"."),(0,r.kt)("p",null,"The only blocking operation of Eventloop infinite loop is ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector.select()"),". This operation selects a set of keys\nwhose corresponding channels are ready for I/O operations. Eventloop asynchronously processes selected keys and executes\nqueued runnables in a single thread."),(0,r.kt)("p",null,"Eventloop works with different types of tasks that are stored in separate queues:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tasks"),(0,r.kt)("th",{parentName:"tr",align:null},"Added via"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Local tasks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#post")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#postLater")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#postNext")),(0,r.kt)("td",{parentName:"tr",align:null},"Added from current Eventloop thread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Concurrent tasks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#execute")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#submit")),(0,r.kt)("td",{parentName:"tr",align:null},"Added from other threads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Scheduled tasks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#schedule")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#delay")),(0,r.kt)("td",{parentName:"tr",align:null},"Scheduled to be executed later")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Background tasks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#scheduleBackground")," ",(0,r.kt)("inlineCode",{parentName:"td"},"Eventloop#delayBackground")),(0,r.kt)("td",{parentName:"tr",align:null},"Same as ",(0,r.kt)("em",{parentName:"td"},"Scheduled"),", but if there are only ",(0,r.kt)("em",{parentName:"td"},"Background")," tasks left, Eventloop will be stopped")))),(0,r.kt)("p",null,"Eventloop will be stopped if its queues with non-background tasks are empty, ",(0,r.kt)("strong",{parentName:"p"},"Selector")," has no selected\nkeys and the amount of concurrent operations in other threads equals 0. To prevent Eventloop from closing, set a\n",(0,r.kt)("inlineCode",{parentName:"p"},"keepAlive")," flag. When it's set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", Eventloop will continue running even without tasks."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic-example"},"BasicExample"),' - a simple example of an eventloop which prints out a "Hello World" message.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#eventloop-example"},"EventloopExample")," - represents the sequence of operations execution in eventloops.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,r.kt)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project. These examples are located at ",(0,r.kt)("inlineCode",{parentName:"p"},"activej/examples/core/eventloop"),"."))),(0,r.kt)("h3",{id:"basic-example"},"Basic Example"),(0,r.kt)("p",null,'In this example we create an eventloop, post a task to it (which is printing out "Hello World" message) and\nthen start the eventloop:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/eventloop/src/main/java/BasicExample.java tag=EXAMPLE",url:"/examples/core/eventloop/src/main/java/BasicExample.java",tag:"EXAMPLE"},'public final class BasicExample {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create();\n\n    eventloop.post(() -> System.out.println("Hello World"));\n\n    eventloop.run();\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{url:"/examples/core/eventloop/src/main/java/BasicExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,r.kt)("h3",{id:"eventloop-example"},"Eventloop Example"),(0,r.kt)("p",null,"This example represents how tasks are scheduled in eventloops:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/eventloop/src/main/java/EventloopExample.java tag=EXAMPLE",url:"/examples/core/eventloop/src/main/java/EventloopExample.java",tag:"EXAMPLE"},'public final class EventloopExample {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n    long startTime = currentTimeMillis();\n\n    // #2\n    eventloop.delay(3000L, () -> System.out.println("Eventloop.delay(3000) is finished, time: " + (currentTimeMillis() - startTime)));\n    eventloop.delay(1000L, () -> System.out.println("Eventloop.delay(1000) is finished, time: " + (currentTimeMillis() - startTime)));\n    eventloop.delay(100L, () -> System.out.println("Eventloop.delay(100) is finished, time: " + (currentTimeMillis() - startTime)));\n\n    // #1\n    System.out.println("Before running eventloop, time: " + (currentTimeMillis() - startTime));\n\n    eventloop.run();\n  }\n}\n')),(0,r.kt)("p",null,"If you run the example, you'll receive an output which looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Before running eventloop, time: 2\nEventloop.delay(100) is finished, time: 106\nEventloop.delay(1000) is finished, time: 1001\nEventloop.delay(3000) is finished, time: 3001\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.Z,{url:"/examples/core/eventloop/src/main/java/EventloopExample.java",mdxType:"Githublink"},"See full example on GitHub"))))}v.isMDXComponent=!0}}]);