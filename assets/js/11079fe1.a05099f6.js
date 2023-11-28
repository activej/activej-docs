"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9918],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(a),d=i,v=g["".concat(u,".").concat(d)]||g[d]||p[d]||r;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},77618:function(e,t,a){var n=a(67294),i=a(39962);t.Z=function(e){var t=e.url,a=e.text,r=e.isInline,l=void 0===r||r,o=e.children,u=(0,i.Z)().siteConfig,s=t.startsWith("/examples")?u.customFields.githubExamplesBranch:u.customFields.githubBranch;return n.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:u.customFields.githubUrl+"/"+s+t,target:"_blank"},a||o)}},87428:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),l=a(77618),o=["components"],u={title:"ActiveJ | Building a GraalVM native image of an ActiveJ HTTP Server",sidebar_label:"ActiveJ + GraalVM native image",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","graal","grallvm","native image"],description:"Step-by-step guide of creating an ActiveJ HTTP server written in Java and building it as a GraalVM native image."},s="Building a GraalVM native image of an ActiveJ HTTP Server",c={unversionedId:"tutorials/native-image",id:"tutorials/native-image",isDocsHomePage:!1,title:"ActiveJ | Building a GraalVM native image of an ActiveJ HTTP Server",description:"Step-by-step guide of creating an ActiveJ HTTP server written in Java and building it as a GraalVM native image.",source:"@site/docs/tutorials/native-image.mdx",sourceDirName:"tutorials",slug:"/tutorials/native-image",permalink:"/tutorials/native-image",tags:[],version:"current",frontMatter:{title:"ActiveJ | Building a GraalVM native image of an ActiveJ HTTP Server",sidebar_label:"ActiveJ + GraalVM native image",keywords:["java","java for beginners","java framework","guide","tutorial","web application","async","graal","grallvm","native image"],description:"Step-by-step guide of creating an ActiveJ HTTP server written in Java and building it as a GraalVM native image."},sidebar:"tutorials",previous:{title:"ActiveJ + Docker + AWS",permalink:"/tutorials/getting-started-advanced"},next:{title:"ActiveJ + React",permalink:"/tutorials/using-react"}},p=[{value:"Download and run the server",id:"download-and-run-the-server",children:[{value:"Native image prerequisites",id:"native-image-prerequisites",children:[],level:3},{value:"Maven plugin configuration",id:"maven-plugin-configuration",children:[],level:3},{value:"Reflection configuration",id:"reflection-configuration",children:[],level:3},{value:"Building a native image",id:"building-a-native-image",children:[],level:3},{value:"Running a native image",id:"running-a-native-image",children:[],level:3}],level:2}],g={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-a-graalvm-native-image-of-an-activej-http-server"},"Building a GraalVM native image of an ActiveJ HTTP Server"),(0,r.kt)("p",null,"In this tutorial we will build the HTTP Server from the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/getting-started"},"getting started tutorial")," as\na ",(0,r.kt)("a",{parentName:"p",href:"https://www.graalvm.org/reference-manual/native-image/"},"GraalVM native image"),"."),(0,r.kt)("h2",{id:"download-and-run-the-server"},"Download and run the server"),(0,r.kt)("p",null,"First, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/examples-6.0-beta2"},"clone ActiveJ")," locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b examples-6.0-beta2 https://github.com/activej/activej.git\n")),(0,r.kt)("p",null,"Then open the project in your IDE of choice. Before running the example, build the project (",(0,r.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,r.kt)("p",null,"Navigate to a ",(0,r.kt)(l.Z,{text:"HelloWorldHttpServer",url:"/examples/tutorials/native-image/src/main/java/HelloWorldHttpServer.java",mdxType:"Githublink"})," class, which is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/native-image"),"\nand run its ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," method. Open your favourite browser and go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")),(0,r.kt)("p",null,'You can see that it is a simple "Hello world" web server:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/native-image/src/main/java/HelloWorldHttpServer.java tag=EXAMPLE",url:"/examples/tutorials/native-image/src/main/java/HelloWorldHttpServer.java",tag:"EXAMPLE"},'public class HelloWorldHttpServer extends HttpServerLauncher {\n\n  @Provides\n  AsyncServlet servlet() {\n    return request -> HttpResponse.ok200()\n      .withPlainText("Hello, world!")\n      .toPromise();\n  }\n\n  public static void main(String[] args) throws Exception {\n    new HelloWorldHttpServer().launch(args);\n  }\n}\n')),(0,r.kt)("p",null,"Actually, the server is the same as in a ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/getting-started"},"getting started tutorial"),". To build it as a native image we would\nneed a few more things."),(0,r.kt)("h3",{id:"native-image-prerequisites"},"Native image prerequisites"),(0,r.kt)("p",null,"First things first, you need to have GraalVM and native-image tool installed as described ",(0,r.kt)("a",{parentName:"p",href:"https://graalvm.github.io/native-build-tools/0.9.7.1/graalvm-setup.html"},"here"),"."),(0,r.kt)("h3",{id:"maven-plugin-configuration"},"Maven plugin configuration"),(0,r.kt)("p",null,"We will use the native image maven ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.graalvm.buildtools/native-maven-plugin"},"plugin")," to\nsimplify build process."),(0,r.kt)("p",null,"For that we will add the native image plugin to a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"native")," profile of our ",(0,r.kt)(l.Z,{url:"/examples/tutorials/native-image/pom.xml",mdxType:"Githublink"}," pom.xml "),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n    <profile>\n      <id>native</id>\n      <build>\n        <plugins>\n          <plugin>\n            <groupId>org.graalvm.buildtools</groupId>\n            <artifactId>native-maven-plugin</artifactId>\n            <version>0.9.17</version>\n            <extensions>true</extensions>\n            <executions>\n              <execution>\n                <id>build-native</id>\n                <goals>\n                  <goal>build</goal>\n                </goals>\n                <phase>package</phase>\n              </execution>\n            </executions>\n            <configuration>\n              <mainClass>HelloWorldHttpServer</mainClass>\n              <imageName>hello-world-server</imageName>\n              <buildArgs>\n                <buildArg>--no-fallback</buildArg>\n                <buildArg>--allow-incomplete-classpath</buildArg>\n                <buildArg>-H:ReflectionConfigurationFiles=${project.basedir}/config/reflectionconfig.json\n                </buildArg>\n              </buildArgs>\n            </configuration>\n          </plugin>\n        </plugins>\n      </build>\n    </profile>\n  </profiles>\n")),(0,r.kt)("p",null,"You can read more about plugin configuration at the official plugin ",(0,r.kt)("a",{parentName:"p",href:"https://graalvm.github.io/native-build-tools/latest/maven-plugin.html"},"documentation page")),(0,r.kt)("p",null,"Although we use a plugin to simplify a build process, a ",(0,r.kt)("inlineCode",{parentName:"p"},"native-image")," tool can be used directly if needed."),(0,r.kt)("h3",{id:"reflection-configuration"},"Reflection configuration"),(0,r.kt)("p",null,"In order to allow reflective operations (required to process ",(0,r.kt)("a",{parentName:"p",href:"/inject"},"ActiveJ Inject")," annotations) we have to define\na reflection configuration. We did this in a ",(0,r.kt)(l.Z,{text:"reflectionconfig.json",url:"/examples/tutorials/native-image/config/reflectionconfig.json",mdxType:"Githublink"})," file\ninside the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," directory. A file describes a few classes with a required reflection access for fields and methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:"url=/examples/tutorials/native-image/config/reflectionconfig.json",url:"/examples/tutorials/native-image/config/reflectionconfig.json"},'[\n  {\n    "name": "HelloWorldHttpServer",\n    "allDeclaredMethods": true\n  },\n  {\n    "name": "io.activej.launchers.http.HttpServerLauncher",\n    "allDeclaredFields": true,\n    "allDeclaredMethods": true\n  },\n  {\n    "name": "io.activej.service.ServiceGraphModule",\n    "allDeclaredMethods": true\n  }\n]\n\n')),(0,r.kt)("h3",{id:"building-a-native-image"},"Building a native image"),(0,r.kt)("p",null,"To build a native image execute ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn -Pnative package")," command from within the 'native-image' module directory."),(0,r.kt)("h3",{id:"running-a-native-image"},"Running a native image"),(0,r.kt)("p",null,"To run a native image execute ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/hello-world-server")," command from within 'native-image' module directory."),(0,r.kt)("p",null,"You should see that the server is launched and that it is listening on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),".\nOpen your favourite browser and go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080"),"."))}d.isMDXComponent=!0}}]);