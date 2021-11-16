(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2636],{3149:function(e,t,n){"use strict";var r=n(67294),i=n(39962),a=n(41106),o=n.n(a),c=n(15835);n.n(c)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,n=e.children,a=e.target,c=void 0===a?"_blank":a,s=(0,i.Z)().siteConfig,u=o()(t);return r.createElement("a",{href:u(s.customFields),target:c},n)}},77815:function(e,t,n){"use strict";n(67294);var r=n(39962);t.Z=function(e){var t=e.name,n=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},13500:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return g}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(77815),c=n(3149),s=["components"],u={title:"ActiveJ Inject | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",sidebar_label:"Overview",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"],slug:"/inject"},p="Overview",d={unversionedId:"inject/overview",id:"inject/overview",isDocsHomePage:!1,title:"ActiveJ Inject | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",description:"ActiveJ Inject is a lightweight and powerful dependency injection library with ultimate performance and no third-party dependencies. It is multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime, significantly outperforming Spring DI or Guice.",source:"@site/docs/inject/overview.mdx",sourceDirName:"inject",slug:"/inject",permalink:"/inject",tags:[],version:"current",frontMatter:{title:"ActiveJ Inject | Lightning-fast and ultimately powerful Dependency Injection Java library. Multithreaded friendly, feature-rich, and can boast with lighting-fast start-up time and runtime",sidebar_label:"Overview",keywords:["di","dependency injection","guice alternative","spring di","spring alternative","di benchmarks","java","java di","java dependency injection","java framework"],slug:"/inject"},sidebar:"docs",previous:{title:"Examples",permalink:"/http/examples"},next:{title:"Basics",permalink:"/inject/basics"}},l=[{value:"Why ActiveJ Inject?",id:"why-activej-inject",children:[],level:2},{value:"Dependency Injection: Redefined",id:"dependency-injection-redefined",children:[],level:2},{value:"Add ActiveJ Inject to your project",id:"add-activej-inject-to-your-project",children:[],level:2}],f={toc:l};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"ActiveJ Inject is a lightweight and powerful dependency injection library with ultimate performance and no third-party dependencies. It is multi-thread friendly, feature-rich, and can boast with lighting-fast start-up time and runtime, significantly outperforming Spring DI or Guice.\nActiveJ Inject is one of the ActiveJ technologies and can be used as a stand-alone component."),(0,a.kt)("h2",{id:"why-activej-inject"},"Why ActiveJ Inject?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports annotation-based configuration as well as manual binding to escape reflection overhead"),(0,a.kt)("li",{parentName:"ul"},"Bindings are grouped into Modules that can be reused in other applications"),(0,a.kt)("li",{parentName:"ul"},"Optimized injectors for single-threaded and multi-threaded use cases"),(0,a.kt)("li",{parentName:"ul"},"Ability to combine, override and transform bindings"),(0,a.kt)("li",{parentName:"ul"},"Support for singletons, nested scopes and transient bindings"),(0,a.kt)("li",{parentName:"ul"},"Dependency graph processing is performed once at startup time"),(0,a.kt)("li",{parentName:"ul"},"Provides means to introspect the dependency graph"),(0,a.kt)("li",{parentName:"ul"},"No third-party dependencies")),(0,a.kt)("h2",{id:"dependency-injection-redefined"},"Dependency Injection: Redefined"),(0,a.kt)("p",null,"Enjoy development with a wide range of powerful tools. ActiveJ Inject simplifies development, debugging, refactoring and reusing of your ",(0,a.kt)("strong",{parentName:"p"},"code without restrictions and overhead"),"."),(0,a.kt)("p",null,"The annotations processing is separated into a standard plugin that is used by default and allows for ",(0,a.kt)("strong",{parentName:"p"},"generation of missing dependencies"),". Yet if you need to implement a complex business logic, you can either use ",(0,a.kt)("strong",{parentName:"p"},"ActiveJ Inject DSL"),", or even create your own ",(0,a.kt)("strong",{parentName:"p"},"annotations processing plugins"),"."),(0,a.kt)("p",null,"The DSL provides support for ",(0,a.kt)("strong",{parentName:"p"},"programmatic binding generation, introspections of dependencies graphs, transformations, automatic generation of missing bindings, and modification of the already existing bindings"),". This way you can use the full power of Java to algorithmically create complex bindings and dependencies graphs directly ",(0,a.kt)("strong",{parentName:"p"},"in runtime")," with respect to the runtime information and settings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Module cookbook = new AbstractModule() {\n    @Provides\n    Sugar sugar() { return new Sugar("Sugar", 10.f); }\n\n    @Provides\n    Butter butter() { return new Butter("Butter", 20.0f); }\n\n    @Provides\n    Flour flour() { return new Flour("Flour", 100.0f); }\n\n    @Provides\n    Pastry pastry(Sugar sugar, Butter butter, Flour flour) {\n        return new Pastry(sugar, butter, flour);\n    }\n\n    @Provides\n    Cookie cookie(Pastry pastry) {\n        return new Cookie(pastry);\n    }\n};\nInjector.of(cookbook).getInstance(Cookie.class);\n')),(0,a.kt)("h2",{id:"add-activej-inject-to-your-project"},"Add ActiveJ Inject to your project"),(0,a.kt)("p",null,"You can add ActiveJ Inject to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Inject ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,a.kt)(c.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-inject",mdxType:"DynamicLink"},"Github")," or ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-inject"},"Maven"),")."))}g.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,n){var r=n(77813),i=Object.prototype,a=i.hasOwnProperty;e.exports=function(e,t,n,o){return void 0===e||r(e,i[n])&&!a.call(o,n)?t:e}},89464:function(e,t,n){var r=n(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=r},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,n){var r=n(98363),i=n(21463),a=n(81704),o=i((function(e,t,n,i){r(t,a(t),e,i)}));e.exports=o},9591:function(e,t,n){var r=n(96874),i=n(5976),a=n(64647),o=i((function(e,t){try{return r(e,void 0,t)}catch(n){return a(n)?n:new Error(n)}}));e.exports=o},7187:function(e,t,n){var r=n(89464),i=n(79833),a=/[&<>"']/g,o=RegExp(a.source);e.exports=function(e){return(e=i(e))&&o.test(e)?e.replace(a,r):e}},64647:function(e,t,n){var r=n(44239),i=n(37005),a=n(68630);e.exports=function(e){if(!i(e))return!1;var t=r(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!a(e)}},41106:function(e,t,n){var r=n(29018),i=n(9591),a=n(47415),o=n(24626),c=n(31994),s=n(64647),u=n(16612),p=n(3674),d=n(5712),l=n(15835),f=n(79833),g=/\b__p \+= '';/g,v=/\b(__p \+=) '' \+/g,m=/(__e\(.*?\)|\b__t\)) \+\n'';/g,h=/[()=,{}\[\]\/\s]/,j=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,y=/($^)/,b=/['\n\r\u2028\u2029\\]/g,w=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var k=l.imports._.templateSettings||l;n&&u(e,t,n)&&(t=void 0),e=f(e),t=r({},t,k,o);var _,x,I=r({},t.imports,k.imports,o),A=p(I),N=a(I,A),J=0,D=t.interpolate||y,S="__p += '",M=RegExp((t.escape||y).source+"|"+D.source+"|"+(D===d?j:y).source+"|"+(t.evaluate||y).source+"|$","g"),P=w.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(M,(function(t,n,r,i,a,o){return r||(r=i),S+=e.slice(J,o).replace(b,c),n&&(_=!0,S+="' +\n__e("+n+") +\n'"),a&&(x=!0,S+="';\n"+a+";\n__p += '"),r&&(S+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),J=o+t.length,t})),S+="';\n";var E=w.call(t,"variable")&&t.variable;if(E){if(h.test(E))throw new Error("Invalid `variable` option passed into `_.template`")}else S="with (obj) {\n"+S+"\n}\n";S=(x?S.replace(g,""):S).replace(v,"$1").replace(m,"$1;"),S="function("+(E||"obj")+") {\n"+(E?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(_?", __e = _.escape":"")+(x?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+S+"return __p\n}";var L=i((function(){return Function(A,P+"return "+S).apply(void 0,N)}));if(L.source=S,s(L))throw L;return L}},15835:function(e,t,n){var r=n(7187),i={escape:n(79865),evaluate:n(76051),interpolate:n(5712),variable:"",imports:{_:{escape:r}}};e.exports=i}}]);