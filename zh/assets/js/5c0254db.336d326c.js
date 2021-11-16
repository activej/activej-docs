"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4889],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),v=n,d=c["".concat(l,".").concat(v)]||c[v]||m[v]||i;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77618:function(e,t,a){var r=a(67294),n=a(39962);t.Z=function(e){var t=e.url,a=e.text,i=e.isInline,s=void 0===i||i,o=e.children,l=(0,n.Z)().siteConfig,p=t.startsWith("/examples")?l.customFields.githubExamplesBranch:l.customFields.githubBranch;return r.createElement("a",{style:s?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+p+t,target:"_blank"},a||o)}},77815:function(e,t,a){a(67294);var r=a(39962);t.Z=function(e){var t=e.name,a=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===a.customFields[t])throw new Error("Variable "+t+" not exist");return a.customFields[t]}},44652:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),s=a(77618),o=a(77815),l=["components"],p={title:"ActiveJ | \u5e26\u6709\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406\u7684\u7b80\u5355\u5e94\u7528\u7a0b\u5e8f",sidebar_label:"\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406",keywords:["java","\u9002\u7528\u4e8e\u521d\u5b66\u8005","JAVA\u6846\u67b6","\u6307\u5357","\u6559\u7a0b","\u7f51\u7edc\u5e94\u7528","\u5f02\u6b65","spring","spring \u66ff\u4ee3\u65b9\u6848","netty \u66ff\u4ee3\u65b9\u6848","jetty \u66ff\u4ee3\u65b9\u6848","\u8bb8\u53ef\u8bc1","\u670d\u52a1\u5668","\u5ba2\u6237","\u5c0f\u7a0b\u5e8f"],description:"\u4f7f\u7528ActiveJ\u5e73\u53f0\uff0c\u5728\u5927\u7ea6100\u884c\u7684\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406\u7684Java\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u3002"},u="\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406",m={unversionedId:"tutorials/authorization-tutorial",id:"tutorials/authorization-tutorial",isDocsHomePage:!1,title:"ActiveJ | \u5e26\u6709\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406\u7684\u7b80\u5355\u5e94\u7528\u7a0b\u5e8f",description:"\u4f7f\u7528ActiveJ\u5e73\u53f0\uff0c\u5728\u5927\u7ea6100\u884c\u7684\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406\u7684Java\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/authorization-tutorial.mdx",sourceDirName:"tutorials",slug:"/tutorials/authorization-tutorial",permalink:"/zh/tutorials/authorization-tutorial",tags:[],version:"current",frontMatter:{title:"ActiveJ | \u5e26\u6709\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406\u7684\u7b80\u5355\u5e94\u7528\u7a0b\u5e8f",sidebar_label:"\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406",keywords:["java","\u9002\u7528\u4e8e\u521d\u5b66\u8005","JAVA\u6846\u67b6","\u6307\u5357","\u6559\u7a0b","\u7f51\u7edc\u5e94\u7528","\u5f02\u6b65","spring","spring \u66ff\u4ee3\u65b9\u6848","netty \u66ff\u4ee3\u65b9\u6848","jetty \u66ff\u4ee3\u65b9\u6848","\u8bb8\u53ef\u8bc1","\u670d\u52a1\u5668","\u5ba2\u6237","\u5c0f\u7a0b\u5e8f"],description:"\u4f7f\u7528ActiveJ\u5e73\u53f0\uff0c\u5728\u5927\u7ea6100\u884c\u7684\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406\u7684Java\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u3002"},sidebar:"tutorials",previous:{title:"HTTP\u89e3\u7801\u5668",permalink:"/zh/tutorials/http-decoder"},next:{title:"ActiveJ Docker AWS",permalink:"/zh/tutorials/getting-started-advanced"}},c=[{value:"\u521b\u5efa\u542f\u52a8\u5668",id:"\u521b\u5efa\u542f\u52a8\u5668",children:[],level:2}],v={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406"},"\u6388\u6743\u548c\u4f1a\u8bdd\u7ba1\u7406"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u6388\u6743\u5e94\u7528\uff0c\u5305\u62ec ",(0,i.kt)("strong",{parentName:"p"},"\u767b\u5f55"),"/",(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u518c")," \u573a\u666f \u548c\u4f1a\u8bdd\u7ba1\u7406\u3002"),(0,i.kt)("p",null,'ActiveJ\u4e0d\u5305\u62ec\u5185\u7f6e\u7684\u6388\u6743\u6a21\u5757\u6216\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u8fc7\u7a0b\u53ef\u80fd\u4f1a\u6709\u5f88\u5927\u7684\u4e0d\u540c\uff0c\u53d6\u51b3\u4e8e \u9879\u76ee\u7684\u4e1a\u52a1\u903b\u8f91\u3002 \u8fd9\u4e2a\u4f8b\u5b50\u4ee3\u8868\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 "\u6700\u4f73\u5b9e\u8df5"\uff0c\u4f60 \uff0c\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u9700\u8981\u8fdb\u884c\u6269\u5c55\u548c\u4fee\u6539\u3002 \u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u627e\u5230\u5b8c\u6574\u7684\u4f8b\u5b50\u6765\u6e90 ',(0,i.kt)(s.Z,{text:"GitHub",url:"/examples/tutorials/auth",mdxType:"Githublink"})),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u53ea\u8003\u8651\u4f7f\u7528ActiveJ ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncServlet"),"\u521b\u5efa\u7684 ",(0,i.kt)("a",{parentName:"p",href:"#creating-launcher"},"\u670d\u52a1\u5668"),"\u3002 \u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u5728\u5927\u7ea6100\u884c\u7684\u4ee3\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u5d4c\u5165\u5f0f\u5e94\u7528\u670d\u52a1\u5668\uff0c\u6ca1\u6709 \u989d\u5916\u7684XML\u914d\u7f6e\u6216\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa\u542f\u52a8\u5668"},"\u521b\u5efa\u542f\u52a8\u5668"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthLauncher"),"\uff0c\u5b83\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u90e8\u5206\uff0c\u56e0\u4e3a\u5b83\u7ba1\u7406\u7740\u5e94\u7528\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u3001\u8def\u7531 \u548c\u6388\u6743\u8fc7\u7a0b\u3002 \u6211\u4eec\u5c06\u4f7f\u7528ActiveJ ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerLauncher")," \u5e76\u6269\u5c55\u5b83\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_1",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_1"},'public final class AuthLauncher extends HttpServerLauncher {\n  public static final String SESSION_ID = "SESSION_ID";\n\n  @Provides\n  AuthService loginService() {\n    return new AuthServiceImpl();\n  }\n\n  @Provides\n  Executor executor() {\n    return newSingleThreadExecutor();\n  }\n\n  @Provides\n  StaticLoader staticLoader(Executor executor) {\n    return StaticLoader.ofClassPath(executor, "site/");\n  }\n\n  @Provides\n  SessionStore<String> sessionStore() {\n    return SessionStoreInMemory.<String>create()\n        .withLifetime(Duration.ofDays(30));\n  }\n\n  @Provides\n  AsyncServlet servlet(SessionStore<String> sessionStore,\n      @Named("public") AsyncServlet publicServlet, @Named("private") AsyncServlet privateServlet) {\n    return SessionServlet.create(sessionStore, SESSION_ID, publicServlet, privateServlet);\n  }\n')),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u66f4\u8be6\u7ec6\u5730\u63a2\u8ba8\u6240\u63d0\u4f9b\u7684\u5bf9\u8c61\uff1a - ",(0,i.kt)("strong",{parentName:"p"},"AuthService")," - \u6388\u6743\u548c\u6ce8\u518c\u903b\u8f91"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Executor")," - StaticLoader\u9700\u8981\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s.Z,{text:"StaticLoader",url:"/core-http/src/main/java/io/activej/http/loader/StaticLoader.java",mdxType:"Githublink"}))," - \u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"/site")," \u76ee\u5f55\u4e2d\u52a0\u8f7d\u9759\u6001\u5185\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s.Z,{text:"SessionStore",url:"/core-http/src/main/java/io/activej/http/session/SessionStore.java",mdxType:"Githublink"}))," - \u4fbf\u4e8e\u5b58\u50a8\u6709\u5173\u4f1a\u8bae\u7684\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s.Z,{text:"AsyncServlet",url:"/core-http/src/main/java/io/activej/http/AsyncServlet.java",mdxType:"Githublink"}))," ",(0,i.kt)("em",{parentName:"li"},"servlet")," - \u7ed3\u5408\u516c\u5171\u548c\u79c1\u4ebaservlet\u7684\u4e3b\u8981servlet\uff08\u7528\u4e8e\u6388\u6743\u548c\u672a\u6388\u6743\u4f1a\u8bdd\uff09\u3002 \u6b63\u5982\u4f60\u6240\u770b\u5230\u7684\uff0c\u7531\u4e8eDI\uff0c\u8fd9\u4e2aservlet\u53ea\u9700\u8981\u4e24\u4e2a\u6ca1\u6709\u81ea\u5df1\u7684\u4f9d\u8d56\u6027\u7684servlet\n\u73b0\u5728\u8ba9\u6211\u4eec\u63d0\u4f9b ",(0,i.kt)("strong",{parentName:"li"},"public")," \u548c ",(0,i.kt)("strong",{parentName:"li"},"private")," servlets\u3002 ",(0,i.kt)("em",{parentName:"li"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"AsyncServlet")," "),"publicServlet* - \u7ba1\u7406\u672a\u7ecf\u6388\u6743\u7684\u4f1a\u8bdd\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_2",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_2"},'@Provides\n@Named("public")\nAsyncServlet publicServlet(AuthService authService, SessionStore<String> store, StaticLoader staticLoader) {\n  StaticServlet staticServlet = StaticServlet.create(staticLoader, "errorPage.html");\n  return RoutingServlet.create()\n      //[START REGION_3]\n      .map("/", request -> HttpResponse.redirect302("/login"))\n      //[END REGION_3]\n      .map(GET, "/signup", StaticServlet.create(staticLoader, "signup.html"))\n      .map(GET, "/login", StaticServlet.create(staticLoader, "login.html"))\n      //[START REGION_4]\n      .map(POST, "/login", request -> request.loadBody()\n          .then(() -> {\n            Map<String, String> params = request.getPostParameters();\n            String username = params.get("username");\n            String password = params.get("password");\n            if (authService.authorize(username, password)) {\n              String sessionId = UUID.randomUUID().toString();\n\n              return store.save(sessionId, "My object saved in session")\n                  .map($ -> HttpResponse.redirect302("/members")\n                      .withCookie(HttpCookie.of(SESSION_ID, sessionId)));\n            }\n            return staticServlet.serve(request);\n          }))\n      //[END REGION_4]\n      .map(POST, "/signup", request -> request.loadBody()\n          .map($ -> {\n            Map<String, String> params = request.getPostParameters();\n            String username = params.get("username");\n            String password = params.get("password");\n\n            if (username != null && password != null) {\n              authService.register(username, password);\n            }\n            return HttpResponse.redirect302("/login");\n          }));\n}\n')),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u4ed4\u7ec6\u770b\u770b\u6211\u4eec\u662f\u5982\u4f55\u4e3aServlet\u8bbe\u7f6e\u8def\u7531\u7684\u3002 ActiveJ\u7684\u65b9\u6cd5\u7c7b\u4f3c\u4e8eExpress\u3002 \u4f8b\u5982\uff0c \u8fd9\u91cc\u662f\u672a\u6388\u6743\u7528\u6237\u5bf9\u4e3b\u9875\u7684\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_3",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_3"},'.map("/", request -> HttpResponse.redirect302("/login"))\n')),(0,i.kt)("p",null,"\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"map(@Nullable HttpMethod method, String path, AsyncServlet servlet)")," \u5c06\u8def\u7531\u6dfb\u52a0\u5230 ",(0,i.kt)(s.Z,{url:"/core-http/src/main/java/io/activej/http/RoutingServlet.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"\u547c\u53eb\u4e2d\u5fc3"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u65b9\u6cd5")," \uff08\u53ef\u9009\uff09\u662fHTTP\u65b9\u6cd5\u4e4b\u4e00\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),"\uff0c\u7b49\u7b49\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u662f\u670d\u52a1\u5668\u4e0a\u7684\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"servlet")," \u5b9a\u4e49\u4e86\u8bf7\u6c42\u5904\u7406\u7684\u903b\u8f91\u3002 \u5982\u679c\u4f60\u9700\u8981\u5728\u5904\u7406\u8fc7\u7a0b\u4e2d\u4ece ",(0,i.kt)("em",{parentName:"li"},"request")," \uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request.getPathParameter(String key"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"request. etQueryParameter(\u5bc6\u94a5)")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/http/examples#request-parameters-example"},"\u89c1\u67e5\u8be2\u53c2\u6570\u4f7f\u7528\u793a\u4f8b"),") \u4ee5\u63d0\u4f9b\u6240\u9700\u53c2\u6570\u7684\u5bc6\u94a5\u5e76\u63a5\u6536\u76f8\u5e94\u7684\u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request.getPostParameters()")," \u4ee5\u83b7\u5f97\u6240\u6709\u8bf7\u6c42\u53c2\u6570\u7684\u5730\u56fe\n",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," \u8bf7\u6c42\u7684\u8def\u5f84\u662f ",(0,i.kt)("strong",{parentName:"li"},'"/login"')," \u548c ",(0,i.kt)("strong",{parentName:"li"},'"/signup"')," \u4e0a\u4f20\u9700\u8981\u7684HTML\u9875\u9762\u3002 ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," \u8bf7\u6c42\u7684\u8def\u5f84\u662f ",(0,i.kt)("strong",{parentName:"li"},'"/login"')," \u548c ",(0,i.kt)("strong",{parentName:"li"},'"/signup"')," \uff0c\u5206\u522b\u8d1f\u8d23\u767b\u5f55\u548c\u6ce8\u518c\u7684\u903b\u8f91\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_4",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_4"},'.map(POST, "/login", request -> request.loadBody()\n    .then(() -> {\n      Map<String, String> params = request.getPostParameters();\n      String username = params.get("username");\n      String password = params.get("password");\n      if (authService.authorize(username, password)) {\n        String sessionId = UUID.randomUUID().toString();\n\n        return store.save(sessionId, "My object saved in session")\n            .map($ -> HttpResponse.redirect302("/members")\n                .withCookie(HttpCookie.of(SESSION_ID, sessionId)));\n      }\n      return staticServlet.serve(request);\n    }))\n')),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,i.kt)("strong",{parentName:"p"},'"/login"')," \u8def\u7ebf\u3002 ",(0,i.kt)("em",{parentName:"p"},"serveFirstSuccessful()")," \u63a5\u6536\u4e24\u4e2aservlet\u5e76\u7b49\u5f85\uff0c\u76f4\u5230\u5176\u4e2d\u4e00\u4e2a \u6210\u529f\u5b8c\u6210\u5904\u7406\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u6388\u6743\u5931\u8d25\uff0c\u5c06\u8fd4\u56de ",(0,i.kt)("strong",{parentName:"p"},"null")," \u7684\u627f\u8bfa\uff08",(0,i.kt)("strong",{parentName:"p"},"AsyncServlet.NEXT"),"\uff09\uff0c \uff0c\u8fd9\u610f\u5473\u7740\u5931\u8d25\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"StaticServlet")," \uff0c\u4ee5\u52a0\u8f7d ",(0,i.kt)("em",{parentName:"p"},"errorPage"),"\u3002 \u6210\u529f\u767b\u5f55\u5c06\u4e3a\u7528\u6237\u751f\u6210\u4e00\u4e2a\u4f1a\u8bdd ",(0,i.kt)("em",{parentName:"p"},"id")," \uff0c\u5e76\u5c06\u5b57\u7b26\u4e32 ",(0,i.kt)("inlineCode",{parentName:"p"},'"My saved object in session"')," \u4fdd\u5b58\u5230\u4f1a\u8bdd\u5b58\u50a8\u4e2d\u3002 \u540c\u65f6\uff0c\u5b83\u5c06\u628a\u7528\u6237\u91cd\u5b9a\u5411\u5230 ",(0,i.kt)("strong",{parentName:"p"},'"/members"'),"\u3002\n\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u770b\u4e0b\u4e00\u4e2a\u5904\u7406\u6388\u6743\u4f1a\u8bdd\u7684servlet\u3002 ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"AsyncServlet")," "),"privateServlet* - \u7ba1\u7406\u6388\u6743\u4f1a\u8bdd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_5",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_5"},'@Provides\n@Named("private")\nAsyncServlet privateServlet(StaticLoader staticLoader) {\n  return RoutingServlet.create()\n      //[START REGION_6]\n      .map("/", request -> HttpResponse.redirect302("/members"))\n      //[END REGION_6]\n      //[START REGION_7]\n      .map("/members/*", RoutingServlet.create()\n          .map(GET, "/", StaticServlet.create(staticLoader, "index.html"))\n          //[START REGION_8]\n          .map(GET, "/cookie", request ->\n              HttpResponse.ok200().withBody(wrapUtf8(request.getAttachment(String.class))))\n          //[END REGION_8]\n          .map(POST, "/logout", request ->\n              HttpResponse.redirect302("/")\n                  .withCookie(HttpCookie.of(SESSION_ID).withPath("/").withMaxAge(Duration.ZERO))));\n  //[END REGION_7]\n}\n')),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5b83\u5c06\u8bf7\u6c42\u4ece\u4e3b\u9875\u91cd\u5b9a\u5411\u5230 ",(0,i.kt)("strong",{parentName:"p"},'"/members"'),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_6",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_6"},'.map("/", request -> HttpResponse.redirect302("/members"))\n')),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5b83\u8d1f\u8d23\u5904\u7406\u6240\u6709\u5728 ",(0,i.kt)("strong",{parentName:"p"},'"/members"')," \u8def\u5f84\u4e4b\u540e\u7684\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_7",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_7"},'.map("/members/*", RoutingServlet.create()\n    .map(GET, "/", StaticServlet.create(staticLoader, "index.html"))\n    //[START REGION_8]\n    .map(GET, "/cookie", request ->\n        HttpResponse.ok200().withBody(wrapUtf8(request.getAttachment(String.class))))\n    //[END REGION_8]\n    .map(POST, "/logout", request ->\n        HttpResponse.redirect302("/")\n            .withCookie(HttpCookie.of(SESSION_ID).withPath("/").withMaxAge(Duration.ZERO))));\n')),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\u8def\u5f84 ",(0,i.kt)("strong",{parentName:"p"},'"/members/*"'),"\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," \u662f\u4e00\u4e2a\u53d8\u91cf\uff0c\u7528\u4e8e\u8def\u5f84\u7684\u4e0b\u4e00\u90e8\u5206\u3002 \u5b83\u6307\u51fa\uff0c\u8fd9\u4e2aServlet\u5c06\u5904\u7406\u4efb\u4f55\u5728 ",(0,i.kt)("strong",{parentName:"p"},'"/members/"'),"\u4e4b\u540e\u7684\u8def\u5f84\u6bb5\u3002 \u4f8b\u5982\uff0c\u8fd9\u6761\u8def\u7ebf\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_8",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_8"},'.map(GET, "/cookie", request ->\n    HttpResponse.ok200().withBody(wrapUtf8(request.getAttachment(String.class))))\n')),(0,i.kt)("p",null,"\u662f\u5bf9 ",(0,i.kt)("strong",{parentName:"p"},'"/members/cookie"')," \u8def\u5f84\u7684GET\u8bf7\u6c42\u3002 \u8be5\u8bf7\u6c42\u663e\u793a\u6240\u6709\u5b58\u50a8\u5728\u4f1a\u8bdd\u4e2d\u7684cookies\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u4e2a\u8bf7\u6c42\u53ef\u4ee5\u6709\u4e00\u4e2a\u9644\u4ef6\u56fe\uff0c\u4efb\u4f55\u5185\u5bb9\u90fd\u53ef\u4ee5\u88ab\u6620\u5c04\u5230\u67d0\u79cd\u7c7b\u578b\uff0c\u5373 \u5b57\u7b26\u4e32\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6c42\u6ca1\u6709\u9644\u4ef6\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6c42\u5305\u542b'cookies'\u4f5c\u4e3a\u9644\u4ef6\uff0c\u88ab\u6620\u5c04\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u578b\u3002 :::\n",(0,i.kt)("strong",{parentName:"p"},'"/members/logout"')," \u5c06\u7528\u6237\u6ce8\u9500\uff0c\u5220\u9664\u4e0e\u6b64\u4f1a\u8bdd\u76f8\u5173\u7684\u6240\u6709cookies\uff0c\u5e76\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230\u4e3b\u9875\u3002\n\u5728 ",(0,i.kt)("strong",{parentName:"p"},"public")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"private")," servlets\u8bbe\u7f6e\u5b8c\u6bd5\u540e\uff0c\u6211\u4eec\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," \u65b9\u6cd5\uff0c\u5b83\u5c06\u542f\u52a8\u6211\u4eec\u7684\u542f\u52a8\u5668\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/auth/src/main/java/AuthLauncher.java tag=REGION_9",url:"/examples/tutorials/auth/src/main/java/AuthLauncher.java",tag:"REGION_9"},"public static void main(String[] args) throws Exception {\n  AuthLauncher launcher = new AuthLauncher();\n  launcher.launch(args);\n}\n")),(0,i.kt)("h2",{parentName:"div",id:"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f"},"\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u60f3\u8fd0\u884c\u8be5\u793a\u4f8b\uff0c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/v5.0-beta2"},"\u514b\u9686ActiveJ")," \uff0c\u5e76\u5c06\u5176\u5bfc\u5165 \u4f5c\u4e3aMaven\u9879\u76ee\u3002 \u67e5\u9605\u5206\u652f\u673a\u6784 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"})),"\u3002 \u5728\u8fd0\u884c\u8fd9\u4e2a\u4f8b\u5b50\u4e4b\u524d\uff0c\u6784\u5efa\u9879\u76ee\uff08",(0,i.kt)("strong",{parentName:"p"},"Ctrl F9")," for IntelliJ IDEA\uff09\u3002"),(0,i.kt)("p",{parentName:"div"},"\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthLauncher")," \u7c7b\u5e76\u8fd0\u884c\u5176 ",(0,i.kt)("em",{parentName:"p"},"main()")," \u65b9\u6cd5\u3002 \u7136\u540e\u6253\u5f00\u4f60\u559c\u6b22\u7684\u6d4f\u89c8\u5668\uff0c\u8fdb\u5165 ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),"\u3002 \u5c1d\u8bd5\u6ce8\u518c\uff0c\u7136\u540e\u767b\u5f55\u3002 \u5f53 \u767b\u5f55\u65f6\uff0c\u67e5\u770b\u4f60\u4fdd\u5b58\u7684cookie\u7684\u4f1a\u8bdd\u3002 \u4f60\u4f1a\u770b\u5230\u4ee5\u4e0b\u5185\u5bb9\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6211\u5728\u4f1a\u8bdd\u4e2d\u4fdd\u5b58\u7684\u5bf9\u8c61"),"\u3002 \u6700\u540e\uff0c\u5c1d\u8bd5\u6ce8\u9500\u3002 \u4f60\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u7528\u65e0\u6548\u7684\u767b\u5f55\u540d\u6216\u5bc6\u7801\u767b\u5f55\u3002"))))}d.isMDXComponent=!0}}]);