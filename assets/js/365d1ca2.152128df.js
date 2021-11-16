(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4162],{3149:function(e,t,n){"use strict";var a=n(67294),r=n(39962),i=n(41106),o=n.n(i),c=n(15835);n.n(c)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,n=e.children,i=e.target,c=void 0===i?"_blank":i,s=(0,r.Z)().siteConfig,l=o()(t);return a.createElement("a",{href:l(s.customFields),target:c},n)}},77618:function(e,t,n){"use strict";var a=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,o=void 0===i||i,c=e.children,s=(0,r.Z)().siteConfig,l=t.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return a.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+l+t,target:"_blank"},n||c)}},65874:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(77618),c=n(3149),s=["components"],l={sidebar_label:"Quick Start"},u="Quick Start",p={unversionedId:"inject/quick-start",id:"inject/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"In this tutorial we will create an Injector out of multiple DI modules.",source:"@site/docs/inject/quick-start.mdx",sourceDirName:"inject",slug:"/inject/quick-start",permalink:"/inject/quick-start",tags:[],version:"current",frontMatter:{sidebar_label:"Quick Start"},sidebar:"docs",previous:{title:"Basics",permalink:"/inject/basics"},next:{title:"Injecting instances",permalink:"/inject/injecting-instances"}},d=[{value:"Helper classes",id:"helper-classes",children:[],level:2},{value:"Modules",id:"modules",children:[],level:2},{value:"Injector",id:"injector",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"In this tutorial we will create an ",(0,i.kt)(o.Z,{url:"/core-inject/src/main/java/io/activej/inject/Injector.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"Injector"))," out of multiple DI modules.\nThen we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Injector")," to create an instance of some service.\nWe will use annotation-based approach for defining modules as it is more readable."),(0,i.kt)("h2",{id:"helper-classes"},"Helper classes"),(0,i.kt)("p",null,"For the tutorial we will need 2 helper classes. A ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource")," class that represents source of some data and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," class which uses data retrieved from a data source for some processing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultiModuleExample.java tag=REGION_4",url:"/examples/core/inject-2/src/main/java/MultiModuleExample.java",tag:"REGION_4"},'public static final class DataSource {\n  private final InetSocketAddress address;\n  private final String dbName;\n\n  @Inject\n  public DataSource(InetSocketAddress address, String dbName) {\n    this.address = address;\n    this.dbName = dbName;\n  }\n\n  public String queryData() {\n    System.out.printf("Querying %s:%s for data%n", address, dbName);\n    return "data";\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultiModuleExample.java tag=REGION_5",url:"/examples/core/inject-2/src/main/java/MultiModuleExample.java",tag:"REGION_5"},"public static final class Service {\n  private final DataSource dataSource;\n\n  public Service(DataSource dataSource) {\n    this.dataSource = dataSource;\n  }\n\n  public void process() {\n    String data = dataSource.queryData();\n    System.out.printf(\"Processing data: '%s'%n\", data);\n  }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource")," constructor. It will be explained later."))),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("p",null,"We will define two different modules: one for the configuration and another one for the service itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultiModuleExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/MultiModuleExample.java",tag:"REGION_1"},'public static class ConfigModule extends AbstractModule {\n  @Provides\n  InetSocketAddress inetSocketAddress() {\n    return new InetSocketAddress(1234);\n  }\n\n  @Provides\n  String dbName() {\n    return "exampleDB";\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ConfigModule")," provides both the address for the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource")," as well as a database name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultiModuleExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/MultiModuleExample.java",tag:"REGION_2"},"public static class ServiceModule extends AbstractModule {\n  @Provides\n  Service service(DataSource dataSource) {\n    return new Service(dataSource);\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ServiceModule")," only provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," itself that requires ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource")," to be instantiated."),(0,i.kt)("h2",{id:"injector"},"Injector"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Injector")," is creted out of two previously defined modules. After that, an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," is obtained from the injector."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/MultiModuleExample.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/MultiModuleExample.java",tag:"REGION_3"},"public static void main(String[] args) {\n  Injector injector = Injector.of(new ConfigModule(), new ServiceModule());\n  Service service = injector.getInstance(Service.class);\n  service.process();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Service")," requires ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource")," to be instantiated, but we have not provided ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource")," explicitly in any of the modules.\nThanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation on ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource"),"'s constructor, injector automatically injected required dependencies\nand instantiated the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSource"),"."),(0,i.kt)("p",null,"The output of ",(0,i.kt)("inlineCode",{parentName:"p"},"service.process()")," call is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Querying 0.0.0.0/0.0.0.0:1234:exampleDB for data\nProcessing data: 'data'\n")),(0,i.kt)("p",null,"You can find example sources on ",(0,i.kt)(c.Z,{href:"https://github.com/activej/activej/{{githubExamplesBranch}}/examples/core/inject-2/src/main/java/MultiModuleExample.java",mdxType:"DynamicLink"},"Github")))}v.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,n){var a=n(77813),r=Object.prototype,i=r.hasOwnProperty;e.exports=function(e,t,n,o){return void 0===e||a(e,r[n])&&!i.call(o,n)?t:e}},89464:function(e,t,n){var a=n(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=a},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,n){var a=n(98363),r=n(21463),i=n(81704),o=r((function(e,t,n,r){a(t,i(t),e,r)}));e.exports=o},9591:function(e,t,n){var a=n(96874),r=n(5976),i=n(64647),o=r((function(e,t){try{return a(e,void 0,t)}catch(n){return i(n)?n:new Error(n)}}));e.exports=o},7187:function(e,t,n){var a=n(89464),r=n(79833),i=/[&<>"']/g,o=RegExp(i.source);e.exports=function(e){return(e=r(e))&&o.test(e)?e.replace(i,a):e}},64647:function(e,t,n){var a=n(44239),r=n(37005),i=n(68630);e.exports=function(e){if(!r(e))return!1;var t=a(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!i(e)}},41106:function(e,t,n){var a=n(29018),r=n(9591),i=n(47415),o=n(24626),c=n(31994),s=n(64647),l=n(16612),u=n(3674),p=n(5712),d=n(15835),m=n(79833),v=/\b__p \+= '';/g,f=/\b(__p \+=) '' \+/g,g=/(__e\(.*?\)|\b__t\)) \+\n'';/g,j=/[()=,{}\[\]\/\s]/,k=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,h=/($^)/,N=/['\n\r\u2028\u2029\\]/g,b=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var x=d.imports._.templateSettings||d;n&&l(e,t,n)&&(t=void 0),e=m(e),t=a({},t,x,o);var S,_,M=a({},t.imports,x.imports,o),w=u(M),I=i(M,w),E=0,y=t.interpolate||h,C="__p += '",D=RegExp((t.escape||h).source+"|"+y.source+"|"+(y===p?k:h).source+"|"+(t.evaluate||h).source+"|$","g"),R=b.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(D,(function(t,n,a,r,i,o){return a||(a=r),C+=e.slice(E,o).replace(N,c),n&&(S=!0,C+="' +\n__e("+n+") +\n'"),i&&(_=!0,C+="';\n"+i+";\n__p += '"),a&&(C+="' +\n((__t = ("+a+")) == null ? '' : __t) +\n'"),E=o+t.length,t})),C+="';\n";var O=b.call(t,"variable")&&t.variable;if(O){if(j.test(O))throw new Error("Invalid `variable` option passed into `_.template`")}else C="with (obj) {\n"+C+"\n}\n";C=(_?C.replace(v,""):C).replace(f,"$1").replace(g,"$1;"),C="function("+(O||"obj")+") {\n"+(O?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(S?", __e = _.escape":"")+(_?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+C+"return __p\n}";var q=r((function(){return Function(w,R+"return "+C).apply(void 0,I)}));if(q.source=C,s(q))throw q;return q}},15835:function(e,t,n){var a=n(7187),r={escape:n(79865),evaluate:n(76051),interpolate:n(5712),variable:"",imports:{_:{escape:a}}};e.exports=r}}]);