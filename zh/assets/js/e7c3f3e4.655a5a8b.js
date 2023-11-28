"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[0],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return n?t.createElement(g,o(o({ref:a},p),{},{components:n})):t.createElement(g,o({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77618:function(e,a,n){var t=n(67294),r=n(39962);a.Z=function(e){var a=e.url,n=e.text,l=e.isInline,o=void 0===l||l,s=e.children,i=(0,r.Z)().siteConfig,c=a.startsWith("/examples")?i.customFields.githubExamplesBranch:i.customFields.githubBranch;return t.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:i.customFields.githubUrl+"/"+c+a,target:"_blank"},n||s)}},77815:function(e,a,n){n(67294);var t=n(39962);a.Z=function(e){var a=e.name,n=(0,t.Z)().siteConfig;if(!a)throw new Error("Variable name is required");if(void 0===n.customFields[a])throw new Error("Variable "+a+" not exist");return n.customFields[a]}},56549:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return g}});var t=n(83117),r=n(80102),l=(n(67294),n(3905)),o=n(77618),s=n(77815),i=["components"],c={title:"ActiveJ Codegen\u5b9e\u4f8b\uff5c\u5f00\u9500\u6700\u5c0f\u7684\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u5668",description:"ActiveJ Codegen\u662f\u4e00\u4e2a\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u5668\uff0c\u5177\u6709\u6700\u5c0f\u7684\u5f00\u9500\u548c\u65b9\u4fbf\u7684API\u3002",sidebar_label:"\u5b9e\u4f8b",keywords:["\u6bd4\u7279\u514b\u4ee3\u7801","\u6bd4\u7279\u7801\u751f\u6210\u5668","\u8fd0\u884c\u65f6\u4ee3\u7801\u751f\u6210\u5668","\u8fd0\u884c\u65f6\u67e5\u8be2\u5904\u7406","java","JAVA\u6846\u67b6"]},p="\u5b9e\u4f8b",m={unversionedId:"codegen/examples",id:"codegen/examples",isDocsHomePage:!1,title:"ActiveJ Codegen\u5b9e\u4f8b\uff5c\u5f00\u9500\u6700\u5c0f\u7684\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u5668",description:"ActiveJ Codegen\u662f\u4e00\u4e2a\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u5668\uff0c\u5177\u6709\u6700\u5c0f\u7684\u5f00\u9500\u548c\u65b9\u4fbf\u7684API\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/codegen/examples.mdx",sourceDirName:"codegen",slug:"/codegen/examples",permalink:"/zh/codegen/examples",tags:[],version:"current",frontMatter:{title:"ActiveJ Codegen\u5b9e\u4f8b\uff5c\u5f00\u9500\u6700\u5c0f\u7684\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u5668",description:"ActiveJ Codegen\u662f\u4e00\u4e2a\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u5668\uff0c\u5177\u6709\u6700\u5c0f\u7684\u5f00\u9500\u548c\u65b9\u4fbf\u7684API\u3002",sidebar_label:"\u5b9e\u4f8b",keywords:["\u6bd4\u7279\u514b\u4ee3\u7801","\u6bd4\u7279\u7801\u751f\u6210\u5668","\u8fd0\u884c\u65f6\u4ee3\u7801\u751f\u6210\u5668","\u8fd0\u884c\u65f6\u67e5\u8be2\u5904\u7406","java","JAVA\u6846\u67b6"]},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/zh/codegen"},next:{title:"\u6982\u8ff0",permalink:"/zh/serializer"}},d=[{value:"\u5b57\u8282\u7801\u8868\u8fbe\u5f0f",id:"\u5b57\u8282\u7801\u8868\u8fbe\u5f0f",children:[],level:2}],u={toc:d};function g(e){var a=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8981\u8fd0\u884c\u8fd9\u4e9b\u4f8b\u5b50\uff0c\u4f60\u9700\u8981\u4eceGitHub\u4e0a\u514b\u9686ActiveJ\u3002"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,l.kt)("p",{parentName:"div"},"\u5e76\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2aMaven\u9879\u76ee\u5bfc\u5165\u3002 \u67e5\u770b\u6807\u7b7e ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(s.Z,{name:"currentVersion",mdxType:"Variable"})),"\u3002 \u5728\u8fd0\u884c\u8fd9\u4e9b\u4f8b\u5b50\u4e4b\u524d\uff0c\u5148\u5efa\u7acb\u9879\u76ee\u3002 \u8fd9\u4e9b\u4f8b\u5b50\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"activej/examples/core/codegen")))),(0,l.kt)("h2",{id:"\u5b57\u8282\u7801\u8868\u8fbe\u5f0f"},"\u5b57\u8282\u7801\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"sayHello()"),' \u65b9\u6cd5\uff0c\u6253\u5370\u51fa "Hello world\uff01"\u3002 \u9996\u5148\uff0c\u6211\u4eec\u5c06\u5b9a\u4e49\u4e00\u4e2a\u7b80\u5355\u7684 ',(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50")," \u63a5\u53e3\uff0c\u5b83\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"sayHello()")," \u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/CodegenExpressionsExample.java tag=REGION_3",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",tag:"REGION_3"},"public interface Greeter {\n  void sayHello();\n}\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5f00\u59cb\u63cf\u8ff0 ",(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50")," \u5b50\u7c7b\u884c\u4e3a\u3002 \u4e3a\u6b64\u76ee\u7684\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,l.kt)(o.Z,{text:"ClassBuilder",url:"/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java",mdxType:"Githublink"})," \u7c7b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/CodegenExpressionsExample.java tag=REGION_1",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",tag:"REGION_1"},'Class<Greeter> greeterClass = ClassGenerator.builder(Greeter.class)\n  .withMethod("sayHello",\n    call(staticField(System.class, "out"), "println", value("Hello world")))\n  .build()\n  .generateClass(CLASS_LOADER);\n')),(0,l.kt)("p",null,"\u8981\u5b9e\u4f8b\u5316\u63cf\u8ff0\u7684\u7c7b\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"newInstance()"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/CodegenExpressionsExample.java tag=REGION_2",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",tag:"REGION_2"},"Greeter greeter = greeterClass.getDeclaredConstructor().newInstance();\ngreeter.sayHello();\n")),(0,l.kt)(o.Z,{text:"See full example on GitHub",url:"/examples/core/codegen/src/main/java/CodegenExpressionsExample.java",mdxType:"Githublink"}),"## \u52a8\u6001\u7c7b\u7684\u521b\u5efa \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u52a8\u6001\u5730\u521b\u5efa\u4e00\u4e2a\u5b9e\u73b0\u4e86\u4e00\u4e2a\u63a5\u53e3\u7684\u7c7b\u3002 \u56e0\u6b64\uff0c\u8ba9\u6211\u4eec\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 **Person** \u63a5\u53e3\u3002",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/DynamicClassCreationExample.java tag=REGION_1",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",tag:"REGION_1"},'@SuppressWarnings({"unused", "NullableProblems"})\npublic interface Person extends Comparable<Person> {\n  void setIdAndName(int id, String name);\n\n  int getId();\n\n  String getName();\n\n  int hashOfPojo(ExamplePojo personPojo);\n\n  int hash();\n\n  @Override\n  int compareTo(Person o);\n\n  @Override\n  String toString();\n\n  @Override\n  boolean equals(Object obj);\n}\n')),(0,l.kt)("p",null,"\u7ee7\u7eed\u6784\u5efa\u4e00\u4e2a\u5b9e\u73b0 ",(0,l.kt)("strong",{parentName:"p"},"Person")," \u63a5\u53e3\u7684\u7c7b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/DynamicClassCreationExample.java tag=REGION_2",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",tag:"REGION_2"},'// declare fields\n// setter for both fields - a sequence of actions\n// compareTo, equals, hashCode and toString methods implementations follow the standard convention\nClass<Person> personClass = ClassGenerator.builder(Person.class)\n  // declare fields\n  .withField("id", int.class)\n  .withField("name", String.class)\n\n  // setter for both fields - a sequence of actions\n  .withMethod("setIdAndName", sequence(\n    set(property(self(), "id"), arg(0)),\n    set(property(self(), "name"), arg(1))))\n  .withMethod("getId", property(self(), "id"))\n  .withMethod("getName", property(self(), "name"))\n\n  // compareTo, equals, hashCode and toString methods implementations follow the standard convention\n  .withMethod("int compareTo(Person)", comparableImpl("id", "name"))\n  .withMethod("equals", equalsImpl("id", "name"))\n  .withMethod("hash", hashCodeImpl("id", "name"))\n  .withMethod("hashOfPojo", HashCode.builder()\n    .with(property(arg(0), "id"))\n    .with(property(arg(0), "name"))\n    .build())\n  .withMethod("toString", ToString.builder()\n    .withField("id")\n    .with("name", property(self(), "name"))\n    .build())\n  .build()\n  .generateClass(CLASS_LOADER);\n')),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u6d4b\u8bd5\u6211\u4eec\u52a8\u6001\u751f\u6210\u7684\u7c7b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/DynamicClassCreationExample.java tag=REGION_3",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",tag:"REGION_3"},'// Instantiate two objects of dynamically defined class\nPerson jack = personClass.getDeclaredConstructor().newInstance();\nPerson martha = personClass.getDeclaredConstructor().newInstance();\n\njack.setIdAndName(5, "Jack");\nmartha.setIdAndName(jack.getId() * 2, "Martha");\n\nSystem.out.println("First person: " + jack);\nSystem.out.println("Second person: " + martha);\n\nSystem.out.println("jack.equals(martha) ? : " + jack.equals(martha));\n')),(0,l.kt)(o.Z,{text:"See full example on GitHub",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",mdxType:"Githublink"}),"## \u8ba1\u7b97\u5668\u5b9e\u4f8b \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u8ba1\u7b97\u5668\uff0c\u5c06\u8f93\u5165\u7684\u65b9\u7a0b\u5f0f\u5b57\u7b26\u4e32\u89e3\u6790\u4e3aAST\u3002 \u7136\u540e\uff0c\u5b83\u751f\u6210\u4e86\u4e00\u4e2a \u4f18\u5316\u7684\u7c7b\u6765\u8ba1\u7b97\u8868\u8fbe\u5f0f\u3002 \u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u89e3\u6790\u5668\uff0c\u8fd4\u56de\u8868\u8fbe\u5f0f\u7684AST\u3002",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/DynamicClassCreationExample.java tag=REGION_3",url:"/examples/core/codegen/src/main/java/DynamicClassCreationExample.java",tag:"REGION_3"},'// Instantiate two objects of dynamically defined class\nPerson jack = personClass.getDeclaredConstructor().newInstance();\nPerson martha = personClass.getDeclaredConstructor().newInstance();\n\njack.setIdAndName(5, "Jack");\nmartha.setIdAndName(jack.getId() * 2, "Martha");\n\nSystem.out.println("First person: " + jack);\nSystem.out.println("Second person: " + martha);\n\nSystem.out.println("jack.equals(martha) ? : " + jack.equals(martha));\n')),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"ClassBuilder")," \uff0c\u63cf\u8ff0\u5c06\u88ab\u751f\u6210\u7684\u7c7b\u3002 \u5b83\u5c06\u5b9e\u73b0 ",(0,l.kt)("strong",{parentName:"p"},"DoubleUnaryOperator")," \u63a5\u53e3\uff0c\u5e76\u5c06\u6709\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"applyAsDouble")," \u65b9\u6cd5\u3002\n\u8ba9\u6211\u4eec\u6765\u521b\u5efa\u76f8\u5e94\u7684\u6784\u5efa\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java tag=REGION_2",url:"/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java",tag:"REGION_2"},'public static Class<DoubleUnaryOperator> compile(String expression) {\n  return ClassGenerator.builder(DoubleUnaryOperator.class)\n    .withMethod("applyAsDouble", PARSER.parse(expression))\n    .build()\n    .generateClass(CLASS_LOADER);\n}\n')),(0,l.kt)("p",null,"\u8be5\u65b9\u6cd5\u5c06\u6709\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"var1")," \u53c2\u6570\uff0c\u7528\u4e8e\u672a\u77e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'private static final Parser<Expression> UNKNOWN = DELIMITERS.token("x").retn\uff08Expressions.arg(0)\uff09\u3002\n')),(0,l.kt)("p",null,"\u56e0\u6b64\uff0cActiveJ Codegen\u5c06\u751f\u6210\u4ee5\u4e0b\u7c7b\u522b\u7684\u5b57\u8282\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public final class Class1 implements DoubleUnaryOperator {\n    public Class1() {\n    }\n\n    public double applyAsDouble(double var1) {\n        return (2.0D 2.0D * 2.0D) * -var1 5.0D 1024.0D / (100.0D 58.0D) * 50.0D * 37.0D - 100.0D 2.0D * Math.pow\uff08var1, 2.0D\uff09 .0D;\n    }\n}\n")),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6765\u5904\u7406\u4e00\u4e0b\u624b\u5de5\u7f16\u5199\u7684\u4ee3\u7801\u548c\u52a8\u6001\u751f\u6210\u7684\u5b9e\u4f8b\u8bc4\u4f30\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java tag=REGION_3",url:"/examples/core/codegen/src/main/java/calculator/CodegenCalculatorExample.java",tag:"REGION_3"},'public static void main(String[] args) throws Exception {\n  double x = -1;\n\n  // manual code, superfast\n  System.out.println(((2.0 + 2.0 * 2.0) * -x) + 5.0 + 1024.0 / (100.0 + 58.0) * 50.0 * 37.0 - 100.0 + 2.0 * Math.pow(x, 2.0) % 3.0);\n\n  DoubleUnaryOperator instance = compile("((2 + 2 * 2) * -x) + 5 + 1024 / (100 + 58) * 50 * 37 - 100 + 2 * x ^ 2 % 3").getDeclaredConstructor().newInstance();\n\n  // generated instance evaluation, literally equivalent to manual code (with a method call around it), except it was dynamically generated\n  System.out.println(instance.applyAsDouble(x));\n}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u8fd8\u5bf9\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u8fdb\u884c\u4e86\u57fa\u51c6\u6d4b\u8bd5\uff0c\u4ee5\u6bd4\u8f83\u5176\u6027\u80fd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u57fa\u51c6\u6a21\u5f0f Cnt\u5f97\u5206 \u8bef\u5dee\u5355\u4f4d\nCalculatorBenchmark.generated avgt 10 115.882 \xb1 1.082 ns/op\nCalculatorBenchmark.manual avgt 10 115.222 \xb1 1.600 ns/op\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u7ad9\u4e0a\u627e\u5230\u5b9e\u4f8b\u6765\u6e90 ",(0,l.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/BindingGeneratorExample.java",mdxType:"Githublink"})))}g.isMDXComponent=!0}}]);