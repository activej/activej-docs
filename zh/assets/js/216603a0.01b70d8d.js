"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9705],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77618:function(e,t,n){var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,l=e.isInline,i=void 0===l||l,o=e.children,p=(0,r.Z)().siteConfig,c=t.startsWith("/examples")?p.customFields.githubExamplesBranch:p.customFields.githubBranch;return a.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:p.customFields.githubUrl+"/"+c+t,target:"_blank"},n||o)}},77815:function(e,t,n){n(67294);var a=n(39962);t.Z=function(e){var t=e.name,n=(0,a.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},27406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=(n(77618),n(77815)),o=["components"],p={title:"ActiveJ | \u5165\u95e8",sidebar_label:"\u5165\u95e8",keywords:["java","\u521d\u5b66\u8005\u7684Java","JAVA\u6846\u67b6","\u6307\u5357","\u6559\u7a0b","\u7f51\u7edc\u5e94\u7528","\u5f02\u6b65","spring","spring \u66ff\u4ee3\u65b9\u6848","netty \u66ff\u4ee3\u65b9\u6848","jetty \u66ff\u4ee3\u65b9\u6848","\u8bb8\u53ef\u8bc1","\u670d\u52a1\u5668","\u5ba2\u6237","\u5c0f\u7a0b\u5e8f"],description:"\u4f7f\u7528ActiveJ Java\u5e73\u53f0\u572810\u884c\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5f02\u6b65HTTP\u670d\u52a1\u5668\u3002",sidebar_position:1},c="\u5165\u95e8",s={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"ActiveJ | \u5165\u95e8",description:"\u4f7f\u7528ActiveJ Java\u5e73\u53f0\u572810\u884c\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5f02\u6b65HTTP\u670d\u52a1\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/getting-started.mdx",sourceDirName:"tutorials",slug:"/tutorials/getting-started",permalink:"/zh/tutorials/getting-started",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"ActiveJ | \u5165\u95e8",sidebar_label:"\u5165\u95e8",keywords:["java","\u521d\u5b66\u8005\u7684Java","JAVA\u6846\u67b6","\u6307\u5357","\u6559\u7a0b","\u7f51\u7edc\u5e94\u7528","\u5f02\u6b65","spring","spring \u66ff\u4ee3\u65b9\u6848","netty \u66ff\u4ee3\u65b9\u6848","jetty \u66ff\u4ee3\u65b9\u6848","\u8bb8\u53ef\u8bc1","\u670d\u52a1\u5668","\u5ba2\u6237","\u5c0f\u7a0b\u5e8f"],description:"\u4f7f\u7528ActiveJ Java\u5e73\u53f0\u572810\u884c\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5f02\u6b65HTTP\u670d\u52a1\u5668\u3002",sidebar_position:1},sidebar:"tutorials",next:{title:"\u6a21\u677f\u5f15\u64ce\u96c6\u6210",permalink:"/zh/tutorials/template-engine-integration"}},m=[{value:"\u4f60\u5c06\u9700\u8981\u4ec0\u4e48\u3002",id:"\u4f60\u5c06\u9700\u8981\u4ec0\u4e48",children:[],level:2},{value:"\u5c06\u4f7f\u7528\u54ea\u4e9bActiveJ\u6280\u672f\u3002",id:"\u5c06\u4f7f\u7528\u54ea\u4e9bactivej\u6280\u672f",children:[],level:2},{value:"\u8981\u7ee7\u7eed\u5b66\u4e60\u672c\u6307\u5357\uff0c\u4f60\u6709\u4e09\u4e2a\u9009\u62e9\u3002",id:"\u8981\u7ee7\u7eed\u5b66\u4e60\u672c\u6307\u5357\u4f60\u6709\u4e09\u4e2a\u9009\u62e9",children:[],level:2},{value:"\u4eceMaven Archetype\u521b\u5efa",id:"\u4ecemaven-archetype\u521b\u5efa",children:[],level:2},{value:"\u5de5\u4f5c\u5b9e\u4f8b",id:"\u5de5\u4f5c\u5b9e\u4f8b",children:[],level:2},{value:"\u5206\u6b65\u6307\u5357",id:"\u5206\u6b65\u6307\u5357",children:[{value:"1. \u914d\u7f6e\u8be5\u9879\u76ee",id:"1-\u914d\u7f6e\u8be5\u9879\u76ee",children:[],level:3},{value:"2. \u7f16\u5199 <code>HttpHelloWorldExample</code> class",id:"2-\u7f16\u5199-httphelloworldexample-class",children:[],level:3},{value:"3. \u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f",id:"3-\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f",children:[],level:3}],level:2},{value:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f",id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",children:[],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5165\u95e8"},"\u5165\u95e8"),(0,l.kt)("p",null,"ActiveJ\u662f\u4e00\u4e2a\u6781\u7b80\u7684\u3001\u65e0\u9505\u7089\u677f\u7684Java\u5e73\u53f0\uff0c\u65e8\u5728\u53d6\u4ee3Spring\u3001Spark\u3001Micronaut\u548c \u5176\u4ed6\u7c7b\u4f3c\u7684\u89e3\u51b3\u65b9\u6848\u3002 \u5b83\u5177\u6709\u4e30\u5bcc\u7684\u6280\u672f\u6808\uff0c\u5177\u6709\u9ad8\u6548\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u578b\u548c\u5f3a\u5927\u7684DI\u5e93 ",(0,l.kt)("a",{parentName:"p",href:"/zh/inject"},"ActiveJ Inject"),"\u3002"),(0,l.kt)("p",null,"ActiveJ\u7531\u51e0\u4e2a\u677e\u6563\u8026\u5408\u7684\u7ec4\u4ef6\u7ec4\u6210\uff0c\u5b83\u4eec\u76f8\u4e92\u8865\u5145\uff0c\u76f8\u4e92\u6388\u6743\uff1a\u5f02\u6b65\u6838\u5fc3\u3001\u9ad8\u6548\u7684I/O\u5904\u7406\u3001 \u9ad8\u6027\u80fd\u7684Jetty\u548cNetty\u66ff\u4ee3\u54c1\uff0c\u4ee5\u53ca\u65b9\u4fbf\u7684\u542f\u52a8\u5de5\u5177\u3002"),(0,l.kt)("p",null,'\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684HTTP\u670d\u52a1\u5668\uff0c\u53d1\u9001\u4e00\u4e2a "Hello World!"\u7684\u95ee\u5019\u8bed\u3002 \u901a\u8fc7ActiveJ ',(0,l.kt)("a",{parentName:"p",href:"/zh/boot/launcher"},"Launchers"),"\uff0c\u7279\u522b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," \u5b50\u7c7b\uff0c\u4ee5\u53caActiveJ Inject DI\uff0c\u4f60\u53ef\u4ee5\u572810\u884c\u5de6\u53f3\u7684\u4ee3\u7801\u4e2d \u5199\u4e00\u4e2a\u529f\u80fd\u9f50\u5168\u7684\u670d\u52a1\u5668\u3002"),(0,l.kt)("h2",{id:"\u4f60\u5c06\u9700\u8981\u4ec0\u4e48"},"\u4f60\u5c06\u9700\u8981\u4ec0\u4e48\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"5-10\u5206\u949f"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u6700\u559c\u6b22\u7684IDE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase-downloads.html"},"JDK 1.8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven 3.0"))),(0,l.kt)("h2",{id:"\u5c06\u4f7f\u7528\u54ea\u4e9bactivej\u6280\u672f"},"\u5c06\u4f7f\u7528\u54ea\u4e9bActiveJ\u6280\u672f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u79ef\u6781\u53c2\u4e0eJ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/inject"},"ActiveJ Inject"))),(0,l.kt)("h2",{id:"\u8981\u7ee7\u7eed\u5b66\u4e60\u672c\u6307\u5357\u4f60\u6709\u4e09\u4e2a\u9009\u62e9"},"\u8981\u7ee7\u7eed\u5b66\u4e60\u672c\u6307\u5357\uff0c\u4f60\u6709\u4e09\u4e2a\u9009\u62e9\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4eceMaven ",(0,l.kt)("a",{parentName:"li",href:"#create-from-maven-archetype"},"\u539f\u578b\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f")),(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5e76\u8fd0\u884c ",(0,l.kt)("a",{parentName:"li",href:"#working-example"},"\u5de5\u4f5c\u5b9e\u4f8b")),(0,l.kt)("li",{parentName:"ul"},"\u6309\u7167 ",(0,l.kt)("a",{parentName:"li",href:"#step-by-step-guide"},"\uff0c\u4e00\u6b65\u4e00\u6b65\u5730\u8fdb\u884c\u6307\u5bfc"))),(0,l.kt)("h2",{id:"\u4ecemaven-archetype\u521b\u5efa"},"\u4eceMaven Archetype\u521b\u5efa"),(0,l.kt)("p",null,"\u53ea\u9700\u5728\u7ec8\u7aef\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DarchetypeGroupId=io.activej -DarchetypeArtifactId=archetype-http -DarchetypeVersion=5.0-beta2\n")),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u5c06\u5728\u4f60\u7684\u673a\u5668\u4e0a\u81ea\u52a8\u751f\u6210\u3002 \u6253\u5f00 ",(0,l.kt)("strong",{parentName:"p"},"WebApp")," \uff0c\u8fd0\u884c\u5176 ",(0,l.kt)("em",{parentName:"p"},"main")," \u65b9\u6cd5\u3002 \u7136\u540e \uff0c\u6253\u5f00\u4f60\u559c\u6b22\u7684\u6d4f\u89c8\u5668\uff0c\u8fdb\u5165 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u5b9e\u4f8b"},"\u5de5\u4f5c\u5b9e\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/v5.0-beta2"},"\u5728\u672c\u5730\u514b\u9686ActiveJ")," \uff0c\u5e76\u5c06\u5176\u5bfc\u5165\u4e3aMaven\u9879\u76ee\u3002 \u67e5\u9605\u5206\u652f\u673a\u6784\u3002 \u5728\u8fd0\u884c\u8fd9\u4e2a\u4f8b\u5b50\u4e4b\u524d\uff0c\u6784\u5efa\u9879\u76ee\uff08",(0,l.kt)("strong",{parentName:"p"},"Ctrl F9")," for IntelliJ IDEA\uff09\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample")," \u7c7b\uff0c\u8be5\u7c7b\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/getting-started")," \u5e76\u8fd0\u884c\u5176 ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," \u65b9\u6cd5\u3002 \u6253\u5f00\u4f60\u559c\u6b22\u7684\u6d4f\u89c8\u5668\uff0c\u8fdb\u5165 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")),(0,l.kt)("h2",{id:"\u5206\u6b65\u6307\u5357"},"\u5206\u6b65\u6307\u5357"),(0,l.kt)("h3",{id:"1-\u914d\u7f6e\u8be5\u9879\u76ee"},"1. \u914d\u7f6e\u8be5\u9879\u76ee"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u5e76\u5efa\u7acb\u4e00\u4e2a\u9002\u5f53\u7684\u9879\u76ee\u7ed3\u6784\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"getting-started\n\u2514\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u2514\u2500\u2500 java\n            \u2514\u2500\u2500 HttpHelloWorldExample.java\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f60\u9700\u8981\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u6574\u5408ActiveJ\u3002 \u6709 ",(0,l.kt)("strong",{parentName:"p"},"\uff0c\u6709\u4e24\u79cd")," \u7684\u65b9\u5f0f\u6765\u505a\u3002 ",(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a")," \u9009\u9879\u662f\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u6dfb\u52a0 Maven\u4f9d\u8d56\u6027\u3002 \u53ea\u9700\u6309\u4ee5\u4e0b\u65b9\u5f0f\u914d\u7f6e\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:"url=/examples/tutorials/getting-started/pom.xml",url:"/examples/tutorials/getting-started/pom.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>io.activej</groupId>\n  <artifactId>tutorial-getting-started</artifactId>\n  <version>5.0-SNAPSHOT</version>\n\n  <name>Tutorials : Getting-Started</name>\n\n  <properties>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>io.activej</groupId>\n      <artifactId>activej-launchers-http</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>ch.qos.logback</groupId>\n      <artifactId>logback-classic</artifactId>\n      <version>1.2.6</version>\n    </dependency>\n  </dependencies>\n</project>\n\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd")," \uff0c\u4eceGitHub\u4e0a\u514b\u9686ActiveJ ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/v5.0-beta2"}),"\uff0c\u5c06\u5176\u5bfc\u5165Maven \u9879\u76ee\uff0c\u68c0\u51fa\u5206\u652f ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(i.Z,{name:"currentVersion",mdxType:"Variable"}))," \uff0c\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u8fd0\u884c\u4ee5\u4e0b\u811a\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u50cf\u4e0a\u9762\u7684\u4f8b\u5b50\u4e00\u6837\u914d\u7f6e\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u3002 \u786e\u4fdd\u4f60\u7684\u9879\u76eeSDK\u88ab\u8bbe\u7f6e\u4e3a1.8\u3002"),(0,l.kt)("h3",{id:"2-\u7f16\u5199-httphelloworldexample-class"},"2. \u7f16\u5199 ",(0,l.kt)("inlineCode",{parentName:"h3"},"HttpHelloWorldExample")," class"),(0,l.kt)("p",null,"\u5728\u4f60\u4ee5\u5efa\u8bae\u7684\u65b9\u5f0f\u4e4b\u4e00\u5c06ActiveJ\u96c6\u6210\u5230\u4f60\u7684\u9879\u76ee\u4e2d\u540e\uff0c\u5199\u4e0b\u4ee5\u4e0b\u4ee3\u7801\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample.java"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," \u6269\u5c55 ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpHelloWorldExample")," \uff0c\u4ee5\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5173\u4e8e\u8d85\u7c7b\u552f\u4e00\u91cd\u8981\u7684\u4e8b\u60c5\u662f\u5b83\u5b9e\u73b0\u4e86 ",(0,l.kt)("em",{parentName:"p"},"launch")," \u65b9\u6cd5\uff0c\u4ee5\u542f\u52a8\u6211\u4eec\u7684\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"AsyncServlet")," \uff0c\u5b83\u4ece\u5ba2\u6237\u7aef\u63a5\u6536 ",(0,l.kt)("strong",{parentName:"p"},"HttpRequest"),"\uff0c\u521b\u5efa ",(0,l.kt)("strong",{parentName:"p"},"HttpResponse"),"\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Provides")," \u6ce8\u91ca\u610f\u5473\u7740\u6b64\u65b9\u6cd5\u53ef\u4f5c\u4e3a\u6839HTTP\u7aef\u70b9\u76d1\u542c\u5668\u8fdb\u884c\u7ed1\u5b9a\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5b9a\u4e49\u5bf9\u6536\u5230\u7684\u8bf7\u6c42\u7684\u5904\u7406\uff0c\u6211\u4eec\u7528\u4e00\u4e2alambda\u8986\u76d6\u4e86 ",(0,l.kt)("em",{parentName:"p"},"AsyncServlet.serve")," \u65b9\u6cd5\u3002 \u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"HttpResponse")," \u7684\u627f\u8bfa\uff0c\u4ee3\u7801\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"200"),' \u548c "Hello World!"\u6b63\u6587\u3002 ActiveJ\u662f\u5b8c\u5168\u5f02\u6b65\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u7684HTTP Servlets\u4e5f\u662f\u5f02\u6b65\u7684\u3002 \u4e00\u4e2a\u7b80\u5355\u7684 ',(0,l.kt)("strong",{parentName:"p"},"HttpResponse")," \uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"/zh/async-io/promise"},"Promise")," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"HttpResponse")," \u6765\u4ee3\u66ff\uff0c\u4f7f\u5176\u6210\u4e3a\u5f02\u6b65\u7684\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5b9a\u4e49 ",(0,l.kt)("em",{parentName:"p"},"main")," \u65b9\u6cd5\uff0c\u7528 ",(0,l.kt)("em",{parentName:"p"},"launch")," \u65b9\u6cd5\u542f\u52a8\u6211\u4eec\u7684\u670d\u52a1\u5668\u3002 \u8fd9\u4e2a\u65b9\u6cd5\u6ce8\u5165\u4f9d\u8d56\u6027\uff0c\u5f00\u59cb \uff0c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u5728\u9700\u8981\u65f6\u505c\u6b62\u5b83\u3002"),(0,l.kt)("h3",{id:"3-\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f"},"3. \u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6d4b\u8bd5\u4e00\u4e0b\u8fd9\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002 \u9996\u5148\uff0c\u8fd0\u884c ",(0,l.kt)("em",{parentName:"p"},"HttpHelloWorldExample.main"),"\uff0c\u7136\u540e\u6253\u5f00\u4f60\u559c\u6b22\u7684\u6d4f\u89c8\u5668\uff0c\u8fdb\u5165 ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")," \u4f60\u5c06\u6536\u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u6d88\u606f\uff0c\u8be5\u6d88\u606f\u7531\u670d\u52a1\u5668\u5904\u7406\u3002 \u606d\u559c\u4f60\uff0c\u4f60\u521a\u521a\u521b\u5efa\u4e86\u4f60\u7684\u7b2c\u4e00\u4e2a ActiveJ\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"},"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,'\u4e3a\u4e86\u4f7fActiveJ\u5bf9\u5f00\u53d1\u8005\u66f4\u52a0\u53cb\u597d\uff0c\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u51e0\u5341\u4e2a\u4e0d\u540c\u89c4\u6a21\u7684\u6559\u7a0b\u548c\u4f8b\u5b50\uff0c \uff0c\u4ee3\u8868\u4e86\u8be5\u5e73\u53f0\u7684\u5927\u90e8\u5206\u529f\u80fd\u3002 \u70b9\u51fb "\u4e0b\u4e00\u6b65"\uff0c\u8fdb\u5165\u4e0b\u4e00\u4e2a\u6559\u7a0b\u3002 \u4f60\u4e5f\u53ef\u4ee5\u5148\u63a2\u7d22ActiveJ ',(0,l.kt)("a",{parentName:"p",href:"/zh/boot/launcher"},"docs"),"\u3002"))}d.isMDXComponent=!0}}]);