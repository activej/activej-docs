(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[7722],{3149:function(e,t,n){"use strict";var r=n(67294),a=n(39962),i=n(41106),o=n.n(i),l=n(15835);n.n(l)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,n=e.children,i=e.target,l=void 0===i?"_blank":i,c=(0,a.Z)().siteConfig,s=o()(t);return r.createElement("a",{href:s(c.customFields),target:l},n)}},77618:function(e,t,n){"use strict";var r=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,i=e.isInline,o=void 0===i||i,l=e.children,c=(0,a.Z)().siteConfig,s=t.startsWith("/examples")?c.customFields.githubExamplesBranch:c.customFields.githubBranch;return r.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:c.customFields.githubUrl+"/"+s+t,target:"_blank"},n||l)}},77815:function(e,t,n){"use strict";n(67294);var r=n(39962);t.Z=function(e){var t=e.name,n=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},99999:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return v},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(77618),l=n(77815),c=n(3149),s=["components"],u={title:"\u041e\u0431\u0437\u043e\u0440 ActiveJ Codegen | \u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0431\u0430\u0439\u0442\u043a\u043e\u0434\u0430 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438",description:"ActiveJ Codegen - \u044d\u0442\u043e \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0431\u0430\u0439\u0442\u043a\u043e\u0434\u0430 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u043c API",sidebar_label:"\u041e\u0431\u0437\u043e\u0440",slug:"/codegen"},p="\u041e\u0431\u0437\u043e\u0440",d={unversionedId:"codegen/overview",id:"codegen/overview",isDocsHomePage:!1,title:"\u041e\u0431\u0437\u043e\u0440 ActiveJ Codegen | \u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0431\u0430\u0439\u0442\u043a\u043e\u0434\u0430 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438",description:"ActiveJ Codegen - \u044d\u0442\u043e \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0431\u0430\u0439\u0442\u043a\u043e\u0434\u0430 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u043c API",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/codegen/overview.mdx",sourceDirName:"codegen",slug:"/codegen",permalink:"/ru/codegen",tags:[],version:"current",frontMatter:{title:"\u041e\u0431\u0437\u043e\u0440 ActiveJ Codegen | \u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0431\u0430\u0439\u0442\u043a\u043e\u0434\u0430 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438",description:"ActiveJ Codegen - \u044d\u0442\u043e \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0431\u0430\u0439\u0442\u043a\u043e\u0434\u0430 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u043c API",sidebar_label:"\u041e\u0431\u0437\u043e\u0440",slug:"/codegen"},sidebar:"docs",previous:{title:"\u0411\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438",permalink:"/ru/inject/benchmarks"},next:{title:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",permalink:"/ru/codegen/examples"}},v=[{value:"\u041f\u043e\u0447\u0435\u043c\u0443 ActiveJ Codegen?",id:"\u043f\u043e\u0447\u0435\u043c\u0443-activej-codegen",children:[],level:2},{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u0434\u0430",children:[],level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 ActiveJ Codegen \u0432 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442",id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-activej-codegen-\u0432-\u0441\u0432\u043e\u0439-\u043f\u0440\u043e\u0435\u043a\u0442",children:[],level:2}],g={toc:v};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043e\u0431\u0437\u043e\u0440"},"\u041e\u0431\u0437\u043e\u0440"),(0,i.kt)("p",null,"ActiveJ Codegen - \u044d\u0442\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 Java-\u043a\u043e\u0434\u0430 \u0441 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0438 \u043f\u0440\u043e\u0441\u0442\u044b\u043c API. \u041e\u043d \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u043d\u0430 \u0431\u0430\u0437\u0435 ObjectWeb ASM \u0438 \u0438\u043c\u0435\u0435\u0442 \u043d\u0443\u043b\u0435\u0432\u0443\u044e \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u0443\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c. ActiveJ Codegen \u0448\u0438\u0440\u043e\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/serializer"},"ActiveJ Serializer"),", \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0435\u0433\u043e \u0441\u0430\u043c\u044b\u043c \u0431\u044b\u0441\u0442\u0440\u044b\u043c \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u043c \u043d\u0430 \u0431\u0430\u0437\u0435 JVM \u0432 \u043c\u0438\u0440\u0435. ActiveJ Codegen \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 ActiveJ, \u043d\u043e \u0438\u043c\u0435\u0435\u0442 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442."),(0,i.kt)("h2",{id:"\u043f\u043e\u0447\u0435\u043c\u0443-activej-codegen"},"\u041f\u043e\u0447\u0435\u043c\u0443 ActiveJ Codegen?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u043e\u0449\u043d\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ASM \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u043e\u043c"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043b\u0430\u043a\u043e\u043d\u0438\u0447\u043d\u044b\u0439 API Expressions, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 Lisp-\u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0439 DSL \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432)"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0430\u043b\u0433\u0435\u0431\u0440\u044b \u0434\u043b\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432: \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043f\u0440\u0435\u0434\u0438\u043a\u0430\u0442\u044b, \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435, \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0438 \u0442.\u0434."),(0,i.kt)("li",{parentName:"ul"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0442\u0438\u043f\u043e\u0432"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441 \u043d\u0443\u043b\u0435\u0432\u044b\u043c\u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 (\u0433\u0435\u0442\u0435\u0440\u043e\u0433\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445)")),(0,i.kt)("h2",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u043a\u043e\u0434\u0430"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430"),(0,i.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Greeter {\n    void sayHello();\n}\n")),(0,i.kt)("p",null,'\u0421\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c "Hello World" \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 ',(0,i.kt)("inlineCode",{parentName:"p"},"sayHello()")," ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class WorldGreeter implements Greeter {\n    @Override\n    public void sayHello() {\n        System.out.println("Hello World");\n    }\n}\n')),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u043a\u043b\u0430\u0441\u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e, \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)(o.Z,{url:"/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ClassBuilder"))," class \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d \u043a\u043b\u0430\u0441\u0441. \u0418 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)(o.Z,{url:"/core-codegen/src/main/java/io/activej/codegen/DefiningClassLoader.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"DefiningClassLoader"))," \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'DefiningClassLoader classLoader = DefiningClassLoader.create();\n\nClass<Greeter> greeterClass = ClassBuilder.create(Greeter.class)\n        .withMethod("sayHello",\n                call(staticField(System.class, "out"), "println", value("Hello world")))\n        .defineClass(classLoader);\n')),(0,i.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},'call(staticField(System.class, "out"), "println", value("Hello world"))')," ."),(0,i.kt)("p",null,"\u0412\u043e\u0442 \u043a\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 Expressions DSL. \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043c\u044b \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u043c\u0441\u044f \u043a \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043f\u043e\u043b\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"out")," \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"System")," . \u0417\u0430\u0442\u0435\u043c \u043c\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c \u043d\u0430 \u043d\u0435\u043c \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"p"},"println()")," , \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello world"')," . \u042d\u0442\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},'System.out.println("Hello world").')),(0,i.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHello()")," , \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f ",(0,i.kt)("em",{parentName:"p"},'"Hello world"')," , \u043a\u0430\u043a \u0438 \u043e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Greeter greeter = greeterClass.getDeclaredConstructor().newInstance();\ngreeter.sayHello(); // \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442 "Hello world" \u0432 stdout\n')),(0,i.kt)("p",null,"\u042d\u0442\u043e \u043b\u0438\u0448\u044c \u043d\u0430\u043c\u0435\u043a \u043d\u0430 \u0442\u043e, \u043d\u0430 \u0447\u0442\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d ActiveJ Codegen. \u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c \u0438\u043b\u0438 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438."),(0,i.kt)("h2",{id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-activej-codegen-\u0432-\u0441\u0432\u043e\u0439-\u043f\u0440\u043e\u0435\u043a\u0442"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 ActiveJ Codegen \u0432 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c ActiveJ Codegen \u0432 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0432 \u0435\u0433\u043e \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 Maven. \u042d\u0442\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0432\u044b\u043f\u0443\u0441\u043a ActiveJ Codegen ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"}))," (\u0441\u043c. \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 ",(0,i.kt)(c.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-codegen",mdxType:"DynamicLink"},"Github")," \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-codegen"},"Maven"),")."))}m.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,n){var r=n(77813),a=Object.prototype,i=a.hasOwnProperty;e.exports=function(e,t,n,o){return void 0===e||r(e,a[n])&&!i.call(o,n)?t:e}},89464:function(e,t,n){var r=n(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=r},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,n){var r=n(98363),a=n(21463),i=n(81704),o=a((function(e,t,n,a){r(t,i(t),e,a)}));e.exports=o},9591:function(e,t,n){var r=n(96874),a=n(5976),i=n(64647),o=a((function(e,t){try{return r(e,void 0,t)}catch(n){return i(n)?n:new Error(n)}}));e.exports=o},7187:function(e,t,n){var r=n(89464),a=n(79833),i=/[&<>"']/g,o=RegExp(i.source);e.exports=function(e){return(e=a(e))&&o.test(e)?e.replace(i,r):e}},64647:function(e,t,n){var r=n(44239),a=n(37005),i=n(68630);e.exports=function(e){if(!a(e))return!1;var t=r(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!i(e)}},41106:function(e,t,n){var r=n(29018),a=n(9591),i=n(47415),o=n(24626),l=n(31994),c=n(64647),s=n(16612),u=n(3674),p=n(5712),d=n(15835),v=n(79833),g=/\b__p \+= '';/g,m=/\b(__p \+=) '' \+/g,f=/(__e\(.*?\)|\b__t\)) \+\n'';/g,k=/[()=,{}\[\]\/\s]/,C=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,h=/($^)/,b=/['\n\r\u2028\u2029\\]/g,_=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var j=d.imports._.templateSettings||d;n&&s(e,t,n)&&(t=void 0),e=v(e),t=r({},t,j,o);var N,x,y=r({},t.imports,j.imports,o),A=u(y),w=i(y,A),J=0,H=t.interpolate||h,S="__p += '",L=RegExp((t.escape||h).source+"|"+H.source+"|"+(H===p?C:h).source+"|"+(t.evaluate||h).source+"|$","g"),D=_.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(L,(function(t,n,r,a,i,o){return r||(r=a),S+=e.slice(J,o).replace(b,l),n&&(N=!0,S+="' +\n__e("+n+") +\n'"),i&&(x=!0,S+="';\n"+i+";\n__p += '"),r&&(S+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),J=o+t.length,t})),S+="';\n";var E=_.call(t,"variable")&&t.variable;if(E){if(k.test(E))throw new Error("Invalid `variable` option passed into `_.template`")}else S="with (obj) {\n"+S+"\n}\n";S=(x?S.replace(g,""):S).replace(m,"$1").replace(f,"$1;"),S="function("+(E||"obj")+") {\n"+(E?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(N?", __e = _.escape":"")+(x?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+S+"return __p\n}";var Z=a((function(){return Function(A,D+"return "+S).apply(void 0,w)}));if(Z.source=S,c(Z))throw Z;return Z}},15835:function(e,t,n){var r=n(7187),a={escape:n(79865),evaluate:n(76051),interpolate:n(5712),variable:"",imports:{_:{escape:r}}};e.exports=a}}]);