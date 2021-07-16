(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[8176],{77618:function(e,a,t){"use strict";var r=t(95318).default;a.Z=void 0;var n=r(t(67294)),m=r(t(39962)),i=function(e){var a=e.url,t=e.text,r=e.isInline,i=void 0===r||r,s=e.children,o=(0,m.default)().siteConfig;return n.default.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:o.customFields.githubUrl+"/"+o.customFields.githubBranch+a,target:"_blank"},n.default.createElement("b",null,t||s))};a.Z=i},14304:function(e,a,t){"use strict";var r=t(95318).default,n=t(20862).default;a.Z=void 0;var m=n(t(67294)),i=r(t(21140));i.default.initialize({startOnLoad:!0});var s=function(e){var a=e.chart;return(0,m.useEffect)((function(){i.default.contentLoaded()}),[]),m.default.createElement("div",{className:"mermaid"},a)};a.Z=s},77815:function(e,a,t){"use strict";var r=t(95318).default;a.Z=void 0;r(t(67294));var n=r(t(39962)),m=function(e){var a=e.name,t=(0,n.default)().siteConfig;if(!a)throw new Error("Variable name is required");if(void 0===t.customFields[a])throw new Error("Variable "+a+" not exist");return t.customFields[a]};a.Z=m},81002:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return x}});var r=t(22122),n=t(19756),m=(t(67294),t(3905)),i=t(77618),s=t(14304),o=t(77815),l=["components"],d={title:"ActiveJ | Datastream, asynchronous reactive Java streams with minimal overhead",description:"Asynchronous reactive Java streams with extremely low overhead",keywords:["datastream","reactive streams","async reactive streams","java","java framework"]},p={unversionedId:"async-io/datastream",id:"async-io/datastream",isDocsHomePage:!1,title:"Datastream",description:"Asynchronous reactive Java streams with extremely low overhead",source:"@site/docs/async-io/datastream.mdx",sourceDirName:"async-io",slug:"/async-io/datastream",permalink:"/docs/async-io/datastream",version:"current",frontMatter:{title:"ActiveJ | Datastream, asynchronous reactive Java streams with minimal overhead",description:"Asynchronous reactive Java streams with extremely low overhead",keywords:["datastream","reactive streams","async reactive streams","java","java framework"]},sidebar:"docs",previous:{title:"CSP",permalink:"/docs/async-io/csp"},next:{title:"Net",permalink:"/docs/async-io/net"}},u=[{value:"Benchmarks",id:"benchmarks",children:[]},{value:"Examples",id:"examples",children:[{value:"Simple Supplier",id:"simple-supplier",children:[]},{value:"Simple Consumer",id:"simple-consumer",children:[]},{value:"Custom Transformer",id:"custom-transformer",children:[]},{value:"Built-in Stream Nodes",id:"built-in-stream-nodes",children:[]}]}],c={toc:u};function x(e){var a=e.components,t=(0,n.default)(e,l);return(0,m.mdx)("wrapper",(0,r.default)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("p",null,"Datastream is an extremely fast implementation of reactive streams. It is useful for intra and inter-server\ncommunication and asynchronous data processing."),(0,m.mdx)("p",null,"Datastream is:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"A modern implementation of async reactive streams (unlike streams in Java 8 and traditional thread-based blocking streams)"),(0,m.mdx)("li",{parentName:"ul"},"Asynchronous with extremely efficient back-pressure control, to handle a natural imbalance in the speed of data sources"),(0,m.mdx)("li",{parentName:"ul"},"Composable stream operations (mappers, reducers, filters, sorters, mergers/splitters, compression, serialization)"),(0,m.mdx)("li",{parentName:"ul"},"Stream-based network and file I/O on the top of ",(0,m.mdx)("a",{parentName:"li",href:"eventloop"},"Eventloop module")),(0,m.mdx)("li",{parentName:"ul"},"Compatibility with ",(0,m.mdx)("a",{parentName:"li",href:"csp"},"CSP module"))),(0,m.mdx)("p",null,"Datastream has a lot in common with CSP module.\nAlthough they were both designed for I/O processing, there are several important distinctions:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null}),(0,m.mdx)("th",{parentName:"tr",align:null},"Datastream"),(0,m.mdx)("th",{parentName:"tr",align:null},"CSP"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"Overhead:")),(0,m.mdx)("td",{parentName:"tr",align:null},"Extremely low: stream can be started with 1 virtual call, short-circuit evaluation optimizes performance"),(0,m.mdx)("td",{parentName:"tr",align:null},"No short-circuit evaluation, overhead is higher")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"Throughput speed:")),(0,m.mdx)("td",{parentName:"tr",align:null},"Extremely fast (",(0,m.mdx)("em",{parentName:"td"},"360 880 548 ops/sec"),")"),(0,m.mdx)("td",{parentName:"tr",align:null},"Fast (",(0,m.mdx)("em",{parentName:"td"},"105 932 203 ops/sec"),"), but slower than Datastream")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"Optimized for:")),(0,m.mdx)("td",{parentName:"tr",align:null},"Small pieces of data"),(0,m.mdx)("td",{parentName:"tr",align:null},"Medium-sized objects, ",(0,m.mdx)("a",{parentName:"td",href:"/docs/misc/bytebuf"},"ByteBufs"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"Programming model:")),(0,m.mdx)("td",{parentName:"tr",align:null},"More complicated"),(0,m.mdx)("td",{parentName:"tr",align:null},"Simple and convenient")))),(0,m.mdx)("p",null,"To provide maximum efficiency, ActiveJ widely utilizes combinations of CSP and Datastream. For this purpose, ",(0,m.mdx)(i.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelSupplier.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"ChannelSupplier")),", ",(0,m.mdx)(i.Z,{url:"/core-csp/src/main/java/io/activej/csp/ChannelConsumer.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"ChannelConsumer")),", ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/StreamSupplier.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"StreamSupplier"))," and ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/StreamConsumer.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"StreamConsumer"))," have ",(0,m.mdx)("inlineCode",{parentName:"p"},"transformWith()")," methods and special Transformer interfaces. Using them, you can seamlessly transform channels into other channels or datastreams and vice versa, creating chains of such transformations."),(0,m.mdx)("h2",{id:"benchmarks"},"Benchmarks"),(0,m.mdx)("p",null,"We've measured Datastream performance (",(0,m.mdx)("inlineCode",{parentName:"p"},"StreamSupplier")," streams 100M Integer objects to ",(0,m.mdx)("inlineCode",{parentName:"p"},"StreamConsumer")," scenario)\nand received the following result:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"Time: 2771ms; Average time: 277.1ms; Best time: 275ms; Worst time: 281ms; Operations per second: 360 880 548\n")),(0,m.mdx)("p",null,"We've also measured TCP server performance that uses both Datastream and CSP and got the average result of ",(0,m.mdx)("strong",{parentName:"p"},"47 495 905 requests per second"),"."),(0,m.mdx)("p",null,"You can find benchmark sources on ",(0,m.mdx)(i.Z,{url:"/benchmarks/datastream/src/main/java/io/activej/datastream/DatastreamBenchmark.java",mdxType:"Githublink"},"GitHub")),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#simple-supplier"},"Simple Supplier")," - shows how to create a simple ",(0,m.mdx)("inlineCode",{parentName:"li"},"StreamSupplier")," and stream some data to ",(0,m.mdx)("inlineCode",{parentName:"li"},"StreamConsumer")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#simple-consumer"},"Simple Consumer")," - shows how to create a simple ",(0,m.mdx)("inlineCode",{parentName:"li"},"StreamConsumer")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#custom-transformer"},"Custom Transformer")," - shows how to create a custom ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/processor/StreamTransformer.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"li"},"StreamTransformer")),", which takes strings and transforms them to their length if it is less than ",(0,m.mdx)("inlineCode",{parentName:"li"},"MAX_LENGTH"),"."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#built-in-stream-nodes"},"Built-in Stream Nodes Example")," - demonstrates some of the built-in Datastream possibilities, such as filtering, splitting, union, and mapping.")),(0,m.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,m.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,m.mdx)("h5",{parentName:"div"},(0,m.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,m.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,m.mdx)("div",{parentName:"div",className:"admonition-content"},(0,m.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,m.mdx)("pre",{parentName:"div"},(0,m.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,m.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)(o.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,m.mdx)("inlineCode",{parentName:"p"},"activej/examples/core/datastream")))),(0,m.mdx)("h3",{id:"simple-supplier"},"Simple Supplier"),(0,m.mdx)("p",null,"When you run ",(0,m.mdx)(i.Z,{url:"/examples/core/datastream/src/main/java/SupplierExample.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"SupplierExample")),", you'll see the following output:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"Consumer received: [0, 1, 2, 3, 4]\n")),(0,m.mdx)("p",null,"This output represents the data that our custom ",(0,m.mdx)("inlineCode",{parentName:"p"},"StreamSupplier")," provided to ",(0,m.mdx)("inlineCode",{parentName:"p"},"StreamConsumer"),". Let's have a\nlook at the implementation:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/SupplierExample.java tag=EXAMPLE",url:"/examples/core/datastream/src/main/java/SupplierExample.java",tag:"EXAMPLE"},'public final class SupplierExample {\n  public static void main(String[] args) {\n\n    //create an eventloop for streams operations\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n    //create a supplier of some numbers\n    StreamSupplier<Integer> supplier = StreamSupplier.of(0, 1, 2, 3, 4);\n    //creating a consumer for our supplier\n    StreamConsumerToList<Integer> consumer = StreamConsumerToList.create();\n\n    //streaming supplier\'s numbers to consumer\n    supplier.streamTo(consumer);\n\n    //when stream completes, streamed data is printed out\n    consumer.getResult().whenResult(result -> System.out.println("Consumer received: " + result));\n\n    //start eventloop\n    eventloop.run();\n  }\n}\n')),(0,m.mdx)(i.Z,{text:"See full example on GitHub",url:"/examples/core/datastream/src/main/java/SupplierExample.java",mdxType:"Githublink"}),(0,m.mdx)("h3",{id:"simple-consumer"},"Simple Consumer"),(0,m.mdx)("p",null,"When you run ",(0,m.mdx)(i.Z,{url:"/examples/core/datastream/src/main/java/ConsumerExample.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"ConsumerExample")),", you'll see the following output:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"received: 1\nreceived: 2\nreceived: 3\nEnd of stream received\n")),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"ConsumerExample")," represents a custom consumer that extends ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/AbstractStreamConsumer.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"AbstractStreamConsumer"))," and just prints out received data. The stream process is managed with overridden methods ",(0,m.mdx)("inlineCode",{parentName:"p"},"onStarted()"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"onEndOfStream()")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"onError()"),":"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/ConsumerExample.java tag=EXAMPLE",url:"/examples/core/datastream/src/main/java/ConsumerExample.java",tag:"EXAMPLE"},'public final class ConsumerExample<T> extends AbstractStreamConsumer<T> {\n  @Override\n  protected void onStarted() {\n    resume(x -> System.out.println("received: " + x));\n  }\n\n  @Override\n  protected void onEndOfStream() {\n    System.out.println("End of stream received");\n    acknowledge();\n  }\n\n  @Override\n  protected void onError(Throwable t) {\n    System.out.println("Error handling logic must be here. No confirmation to upstream is needed");\n  }\n')),(0,m.mdx)(i.Z,{text:"See full example on GitHub",url:"/examples/core/datastream/src/main/java/ConsumerExample.java",mdxType:"Githublink"}),(0,m.mdx)("h3",{id:"custom-transformer"},"Custom Transformer"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)(i.Z,{url:"/examples/core/datastream/src/main/java/TransformerExample.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"strong"},"Transformer Example")))," shows how to create a custom ",(0,m.mdx)("inlineCode",{parentName:"p"},"StreamTransformer")," that takes strings from input stream and transforms them to their length if it is less than the defined ",(0,m.mdx)("inlineCode",{parentName:"p"},"MAX_LENGTH"),".\nFirst, we define ",(0,m.mdx)("inlineCode",{parentName:"p"},"AbstractStreamConsumer")," and ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/AbstractStreamSupplier.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"AbstractStreamSupplier")),":"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/TransformerExample.java tag=REGION_1",url:"/examples/core/datastream/src/main/java/TransformerExample.java",tag:"REGION_1"},"private final AbstractStreamConsumer<String> input = new AbstractStreamConsumer<String>() {\n  @Override\n  protected void onEndOfStream() {\n    output.sendEndOfStream();\n  }\n};\n\nprivate final AbstractStreamSupplier<Integer> output = new AbstractStreamSupplier<Integer>() {\n  @Override\n  protected void onResumed() {\n    input.resume(item -> {\n      int len = item.length();\n      if (len < MAX_LENGTH) {\n        output.send(len);\n      }\n    });\n  }\n\n  @Override\n  protected void onSuspended() {\n    input.suspend();\n  }\n};\n")),(0,m.mdx)("p",null,"Now we define the ",(0,m.mdx)("inlineCode",{parentName:"p"},"main")," method, which creates a supplier of test data, an instance of ",(0,m.mdx)("inlineCode",{parentName:"p"},"TransformerExample")," and ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/StreamConsumerToList.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"StreamConsumerToList")),"\nNext, we define the sequence of transformation and output:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/TransformerExample.java tag=REGION_2",url:"/examples/core/datastream/src/main/java/TransformerExample.java",tag:"REGION_2"},'public static void main(String[] args) {\n  Eventloop eventloop = Eventloop.create().withCurrentThread().withFatalErrorHandler(rethrowOnAnyError());\n\n  StreamSupplier<String> source = StreamSupplier.of("testdata", "testdata1", "testdata1000");\n  TransformerExample transformer = new TransformerExample();\n  StreamConsumerToList<Integer> consumer = StreamConsumerToList.create();\n\n  source.transformWith(transformer).streamTo(consumer);\n  consumer.getResult().whenResult(v -> System.out.println(v));\n\n  eventloop.run();\n}\n')),(0,m.mdx)("p",null,"If you run the example, you'll receive the following output:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java"},"[8, 9]\n")),(0,m.mdx)(i.Z,{text:"See full example on GitHub",url:"/examples/core/datastream/src/main/java/TransformerExample.java",mdxType:"Githublink"}),(0,m.mdx)("h3",{id:"built-in-stream-nodes"},"Built-in Stream Nodes"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},(0,m.mdx)(i.Z,{url:"/examples/core/datastream/src/main/java/BuiltinNodesExample.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"strong"},"BuiltinStreamNodesExample")))," demonstrates some simple examples of utilizing built-in datastream nodes."),(0,m.mdx)("p",null,"The first one is ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/processor/StreamFilter.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"StreamFilter")),"\nIt allows to apply a function to the input and then stream the function's result to the destination. In this\nparticular example ",(0,m.mdx)("inlineCode",{parentName:"p"},"StreamFilter")," filters input numbers and then streams to consumer only odd numbers."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/BuiltinNodesExample.java tag=REGION_1",url:"/examples/core/datastream/src/main/java/BuiltinNodesExample.java",tag:"REGION_1"},"private static void filter() {\n  StreamSupplier<Integer> supplier = StreamSupplier.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n  StreamFilter<Integer, Integer> filter = StreamFilter.create(input -> input % 2 == 1);\n\n  StreamConsumerToList<Integer> consumer = StreamConsumerToList.create();\n\n  supplier.transformWith(filter).streamTo(consumer);\n\n  consumer.getResult().whenResult(v -> System.out.println(v));\n}\n")),(0,m.mdx)("p",null,"The output for this example is ",(0,m.mdx)("inlineCode",{parentName:"p"},"[1, 3, 5, 7, 9]"),", while the graph of streams is pretty simple and looks as follows:"),(0,m.mdx)(s.Z,{chart:"\ngraph TD\n    id1(StreamSuppliers$OfIterator)--\x3eid2(StreamFilter$Input)--\x3eid3([StreamFilter])--\x3eid4(StreamFilter$Output)--\x3eid5(StreamConsumerToList)\n    style id1 stroke:#3578ep,stroke-width:2px\n    style id2 stroke:#fa383e,stroke-width:2px\n    style id3 stroke:#a4a6a8,stroke-width:2px\n    style id4 stroke:#3578ep,stroke-width:2px\n    style id5 stroke:#fa383e,stroke-width:2px\n",mdxType:"Mermaid"}),(0,m.mdx)("p",null,"Another built-in stream node is ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/processor/StreamFilter.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"StreamFilter::mapper"))),(0,m.mdx)("p",null,"It changes each input item according to the given function, for example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/BuiltinNodesExample.java tag=REGION_3",url:"/examples/core/datastream/src/main/java/BuiltinNodesExample.java",tag:"REGION_3"},'private static void mapper() {\n  //creating a supplier of 10 numbers\n  StreamSupplier<Integer> supplier = StreamSupplier.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n  //creating a mapper for the numbers\n  StreamFilter<Integer, String> simpleMap = StreamFilter.mapper(x -> x + " times ten = " + x * 10);\n\n  //creating a consumer which converts received values to list\n  StreamConsumerToList<String> consumer = StreamConsumerToList.create();\n\n  //applying the mapper to supplier and streaming the result to consumer\n  supplier.transformWith(simpleMap).streamTo(consumer);\n\n  //when consumer completes receiving values, the result is printed out\n  consumer.getResult().whenResult(v -> System.out.println(v));\n}\n')),(0,m.mdx)("p",null,"The output for this example is"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"[\n    1 times ten = 10,\n    2 times ten = 20,\n    3 times ten = 30,\n    4 times ten = 40,\n    5 times ten = 50,\n    6 times ten = 60,\n    7 times ten = 70,\n    8 times ten = 80,\n    9 times ten = 90,\n    10 times ten = 100\n]\n")),(0,m.mdx)("p",null,"and the graph of streams looks as follows:"),(0,m.mdx)(s.Z,{chart:"\ngraph TD\n    id1(StreamSuppliers$OfIterator)--\x3eid2(StreamMapper$Input)--\x3eid3([StreamMapper])--\x3eid4(StreamMapper$Output)--\x3eid5(StreamConsumerToList)\n    style id1 stroke:#3578ep,stroke-width:2px\n    style id2 stroke:#fa383e,stroke-width:2px\n    style id3 stroke:#a4a6a8,stroke-width:2px\n    style id4 stroke:#3578ep,stroke-width:2px\n    style id5 stroke:#fa383e,stroke-width:2px\n",mdxType:"Mermaid"}),(0,m.mdx)("p",null,"Let's take a look at another built-in node ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/processor/StreamSplitter.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"StreamSplitter"))),(0,m.mdx)("p",null,"It's a stream transformer that distributes input streams according to the provided function. In this example it\ndistributes 10 numbers between 3 consumers."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/BuiltinNodesExample.java tag=REGION_2",url:"/examples/core/datastream/src/main/java/BuiltinNodesExample.java",tag:"REGION_2"},'private static void splitter() {\n  StreamSupplier<Integer> supplier = StreamSupplier.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n  ToIntFunction<Object> hashSharder = item -> (item.hashCode() & Integer.MAX_VALUE) % 3;\n  //creating a sharder of three parts for three consumers\n  StreamSplitter<Integer, Integer> sharder = StreamSplitter.create(\n      (item, acceptors) -> acceptors[hashSharder.applyAsInt(item)].accept(item));\n\n  StreamConsumerToList<Integer> first = StreamConsumerToList.create();\n  StreamConsumerToList<Integer> second = StreamConsumerToList.create();\n  StreamConsumerToList<Integer> third = StreamConsumerToList.create();\n\n  sharder.newOutput().streamTo(first);\n  sharder.newOutput().streamTo(second);\n  sharder.newOutput().streamTo(third);\n\n  supplier.streamTo(sharder.getInput());\n\n  first.getResult().whenResult(x -> System.out.println("first: " + x));\n  second.getResult().whenResult(x -> System.out.println("second: " + x));\n  third.getResult().whenResult(x -> System.out.println("third: " + x));\n}\n')),(0,m.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,m.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,m.mdx)("h5",{parentName:"div"},(0,m.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,m.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,m.mdx)("div",{parentName:"div",className:"admonition-content"},(0,m.mdx)("p",{parentName:"div"},"In this example we can't use a shortcut method ",(0,m.mdx)("inlineCode",{parentName:"p"},"transformWith")," as it can be\nused only with the transformers that have exactly one input and one output streams."))),(0,m.mdx)("p",null,"The output for this example is"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"first: [3, 6, 9]\nsecond: [1, 4, 7, 10]\nthird: [2, 5, 8]`\n")),(0,m.mdx)("p",null,"And the streams graph looks as follows:"),(0,m.mdx)(s.Z,{chart:"\ngraph TD;\n    id7(StreamSuppliers$OfIterator):::blue--\x3eid8(StreamSplitter$Input);\n    id8--\x3eStreamSplitter:::grey;\n    StreamSplitter--\x3eid1(StreamSplitter$Output);\n    StreamSplitter--\x3eid2(StreamSplitter$Output);\n    StreamSplitter--\x3eid3(StreamSplitter$Output);\n    id1--\x3eid4(StreamConsumerToList);\n    id2--\x3eid5(StreamConsumerToList);\n    id3--\x3eid6(StreamConsumerToList);\n",mdxType:"Mermaid"}),(0,m.mdx)("p",null,"You can provide any function in the lambda when you create ",(0,m.mdx)("strong",{parentName:"p"},"StreamSplitter"),". For\nexample, to create a transformer that will send all input data to all the consumers, simply create the following lambda expression:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java"},"(item, acceptors) -> {for (StreamDataAcceptor<Integer> acceptor : acceptors) { acceptor.accept(item);}}\n")),(0,m.mdx)("p",null,"In this case the output will be"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java"},"first: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nsecond: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nthird: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")),(0,m.mdx)("p",null,"Finally, let's take a look at the ",(0,m.mdx)(i.Z,{url:"/core-datastream/src/main/java/io/activej/datastream/processor/StreamUnion.java",mdxType:"Githublink"},(0,m.mdx)("inlineCode",{parentName:"p"},"StreamUnion"))," It works as an opposite to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"StreamSplitter")," and unifies several input streams into one output:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/datastream/src/main/java/BuiltinNodesExample.java tag=REGION_4",url:"/examples/core/datastream/src/main/java/BuiltinNodesExample.java",tag:"REGION_4"},"private static void union() {\n  //creating three suppliers of numbers\n  StreamSupplier<Integer> source0 = StreamSupplier.of(1, 2);\n  StreamSupplier<Integer> source1 = StreamSupplier.of();\n  StreamSupplier<Integer> source2 = StreamSupplier.of(3, 4, 5);\n\n  //creating a unifying transformer\n  StreamUnion<Integer> streamUnion = StreamUnion.create();\n\n  //creating a consumer which converts received values to list\n  StreamConsumerToList<Integer> consumer = StreamConsumerToList.create();\n\n  //stream the sources into new inputs of the unifier\n  source0.streamTo(streamUnion.newInput());\n  source1.streamTo(streamUnion.newInput());\n  source2.streamTo(streamUnion.newInput());\n\n  //and stream the output of the unifier into the consumer\n  streamUnion.getOutput().streamTo(consumer);\n\n  //when consumer completes receiving values, the result is printed out\n  consumer.getResult().whenResult(v -> System.out.println(v));\n}\n")),(0,m.mdx)("p",null,"The output for this example is ",(0,m.mdx)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5]")," and the graph of streams looks as follows:"),(0,m.mdx)(s.Z,{chart:"\ngraph TD;\n    id1(StreamSuppliers$OfIterator)--\x3eid2(StreamUnion$Input);\n    id3(StreamSuppliers$OfIterator)--\x3eid4(StreamUnion$Input);\n    id5(StreamSuppliers$OfIterator)--\x3eid6(StreamUnion$Input);\n    id2--\x3eStreamUnion;\n    id4--\x3eStreamUnion;\n    id6--\x3eStreamUnion;\n    StreamUnion--\x3eStreamUnion$Output;\n    StreamUnion$Output--\x3eStreamConsumerToList;\n",mdxType:"Mermaid"}),(0,m.mdx)(i.Z,{text:"See full example on GitHub",url:"/examples/core/datastream/src/main/java/BuiltinNodesExample.java",mdxType:"Githublink"}))}x.isMDXComponent=!0},11748:function(e,a,t){var r={"./locale":89234,"./locale.js":89234};function n(e){var a=m(e);return t(a)}function m(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=m,e.exports=n,n.id=11748}}]);