(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9750],{2735:function(e,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasProtocol=r,t.default=function(e){return void 0!==e&&!r(e)}},79524:function(e,t,r){"use strict";var n=r(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useBaseUrlUtils=i,t.default=function(e,t){void 0===t&&(t={});return(0,i().withBaseUrl)(e,t)};var o=n(r(39962)),a=r(2735);function i(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,d=o.absolute,s=void 0!==d&&d;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.hasProtocol)(r))return r;if(l)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+c:c}(n,r,e,t)}}}},25406:function(e,t,r){"use strict";var n=r(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(67294)).default.createContext(void 0);t.default=o},82432:function(e,t,r){"use strict";var n=r(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(22122)),a=n(r(19756)),i=n(r(67294)),l=n(r(86010)),d=n(r(39962)),s=n(r(48002)),c=n(r(8705)),m=["sources","className","alt"],p=function(e){var t=(0,d.default)().isClient,r=(0,s.default)().isDarkTheme,n=e.sources,p=e.className,u=e.alt,h=void 0===u?"":u,v=(0,a.default)(e,m),f=t?r?["dark"]:["light"]:["light","dark"];return i.default.createElement(i.default.Fragment,null,f.map((function(e){return i.default.createElement("img",(0,o.default)({key:e,src:n[e],alt:h,className:(0,l.default)(c.default.themedImage,c.default["themedImage--"+e],p)},v))})))};t.default=p},48002:function(e,t,r){"use strict";var n=r(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(67294),a=n(r(25406));var i=function(){var e=(0,o.useContext)(a.default);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e};t.default=i},77618:function(e,t,r){"use strict";var n=r(95318).default;t.Z=void 0;var o=n(r(67294)),a=n(r(39962)),i=function(e){var t=e.url,r=e.text,n=e.isInline,i=void 0===n||n,l=e.children,d=(0,a.default)().siteConfig;return o.default.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:d.customFields.githubUrl+"/"+d.customFields.githubBranch+t,target:"_blank"},o.default.createElement("b",null,r||l))};t.Z=i},14304:function(e,t,r){"use strict";var n=r(95318).default,o=r(20862).default;t.Z=void 0;var a=o(r(67294)),i=n(r(21140));i.default.initialize({startOnLoad:!0});var l=function(e){var t=e.chart;return(0,a.useEffect)((function(){i.default.contentLoaded()}),[]),a.default.createElement("div",{className:"mermaid"},t)};t.Z=l},8460:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return h},default:function(){return x}});var n,o=r(22122),a=r(19756),i=(r(67294),r(3905)),l=r(14304),d=r(77618),s=r(82432),c=r(79524),m=["components"],p={title:"ActiveJ | Workers, overcome the complexities and overheads of multithreaded programming model",description:"ActiveJ Workers allow to overcome the complexities and overheads of multithreaded programming model yet preserve Java multithreading capabilities",sidebar_position:3},u={unversionedId:"boot/workers",id:"boot/workers",isDocsHomePage:!1,title:"Workers",description:"ActiveJ Workers allow to overcome the complexities and overheads of multithreaded programming model yet preserve Java multithreading capabilities",source:"@site/docs/boot/workers.mdx",sourceDirName:"boot",slug:"/boot/workers",permalink:"/docs/boot/workers",version:"current",sidebarPosition:3,frontMatter:{title:"ActiveJ | Workers, overcome the complexities and overheads of multithreaded programming model",description:"ActiveJ Workers allow to overcome the complexities and overheads of multithreaded programming model yet preserve Java multithreading capabilities",sidebar_position:3},sidebar:"docs",previous:{title:"Service Graph",permalink:"/docs/boot/servicegraph"},next:{title:"Config",permalink:"/docs/boot/config"}},h=[{value:"Features",id:"features",children:[]},{value:"Worker Scope",id:"worker-scope",children:[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Basic Worker Pool Example",id:"basic-worker-pool-example",children:[]},{value:"Multithreaded Worker Pools Collaboration",id:"multithreaded-worker-pools-collaboration",children:[]}]}],v=(n="Variable",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:h};function x(e){var t=e.components,r=(0,a.default)(e,m);return(0,i.mdx)("wrapper",(0,o.default)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"features"},"Features"),(0,i.mdx)("p",null,"The primary mission of ActiveJ is to create ultimately fast, scalable, simple to use, and high-abstraction level I/O async\nprogramming model.\nTo achieve this, ActiveJ design principles overcome all the performance overhead and complexities of the traditional\nmultithreaded programming model, yet fully utilize Java multithreading capabilities.\nActiveJ offers means of splitting the application into a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Primary Eventloop")," thread and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Worker\nEventloop")," threads. These threads communicate with each other via message passing and thread-safe application-specific\nsingleton services."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/async-io/eventloop"},"Eventloop")," thread is essentially a single-threaded mini-application\n(similar to Node.js), which handles its part of I/O tasks and executes Runnables submitted from other threads.\nPrimary Eventloop threads distribute and balance I/O tasks between Worker threads."),(0,i.mdx)(l.Z,{style:{margin:"0 auto"},chart:"\ngraph TB\n    id1(Primary Event Loop) --\x3e id2(Worker Balancer)\n    id2 --\x3e id4\n    subgraph Worker Scope\n    id3(Event Loop) --\x3e id4(HTTP Server)\n    end\n    id2 --\x3e id6\n    subgraph Worker Scope\n    id5(Event Loop) --\x3e id6(HTTP Server)\n    end\n",mdxType:"Mermaid"}),(0,i.mdx)("p",null,"The benefits of ActiveJ threading model:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Each primary/worker Eventloop thread works as a single-threaded application, which is simple to program and to reason about"),(0,i.mdx)("li",{parentName:"ul"},"There is no multithreaded overhead, races, and thread synchronization overhead"),(0,i.mdx)("li",{parentName:"ul"},"Traditional strength of Java in multithreaded programming is fully preserved:"),(0,i.mdx)("li",{parentName:"ul"},"typical I/O load can be easily split between worker threads"),(0,i.mdx)("li",{parentName:"ul"},"the application can have thread-safe singleton services, which are used by Eventloop threads, and a huge singleton\ndata state, shared among all worker threads"),(0,i.mdx)("li",{parentName:"ul"},"you can still use some thread synchronization / lock-free algorithms, just try to avoid excessive blocking of\nconcurrent threads"),(0,i.mdx)("li",{parentName:"ul"},"full interoperability between Java Threads, Thread Pools, Java Futures, and even blocking I/O operations")),(0,i.mdx)("h2",{id:"worker-scope"},"Worker Scope"),(0,i.mdx)("h3",{id:"problem"},"Problem"),(0,i.mdx)("p",null,"This design raises some implementation questions.\nFor example, if we want to implement multithreaded HTTP web application with worker eventloops:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"according to these design principles, we need to create separate instances of a working eventloop, a single-threaded HTTP\nserver, and its servlets for each working thread"),(0,i.mdx)("li",{parentName:"ul"},"but what if our application has 8 eventloop threads with 10 worker-thread components inside, do we have to create 80 of\ncomponents in total and assign them to each worker thread?"),(0,i.mdx)("li",{parentName:"ul"},"how is it even possible to manually instantiate, wire, initialize, and start/stop all those components in a\ncorrect order and also gracefully shutdown application on start/stop errors?")),(0,i.mdx)("h3",{id:"solution"},"Solution"),(0,i.mdx)("p",null,"Luckily, due to ",(0,i.mdx)("a",{parentName:"p",href:"/docs/inject/overview"},"ActiveJ Inject"),", we have a solution - ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Worker")," scope. If you need to implement several worker threads:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"include ",(0,i.mdx)(d.Z,{url:"/boot-workers/src/main/java/io/activej/worker/WorkerPoolModule.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"WorkerPoolModule")),"\nmodule and create a ",(0,i.mdx)(d.Z,{url:"/boot-workers/src/main/java/io/activej/worker/WorkerPool.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"li"},"WorkerPool"))," instance"),(0,i.mdx)("li",{parentName:"ul"},"annotate the components you wish to put into each worker thread with ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Worker")," scope annotation")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"WorkerPool")," will automatically instantiate identical dependency graphs for each of those worker threads\nYou are by no means limited to the aforementioned scheme with one primary Eventloop and N worker eventloops:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"you can still have completely unrelated / standalone eventloops (nor primary, neither worker)"),(0,i.mdx)("li",{parentName:"ul"},"several primary eventloops sharing the same pool of worker eventloops or several sets of worker pools with different number or threads"),(0,i.mdx)("li",{parentName:"ul"},"you can even define your own ",(0,i.mdx)("inlineCode",{parentName:"li"},"@Worker")," annotations, and create multiple worker pools with completely unrelated and\ndifferent dependency graphs\nAll this is in fully transparent and easy-to-understand modules - just mark different components with appropriate\nworker annotations and let ",(0,i.mdx)("inlineCode",{parentName:"li"},"WorkerPool")," create all the instances")),(0,i.mdx)("p",null,"To automatically start/stop application components in correct order, simply include ",(0,i.mdx)("strong",{parentName:"p"},"ServiceGraph")," module into your\n",(0,i.mdx)("strong",{parentName:"p"},"Launcher")," - it is aware of worker pools and will treat vectors of worker instances as special compound singleton-like\ninstances."),(0,i.mdx)("p",null,"For example, here is an example of utilizing ",(0,i.mdx)(d.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/MultithreadedHttpServerLauncher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"MultithreadedHttpServerLauncher"))," which features ",(0,i.mdx)("inlineCode",{parentName:"p"},"ServiceGraphModule"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/http/src/main/java/MultithreadedHttpServerExample.java tag=EXAMPLE",url:"/examples/core/http/src/main/java/MultithreadedHttpServerExample.java",tag:"EXAMPLE"},'public final class MultithreadedHttpServerExample extends MultithreadedHttpServerLauncher {\n  @Provides\n  @Worker\n  AsyncServlet servlet(@WorkerId int workerId) {\n    return request -> HttpResponse.ok200()\n        .withPlainText("Hello from worker server #" + workerId + "\\n");\n  }\n\n  public static void main(String[] args) throws Exception {\n    MultithreadedHttpServerExample example = new MultithreadedHttpServerExample();\n    example.launch(args);\n  }\n}\n')),(0,i.mdx)("p",null,"And its dependency graph looks as follows:"),(0,i.mdx)(l.Z,{chart:'\ngraph\n    subgraph "@Worker()"\n    id1(AsyncHTTPServer) --\x3e id2(EventLoop)\n    id1 --\x3e id3(Async Servlet)\n    id3 --\x3e id4("@WorkerId() int")\n    end\n    id2 -.-> ThrottlingController\n    id2 --\x3e id5(Config)\n    id1 --\x3e id5\n    id9 --\x3e id5\n    id6(EventLoop) --\x3e id5\n    id7(Primary Server) --\x3e id5\n    id7 --\x3e id6\n    id7 --\x3e id8(WorkerPool$Intsnces)\n    id8 --\x3e id9(WorkerPool)\n    id9 --\x3e id10(WorkerPools)\n    id10 --\x3e Injector\n',mdxType:"Mermaid"}),(0,i.mdx)("p",null,"To help you understand how worker pools work, here is a simplified ",(0,i.mdx)("strong",{parentName:"p"},"WorkerPool")," implementation in a nutshell (the actual implementation differs, but not much):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"public final class WorkerPool {\n    private final Scope scope;\n    private final Injector[] scopeInjectors;\n\n    WorkerPool(Injector injector, Scope scope, int workers) {\n        this.scope = scope;\n        this.scopeInjectors = new Injector[workers];\n        for (int i = 0; i < workers; i++) {\n            scopeInjectors[i] = injector.enterScope(scope, new HashMap<>(), false);\n        }\n    }\n\n    public <T> Instances<T> getInstances(Key<T> key) {\n        Instances<T> instances = new Instances<>(new Object[scopeInjectors.length]);\n        for (int i = 0; i < scopeInjectors.length; i++) {\n            instances.instances[i] = scopeInjectors[i].getInstance(key);\n        }\n        return instances;\n    }\n}\n")),(0,i.mdx)("p",null,"As you can see, the root ",(0,i.mdx)(d.Z,{url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"Injector")),"\nsimply \u2018enters\u2019 the worker scope ",(0,i.mdx)("inlineCode",{parentName:"p"},"N")," times, so we have ",(0,i.mdx)("inlineCode",{parentName:"p"},"N")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Injector"),"s with identical bindings/dependency graphs, but\ndifferent containers of instances. Each time we need to create some ",(0,i.mdx)("em",{parentName:"p"},"worker")," instances, they are created ",(0,i.mdx)("inlineCode",{parentName:"p"},"N")," times by\neach ",(0,i.mdx)("em",{parentName:"p"},"injector")," and returned as a vector of ",(0,i.mdx)("inlineCode",{parentName:"p"},"N")," instances."),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,i.mdx)("pre",{parentName:"div"},(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,i.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(v,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,i.mdx)("strong",{parentName:"p"},"activej -> examples -> core -> boot")))),(0,i.mdx)("h3",{id:"basic-worker-pool-example"},"Basic Worker Pool Example"),(0,i.mdx)("p",null,"An example of creating a worker pool with 4 workers:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/WorkerPoolModuleExample.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/WorkerPoolModuleExample.java",tag:"EXAMPLE"},'public final class WorkerPoolModuleExample extends AbstractModule {\n  @Provides\n  WorkerPool workerPool(WorkerPools workerPools) {\n    return workerPools.createPool(4);\n  }\n\n  @Provides\n  @Worker\n  String string(@WorkerId int workerId) {\n    return "Hello from worker #" + workerId;\n  }\n\n  public static void main(String[] args) {\n    Injector injector = Injector.of(WorkerPoolModule.create(), new WorkerPoolModuleExample());\n    WorkerPool workerPool = injector.getInstance(WorkerPool.class);\n    WorkerPool.Instances<String> strings = workerPool.getInstances(String.class);\n    strings.forEach(System.out::println);\n  }\n}\n')),(0,i.mdx)("p",null,"The dependency graph of the example includes the created worker pool and looks as follows:"),(0,i.mdx)("div",{style:{width:"100%",display:"flex"}},(0,i.mdx)(s.default,{style:{margin:"0 auto"},alt:"Dependency graph",sources:{light:(0,c.default)("/img/worker-pool-dependencies_dark.svg"),dark:(0,c.default)("/img/worker-pool-dependencies_light.svg")},mdxType:"ThemedImage"})),(0,i.mdx)("h3",{id:"multithreaded-worker-pools-collaboration"},"Multithreaded Worker Pools Collaboration"),(0,i.mdx)("p",null,"Several Worker Pools can co-work to calculate a single task. In this example we have 25 Workers and each of them has its\nown Eventloop. These Eventloops are wrapped in Threads and then added to the list of ",(0,i.mdx)("em",{parentName:"p"},"threads"),". After that the\nlist is permuted and the threads with Eventloop tasks start. The task is to put Eventloop ",(0,i.mdx)("em",{parentName:"p"},"id")," in the ",(0,i.mdx)("strong",{parentName:"p"},"ConcurrentLinkedQueue"),"\nin accordance to the delay (the ",(0,i.mdx)("em",{parentName:"p"},"id")," multiplied by 100). In this way we receive an ordered queue of Eventloop ids, after that\nthe Threads park and the queue is emptied."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/boot/src/main/java/MultithreadedWorkerCollab.java tag=EXAMPLE",url:"/examples/core/boot/src/main/java/MultithreadedWorkerCollab.java",tag:"EXAMPLE"},"public final class MultithreadedWorkerCollab extends AbstractModule {\n\n  @Provides\n  @Worker\n  Eventloop eventloop(@WorkerId int wid, ConcurrentLinkedQueue<Integer> queue) {\n    Eventloop eventloop = Eventloop.create();\n    eventloop.delay(100L * wid, () -> queue.add(wid));\n    return eventloop;\n  }\n\n  @Provides\n  WorkerPool workerPool(WorkerPools workerPools) {\n    return workerPools.createPool(25);\n  }\n\n  @Provides\n  ConcurrentLinkedQueue<Integer> queue() {\n    return new ConcurrentLinkedQueue<>();\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    Injector injector = Injector.of(WorkerPoolModule.create(), new MultithreadedWorkerCollab());\n    WorkerPool workerPool = injector.getInstance(WorkerPool.class);\n    WorkerPool.Instances<Eventloop> eventloops = workerPool.getInstances(Eventloop.class);\n\n    List<Thread> threads = new ArrayList<>();\n    for (Eventloop eventloop : eventloops.getList()) {\n      Thread thread = new Thread(eventloop);\n      threads.add(thread);\n    }\n\n    Collections.shuffle(threads);\n    threads.forEach(Thread::start);\n\n    for (Thread thread : threads) {\n      thread.join();\n    }\n\n    ConcurrentLinkedQueue<Integer> queue = injector.getInstance(new Key<ConcurrentLinkedQueue<Integer>>() {});\n\n    while (!queue.isEmpty()) {\n      System.out.println(queue.poll());\n    }\n\n  }\n}\n")))}x.isMDXComponent=!0},86010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{default:function(){return o}})},8705:function(e,t,r){"use strict";r.r(t),t.default={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"}},11748:function(e,t,r){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=11748}}]);