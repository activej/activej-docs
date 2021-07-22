(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[277],{77618:function(e,n,t){"use strict";var r=t(95318).default;n.Z=void 0;var a=r(t(67294)),i=r(t(39962)),o=function(e){var n=e.url,t=e.text,r=e.isInline,o=void 0===r||r,l=e.children,c=(0,i.default)().siteConfig;return a.default.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+c.customFields.githubBranch+n,target:"_blank"},t||l)};n.Z=o},14304:function(e,n,t){"use strict";var r=t(95318).default,a=t(20862).default;n.Z=void 0;var i=a(t(67294)),o=r(t(21140));o.default.initialize({startOnLoad:!0});var l=function(e){var n=e.chart;return(0,i.useEffect)((function(){o.default.contentLoaded()}),[]),i.default.createElement("div",{className:"mermaid"},n)};n.Z=l},77815:function(e,n,t){"use strict";var r=t(95318).default;n.Z=void 0;r(t(67294));var a=r(t(39962)),i=function(e){var n=e.name,t=(0,a.default)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]};n.Z=i},39617:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return v},default:function(){return m}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o=t(77618),l=t(14304),c=t(77815),p=["components"],s={title:"ActiveJ | Service Graph, manages application services according to their dependency graph",description:"Service Graph starts and stops application services according to their dependency graph using multithreaded graph traversal algorithm.",keywords:["service graph","java","java framework","spring alternative","netty alternative","jetty alternative","application services","threadpool","closeables","datasource"]},d={unversionedId:"boot/servicegraph",id:"boot/servicegraph",isDocsHomePage:!1,title:"Service Graph",description:"Service Graph starts and stops application services according to their dependency graph using multithreaded graph traversal algorithm.",source:"@site/docs/boot/servicegraph.mdx",sourceDirName:"boot",slug:"/boot/servicegraph",permalink:"/boot/servicegraph",version:"current",frontMatter:{title:"ActiveJ | Service Graph, manages application services according to their dependency graph",description:"Service Graph starts and stops application services according to their dependency graph using multithreaded graph traversal algorithm.",keywords:["service graph","java","java framework","spring alternative","netty alternative","jetty alternative","application services","threadpool","closeables","datasource"]},sidebar:"docs",previous:{title:"Launcher",permalink:"/boot/launcher"},next:{title:"Workers",permalink:"/boot/workers"}},v=[{value:"Examples",id:"examples",children:[{value:"SimpleServiceExample",id:"simpleserviceexample",children:[]},{value:"EventloopServiceExample",id:"eventloopserviceexample",children:[]},{value:"AdvancedServiceExample",id:"advancedserviceexample",children:[]}]}],u={toc:v};function m(e){var n=e.components,t=(0,a.default)(e,p);return(0,i.mdx)("wrapper",(0,r.default)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Designed to be used in combination with ",(0,i.mdx)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject")," and ",(0,i.mdx)("a",{parentName:"li",href:"launcher"},"Launcher"),"\nas a means to start/stop application services according to their dependency graph"),(0,i.mdx)("li",{parentName:"ul"},"It starts services by following the multithreaded graph traversal algorithm: leaf services first and so on"),(0,i.mdx)("li",{parentName:"ul"},"It stops services in the opposite direction"),(0,i.mdx)("li",{parentName:"ul"},"Services dependency graph is automatically built upon ",(0,i.mdx)("strong",{parentName:"li"},"ActiveJ Inject")," dependencies graph, but can be customized by\nuser-specified dependencies."),(0,i.mdx)("li",{parentName:"ul"},"Supports multiple standard services like ",(0,i.mdx)("strong",{parentName:"li"},"ThreadPool"),", ",(0,i.mdx)("strong",{parentName:"li"},"Closeables"),", ",(0,i.mdx)("strong",{parentName:"li"},"DataSource")," as well as Active-specific\nservices like ",(0,i.mdx)("a",{parentName:"li",href:"/async-io/eventloop"},"eventloops"),", async servers and async services."),(0,i.mdx)("li",{parentName:"ul"},"Can be configured to support other services as well with user-provided adapters")),(0,i.mdx)("p",null,"To get a basic understanding of ServiceGraph's role, let's have a look at a very simple example of an HTTP Server:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java tag=EXAMPLE",url:"/examples/tutorials/getting-started/src/main/java/HttpHelloWorldExample.java",tag:"EXAMPLE"},'public final class HttpHelloWorldExample extends HttpServerLauncher {\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200().withPlainText("Hello World");\n  }\n\n  public static void main(String[] args) throws Exception {\n    Launcher launcher = new HttpHelloWorldExample();\n    launcher.launch(args);\n  }\n}\n')),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This application extends predefined ",(0,i.mdx)(o.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/HttpServerLauncher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"HttpServerLauncher"))," which features ",(0,i.mdx)(o.Z,{url:"/boot-servicegraph/src/main/java/io/activej/service/ServiceGraphModule.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"ServiceGraphModule"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"HttpServerLauncher")," uses two services: ",(0,i.mdx)(o.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncHttpServer.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"AsyncHttpServer"))," and ",(0,i.mdx)("a",{parentName:"li",href:"/async-io/eventloop"},(0,i.mdx)("inlineCode",{parentName:"a"},"Eventloop")),".",(0,i.mdx)(l.Z,{chart:"\ngraph LR\n    AsyncHttpServer --\x3e Eventloop\n",mdxType:"Mermaid"})),(0,i.mdx)("li",{parentName:"ul"},"According to this graph, Service Graph starts ",(0,i.mdx)("inlineCode",{parentName:"li"},"Eventloop")," first. The dependent ",(0,i.mdx)("inlineCode",{parentName:"li"},"AsyncHttpServer")," is started afterwards"),(0,i.mdx)("li",{parentName:"ul"},"When the application stops, the services will be stopped in the opposite direction: ",(0,i.mdx)("inlineCode",{parentName:"li"},"AsyncHttpServer")," first and ",(0,i.mdx)("inlineCode",{parentName:"li"},"Eventloop")," next")),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(c.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,i.mdx)("inlineCode",{parentName:"p"},"activej/examples/core/boot")))),(0,i.mdx)("h3",{id:"simpleserviceexample"},"SimpleServiceExample"),(0,i.mdx)("p",null,"In this example we create an application that extends Launcher and has a simple custom service which basically only\nstarts and stops:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/SimpleServiceExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/SimpleServiceExample.java",tag:"EXAMPLE"},'public class SimpleServiceExample extends Launcher {\n  public static void main(String[] args) throws Exception {\n    SimpleServiceExample example = new SimpleServiceExample();\n    example.launch(args);\n  }\n\n  @Inject CustomService customService;\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @Inject\n  private static class CustomService implements Service {\n    @Override\n    public CompletableFuture<?> start() {\n      System.out.println("|SERVICE STARTING|");\n      return CompletableFuture.completedFuture(null);\n    }\n\n    @Override\n    public CompletableFuture<?> stop() {\n      System.out.println("|SERVICE STOPPING|");\n      return CompletableFuture.completedFuture(null);\n    }\n  }\n\n  @Override\n  protected void run() {\n    System.out.println("|RUNNING|");\n  }\n}\n')),(0,i.mdx)("h3",{id:"eventloopserviceexample"},"EventloopServiceExample"),(0,i.mdx)("p",null,"Service Graph is also able to start and stop your custom services:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/EventloopServiceExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/EventloopServiceExample.java",tag:"EXAMPLE"},'public class EventloopServiceExample extends Launcher {\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create();\n  }\n\n  @Provides\n  @Eager\n  CustomEventloopService customEventloopService(Eventloop eventloop) {\n    return new CustomEventloopService(eventloop);\n  }\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @Override\n  protected void run() {\n    System.out.println("|RUNNING|");\n  }\n\n  private static final class CustomEventloopService implements EventloopService {\n    private final Eventloop eventloop;\n\n    public CustomEventloopService(Eventloop eventloop) {\n      this.eventloop = eventloop;\n    }\n\n    @Override\n    public @NotNull Eventloop getEventloop() {\n      return eventloop;\n    }\n\n    @Override\n    public @NotNull Promise<?> start() {\n      System.out.println("|CUSTOM EVENTLOOP SERVICE STARTING|");\n      return Promises.delay(Duration.ofMillis(10))\n          .whenResult(() -> System.out.println("|CUSTOM EVENTLOOP SERVICE STARTED|"));\n    }\n\n    @Override\n    public @NotNull Promise<?> stop() {\n      System.out.println("|CUSTOM EVENTLOOP SERVICE STOPPING|");\n      return Promises.delay(Duration.ofMillis(10))\n          .whenResult(() -> System.out.println("|CUSTOM EVENTLOOP SERVICE STOPPED|"));\n    }\n  }\n\n  public static void main(String[] args) throws Exception {\n    EventloopServiceExample example = new EventloopServiceExample();\n    example.launch(args);\n  }\n}\n')),(0,i.mdx)("h3",{id:"advancedserviceexample"},"AdvancedServiceExample"),(0,i.mdx)("p",null,"Service Graph can manage more complex service dependencies. For example, let's assume we have an e-mail service\nprototype. To work properly, it requires two services - an authorization service and a database service. The authorization\nservice also requires a database service, along with Eventloop and Executor. As a result, we have the following service graph:"),(0,i.mdx)(l.Z,{chart:"\ngraph LR\n    id1(EmailService) --\x3e id2(AuthService)\n    id2 --\x3e id3(DBService)\n    id1 --\x3e id3\n    id2 --\x3e Executor\n    id2 --\x3e Eventloop\n",mdxType:"Mermaid"}),(0,i.mdx)("p",null,"And ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceGraphModule")," will start and stop all those services in the proper order:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"=== STARTING APPLICATION\n\nStarted java.util.concurrent.Executor\nStarted io.activej.eventloop.Eventloop\nStarted AdvancedServiceExample$DBService\n\nStarted AdvancedServiceExample$AuthService\n\nStarted AdvancedServiceExample$EmailService\n\n === STOPPING APPLICATION\n\nStopped AdvancedServiceExample$EmailService\n\nStopped AdvancedServiceExample$AuthService\n\nStopped java.util.concurrent.Executor\nStopped io.activej.eventloop.Eventloop\nStopped AdvancedServiceExample$DBService\n")),(0,i.mdx)("p",null,"This application looks as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/AdvancedServiceExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/AdvancedServiceExample.java",tag:"EXAMPLE"},'public class AdvancedServiceExample extends Launcher {\n  @Provides\n  @Eager\n  DBService dbService() {\n    return new DBService();\n  }\n\n  @Provides\n  @Eager\n  EmailService emailService(DBService dbService, AuthService authService) {\n    return new EmailService(dbService, authService);\n  }\n\n  @Provides\n  @Eager\n  AuthService authService(Eventloop eventloop, Executor executor, DBService dbService) {\n    return new AuthService(eventloop, executor, dbService);\n  }\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create().withCurrentThread();\n  }\n\n  @Provides\n  Executor executor() {\n    return Executors.newCachedThreadPool();\n  }\n\n  @Override\n  protected Module getModule() {\n    return ServiceGraphModule.create();\n  }\n\n  @SuppressWarnings("FieldCanBeLocal")\n  private static class AuthService implements EventloopService {\n    private final Eventloop eventloop;\n    private final Executor executor;\n    private final DBService dbService;\n\n    public AuthService(Eventloop eventloop, Executor executor, DBService dbService) {\n      this.executor = executor;\n      this.eventloop = eventloop;\n      this.dbService = dbService;\n    }\n\n    @Override\n    public @NotNull Eventloop getEventloop() {\n      return eventloop;\n    }\n\n    @Override\n    public @NotNull Promise<?> start() {\n      System.out.println("AuthService starting");\n      return Promise.ofBlockingRunnable(executor,\n          () -> System.out.println("AuthService started"));\n    }\n\n    @Override\n    public @NotNull Promise<?> stop() {\n      return Promise.ofBlockingRunnable(executor,\n          () -> System.out.println("AuthService stopped"));\n    }\n  }\n\n  private static class DBService implements Service {\n    @Override\n    public CompletableFuture<?> start() {\n      System.out.println("DBService is starting");\n      return CompletableFuture.runAsync(() -> {\n        try {\n          Thread.sleep(1000);\n        } catch (InterruptedException e) {\n          e.printStackTrace();\n        }\n        System.out.println("DBService is started");\n      });\n    }\n\n    @Override\n    public CompletableFuture<?> stop() {\n      System.out.println("DBService is stopping");\n      return CompletableFuture.runAsync(() -> {\n        try {\n          Thread.sleep(2000);\n        } catch (InterruptedException e) {\n          e.printStackTrace();\n        }\n        System.out.println("DBService is stopped");\n      });\n    }\n  }\n\n  @SuppressWarnings("FieldCanBeLocal")\n  private static class EmailService implements Service {\n    private final DBService service;\n    private final AuthService authService;\n\n    public EmailService(DBService service, AuthService authService) {\n      this.service = service;\n      this.authService = authService;\n    }\n\n    @Override\n    public CompletableFuture<?> start() {\n      System.out.println("EmailService is starting");\n      return CompletableFuture.runAsync(() -> {\n        try {\n          Thread.sleep(1000);\n        } catch (InterruptedException e) {\n          e.printStackTrace();\n        }\n        System.out.println("EmailService is started");\n      });\n    }\n\n    @Override\n    public CompletableFuture<?> stop() {\n      System.out.println("EmailService is stopping");\n      return CompletableFuture.runAsync(() -> System.out.println("EmailService is stopped"));\n    }\n  }\n\n  @Override\n  protected void run() {\n  }\n\n  public static void main(String[] args) throws Exception {\n    AdvancedServiceExample example = new AdvancedServiceExample();\n    example.launch(args);\n  }\n}\n')))}m.isMDXComponent=!0},11748:function(e,n,t){var r={"./locale":89234,"./locale.js":89234};function a(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=11748}}]);