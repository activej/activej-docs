"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3464],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,v=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77618:function(e,n,t){var r=t(67294),a=t(39962);n.Z=function(e){var n=e.url,t=e.text,i=e.isInline,l=void 0===i||i,o=e.children,c=(0,a.Z)().siteConfig,u=n.startsWith("/examples")?c.customFields.githubExamplesBranch:c.customFields.githubBranch;return r.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+u+n,target:"_blank"},t||o)}},77815:function(e,n,t){t(67294);var r=t(39962);n.Z=function(e){var n=e.name,t=(0,r.Z)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]}},56133:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return v}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=t(77618),o=t(77815),c=["components"],u={title:"ActiveJ | Launcher, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",sidebar_label:"Launcher",description:"ActiveJ Launcher \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u044b\u0435 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b.",keywords:["launcher","java launcher","\u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","java framework","spring \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430"]},p="Launcher",s={unversionedId:"boot/launcher",id:"boot/launcher",isDocsHomePage:!1,title:"ActiveJ | Launcher, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",description:"ActiveJ Launcher \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u044b\u0435 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/boot/launcher.mdx",sourceDirName:"boot",slug:"/boot/launcher",permalink:"/ru/boot/launcher",tags:[],version:"current",frontMatter:{title:"ActiveJ | Launcher, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",sidebar_label:"Launcher",description:"ActiveJ Launcher \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0443\u0436\u0431\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u044b\u0435 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b.",keywords:["launcher","java launcher","\u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","java framework","spring \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","netty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430","jetty \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430"]},sidebar:"docs",previous:{title:"Net",permalink:"/ru/async-io/net"},next:{title:"Service Graph",permalink:"/ru/boot/servicegraph"}},m=[{value:"\u041e\u0431\u0437\u043e\u0440",id:"\u043e\u0431\u0437\u043e\u0440",children:[],level:2},{value:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",id:"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",children:[],level:2},{value:"Launcher \u0432 \u0434\u0432\u0443\u0445 \u0441\u043b\u043e\u0432\u0430\u0445",id:"launcher-\u0432-\u0434\u0432\u0443\u0445-\u0441\u043b\u043e\u0432\u0430\u0445",children:[],level:2},{value:"\u0411\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432",id:"\u0431\u043e\u043b\u044c\u0448\u0435-\u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432",children:[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 Hello World",id:"\u043f\u0440\u0438\u043c\u0435\u0440-hello-world",children:[],level:3},{value:"HTTP-\u0441\u0435\u0440\u0432\u0435\u0440 \u0441 \u043d\u0443\u043b\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Launcher",id:"http-\u0441\u0435\u0440\u0432\u0435\u0440-\u0441-\u043d\u0443\u043b\u044f-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-launcher",children:[],level:3},{value:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",children:[],level:3}],level:2}],d={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"launcher"},"Launcher"),(0,i.kt)("h2",{id:"\u043e\u0431\u0437\u043e\u0440"},"\u041e\u0431\u0437\u043e\u0440"),(0,i.kt)("p",null,"Launcher - \u044d\u0442\u043e, \u043f\u043e \u0441\u0443\u0442\u0438, \u0432\u044b\u0441\u043e\u043a\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0438 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," . \u041e\u043d \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0432\u043c\u0435\u0441\u0442\u0435 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,i.kt)("h2",{id:"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"},"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0418\u0434\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u0441 ",(0,i.kt)("a",{parentName:"li",href:"/ru/inject"},"ActiveJ Inject")),(0,i.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d \u0441 ",(0,i.kt)("a",{parentName:"li",href:"/ru/boot/servicegraph"},"Service Graph")," \u0434\u043b\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430/\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u0443\u0441\u043b\u0443\u0433."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441\u043b\u0443\u0436\u0431"),(0,i.kt)("li",{parentName:"ul"},"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u044b\u0439 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u0430")),(0,i.kt)("h2",{id:"launcher-\u0432-\u0434\u0432\u0443\u0445-\u0441\u043b\u043e\u0432\u0430\u0445"},"Launcher \u0432 \u0434\u0432\u0443\u0445 \u0441\u043b\u043e\u0432\u0430\u0445"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)(l.Z,{url:"/launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"a"},"Launcher")))," - \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u044f\u0432\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043d\u044f\u0442\u044c, \u043a\u0430\u043a \u043e\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0432 \u043d\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0435\u0433\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"launch()")," \u0432 \u0434\u0432\u0443\u0445 \u0441\u043b\u043e\u0432\u0430\u0445:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public void launch(String[] args) throws Exception {\n    logger.info("=== INJECTING DEPENDENCIES");\n    Injector injector = createInjector(args);\n    logger.info("Eager instances: " + injector.createEagerInstances());\n    Set<LauncherService> services = injector.getInstance(new Key<Set<LauncherService>>() {});\n    Set<LauncherService> startedServices = new HashSet<>();\n    logger.info("Post-inject instances: " + injector.postInjectInstances());\n\n    logger.info("=== STARTING APPLICATION");\n    logger.info("Starting LauncherServices: " + services);\n    startServices(services, startedServices);\n    onStart();\n    onStartFuture.complete(null);\n\n    logger.info("=== RUNNING APPLICATION");\n    run();\n    onRunFuture.complete(null);\n\n    logger.info("=== STOPPING APPLICATION");\n    onStop();\n    stopServices(startedServices);\n    onCompleteFuture.complete(null);\n')),(0,i.kt)("p",null,"\u041f\u043e\u0448\u0430\u0433\u043e\u0432\u044b\u0439 \u044d\u043a\u0437\u0430\u043c\u0435\u043d:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c ",(0,i.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"Injector"))," \u0441 ",(0,i.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/module/Module.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"\u041c\u043e\u0434\u0443\u043b\u0438"))," \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"Launcher")),(0,i.kt)("li",{parentName:"ul"},"\u0418\u043d\u0436\u0435\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0432 \u0441\u0430\u043c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",(0,i.kt)("inlineCode",{parentName:"li"},"Launcher")," ."),(0,i.kt)("li",{parentName:"ul"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0432\u0441\u0435 \u043a\u043b\u044e\u0447\u0438, \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u043a\u0430\u043a ",(0,i.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/annotation/Eager.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"li"},"@Eager"))," \u043c\u043d\u043e\u0433\u043e\u0441\u0432\u044f\u0437\u0443\u044e\u0449\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u043a\u043b\u0430\u0432\u0438\u0448, \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"Launcher.")),(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u0438\u0437 \u043d\u0430\u0431\u043e\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"Set<LauncherService>")," multibinder set, \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 ",(0,i.kt)("strong",{parentName:"li"},"Launcher's Modules"),", \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"li"},"onStart()")," ."),(0,i.kt)("li",{parentName:"ul"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"run()")," \u043c\u0435\u0442\u043e\u0434"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"run()")," (\u043b\u0438\u0431\u043e \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439, \u043b\u0438\u0431\u043e \u0432 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 SIGKILL), \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"li"},"onStop()")," \u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u043b\u0443\u0436\u0431\u044b")),(0,i.kt)("p",null,"\u0412\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," , \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u0432\u0438\u0434\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u043e\u0432 (\u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, ",(0,i.kt)(l.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/HttpServerLauncher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher"))," \u043f\u043e\u0434\u043a\u043b\u0430\u0441\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,i.kt)(l.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncHttpServer.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"AsyncHttpServer")),", an ",(0,i.kt)("a",{parentName:"p",href:"/ru/async-io/eventloop"},(0,i.kt)("inlineCode",{parentName:"a"},"Eventloop"))," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/boot/config"},(0,i.kt)("inlineCode",{parentName:"a"},"Config")),"). \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/tutorials/getting-started"},"\u044d\u0442\u043e\u0442")," \u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,"\u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u043e\u0445\u043e\u0436\u0438\u0445 \u0436\u0443\u0440\u043d\u0430\u043b\u043e\u0432:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," === INJECTING DEPENDENCIES\nCreated eager singletons\nPost-injected instances: [HttpHelloWorldExample]\n\n=== STARTING APPLICATION\nStarting LauncherServices: [io.active.net.jmx.JmxModule, io.active.net.service.ServiceGraphModule]\nStarting LauncherService: io.active.net.jmx.JmxModule\nStarting LauncherService: io.active.net.service.ServiceGraphModule\nCreating ServiceGraph...\n\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043b\u0443\u0436\u0431\n\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 [/0.0.0.0:8080]: AsyncHttpServer{listenAddresses=[/0.0.0.0:8080]}\nStarted io.active.net.http.AsyncHttpServer\n\n=== RUNNING APPLICATION\nHTTP Server is listening on http://localhost:8080/\n\n=== STOPPING APPLICATION\nStopping LauncherService: io.active.net.jmx.JmxModule\nStopping LauncherService: io.active.net.service.ServiceGraphModule\nStopping ServiceGraph...\n\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0443\u0441\u043b\u0443\u0433\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Launcher")," \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043e\u0442 \u0441\u0432\u043e\u0438\u0445 ",(0,i.kt)("strong",{parentName:"li"},"\u041c\u043e\u0434\u0443\u043b\u0435\u0439"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Eager")," \u043c\u043d\u043e\u0433\u043e\u0441\u0432\u044f\u0437\u0443\u044e\u0449\u0430\u044f \u043a\u043b\u044e\u0447\u0435\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u041d\u0430\u0431\u043e\u0440<LauncherService>")," \u043c\u043d\u043e\u0433\u043e\u043f\u0435\u0440\u0435\u043f\u043b\u0435\u0442\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0441\u0432\u043e\u0438 ",(0,i.kt)("strong",{parentName:"p"},"\u041c\u043e\u0434\u0443\u043b\u0438"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Launcher{\n    @NotNull\n    public final Injector createInjector() {\n       return Injector.of(getInternalModule()\n                      .combineWith(getModule())\n                      .overrideWith(getOverrideModule()));\n    }\n\n  private Module getInternalModule() {\n     Class<Launcher> launcherClass = (Class<Launcher>) getClass();\n     Key<CompletionStage<Void>> completionStageKey = new Key<CompletionStage<Void>>() {};\n\n     return Module.create()\n         .bind(String[].class).annotatedWith(Args.class).toInstance(args)\n         .bind(Launcher.class).to(launcherClass)\n         .bind(launcherClass).toInstance(this)\n\n         .postInjectInto(launcherClass)\n         .bind(completionStageKey.named(OnStart.class)).toInstance(onStartFuture)\n         .bind(completionStageKey.named(OnRun.class)).toInstance(onRunFuture)\n         .bind(completionStageKey.named(OnComplete.class)).toInstance(onCompleteFuture)\n\n         .scan(Launcher.this);\n    }\n\n  // \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u043f\u043e\u0434\u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u044e\u0442 Launcher,\n  // \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u043c\u043e\u0434\u0443\u043b\u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ConfigModule)\n  protected Module getModule() {\n      return Module.empty();\n  }\n\n  // \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u043f\u043e\u0434\u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438, \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u044e\u0449\u0438\u043c\u0438 Launcher,\n  // \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u0435\n  protected Module getOverrideModule() {\n      return Module.empty();\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Args String[]")," \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0441\u0432\u043e\u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"Launcher.launch(String[] args)")," , \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0443 ",(0,i.kt)("inlineCode",{parentName:"li"},"main(String[] args)")," ."),(0,i.kt)("li",{parentName:"ul"},"\u0421\u0430\u043c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",(0,i.kt)("inlineCode",{parentName:"li"},"Launcher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@OnStart")," ",(0,i.kt)("inlineCode",{parentName:"li"},"CompletionStage<Void>")," \u0431\u0443\u0434\u0443\u0449\u0435\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@OnRun")," ",(0,i.kt)("inlineCode",{parentName:"li"},"CompletionStage<Void>")," \u0431\u0443\u0434\u0443\u0449\u0435\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"Launcher.run()")," \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@OnComplete")," ",(0,i.kt)("inlineCode",{parentName:"li"},"CompletionStage<Void>")," \u0431\u0443\u0434\u0443\u0449\u0435\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," \u0442\u0430\u043a\u0436\u0435 \u0438\u043c\u0435\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u044b\u0435 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438 JMX \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a, \u0437\u0430\u043f\u0443\u0441\u043a, \u0437\u0430\u043f\u0443\u0441\u043a, \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0430\u0440\u0442\u0430, \u043f\u0440\u043e\u0431\u0435\u0433\u0430, \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u043e\u0431\u0449\u0430\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),(0,i.kt)("li",{parentName:"ul"},"Throwable ",(0,i.kt)("em",{parentName:"li"},"applicationError")," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e")),(0,i.kt)("h2",{id:"\u0431\u043e\u043b\u044c\u0448\u0435-\u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432"},"\u0411\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c ActiveJ \u0441 GitHub"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.kt)("p",{parentName:"div"},"\u0418 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u043a\u0430\u043a \u043f\u0440\u043e\u0435\u043a\u0442 Maven. \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0435\u0433 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"})),". \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u0431\u043e\u0440\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u042d\u0442\u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/core/datastream.")))),(0,i.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-hello-world"},"\u041f\u0440\u0438\u043c\u0435\u0440 Hello World"),(0,i.kt)("p",null,'\u0412\u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 "Hello World" Launcher \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ActiveJ Inject:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/HelloWorldExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/HelloWorldExample.java",tag:"EXAMPLE"},'public final class HelloWorldExample extends Launcher {\n  @Inject\n  String message;\n\n  @Provides\n  String message() {\n    return "Hello, world!";\n  }\n\n  @Override\n  protected void run() {\n    System.out.println(message);\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/boot/src/main/java/HelloWorldExample.java",mdxType:"Githublink"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 GitHub."))),(0,i.kt)("h3",{id:"http-\u0441\u0435\u0440\u0432\u0435\u0440-\u0441-\u043d\u0443\u043b\u044f-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-launcher"},"HTTP-\u0441\u0435\u0440\u0432\u0435\u0440 \u0441 \u043d\u0443\u043b\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Launcher"),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u0438\u043b\u0438 \u043b\u044e\u0431\u044b\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u0438\u0431\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f (",(0,i.kt)("a",{parentName:"p",href:"/ru/http/examples#hello-world-server-with-pre-defined-launcher"},"\u0441\u043c. \u043f\u0440\u0438\u043c\u0435\u0440\u044b"),"), \u043b\u0438\u0431\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 Launcher. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f \u043e\u0431\u043e \u0432\u0441\u0435\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u0445 \u0438 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/http/src/main/java/CustomHttpServerExample.java tag=EXAMPLE",url:"/examples/core/http/src/main/java/CustomHttpServerExample.java",tag:"EXAMPLE"},'public final class CustomHttpServerExample extends Launcher {\n  private static final int PORT = 8080;\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create();\n  }\n\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200()\n        .withPlainText("Hello from HTTP server");\n  }\n\n  @Provides\n  @Eager\n  AsyncHttpServer server(Eventloop eventloop, AsyncServlet servlet) {\n    return AsyncHttpServer.create(eventloop, servlet).withListenPort(PORT);\n  }\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @Override\n  protected void run() throws Exception {\n    logger.info("HTTP Server is now available at http://localhost:" + PORT);\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new CustomHttpServerExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/http/src/main/java/CustomHttpServerExample.java",mdxType:"Githublink"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 GitHub."))),(0,i.kt)("h3",{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b"},"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," , \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u044d\u0442\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0432 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher#launch")," . \u0422\u043e\u0433\u0434\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c: - \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"String[] args")," field - \u0417\u0430\u043f\u0440\u043e\u0441 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Dependency Injection. \u041a\u043b\u044e\u0447 - \u044d\u0442\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"String[].class")," , \u0430\u043d\u043d\u043e\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0435\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Args")," . \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043e\u0431\u0430 \u0441\u043b\u0443\u0447\u0430\u044f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/LauncherArgsExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/LauncherArgsExample.java",tag:"EXAMPLE"},'public final class LauncherArgsExample extends Launcher {\n\n  @Inject\n  Injector injector;\n\n  @Override\n  protected void run() {\n    System.out.println("Received args: " + Arrays.toString(args));\n\n    String[] injectedArgs = injector.getInstance(Key.of(String[].class, Args.class));\n    System.out.println("Args retrieved from DI: " + Arrays.toString(injectedArgs));\n  }\n\n  public static void main(String[] args) throws Exception {\n    new LauncherArgsExample().launch(args);\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{url:"/examples/core/boot/src/main/java/LauncherArgsExample.java",mdxType:"Githublink"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 GitHub."))))}v.isMDXComponent=!0}}]);