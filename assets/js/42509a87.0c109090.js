(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3460],{3149:function(e,r,t){"use strict";var i=t(67294),n=t(39962),a=t(41106),o=t.n(a),s=t(15835);t.n(s)().interpolate=/{{([\s\S]+?)}}/g,r.Z=function(e){var r=e.href,t=e.children,a=e.target,s=void 0===a?"_blank":a,l=(0,n.Z)().siteConfig,c=o()(r);return i.createElement("a",{href:c(l.customFields),target:s},t)}},77815:function(e,r,t){"use strict";t(67294);var i=t(39962);r.Z=function(e){var r=e.name,t=(0,i.Z)().siteConfig;if(!r)throw new Error("Variable name is required");if(void 0===t.customFields[r])throw new Error("Variable "+r+" not exist");return t.customFields[r]}},26603:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var i=t(83117),n=t(80102),a=(t(67294),t(3905)),o=t(77815),s=t(3149),l=["components"],c={title:"ActiveJ Serializer | World's fastest JVM serializer",description:"ActiveJ Serializer is world's fastest JVM serializer. It is streamlined and features powerful tools with intuitive DSL",sidebar_label:"Overview",keywords:["java","java serializer","java library","serializer","serialization"],slug:"/serializer"},u="Overview",p={unversionedId:"serializer/overview",id:"serializer/overview",isDocsHomePage:!1,title:"ActiveJ Serializer | World's fastest JVM serializer",description:"ActiveJ Serializer is world's fastest JVM serializer. It is streamlined and features powerful tools with intuitive DSL",source:"@site/docs/serializer/overview.mdx",sourceDirName:"serializer",slug:"/serializer",permalink:"/serializer",tags:[],version:"current",frontMatter:{title:"ActiveJ Serializer | World's fastest JVM serializer",description:"ActiveJ Serializer is world's fastest JVM serializer. It is streamlined and features powerful tools with intuitive DSL",sidebar_label:"Overview",keywords:["java","java serializer","java library","serializer","serialization"],slug:"/serializer"},sidebar:"docs",previous:{title:"Examples",permalink:"/codegen/examples"},next:{title:"Examples",permalink:"/serializer/examples"}},d=[{value:"Why ActiveJ Serializer?",id:"why-activej-serializer",children:[],level:2},{value:"Convenient and powerful",id:"convenient-and-powerful",children:[],level:2},{value:"Add ActiveJ Serializer to your project",id:"add-activej-serializer-to-your-project",children:[],level:2}],v={toc:d};function f(e){var r=e.components,t=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"ActiveJ Serializer is the fastest Java serializer in the world. At the same time, it is extremely powerful and features full support of Java subclasses, collections (including Maps), and also specialized collections like HPPC.\nActiveJ Serializer is one of the ActiveJ technologies, but it has minimal third-party dependencies and can be used as a stand-alone component."),(0,a.kt)("h2",{id:"why-activej-serializer"},"Why ActiveJ Serializer?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Works directly with Java classes via annotations. No additional layers of intermediate DTO classes."),(0,a.kt)("li",{parentName:"ul"},"Implemented using runtime bytecode generation to be compatible with dynamically created classes."),(0,a.kt)("li",{parentName:"ul"},"Stable binary format with backward binary compatibility."),(0,a.kt)("li",{parentName:"ul"},"Support of the scheme evolution: changeable versions, added or removed fields, etc."),(0,a.kt)("li",{parentName:"ul"},"Can be easily extended - you can write your own plugins for specific classes."),(0,a.kt)("li",{parentName:"ul"},"Includes special hints for even more efficient code: String formats, nullable, varlen, etc."),(0,a.kt)("li",{parentName:"ul"},"Provides little endian format for JVM intrinsics."),(0,a.kt)("li",{parentName:"ul"},"Support of unsafe mode for the best performance."),(0,a.kt)("li",{parentName:"ul"},"Cyclic references of any complexity."),(0,a.kt)("li",{parentName:"ul"},"UTF-8, UTF-16 and ISO8859-1 encoding."),(0,a.kt)("li",{parentName:"ul"},"Compatible even with complex collections, generics and nullable values.")),(0,a.kt)("h2",{id:"convenient-and-powerful"},"Convenient and powerful"),(0,a.kt)("p",null,"ActiveJ Serializer is a ground-breaking bytecode generator of ",(0,a.kt)("strong",{parentName:"p"},"fast and space-efficient serializers"),". It is incredibly ",(0,a.kt)("strong",{parentName:"p"},"powerful")," and works even with complicated objects utilizing a ",(0,a.kt)("strong",{parentName:"p"},"simple and intuitive DSL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static class Person {\n    public Person(@Deserialize("age") int age,\n                  @Deserialize("name") String name) {\n        this.age = age;\n        this.name = name;\n    }\n\n    @Serialize(order = 0)\n    public int age;\n\n    @Serialize(order = 1)\n    public final String name;\n}\n')),(0,a.kt)("h2",{id:"add-activej-serializer-to-your-project"},"Add ActiveJ Serializer to your project"),(0,a.kt)("p",null,"You can add ActiveJ Serializer to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Serializer ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,a.kt)(s.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-serializer",mdxType:"DynamicLink"},"Github")," or ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-serializer"},"Maven"),")."))}f.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(r){return null==e?void 0:e[r]}}},24626:function(e,r,t){var i=t(77813),n=Object.prototype,a=n.hasOwnProperty;e.exports=function(e,r,t,o){return void 0===e||i(e,n[t])&&!a.call(o,t)?r:e}},89464:function(e,r,t){var i=t(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=i},31994:function(e){var r={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+r[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,r,t){var i=t(98363),n=t(21463),a=t(81704),o=n((function(e,r,t,n){i(r,a(r),e,n)}));e.exports=o},9591:function(e,r,t){var i=t(96874),n=t(5976),a=t(64647),o=n((function(e,r){try{return i(e,void 0,r)}catch(t){return a(t)?t:new Error(t)}}));e.exports=o},7187:function(e,r,t){var i=t(89464),n=t(79833),a=/[&<>"']/g,o=RegExp(a.source);e.exports=function(e){return(e=n(e))&&o.test(e)?e.replace(a,i):e}},64647:function(e,r,t){var i=t(44239),n=t(37005),a=t(68630);e.exports=function(e){if(!n(e))return!1;var r=i(e);return"[object Error]"==r||"[object DOMException]"==r||"string"==typeof e.message&&"string"==typeof e.name&&!a(e)}},41106:function(e,r,t){var i=t(29018),n=t(9591),a=t(47415),o=t(24626),s=t(31994),l=t(64647),c=t(16612),u=t(3674),p=t(5712),d=t(15835),v=t(79833),f=/\b__p \+= '';/g,m=/\b(__p \+=) '' \+/g,g=/(__e\(.*?\)|\b__t\)) \+\n'';/g,b=/[()=,{}\[\]\/\s]/,h=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,w=/($^)/,z=/['\n\r\u2028\u2029\\]/g,y=Object.prototype.hasOwnProperty;e.exports=function(e,r,t){var k=d.imports._.templateSettings||d;t&&c(e,r,t)&&(r=void 0),e=v(e),r=i({},r,k,o);var _,j,S=i({},r.imports,k.imports,o),x=u(S),J=a(S,x),A=0,N=r.interpolate||w,M="__p += '",D=RegExp((r.escape||w).source+"|"+N.source+"|"+(N===p?h:w).source+"|"+(r.evaluate||w).source+"|$","g"),V=y.call(r,"sourceURL")?"//# sourceURL="+(r.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(D,(function(r,t,i,n,a,o){return i||(i=n),M+=e.slice(A,o).replace(z,s),t&&(_=!0,M+="' +\n__e("+t+") +\n'"),a&&(j=!0,M+="';\n"+a+";\n__p += '"),i&&(M+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),A=o+r.length,r})),M+="';\n";var C=y.call(r,"variable")&&r.variable;if(C){if(b.test(C))throw new Error("Invalid `variable` option passed into `_.template`")}else M="with (obj) {\n"+M+"\n}\n";M=(j?M.replace(f,""):M).replace(m,"$1").replace(g,"$1;"),M="function("+(C||"obj")+") {\n"+(C?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(_?", __e = _.escape":"")+(j?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+M+"return __p\n}";var E=n((function(){return Function(x,V+"return "+M).apply(void 0,J)}));if(E.source=M,l(E))throw E;return E}},15835:function(e,r,t){var i=t(7187),n={escape:t(79865),evaluate:t(76051),interpolate:t(5712),variable:"",imports:{_:{escape:i}}};e.exports=n}}]);