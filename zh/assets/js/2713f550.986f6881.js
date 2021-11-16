(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1129],{77618:function(e,t,n){"use strict";var i=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,r=e.isInline,l=void 0===r||r,o=e.children,s=(0,a.Z)().siteConfig,c=t.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return i.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+c+t,target:"_blank"},n||o)}},14304:function(e,t,n){"use strict";var i=n(67294),a=n(21140),r=n.n(a);r().initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,i.useEffect)((function(){r().contentLoaded()}),[]),i.createElement("div",{className:"mermaid"},t)}},14365:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),l=n(77618),o=(n(14304),["components"]),s={title:"ActiveJ Inject Basics | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",description:"Extremely lightweight DI library. Multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime - 5.5 times faster than Guice and 100s times faster than Spring.",sidebar_label:"Basics",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"]},c="Basics",d={unversionedId:"inject/basics",id:"inject/basics",isDocsHomePage:!1,title:"ActiveJ Inject Basics | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",description:"Extremely lightweight DI library. Multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime - 5.5 times faster than Guice and 100s times faster than Spring.",source:"@site/docs/inject/basics.mdx",sourceDirName:"inject",slug:"/inject/basics",permalink:"/zh/inject/basics",tags:[],version:"current",frontMatter:{title:"ActiveJ Inject Basics | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",description:"Extremely lightweight DI library. Multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime - 5.5 times faster than Guice and 100s times faster than Spring.",sidebar_label:"Basics",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"]},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/zh/inject"},next:{title:"\u5feb\u901f\u542f\u52a8",permalink:"/zh/inject/quick-start"}},p=[{value:"Key",id:"key",children:[],level:2},{value:"Binding",id:"binding",children:[],level:2},{value:"Module",id:"module",children:[],level:2},{value:"Injector",id:"injector",children:[],level:2},{value:"Scopes",id:"scopes",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics"},"Basics"),(0,r.kt)("h2",{id:"key"},"Key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications consist of components and each component has an inner ",(0,r.kt)("strong",{parentName:"li"},"id")," called ",(0,r.kt)(l.Z,{text:"Key",url:"/core-inject/src/main/java/io/activej/inject/Key.java",mdxType:"Githublink"})),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Key")," consists of a ",(0,r.kt)("inlineCode",{parentName:"li"},"Type")," and an optional qualifier ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," (useful when you need to differentiate keys of the same ",(0,r.kt)("inlineCode",{parentName:"li"},"Type"),"):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Key<T> {\n    @NotNull\n    private final Type type;\n    @Nullable\n    private final Object qualifier;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Key")," type can be a simple Java ",(0,r.kt)("inlineCode",{parentName:"li"},"Class")," or a more complex ",(0,r.kt)("inlineCode",{parentName:"li"},"ParameterizedType"),", for example"),(0,r.kt)("li",{parentName:"ul"},"There are multiple ways to create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"Key.of(...)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Key.ofType(...)")," static factories"),(0,r.kt)("li",{parentName:"ul"},"You can use an abstract ",(0,r.kt)("inlineCode",{parentName:"li"},"Key")," class directly by passing type as a generic parameter (useful for parameterized types)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Key<Integer> integerKey = Key.of(Integer.class);\nKey<List<String>> listOfStringsKey = new Key<List<String>>(){};\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," automatically simplifies any covariant (",(0,r.kt)("inlineCode",{parentName:"p"},"? extends T"),") or contravariant (",(0,r.kt)("inlineCode",{parentName:"p"},"? super T"),") types to ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,r.kt)("p",{parentName:"div"},"That is why the following is true:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Key<List<? extends String>> covariantKey = new Key<List<? extends String>>(){};\nKey<List<? super String>> contravariantKey = new Key<List<? super String>>(){};\n\nKey<List<String>> simpleKey = new Key<List<String>>(){};\n\ncovariantKey.equals(simpleKey); // true\ncontravariantKey.equals(simpleKey); // true\n")))),(0,r.kt)("h2",{id:"binding"},"Binding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application components can require some dependencies in order to be created (an individual dependency can be defined by a ",(0,r.kt)("inlineCode",{parentName:"li"},"Key"),")."),(0,r.kt)("li",{parentName:"ul"},"Dependency Injection takes care of supplying application components with these required dependencies."),(0,r.kt)("li",{parentName:"ul"},"In order to do it, we need to specify ",(0,r.kt)("strong",{parentName:"li"},"what")," it needs to provide and ",(0,r.kt)("strong",{parentName:"li"},"how")," to use the provided objects."),(0,r.kt)("li",{parentName:"ul"},"Therefore, ",(0,r.kt)(l.Z,{url:"/core-inject/src/main/java/io/activej/inject/binding/Binding.java",mdxType:"Githublink"},(0,r.kt)("inlineCode",{parentName:"li"},"Binding")),"\ncontains a set of dependencies (",(0,r.kt)("inlineCode",{parentName:"li"},"Key"),"s) required for creation of some object. Additionally ",(0,r.kt)("inlineCode",{parentName:"li"},"Binding")," has a ",(0,r.kt)("inlineCode",{parentName:"li"},"compile()")," method that describes\nhow a binding should be compiled (how exactly dependencies should be used to create a required object).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public final class Binding<T> {\n     final Set<Key<?> dependencies;\n\n     public abstract CompiledBinding<T> compile(...);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Binding"),' is like a "recipe" of how to create an instance of a component:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"dependencies")," show what ingredients should be used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"compile()")," method describes how to cook them together"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Binding"),"s are configured in ",(0,r.kt)("inlineCode",{parentName:"li"},"Module"),"s (modules will be explained ",(0,r.kt)("a",{parentName:"li",href:"#module"},"later"),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can either instantiate ",(0,r.kt)("inlineCode",{parentName:"li"},"Binding"),"s directly using static factory methods from ",(0,r.kt)("inlineCode",{parentName:"li"},"Binding")," class or you can use a\n",(0,r.kt)("inlineCode",{parentName:"li"},"ModuleBuilder")," DSL to construct modules that provide required bindings"),(0,r.kt)("li",{parentName:"ul"},"Alternatively, you can use annotation-based approach to define bindings (methods annotated with ",(0,r.kt)("inlineCode",{parentName:"li"},"@Provides")," annotation)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Module module1 = ModuleBuilder.create()\n        .bind(String.class).to(integer -> integer.toString(), Integer.class)\n        .build();\n\nModule module2 = new AbstractModule() {\n    @Provides\n    String string(Integer integer) {\n        return integer.toString();\n    }\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"module1")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"module2"),". Both define a single ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," instance ",(0,r.kt)("inlineCode",{parentName:"p"},"Binding")," that has a single dependency on\nsome ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer")," instance. A ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," is created by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer#toString")," method on an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer"),"."),(0,r.kt)("h2",{id:"module"},"Module"),(0,r.kt)("p",null,"Dependency graph is hard to create directly, so we provide automatic graph transformation, generation and validation\nmechanisms with a simple yet powerful DSL."),(0,r.kt)("p",null,"All of these preprocessing steps are performed in start-up time by compiling ",(0,r.kt)(l.Z,{text:"Module",url:"/core-inject/src/main/java/io/activej/inject/module/Module.java",mdxType:"Githublink"}),"s"),(0,r.kt)("p",null,"Each module exports several user-defined entities that help to create a dependency graph:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A trie of ",(0,r.kt)("a",{parentName:"p",href:"#binding"},(0,r.kt)("inlineCode",{parentName:"a"},"Bindings"))," itself")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multibinders that help to resolve duplicate bindings (see ",(0,r.kt)("a",{parentName:"p",href:"/inject/duplicate-bindings"},"example"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BindingGenerators that are used to automatically generate missing dependencies (see ",(0,r.kt)("a",{parentName:"p",href:"/inject/binding-generation"},"example"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BindingTransformers that transform defined bindings (see ",(0,r.kt)("a",{parentName:"p",href:"/inject/binding-transformation"},"example"),"):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To intercept/modify/wrap provided instances"),(0,r.kt)("li",{parentName:"ul"},"To intercept/modify/wrap the dependencies of provided instances")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Module {\n    Trie<Scope, Map<Key<?>, Set<Binding<?>>>> getBindings();\n    Map<Key<?>, Multibinder<?>> getMultibinders();\n    Map<KeyPattern<?>, Set<BindingGenerator<?>>> getBindingGenerators();\n    Map<KeyPattern<?>, Set<BindingTransformer<?>>> getBindingTransformers();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multibinder"),"s, ",(0,r.kt)("strong",{parentName:"li"},"BindingGenerator"),"s and ",(0,r.kt)("strong",{parentName:"li"},"BindingTransformer"),"s can be created with clean and extremely simple Java8+ functional DSL"),(0,r.kt)("li",{parentName:"ul"},"Resulting dependency graph is validated - checked for cyclic and missing dependencies, then compiled into a final scope tree and passed to ",(0,r.kt)("strong",{parentName:"li"},"Injector"))),(0,r.kt)("p",null,"It\u2019s trivial to manually implement the Module interface, but it\u2019s even easier to extend"),(0,r.kt)(l.Z,{text:"AbstractModule",url:"/core-inject/src/main/java/io/activej/inject/module/AbstractModule.java",mdxType:"Githublink"}),", which supports ",(0,r.kt)(l.Z,{text:"@Provides",url:"/core-inject/src/main/java/io/activej/inject/annotation/Provides.java",mdxType:"Githublink"})," method scanning and the DSL for creating/transforming/generating bindings.",(0,r.kt)("h2",{id:"injector"},"Injector"),(0,r.kt)(l.Z,{text:"Injector",url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"})," combines multiple modules together, resolves dependencies and allows to obtain requried instances",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provides all the required dependencies (",(0,r.kt)("em",{parentName:"li"},"injects"),") for the component\nrecursively traversing the dependencies graph in a postorder way and creates them first."),(0,r.kt)("li",{parentName:"ul"},"Bindings are by default singletons - if an instance was created once, it won't be recreated from scratch again. If\nit is needed for other bindings, ",(0,r.kt)("strong",{parentName:"li"},"Injector")," will take it from cache. You don't need to apply any additional\nannotations for it."),(0,r.kt)("li",{parentName:"ul"},"To provide the requested key, ",(0,r.kt)("strong",{parentName:"li"},"Injector")," recursively creates all of its dependencies and falls back to injector of its\nparent ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"#scopes"},"scope"))," if binding in its scope is not found.")),(0,r.kt)("h2",{id:"scopes"},"Scopes"),(0,r.kt)("p",null,"In short - a ",(0,r.kt)(l.Z,{text:"Scope",url:"/core-inject/src/main/java/io/activej/inject/Scope.java",mdxType:"Githublink"})," gives us \u201clocal singletons\u201d which live as long as the scope itself.\nActiveJ Inject scopes are a bit different from other DI libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The internal structure of the ",(0,r.kt)("strong",{parentName:"li"},"Injector")," is a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Trie"},"prefix tree")," and the prefix is a scope."),(0,r.kt)("li",{parentName:"ul"},"The identifiers (or prefixes) of the tree are simple annotations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Injector")," can ",(0,r.kt)("strong",{parentName:"li"},"enter the scope"),". This means you create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Injector")," and its scope will be set to the one that it's entering."),(0,r.kt)("li",{parentName:"ul"},"This can be done multiple times, so you can have ",(0,r.kt)("strong",{parentName:"li"},"N")," injectors in certain scope.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Injector {\n ...\n    final Trie<Scope, ScopeLocalData> scopeDataTree;\n ...\n\n    public Injector enterScope(Scope scope) {\n        return new Injector(this, scopeDataTree.get(scope));\n    }\n ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/inject/scopes"},"This article")," can show you how scopes work."))}u.isMDXComponent=!0},11748:function(e,t,n){var i={"./locale":89234,"./locale.js":89234};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=11748}}]);