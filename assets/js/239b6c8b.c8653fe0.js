(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8717],{3149:function(e,t,n){"use strict";var i=n(67294),r=n(39962),a=n(41106),o=n.n(a),c=n(15835);n.n(c)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,n=e.children,a=e.target,c=void 0===a?"_blank":a,s=(0,r.Z)().siteConfig,l=o()(t);return i.createElement("a",{href:l(s.customFields),target:c},n)}},77618:function(e,t,n){"use strict";var i=n(67294),r=n(39962);t.Z=function(e){var t=e.url,n=e.text,a=e.isInline,o=void 0===a||a,c=e.children,s=(0,r.Z)().siteConfig,l=t.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return i.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+l+t,target:"_blank"},n||c)}},77815:function(e,t,n){"use strict";n(67294);var i=n(39962);t.Z=function(e){var t=e.name,n=(0,i.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},69337:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return v},toc:function(){return d},default:function(){return h}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=n(77618),c=n(77815),s=n(3149),l=["components"],p={sidebar_label:"Overview",slug:"/specializer"},u="Overview",v={unversionedId:"specializer/overview",id:"specializer/overview",isDocsHomePage:!1,title:"Overview",description:"ActiveJ Specializer is an innovative technology for improving class runtime performance for the JVM. It is one of the ActiveJ technologies that has no third-party dependencies, so it can be used as a stand-alone component.",source:"@site/docs/specializer/overview.mdx",sourceDirName:"specializer",slug:"/specializer",permalink:"/specializer",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",slug:"/specializer"},sidebar:"docs",previous:{title:"Examples",permalink:"/serializer/examples"},next:{title:"Examples",permalink:"/specializer/examples"}},d=[{value:"How it works?",id:"how-it-works",children:[],level:2},{value:"Why ActiveJ Specializer?",id:"why-activej-specializer",children:[],level:2},{value:"High flexibility",id:"high-flexibility",children:[],level:2},{value:"Add ActiveJ Specializer to your project",id:"add-activej-specializer-to-your-project",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"ActiveJ Specializer is an innovative technology for improving class runtime performance for the JVM. It is one of the ActiveJ technologies that has no third-party dependencies, so it can be used as a stand-alone component."),(0,a.kt)("h2",{id:"how-it-works"},"How it works?"),(0,a.kt)("p",null,"ActiveJ Specializer uses ASM library to automatically convert class instances into specialized static classes, and class instance fields into baked-in static fields. This enables a wide variety of JVM optimizations for static classes that are not possible otherwise: dead code elimination, aggressively inlining methods, and static constants. According to our measures, in some cases speedups can reach ",(0,a.kt)("strong",{parentName:"p"},"30%-50%"),"."),(0,a.kt)("h2",{id:"why-activej-specializer"},"Why ActiveJ Specializer?"),(0,a.kt)("p",null,"This simple example illustrates the core ActiveJ Specializer concept. Suppose there is an ",(0,a.kt)("inlineCode",{parentName:"p"},"INT_UNARY_OPERATOR")," that can be simplified. ",(0,a.kt)("inlineCode",{parentName:"p"},"INT_UNARY_OPERATOR_SPECIALIZED")," specializes the equation similarly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"INT_UNARY_OPERATOR_SPECIALIZED_MANUALLY"),", but does so automagically."),(0,a.kt)("p",null,"According to the benchmarks the original equation was processed in 69.938 ns, while manual and automatic specialized took only 26.533 ns and 26.691 ns, respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"static IntUnaryOperator INT_UNARY_OPERATOR =\n    new IntUnaryOperatorProduct(\n        new IntUnaryOperatorSum(\n            new IntUnaryOperatorSum(\n                 new IntUnaryOperatorIdentity(),\n                 new IntUnaryOperatorConst(5)),\n            new IntUnaryOperatorConst(-5)),\n         new IntUnaryOperatorConst(-1));\n\nstatic IntUnaryOperator INT_UNARY_OPERATOR_SPECIALIZED_MANUALLY =\n    new IntUnaryOperator() {\n        @Override\n        public int applyAsInt(int x) {\n            return -x;\n        }\n    };\n\nstatic IntUnaryOperator INT_UNARY_OPERATOR_SPECIALIZED =\n    SPECIALIZER.specialize(INT_UNARY_OPERATOR);\n")),(0,a.kt)("h2",{id:"high-flexibility"},"High flexibility"),(0,a.kt)("p",null,"ActiveJ Specializer goes far beyond arithmetic equations and can be used in complex scenarios. For example, according to ",(0,a.kt)(o.Z,{text:"benchmarks",url:"/benchmarks/inject/src/main/java/io/activej/inject/ActiveJDirectScopebindBenchmark.java",mdxType:"Githublink"}),", ActiveJ Specializer makes the ",(0,a.kt)("strong",{parentName:"p"},"ActiveJ Inject")," DI library one-third faster. To apply ActiveJ Specializer to ActiveJ Inject, simply add ",(0,a.kt)("inlineCode",{parentName:"p"},"Injector.useSpecializer()")," before instantiating Injector."),(0,a.kt)("h2",{id:"add-activej-specializer-to-your-project"},"Add ActiveJ Specializer to your project"),(0,a.kt)("p",null,"You can add ActiveJ Specializer to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Specializer ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(c.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,a.kt)(s.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-specializer",mdxType:"DynamicLink"},"Github")," or ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-specializer"},"Maven"),")."))}h.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,n){var i=n(77813),r=Object.prototype,a=r.hasOwnProperty;e.exports=function(e,t,n,o){return void 0===e||i(e,r[n])&&!a.call(o,n)?t:e}},89464:function(e,t,n){var i=n(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=i},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,n){var i=n(98363),r=n(21463),a=n(81704),o=r((function(e,t,n,r){i(t,a(t),e,r)}));e.exports=o},9591:function(e,t,n){var i=n(96874),r=n(5976),a=n(64647),o=r((function(e,t){try{return i(e,void 0,t)}catch(n){return a(n)?n:new Error(n)}}));e.exports=o},7187:function(e,t,n){var i=n(89464),r=n(79833),a=/[&<>"']/g,o=RegExp(a.source);e.exports=function(e){return(e=r(e))&&o.test(e)?e.replace(a,i):e}},64647:function(e,t,n){var i=n(44239),r=n(37005),a=n(68630);e.exports=function(e){if(!r(e))return!1;var t=i(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!a(e)}},41106:function(e,t,n){var i=n(29018),r=n(9591),a=n(47415),o=n(24626),c=n(31994),s=n(64647),l=n(16612),p=n(3674),u=n(5712),v=n(15835),d=n(79833),m=/\b__p \+= '';/g,h=/\b(__p \+=) '' \+/g,f=/(__e\(.*?\)|\b__t\)) \+\n'';/g,g=/[()=,{}\[\]\/\s]/,y=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_=/($^)/,b=/['\n\r\u2028\u2029\\]/g,k=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var A=v.imports._.templateSettings||v;n&&l(e,t,n)&&(t=void 0),e=d(e),t=i({},t,A,o);var w,x,I=i({},t.imports,A.imports,o),j=p(I),O=a(I,j),z=0,E=t.interpolate||_,S="__p += '",N=RegExp((t.escape||_).source+"|"+E.source+"|"+(E===u?y:_).source+"|"+(t.evaluate||_).source+"|$","g"),R=k.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(N,(function(t,n,i,r,a,o){return i||(i=r),S+=e.slice(z,o).replace(b,c),n&&(w=!0,S+="' +\n__e("+n+") +\n'"),a&&(x=!0,S+="';\n"+a+";\n__p += '"),i&&(S+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),z=o+t.length,t})),S+="';\n";var U=k.call(t,"variable")&&t.variable;if(U){if(g.test(U))throw new Error("Invalid `variable` option passed into `_.template`")}else S="with (obj) {\n"+S+"\n}\n";S=(x?S.replace(m,""):S).replace(h,"$1").replace(f,"$1;"),S="function("+(U||"obj")+") {\n"+(U?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(w?", __e = _.escape":"")+(x?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+S+"return __p\n}";var T=r((function(){return Function(j,R+"return "+S).apply(void 0,O)}));if(T.source=S,s(T))throw T;return T}},15835:function(e,t,n){var i=n(7187),r={escape:n(79865),evaluate:n(76051),interpolate:n(5712),variable:"",imports:{_:{escape:i}}};e.exports=r}}]);