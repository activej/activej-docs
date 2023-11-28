"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1809],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return t?r.createElement(v,o(o({ref:n},l),{},{components:t})):r.createElement(v,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77618:function(e,n,t){var r=t(67294),a=t(39962);n.Z=function(e){var n=e.url,t=e.text,c=e.isInline,o=void 0===c||c,i=e.children,s=(0,a.Z)().siteConfig,p=n.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return r.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+p+n,target:"_blank"},t||i)}},77815:function(e,n,t){t(67294);var r=t(39962);n.Z=function(e){var n=e.name,t=(0,r.Z)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]}},61302:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return v}});var r=t(83117),a=t(80102),c=(t(67294),t(3905)),o=t(77618),i=t(77815),s=["components"],p={description:"\u7528\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u7684\u95ea\u7535\u5f0f\u4e8c\u8fdb\u5236\u534f\u8bae",sidebar_label:"\u57fa\u672c\u5b9e\u4f8b",keywords:["java","JAVA\u6846\u67b6","\u6559\u7a0b","\u6307\u5357","\u8bb0\u5fc6\u5e93","rpc","\u5ba2\u6237\u7aef-\u670d\u52a1\u5668","\u7f51\u7edc\u5e94\u7528","\u5fae\u670d\u52a1"]},l="\u57fa\u672c\u5b9e\u4f8b",d={unversionedId:"rpc/basic-examples",id:"rpc/basic-examples",isDocsHomePage:!1,title:"\u57fa\u672c\u5b9e\u4f8b",description:"\u7528\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u7684\u95ea\u7535\u5f0f\u4e8c\u8fdb\u5236\u534f\u8bae",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rpc/basic-examples.mdx",sourceDirName:"rpc",slug:"/rpc/basic-examples",permalink:"/zh/rpc/basic-examples",tags:[],version:"current",frontMatter:{description:"\u7528\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u7684\u95ea\u7535\u5f0f\u4e8c\u8fdb\u5236\u534f\u8bae",sidebar_label:"\u57fa\u672c\u5b9e\u4f8b",keywords:["java","JAVA\u6846\u67b6","\u6559\u7a0b","\u6307\u5357","\u8bb0\u5fc6\u5e93","rpc","\u5ba2\u6237\u7aef-\u670d\u52a1\u5668","\u7f51\u7edc\u5e94\u7528","\u5fae\u670d\u52a1"]},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/zh/rpc"},next:{title:"\u952e\u503c\u5b58\u50a8",permalink:"/zh/rpc/key-value-storage"}},u=[{value:"\u7b80\u5355\u7684RPC\u5b9e\u4f8b",id:"\u7b80\u5355\u7684rpc\u5b9e\u4f8b",children:[],level:2},{value:"\u5706\u73af\u6218\u7565",id:"\u5706\u73af\u6218\u7565",children:[],level:2},{value:"\u5706\u5468\u7387\u548c\u5148\u53d1\u5236\u4eba\u6218\u7565\u76f8\u7ed3\u5408",id:"\u5706\u5468\u7387\u548c\u5148\u53d1\u5236\u4eba\u6218\u7565\u76f8\u7ed3\u5408",children:[],level:2},{value:"\u5206\u7247\u7ba1\u7406\u548c\u9996\u6b21\u6709\u6548\u7b56\u7565\u7684\u7ed3\u5408",id:"\u5206\u7247\u7ba1\u7406\u548c\u9996\u6b21\u6709\u6548\u7b56\u7565\u7684\u7ed3\u5408",children:[],level:2},{value:"\u4f1a\u5408\u54c8\u5e0c\u7b56\u7565",id:"\u4f1a\u5408\u54c8\u5e0c\u7b56\u7565",children:[],level:2},{value:"\u7c7b\u578b \u8c03\u5ea6\u7b56\u7565",id:"\u7c7b\u578b-\u8c03\u5ea6\u7b56\u7565",children:[],level:2}],m={toc:u};function v(e){var n=e.components,t=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u57fa\u672c\u5b9e\u4f8b"},"\u57fa\u672c\u5b9e\u4f8b"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u8981\u8fd0\u884c\u4f8b\u5b50\uff0c\u4f60\u9700\u8981\u4eceGitHub\u514b\u9686ActiveJ"),(0,c.kt)("pre",{parentName:"div"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,c.kt)("p",{parentName:"div"},"\u5e76\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2aMaven\u9879\u76ee\u5bfc\u5165\u3002 \u67e5\u770b\u6807\u7b7e ",(0,c.kt)("strong",{parentName:"p"},(0,c.kt)(i.Z,{name:"currentVersion",mdxType:"Variable"})),"\u3002 \u5728\u8fd0\u884c\u8fd9\u4e9b\u4f8b\u5b50\u4e4b\u524d\uff0c\u5148\u5efa\u7acb\u9879\u76ee\u3002 ",(0,c.kt)("strong",{parentName:"p"},"\u7b80\u5355\u7684RPC\u5b9e\u4f8b")," \uff0c\u4f4d\u4e8e ",(0,c.kt)("inlineCode",{parentName:"p"},"activej/examples/cloud/rpc\u3002")),(0,c.kt)("p",{parentName:"div"},"RPC\u7b56\u7565\u7684\u4f8b\u5b50\u4f4d\u4e8e ",(0,c.kt)("inlineCode",{parentName:"p"},"activej/cloud-rpc/src/test/RpcStrategiesTest\u3002")))),(0,c.kt)("h2",{id:"\u7b80\u5355\u7684rpc\u5b9e\u4f8b"},"\u7b80\u5355\u7684RPC\u5b9e\u4f8b"),(0,c.kt)("p",null,'\u5728 "Hello World "\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668 ',(0,c.kt)("strong",{parentName:"p"},"RPC\u5b9e\u4f8b"),"\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u4e86\u4e00\u4e2a\u5305\u542b\u5355\u8bcd ",(0,c.kt)("inlineCode",{parentName:"p"},'"World "')," \u7684\u8bf7\u6c42\u7ed9\u670d\u52a1\u5668\u3002 \u5f53 \u670d\u52a1\u5668\u6536\u5230\u5b83\u65f6\uff0c\u5b83\u5c06\u53d1\u9001\u4e00\u4e2a\u5305\u542b\u5355\u8bcd ",(0,c.kt)("inlineCode",{parentName:"p"},'"Hello "'),"\u7684\u54cd\u5e94\u3002 \u5982\u679c\u4e00\u5207\u987a\u5229\u5b8c\u6210\uff0c\u6211\u4eec\u4f1a\u5f97\u5230 \u4ee5\u4e0b\u8f93\u51fa\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"\u5f97\u5230\u7684\u7ed3\u679c\u3002\u4f60\u597d\uff0c\u4e16\u754c\n")),(0,c.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u5b9e\u65bd\u60c5\u51b5\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/cloud/rpc/src/main/java/RpcExample.java tag=EXAMPLE",url:"/examples/cloud/rpc/src/main/java/RpcExample.java",tag:"EXAMPLE"},'public class RpcExample extends Launcher {\n  private static final int SERVICE_PORT = 34765;\n\n  @Inject\n  private IRpcClient client;\n\n  @Inject\n  private RpcServer server;\n\n  @Inject\n  private Reactor reactor;\n\n  @Provides\n  NioReactor reactor() {\n    return Eventloop.create();\n  }\n\n  @Provides\n  RpcServer rpcServer(NioReactor reactor) {\n    return RpcServer.builder(reactor)\n      .withMessageTypes(String.class)\n      .withHandler(String.class,\n        request -> Promise.of("Hello " + request))\n      .withListenPort(SERVICE_PORT)\n      .build();\n  }\n\n  @Provides\n  IRpcClient rpcClient(NioReactor reactor) {\n    return RpcClient.builder(reactor)\n      .withMessageTypes(String.class)\n      .withStrategy(server(new InetSocketAddress(SERVICE_PORT)))\n      .build();\n  }\n\n  @ProvidesIntoSet\n  Initializer<ServiceGraphModuleSettings> configureServiceGraph() {\n    // add logical dependency so that service graph starts client only after it started the server\n    return settings -> settings.withDependency(Key.of(IRpcClient.class), Key.of(RpcServer.class));\n  }\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @Override\n  protected void run() throws ExecutionException, InterruptedException {\n    CompletableFuture<Object> future = reactor.submit(() ->\n      client.sendRequest("World", 1000)\n    );\n    System.out.printf("%nRPC result: %s %n%n", future.get());\n  }\n\n  public static void main(String[] args) throws Exception {\n    RpcExample example = new RpcExample();\n    example.launch(args);\n  }\n}\n')),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"RpcExample")," class extends ",(0,c.kt)("a",{parentName:"p",href:"/zh/boot/launcher"},"ActiveJ ",(0,c.kt)("inlineCode",{parentName:"a"},"Launcher"))," to help us manage application lifecycle.\n\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165\u5e93 ",(0,c.kt)("a",{parentName:"p",href:"/zh/inject"},"ActiveJ Inject")," \u6765\u63d0\u4f9b ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/server/RpcServer.java",mdxType:"Githublink"},(0,c.kt)("inlineCode",{parentName:"p"},"RpcServer"))," \u548c ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/client/RpcClient.java",mdxType:"Githublink"},(0,c.kt)("inlineCode",{parentName:"p"},"\u547c\u53eb\u4e2d\u5fc3"))," \u5177\u5907\u76f8\u5173\u7684\u914d\u7f6e\u548c\u6240\u9700\u7684\u4f9d\u8d56\u6027\u3002 ",(0,c.kt)("inlineCode",{parentName:"p"},"RpcClient")," \u6839\u636e\u6240\u63d0\u4f9b\u7684\u4fe1\u606f\uff0c\u5411\u6307\u5b9a\u7684\u670d\u52a1\u5668\u53d1\u9001\u5e26\u6709\u5b57\u7b26\u4e32\u4fe1\u606f\u7684\u8bf7\u6c42\u3002 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcStrategies.java",mdxType:"Githublink"},"RPC\u6218\u7565")," (\u5f97\u5230\u4e00\u4e2a\u5355\u4e00\u7684RPC\u670d\u52a1)\u3002 \u5bf9\u4e8e ",(0,c.kt)("inlineCode",{parentName:"p"},"RpcServer")," \uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u8981\u8fdb\u884c\u7684\u6d88\u606f\u7684\u7c7b\u578b\uff0c\u4e00\u4e2a\u76f8\u5e94\u7684 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/server/RpcRequestHandler.java",mdxType:"Githublink"},(0,c.kt)("inlineCode",{parentName:"p"},"\u547c\u53eb\u4e2d\u5fc3\uff08RpcRequestHandler"))," \u548c\u4e00\u4e2a\u76d1\u542c\u5668\u7aef\u53e3\u3002\n\u7531\u4e8e\u6211\u4eec\u6269\u5c55\u4e86 ",(0,c.kt)("inlineCode",{parentName:"p"},"Launcher"),"\uff0c\u6211\u4eec\u8fd8\u5c06\u8986\u76d62\u4e2a\u65b9\u6cd5\uff1a ",(0,c.kt)("inlineCode",{parentName:"p"},"getModule")," \uff0c\u4ee5\u63d0\u4f9b ",(0,c.kt)("a",{parentName:"p",href:"/zh/boot/servicegraph"},(0,c.kt)("inlineCode",{parentName:"a"},"ServiceGraphModule"))," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"run")," \u6765\u63cf\u8ff0\u8fd9\u4e2a\u4f8b\u5b50\u7684\u4e3b\u8981\u903b\u8f91\u3002\n\u6700\u540e\uff0c\u6211\u4eec\u5b9a\u4e49 ",(0,c.kt)("inlineCode",{parentName:"p"},"main")," \u65b9\u6cd5\uff0c\u5b83\u5c06\u542f\u52a8\u6211\u4eec\u7684\u4f8b\u5b50\u3002\n\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,c.kt)(o.Z,{url:"/examples/cloud/rpc/src/main/java/RpcExample.java",mdxType:"Githublink"},(0,c.kt)("strong",{parentName:"p"},"GitHub"))),(0,c.kt)("h2",{id:"\u5706\u73af\u6218\u7565"},"\u5706\u73af\u6218\u7565"),(0,c.kt)("p",null,"ActiveJ RPC\u5305\u542b\u9884\u5b9a\u4e49\u7684\u7b56\u7565\uff0c\u7528\u4e8eRPC\u670d\u52a1\u5668\u6216\u670d\u52a1\u5668\u5206\u7247\u4e4b\u95f4\u7684\u8bf7\u6c42\u5b89\u6392\u3002 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcStrategyRoundRobin.java",mdxType:"Githublink"},"\u5706\u6eda\u6eda")," \u662f\u6700\u7b80\u5355\u7684\u7b56\u7565\u4e4b\u4e00\uff1a\u5b83\u53ea\u662f\u4ee5\u5faa\u73af\u7684\u65b9\u5f0f\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5730\u7a7f\u8fc7\u670d\u52a1\u5668\u6216\u788e\u7247\u3002\n\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2aRPC ",(0,c.kt)("em",{parentName:"p"},"\u6c60")," \uff0c\u67095\u4e2a\u76f8\u7b49\u7684 ",(0,c.kt)("em",{parentName:"p"},"\u8fde\u63a5")," \uff0c\u5e76\u4e3a\u5b83\u4eec\u8bbe\u7f6e\u4e86Round-Robin\u7b56\u7565\u3002 \u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7528\u4e4b\u524d\u5b9a\u4e49\u7684\u7b56\u7565\u4e3a\u6c34\u6c60\u521b\u5efa\u4e00\u4e2a\u53d1\u9001\u5668\u3002 \u5c31\u662f\u8fd9\u6837\uff0c100\u4e2a\u8bf7\u6c42\u5c06\u5728\u670d\u52a1\u5668\u4e4b\u95f4\u5e73\u5747\u5206\u914d\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java tag=REGION_1",url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java",tag:"REGION_1"},"public void roundRobinTest() {\n  RpcClientConnectionPoolStub pool = new RpcClientConnectionPoolStub();\n  RpcSenderStub connection1 = new RpcSenderStub();\n  RpcSenderStub connection2 = new RpcSenderStub();\n  RpcSenderStub connection3 = new RpcSenderStub();\n  RpcSenderStub connection4 = new RpcSenderStub();\n  RpcSenderStub connection5 = new RpcSenderStub();\n  pool.put(address1, connection1);\n  pool.put(address2, connection2);\n  pool.put(address3, connection3);\n  pool.put(address4, connection4);\n  pool.put(address5, connection5);\n  int iterations = 100;\n  RpcStrategy strategy = RpcStrategies.roundRobin(servers(address1, address2, address3, address4, address5));\n\n  RpcSender sender = strategy.createSender(pool);\n  for (int i = 0; i < iterations; i++) {\n    sender.sendRequest(new Object(), 50, ignore());\n  }\n\n  List<RpcSenderStub> connections =\n    List.of(connection1, connection2, connection3, connection4, connection5);\n  for (int i = 0; i < 5; i++) {\n    assertEquals(iterations / 5, connections.get(i).getRequests());\n  }\n}\n")),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java#L32",mdxType:"Githublink"},(0,c.kt)("strong",{parentName:"p"},"GitHub"))),(0,c.kt)("h2",{id:"\u5706\u5468\u7387\u548c\u5148\u53d1\u5236\u4eba\u6218\u7565\u76f8\u7ed3\u5408"},"\u5706\u5468\u7387\u548c\u5148\u53d1\u5236\u4eba\u6218\u7565\u76f8\u7ed3\u5408"),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u7ed3\u5408RPC\u7b56\u7565\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u7ed3\u5408 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcStrategyRoundRobin.java",mdxType:"Githublink"},"\u5faa\u73af\u8d5b")," \u548c ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcStrategyFirstAvailable.java",mdxType:"Githublink"},"\u9996\u6b21\u63d0\u4f9b")," \u6218\u7565\u3002\n\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa4\u4e2a\u8fde\u63a5\uff0c\u800c\u4e0d\u628a ",(0,c.kt)("em",{parentName:"p"},"connection3")," \u5230\u6c60\u4e2d\u3002 \u7136\u540e\u6211\u4eec\u5f00\u59cb\u53d1\u900120\u4e2a\u8bf7\u6c42\u3002 \u56e0\u6b64\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u5c06\u88ab\u5e73\u5747\u5206\u914d\u5230 ",(0,c.kt)("em",{parentName:"p"},"connection1")," \uff08\u56e0\u4e3a\u5b83\u603b\u662f ",(0,c.kt)("em",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u53ef\u7528\u7684"),"\uff09\u548c ",(0,c.kt)("em",{parentName:"p"},"connection4")," \uff08\u56e0\u4e3a ",(0,c.kt)("em",{parentName:"p"},"connection3")," \u4e0d\u5728\u6c60\u5b50\u91cc\uff09\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java tag=REGION_1",url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java",tag:"REGION_1"},"public void roundRobinTest() {\n  RpcClientConnectionPoolStub pool = new RpcClientConnectionPoolStub();\n  RpcSenderStub connection1 = new RpcSenderStub();\n  RpcSenderStub connection2 = new RpcSenderStub();\n  RpcSenderStub connection3 = new RpcSenderStub();\n  RpcSenderStub connection4 = new RpcSenderStub();\n  RpcSenderStub connection5 = new RpcSenderStub();\n  pool.put(address1, connection1);\n  pool.put(address2, connection2);\n  pool.put(address3, connection3);\n  pool.put(address4, connection4);\n  pool.put(address5, connection5);\n  int iterations = 100;\n  RpcStrategy strategy = RpcStrategies.roundRobin(servers(address1, address2, address3, address4, address5));\n\n  RpcSender sender = strategy.createSender(pool);\n  for (int i = 0; i < iterations; i++) {\n    sender.sendRequest(new Object(), 50, ignore());\n  }\n\n  List<RpcSenderStub> connections =\n    List.of(connection1, connection2, connection3, connection4, connection5);\n  for (int i = 0; i < 5; i++) {\n    assertEquals(iterations / 5, connections.get(i).getRequests());\n  }\n}\n")),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,c.kt)(o.Z,{text:"GitHub",url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java#L62",mdxType:"Githublink"})),(0,c.kt)("h2",{id:"\u5206\u7247\u7ba1\u7406\u548c\u9996\u6b21\u6709\u6548\u7b56\u7565\u7684\u7ed3\u5408"},"\u5206\u7247\u7ba1\u7406\u548c\u9996\u6b21\u6709\u6548\u7b56\u7565\u7684\u7ed3\u5408"),(0,c.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u5206\u7247\u51fd\u6570\uff0c\u5e76\u5728\u9700\u8981\u65f6\u5c06\u5176\u4e0e\u5176\u4ed6\u7b56\u7565\u76f8\u7ed3\u5408\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e865\u4e2a\u76f8\u7b49\u7684\u8fde\u63a5\uff0c\u4f46\u6ca1\u6709\u628a ",(0,c.kt)("em",{parentName:"p"},"connection2")," \u5230\u6c60\u4e2d\u3002 \u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u5206\u7247\u529f\u80fd\uff0c\u6839\u636e\u8bf7\u6c42\u7684\u5185\u5bb9\u5728\u5206\u7247\u4e4b\u95f4\u5206\u914d\u8bf7\u6c42\u3002 \u6211\u4eec\u628a\u8fde\u63a5\u5206\u6210\u4e24\u4e2a\u788e\u7247\uff0c\u5e76\u4e3a\u8fd9\u4e24\u4e2a\u788e\u7247\u8bbe\u7f6e ",(0,c.kt)(o.Z,{text:"First Valid Result",url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcStrategyFirstValidResult.java",mdxType:"Githublink"})," \u7b56\u7565\u3002 \u8fd9\u79cd\u7b56\u7565\u5411\u6240\u6709\u53ef\u7528\u7684\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u3002\n\u73b0\u5728\uff0c\u6211\u4eec\u624b\u52a8\u53d1\u90017\u4e2a\u8bf7\u6c42\uff1a ",(0,c.kt)("em",{parentName:"p"}," 4\uff0c\u5176\u4e2d ",(0,c.kt)("inlineCode",{parentName:"em"},"0")," \u6d88\u606f\uff0c\u6240\u4ee5\u5b83\u4eec\u5c06\u88ab\u53d1\u9001\u5230\u7b2c\u4e00\u4e2a\u5206\u7247\u7684 "),"connection1* * 3\uff0c\u5176\u4e2d ",(0,c.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u6240\u4ee5\u5b83\u4eec\u90fd\u5c06\u88ab\u53d1\u9001\u5230\u7b2c\u4e8c\u4e2a\u5206\u7247\u7684\u6240\u6709\u4e09\u4e2a\u8fde\u63a5\u4e0a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java tag=REGION_1",url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java",tag:"REGION_1"},"public void roundRobinTest() {\n  RpcClientConnectionPoolStub pool = new RpcClientConnectionPoolStub();\n  RpcSenderStub connection1 = new RpcSenderStub();\n  RpcSenderStub connection2 = new RpcSenderStub();\n  RpcSenderStub connection3 = new RpcSenderStub();\n  RpcSenderStub connection4 = new RpcSenderStub();\n  RpcSenderStub connection5 = new RpcSenderStub();\n  pool.put(address1, connection1);\n  pool.put(address2, connection2);\n  pool.put(address3, connection3);\n  pool.put(address4, connection4);\n  pool.put(address5, connection5);\n  int iterations = 100;\n  RpcStrategy strategy = RpcStrategies.roundRobin(servers(address1, address2, address3, address4, address5));\n\n  RpcSender sender = strategy.createSender(pool);\n  for (int i = 0; i < iterations; i++) {\n    sender.sendRequest(new Object(), 50, ignore());\n  }\n\n  List<RpcSenderStub> connections =\n    List.of(connection1, connection2, connection3, connection4, connection5);\n  for (int i = 0; i < 5; i++) {\n    assertEquals(iterations / 5, connections.get(i).getRequests());\n  }\n}\n")),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java#L91",mdxType:"Githublink"},(0,c.kt)("strong",{parentName:"p"},"GitHub"))),(0,c.kt)("h2",{id:"\u4f1a\u5408\u54c8\u5e0c\u7b56\u7565"},"\u4f1a\u5408\u54c8\u5e0c\u7b56\u7565"),(0,c.kt)("p",null,"\u4f1a\u5408\u6563\u5217\u7b56\u7565\u9884\u5148\u8ba1\u7b97\u4e86\u4ee5\u4e0b\u7684\u6563\u5217\u51fd\u6570 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcSender.java",mdxType:"Githublink"},(0,c.kt)("inlineCode",{parentName:"p"},"RpcSender"))," \u5e76\u521b\u5efa\u4e00\u4e2aRPC\u670d\u52a1\u5668\u7684\u5730\u56fe\u3002 \u5730\u56fe\u5b58\u50a8\u5728\u7f13\u5b58\u4e2d\uff0c\u53ea\u6709\u5728\u670d\u52a1\u5668\u4e0a\u7ebf/\u4e0b\u7ebf\u65f6\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002\n\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u8bf7\u6c42\u5c06\u5728 ",(0,c.kt)("em",{parentName:"p"},"connection1"),", ",(0,c.kt)("em",{parentName:"p"},"connection2"),", \u548c ",(0,c.kt)("em",{parentName:"p"},"connection3"),"\u4e4b\u95f4\u5e73\u5747\u5206\u914d\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java tag=REGION_1",url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java",tag:"REGION_1"},"public void roundRobinTest() {\n  RpcClientConnectionPoolStub pool = new RpcClientConnectionPoolStub();\n  RpcSenderStub connection1 = new RpcSenderStub();\n  RpcSenderStub connection2 = new RpcSenderStub();\n  RpcSenderStub connection3 = new RpcSenderStub();\n  RpcSenderStub connection4 = new RpcSenderStub();\n  RpcSenderStub connection5 = new RpcSenderStub();\n  pool.put(address1, connection1);\n  pool.put(address2, connection2);\n  pool.put(address3, connection3);\n  pool.put(address4, connection4);\n  pool.put(address5, connection5);\n  int iterations = 100;\n  RpcStrategy strategy = RpcStrategies.roundRobin(servers(address1, address2, address3, address4, address5));\n\n  RpcSender sender = strategy.createSender(pool);\n  for (int i = 0; i < iterations; i++) {\n    sender.sendRequest(new Object(), 50, ignore());\n  }\n\n  List<RpcSenderStub> connections =\n    List.of(connection1, connection2, connection3, connection4, connection5);\n  for (int i = 0; i < 5; i++) {\n    assertEquals(iterations / 5, connections.get(i).getRequests());\n  }\n}\n")),(0,c.kt)("p",null,"\u5f53\u6211\u4eec\u4ece\u6c60\u4e2d\u5220\u9664\u4e00\u4e9b\u8fde\u63a5\u65f6\uff0c\u54c8\u5e0c\u51fd\u6570\u4f1a\u88ab\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java tag=REGION_5",url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java",tag:"REGION_5"},"  pool.remove(address3);\n  pool.remove(address4);\n  sender = strategy.createSender(pool);\n  for (int i = 0; i < iterationsPerLoop; i++) {\n    sender.sendRequest(i, 50, ignore());\n  }\n\n  double acceptableError = iterationsPerLoop / 10.0;\n  assertEquals(iterationsPerLoop / 3.0 + iterationsPerLoop / 2.0, connection1.getRequests(), acceptableError);\n  assertEquals(0, connection2.getRequests());\n  assertEquals(iterationsPerLoop / 3.0, connection3.getRequests(), acceptableError);\n  assertEquals(0, connection4.getRequests());\n  assertEquals(iterationsPerLoop / 3.0 + iterationsPerLoop / 2.0, connection5.getRequests(), acceptableError);\n}\n")),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java#L128",mdxType:"Githublink"},(0,c.kt)("strong",{parentName:"p"},"GitHub"))),(0,c.kt)("h2",{id:"\u7c7b\u578b-\u8c03\u5ea6\u7b56\u7565"},"\u7c7b\u578b \u8c03\u5ea6\u7b56\u7565"),(0,c.kt)("p",null,"\u8fd9\u79cd\u7b56\u7565\u53ea\u662f\u6839\u636e\u8bf7\u6c42\u7684\u7c7b\u578b\u5728\u5206\u7247\u4e4b\u95f4\u5206\u914d\u8bf7\u6c42\u3002 \u5728\u4f8b\u5b50\u4e2d \uff0c\u6240\u6709 ",(0,c.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32")," \u7684\u8bf7\u6c42\u90fd\u662f\u5728\u7b2c\u4e00\u4e2a\u5206\u7247\u4e0a\u53d1\u9001\u7684\uff0c\u8be5\u5206\u7247\u5bf9\u670d\u52a1\u5668\u6709 ",(0,c.kt)("em",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u6709\u6548\u7ed3\u679c")," \u7b56\u7565\u3002 \u6240\u6709\u5176\u4ed6\u7c7b\u578b\u7684\u8bf7\u6c42 \uff0c\u4ee5 ",(0,c.kt)("em",{parentName:"p"},"First Available")," \u7b56\u7565\u53d1\u9001\u5230\u7b2c\u4e8c\u4e2a\u5206\u7247\u3002 \u56e0\u6b64\uff0c ",(0,c.kt)("em",{parentName:"p"},"connection1")," \u548c ",(0,c.kt)("em",{parentName:"p"},"connection2")," \u5c06\u5904\u740635\u4e2a\u8bf7\u6c42\uff0c ",(0,c.kt)("em",{parentName:"p"},"connection3")," - 25\u4e2a\u8bf7\u6c42\uff0c\u800c ",(0,c.kt)("em",{parentName:"p"},"connection4")," \u548c ",(0,c.kt)("em",{parentName:"p"},"connection5")," - 0\u4e2a\u8bf7\u6c42 \uff0c\u56e0\u4e3a ",(0,c.kt)("em",{parentName:"p"},"connection3")," \u603b\u662f ",(0,c.kt)("em",{parentName:"p"},"First Available"),"\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java tag=REGION_5",url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java",tag:"REGION_5"},"  pool.remove(address3);\n  pool.remove(address4);\n  sender = strategy.createSender(pool);\n  for (int i = 0; i < iterationsPerLoop; i++) {\n    sender.sendRequest(i, 50, ignore());\n  }\n\n  double acceptableError = iterationsPerLoop / 10.0;\n  assertEquals(iterationsPerLoop / 3.0 + iterationsPerLoop / 2.0, connection1.getRequests(), acceptableError);\n  assertEquals(0, connection2.getRequests());\n  assertEquals(iterationsPerLoop / 3.0, connection3.getRequests(), acceptableError);\n  assertEquals(0, connection4.getRequests());\n  assertEquals(iterationsPerLoop / 3.0 + iterationsPerLoop / 2.0, connection5.getRequests(), acceptableError);\n}\n")),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,c.kt)(o.Z,{url:"/cloud-rpc/src/test/java/io/activej/rpc/client/sender/RpcStrategiesTest.java#L172",mdxType:"Githublink"},(0,c.kt)("strong",{parentName:"p"},"GitHub"))))}v.isMDXComponent=!0}}]);