"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1045],{12190:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"ActiveJ 5.4.2 - Minor bug fixes","metadata":{"permalink":"/zh/blog/2022/09/05/v5.4.2","source":"@site/blog/2022-09-05-v5.4.2.md","title":"ActiveJ 5.4.2 - Minor bug fixes","description":"ActiveJ v5.4.2 was released on Sep 5,","date":"2022-09-05T00:00:00.000Z","formattedDate":"2022\u5e749\u67085\u65e5","tags":[],"readingTime":0.33,"truncated":false,"authors":[],"nextItem":{"title":"ActiveJ 5.4.1 - Stream Codecs optimizations","permalink":"/zh/blog/2022/08/31/v5.4.1"}},"content":"ActiveJ v5.4.2 was released on Sep 5,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.4.2)). This release includes\\nminor bug fixes for stream codecs.\\n\\n* Fixed a bug when a stream codec tried to safely decode more items than are present in the input of the stream. \\n* Relative path tests in [ActiveJ FS](/fs) are ignored when the project directory is located on a drive other than the temporary directory."},{"id":"ActiveJ 5.4.1 - Stream Codecs optimizations","metadata":{"permalink":"/zh/blog/2022/08/31/v5.4.1","source":"@site/blog/2022-08-31-v5.4.1.md","title":"ActiveJ 5.4.1 - Stream Codecs optimizations","description":"ActiveJ v5.4.1 was released on Aug 31,","date":"2022-08-31T00:00:00.000Z","formattedDate":"2022\u5e748\u670831\u65e5","tags":[],"readingTime":0.27,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.4.2 - Minor bug fixes","permalink":"/zh/blog/2022/09/05/v5.4.2"},"nextItem":{"title":"ActiveJ 5.4 - Codegen and Serializer optimizations","permalink":"/zh/blog/2022/08/19/v5.4"}},"content":"ActiveJ v5.4.1 was released on Aug 31,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.4.1)). This release includes\\noptimizations for Stream Codecs to optimize memory usage.\\n\\n* Optimized encoding and decoding of arrays of primitives, as well as arrays of variable-length ints and longs.\\n* Minimized the required number of flushes when writing data to a byte array."},{"id":"ActiveJ 5.4 - Codegen and Serializer optimizations","metadata":{"permalink":"/zh/blog/2022/08/19/v5.4","source":"@site/blog/2022-08-19-v5.4.md","title":"ActiveJ 5.4 - Codegen and Serializer optimizations","description":"ActiveJ v5.4 was released on Aug 19,","date":"2022-08-19T00:00:00.000Z","formattedDate":"2022\u5e748\u670819\u65e5","tags":[],"readingTime":0.805,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.4.1 - Stream Codecs optimizations","permalink":"/zh/blog/2022/08/31/v5.4.1"},"nextItem":{"title":"ActiveJ 5.3 - JMX improvements","permalink":"/zh/blog/2022/06/17/v5.3"}},"content":"ActiveJ v5.4 was released on Aug 19,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.4)). This release includes\\nimprovements to [ActiveJ Codegen](/codegen),[ActiveJ Serializer](/serializer), and minor fixes to other\\ncomponents.\\n\\n* [ActiveJ Codegen](/codegen)\\n    * Generated method calls that use `self` instances as method arguments are now automatically resolved.\\n    * Slightly optimized method lookup.\\n* [ActiveJ Serializer](/serializer)\\n    * Optimized serializer builder\'s cache. Ensured that previously defined serializers are reused.\\n    * Ensured that dangling references are cleaned up if serialization fails.\\n* [Net](/async-io/net)\\n    * Fix order of promise completion when SSL socket receives `close_notify` message.\\n* [HTTP](/http)\\n    * Multimap of HTTP headers is now properly resized.\\n    * Fatal errors in HTTP server connections are now handled correctly.\\n    * Added the `HttpMessage#takeBodyStream` method instead of the `HttpMessage#getBodyStream` method as it has a more\\n      semantically correct name. `HttpMessage#getBodyStream` method is now deprecated and is a candidate for removal in\\n      the next major release.\\n* Misc\\n    * Added additional application error logging in Launcher.\\n    * Fixed `@NotNull` annotations for function parameters."},{"id":"ActiveJ 5.3 - JMX improvements","metadata":{"permalink":"/zh/blog/2022/06/17/v5.3","source":"@site/blog/2022-06-17-v5.3.md","title":"ActiveJ 5.3 - JMX improvements","description":"ActiveJ v5.3 was released Jun 17,","date":"2022-06-17T00:00:00.000Z","formattedDate":"2022\u5e746\u670817\u65e5","tags":[],"readingTime":0.59,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.4 - Codegen and Serializer optimizations","permalink":"/zh/blog/2022/08/19/v5.4"},"nextItem":{"title":"ActiveJ 5.2 - Minor improvements","permalink":"/zh/blog/2022/04/19/v5.2"}},"content":"ActiveJ v5.3 was released Jun 17,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.3)). This release includes\\nminor improvements to JMX, as well as several bug fixes.\\n\\n* JMX\\n  * Added the ability to use custom `JmxReducer`s for `@JmxOperation`s. \\n  * JMX attributes and operations of `Map` type now respect the specified `JmxReducer` when reducing map values.\\n  * Added the ability to specify a predicate for whether worker instances should be registered in JMX or not.\\n* [ActiveJ Codegen](/codegen)\\n  * Ability to use parameterized types for record fields has been added.\\n* [HTTP](/http)\\n  * Fixed a bug with quality factors parsing in headers.\\n  * Improved handling of runtime exceptions.\\n* [Datastream](/async-io/datastream)\\n  * Fixed acknowledgement completion in `StreamReducer` as well as in several `StreamConsumer`s"},{"id":"ActiveJ 5.2 - Minor improvements","metadata":{"permalink":"/zh/blog/2022/04/19/v5.2","source":"@site/blog/2022-04-19-v5.2.md","title":"ActiveJ 5.2 - Minor improvements","description":"ActiveJ v5.2 was released Apr 19,","date":"2022-04-19T00:00:00.000Z","formattedDate":"2022\u5e744\u670819\u65e5","tags":[],"readingTime":0.59,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.3 - JMX improvements","permalink":"/zh/blog/2022/06/17/v5.3"},"nextItem":{"title":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","permalink":"/zh/blog/2022/01/04/v5.1"}},"content":"ActiveJ v5.2 was released Apr 19,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.2)). This release includes\\nminor improvements mainly for [HTTP client/server](/http) and [ActiveJ Serializer](/serializer).\\n\\n* [HTTP](/http)\\n  * Added dedicated enum for setting `SameSite` policy on cookies. \\n  * Malformed HTTP requests now result in a code `400` response rather than connection drop.\\n  * HTTP inspectors can now inspect malformed HTTP requests and responses.\\n  * [RoutingServlet](https://github.com/activej/activej/blob/v5.1.1/core-http/src/main/java/io/activej/http/RoutingServlet.java) now correctly decodes percent-encoded URL path parts.\\n  * Added checks for DNS label sizes.\\n  * Minor improvements of the [UrlParser](https://github.com/activej/activej/blob/v5.1.1/core-http/src/main/java/io/activej/http/UrlParser.java).\\n* [ActiveJ Serializer](/serializer)\\n  * Added additional preconditions for subclass serializer.\\n  * Removed unnecessary caching from [SerializerBuilder](https://github.com/activej/activej/blob/v5.1.1/core-serializer/src/main/java/io/activej/serializer/SerializerBuilder.java).\\n* [ActiveJ FS](/fs)\\n  * Storage paths are now normalized, so local file systems now work properly with relative storage paths."},{"id":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","metadata":{"permalink":"/zh/blog/2022/01/04/v5.1","source":"@site/blog/2022-01-04-v5.1.md","title":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","description":"ActiveJ v5.1 was released Jan 4,","date":"2022-01-04T00:00:00.000Z","formattedDate":"2022\u5e741\u67084\u65e5","tags":[],"readingTime":0.535,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.2 - Minor improvements","permalink":"/zh/blog/2022/04/19/v5.2"},"nextItem":{"title":"ActiveJ 5.0 - New major release","permalink":"/zh/blog/2021/10/29/v5.0"}},"content":"ActiveJ v5.1 was released Jan 4,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.1)). This release includes\\nimprovements to [ActiveJ FS](/fs), [ActiveJ Inject](/inject) and [boot](/boot/launcher) modules in general.\\n\\n* [ActiveJ Inject](/inject) and [boot](/boot/launcher) modules\\n  * [TriggersModule](https://github.com/activej/activej/blob/v5.1/boot-triggers/src/main/java/io/activej/trigger/TriggersModule.java) \\n  now properly handles [optional dependencies](/inject/optional-dependencies)\\n  * Nested optional dependencies (e.g. `OptionalDependency<OptionalDependency<?>>`) are prohibited\\n  * Services (as well as those obtained from an optional dependencies) are guaranteed to start/stop exactly once\\n  * Added shortcuts for obtaining optional dependencies from [Injector](https://github.com/activej/activej/blob/v5.1/core-inject/src/main/java/io/activej/inject/Injector.java)\\n* [ActiveJ FS](/fs)\\n  * Added a new [exception](https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/exception/ActiveFsStructureException.java) to\\n  indicate errors in a structure of a file system.\\n  * Added a precondition that checks whether local file systems ([LocalActiveFs](https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalActiveFs.java) and \\n  [LocalBlockingFs](https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalBlockingFs.java)) were started before being used."},{"id":"ActiveJ 5.0 - New major release","metadata":{"permalink":"/zh/blog/2021/10/29/v5.0","source":"@site/blog/2021-10-29-v5.0.md","title":"ActiveJ 5.0 - New major release","description":"ActiveJ v5.0 was released Oct 29,","date":"2021-10-29T00:00:00.000Z","formattedDate":"2021\u5e7410\u670829\u65e5","tags":[],"readingTime":1.835,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","permalink":"/zh/blog/2022/01/04/v5.1"},"nextItem":{"title":"ActiveJ 4.3 - \u591a\u4e2a\u6a21\u5757\u7684\u5c0f\u6539\u8fdb","permalink":"/zh/blog/2021/05/28/v4.3"}},"content":"ActiveJ v5.0 was released Oct 29,\\n2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.0)). This release includes\\nmajor changes in [ActiveJ Inject](/inject), [ActiveJ Codegen](/codegen), [ActiveJ Serializer](/serializer)\\n[promises API](/async-io/promise). The release also introduced improved type scanning facility and \\noverall minor improvements in other components.\\n\\n* [ActiveJ Inject](/inject)\\n  * Refactored and simplified inner components to speed up dependency injection and provide better support for binding \\n[specialization](/specializer)\\n  * Simplified type resolution in dependency injection\\n  * Added the ability to transform imported and exported bindings using patterns (see [example](/inject/binding-transformation))\\n  * Replaced `@Optional` annotation with an explicit [OptionalDependency](https://github.com/activej/activej/blob/v5.0/core-inject/src/main/java/io/activej/inject/binding/OptionalDependency.java)\\n  class\\n* [ActiveJ Codegen](/codegen)\\n  * Improved [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) and [DefiningClassLoader](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/DefiningClassLoader.java) classes\\n  * Class generation may now be 100% lazy\\n  * Added in-memory [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) caches\\n  * Added the ability to use [BytecodeStorage](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/BytecodeStorage.java) as a persistent cache for generated bytecode\\n  * Added the ability to call super methods as well as protected methods\\n  * Improved built-in expressions for array/collection/map iteration\\n* [ActiveJ Serializer](/serializer)\\n  * Added the ability to specify serializer annotations directly on type use (see [example](/serializer/examples#path-based-serialization))\\n  * Automatic class member ordering is now supported within the same JVM\\n  * Added support for serializer annotation aliases\\n  * Improved array serialization as well as serialization of booleans\\n  * Refactored class hierarchy of collection serializers. \\n  * Abstract collection serializers now support builder pattern\\n* [Promise](/async-io/promise)\\n  * Greatly improved exception handling\\n  * Renamed promise chaining methods `thenEx` and `mapEx` to `then` and `map`\\n  * Added new conditional chaining methods as well as dedicated null-handling chaining methods \\n  * All the changing methods now take \\"throwing\\" functions. If a checked exception is thrown in a chaining function, \\nthe whole promise is completed exceptionally\\n* Miscellaneous improvements\\n  * Removed `codec` module. Components that require JSON marshalling now internally use the \\n[DSL-JSON](https://github.com/ngs-doo/dsl-json) library  \\n  * Added new [types](https://github.com/activej/activej/tree/v5.0/util-types) module which contains various reflection and type utilities, including advanced type scanner\\n  * [Common](https://github.com/activej/activej/tree/v5.0/util-common) module has been massively refactored to make common functions and components more consistent\\n  * Restructured asynchronous exceptions\\n  * Unchecked exception handling can now be precisely configured using a thread-scoped or global \\n[FatalErrorHandler facility](https://github.com/activej/activej/blob/v5.0/util-common/src/main/java/io/activej/common/exception/FatalErrorHandler.java) \\n  * Made ActiveJ compatible with Java 17\\n  * Added various `DiscoveryService` interfaces for node discovery within server cluster ([RPC](/rpc), [FS](/fs))\\n  * Removed `AsyncServletDecorator` facility\\n  * Removed `StreamCodecRegistry` facility\\n  * Multiple small improvements and fixes"},{"id":"ActiveJ 4.3 - \u591a\u4e2a\u6a21\u5757\u7684\u5c0f\u6539\u8fdb","metadata":{"permalink":"/zh/blog/2021/05/28/v4.3","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2021-05-28-v4.3.md","title":"ActiveJ 4.3 - \u591a\u4e2a\u6a21\u5757\u7684\u5c0f\u6539\u8fdb","description":"ActiveJ v4.3\u5df2\u7ecf\u83b7\u91ca\uff0c 2021 (\u89c1Maven)\u3002 \u8fd9\u4e2a\u7248\u672c\u4e3a\u591a\u4e2a\u6a21\u5757\u5e26\u6765\u4e86 \u4e2a\u5c0f\u7684\u6539\u8fdb\u3002","date":"2021-05-28T00:00:00.000Z","formattedDate":"2021\u5e745\u670828\u65e5","tags":[],"readingTime":0.9,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.0 - New major release","permalink":"/zh/blog/2021/10/29/v5.0"},"nextItem":{"title":"ActiveJ 4.2 - \u6269\u5c55\u7684\u529f\u80fd","permalink":"/zh/blog/2021/04/13/v4.2"}},"content":"ActiveJ v4.3\u5df2\u7ecf\u83b7\u91ca\uff0c 2021 ([\u89c1Maven](https://mvnrepository.com/artifact/io.activej/activej/4.3))\u3002 \u8fd9\u4e2a\u7248\u672c\u4e3a\u591a\u4e2a\u6a21\u5757\u5e26\u6765\u4e86 \u4e2a\u5c0f\u7684\u6539\u8fdb\u3002\\n\\n* \u6dfb\u52a0\u65b0\u65b9\u6cd5 `\u91cd\u65b0\u8fde\u63a5` \u5230 [AsyncHttpClient](https://github.com/activej/activej/blob/v4.3/core-http/src/main/java/io/activej/http/AsyncHttpClient.java) \u7684 `\u68c0\u67e5\u5458`\u3002 \u73b0\u5728\uff0c\u6b63\u5728\u5efa\u7acb\u7684 \u8fde\u63a5\u6570\u53ef\u4ee5\u901a\u8fc7 `JmxInspector #getConnecting` \u5c5e\u6027\u8fdb\u884c\u76d1\u6d4b\\n* \u5f53HTTP\u8fde\u63a5\u5173\u95ed\u65f6\uff0c\u9002\u5f53\u7684\u5f02\u5e38\u4f1a\u88ab\u4f20\u64ad\u5230HTTP\u8bf7\u6c42\u548c\u54cd\u5e94\u4f53\u7684\u4f9b\u5e94\u5546\u4e2d\u3002\\n* [ThrottlingController](https://github.com/activej/activej/blob/v4.3/core-eventloop/src/main/java/io/activej/eventloop/inspector/ThrottlingController.java) \u73b0\u5728\uff0c\u5982\u679c\u4efb\u52a1\u8fde\u7eed\u6267\u884c\u7684\u65f6\u95f4\u5f02\u5e38\u957f\uff0c\u5c31\u4f1a\u8282\u5236\u6240\u6709\u7684\u5904\u7406\u3002\\n* [ForwardingStreamSupplier](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/ForwardingStreamSupplier.java) \u73b0\u5728\u53ef\u4ee5\u6b63\u786e\u5730\u5c06\u540c\u884c `StreamSupplier` \u4e0e `StreamConsumer \u7ed1\u5b9a\u3002`\\n* \u4fee\u6b63\u4e86 [ChannelSerializer\u4e2d\u7684\u5f02\u6b65\u9012\u5f52\u3002](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/csp/ChannelSerializer.java)\\n* [\u805a\u4f1a\u4e2d\u7684\u7f3a\u5931\u63aa\u65bd](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/Aggregation.java) \u88ab\u521d\u59cb\u5316\u4e3a\u9ed8\u8ba4\u7684 \\"\u96f6 \\"\u503c\\n* [HyperLogLog](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/measure/HyperLogLog.java) \u73b0\u5728\u53ef\u4ee5\u6b63\u786e\u5730\u6dfb\u52a0 `int` \u7684\u503c\u3002"},{"id":"ActiveJ 4.2 - \u6269\u5c55\u7684\u529f\u80fd","metadata":{"permalink":"/zh/blog/2021/04/13/v4.2","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2021-04-13-v4.2.md","title":"ActiveJ 4.2 - \u6269\u5c55\u7684\u529f\u80fd","description":"* ActiveJ Redis\u5ba2\u6237\u7aef","date":"2021-04-13T00:00:00.000Z","formattedDate":"2021\u5e744\u670813\u65e5","tags":[],"readingTime":1.055,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.3 - \u591a\u4e2a\u6a21\u5757\u7684\u5c0f\u6539\u8fdb","permalink":"/zh/blog/2021/05/28/v4.3"},"nextItem":{"title":"ActiveJ 4.1 - \u4f18\u5316\u548c\u7b80\u5316","permalink":"/zh/blog/2021/03/19/v4.1"}},"content":"* **[ActiveJ Redis\u5ba2\u6237\u7aef](https://github.com/activej/activej/tree/v4.2/extra/cloud-redis)**\\n    * \u6dfb\u52a0\u4e86 `connect()` \u65b9\u6cd5 \u5230 [RedisClient](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisClient.java) \uff0c\u5360\u7528\u4e86\u8ba4\u8bc1\u51ed\u8bc1\u3002\\n    * \u4e3aActiveJ Redis\u6a21\u5757\u589e\u52a0\u4e86\u65b0\u7684\u4e13\u95e8\u5f02\u5e38\u3002\\n        - [RedisAuthenticationException](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisAuthenticationException.java)\\n        - [RedisPermissionException](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisPermissionException.java)\\n* **[\u8bb0\u5f55\u6a21\u5f0f\uff08RecordScheme](https://github.com/activej/activej/blob/v4.2/core-codegen/src/main/java/io/activej/record/RecordScheme.java)**\\n    * \u589e\u52a0\u4e86\u5728 `RecordScheme` \u4e2d\u6307\u5b9a\u5b57\u6bb5\u7684\u80fd\u529b\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u5c06\u7528\u4e8e `equals()` \u548c `hashCode()` \u7684\u5b9e\u73b0\u3002\\n    * \u589e\u52a0\u4e86\u6307\u5b9a\u7528\u4e8e\u751f\u6210\u8bb0\u5f55\u7684\u5b57\u6bb5\u7684\u80fd\u529b `\u6bd4\u8f83\u5668`\\n* **[\u6587\u4ef6\u9501\u5b9a\u5668\uff08FileLocker](https://github.com/activej/activej/blob/v4.2/util-common/src/main/java/io/activej/common/FileLocker.java)**\\n    * \u4f7f\u5f97 `FileLocker` \u6784\u9020\u51fd\u6570\u516c\u5f00\u5316\u3002\\n    * `FileLocker` \u73b0\u5728\u5b9e\u73b0 `java.io.Closeable` \u63a5\u53e3\u3002\\n* **[\u6001\u7ba1\u7406\u5668](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/StateManager.java)**\\n    * \u6dfb\u52a0\u4e86 `tryLoadSnapshot()` \u548c `tryLoadDiff()` \u65b9\u6cd5\uff0c\u8fd4\u56de `null` \uff0c\u800c\u4e0d\u662f\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u3002\\n    * \u4e3a [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java) \u6dfb\u52a0\u4e86 `tryLoad()` \u65b9\u6cd5\uff0c\u8fd4\u56de `null` \uff0c\u800c\u4e0d\u662f\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u3002\\n    * \u4e3a [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java) \u6dfb\u52a0\u4e86 `save()` \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4e3a\u8981\u4fdd\u5b58\u7684\u72b6\u6001\u5360\u7528\u4e86\u4e00\u4e2a\u4fee\u8ba2\u7248\uff0c\u7528\\n* \u6539\u8fdb\u4e86\u5bf9\u5177\u6709\u5927\u578bURL\u7684HTTP\u8bf7\u6c42\u7684\u5904\u7406"},{"id":"ActiveJ 4.1 - \u4f18\u5316\u548c\u7b80\u5316","metadata":{"permalink":"/zh/blog/2021/03/19/v4.1","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2021-03-19-v4.1.md","title":"ActiveJ 4.1 - \u4f18\u5316\u548c\u7b80\u5316","description":"ActiveJ v4.1 \u88ab\u91ca\u653e\u300219, 2021 (\u89c1Maven)\u3002 \u8fd9\u4e2a\u7248\u672c\u5305\u62ec\u4f18\u5316\u548c\u7b80\u5316HTTP\u4ee3\u7801\uff0c\u6269\u5927\u67d0\u4e9b\u7ec4\u4ef6\u7684\u529f\u80fd\u3002","date":"2021-03-19T00:00:00.000Z","formattedDate":"2021\u5e743\u670819\u65e5","tags":[],"readingTime":1.355,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.2 - \u6269\u5c55\u7684\u529f\u80fd","permalink":"/zh/blog/2021/04/13/v4.2"},"nextItem":{"title":"ActiveJ 4.0 - \u5f02\u5e38\u7684\u91cd\u6784","permalink":"/zh/blog/2021/02/16/v4.0"}},"content":"ActiveJ v4.1 \u88ab\u91ca\u653e\u300219, 2021 ([\u89c1Maven](https://mvnrepository.com/artifact/io.activej/activej/4.1))\u3002 \u8fd9\u4e2a\u7248\u672c\u5305\u62ec\u4f18\u5316\u548c\u7b80\u5316HTTP\u4ee3\u7801\uff0c\u6269\u5927\u67d0\u4e9b\u7ec4\u4ef6\u7684\u529f\u80fd\u3002\\n\\n* **HTTP\u91cd\u6784\u548c\u4f18\u5316**\\n    * \u4f18\u5316\u548c\u7b80\u5316\u5bf9\u4f20\u5165\u7684HTTP\u6d88\u606f\u3001\u6807\u5934\u548cURL\u7684\u5904\u7406\\n    * \u589e\u52a0\u4e86HTTP\u6d88\u606f\u7684\u524d\u63d0\u6761\u4ef6\uff0c\u4ee5\u9632\u6b62\u4f7f\u7528\u56de\u6536\u7684\u6d88\u606f\u3002\\n    * \u7528\u6237\u521b\u5efa\u7684HTTP\u6d88\u606f([HttpRequest](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpRequest.java) for [AsyncHttpClient](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncHttpClient.java) / [HttpResponse](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpResponse.java) in [AsyncServlet](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncServlet.java))\u4e0d\u518d\u88ab\u56de\u6536 (\u5982\u679c\u5b58\u5728\uff0c\u53ea\u6709\u6d88\u606f\u4f53\u88ab\u56de\u6536)\uff0c\u4ece\u800c\u4f7f\u7f13\u5b58\u548c\u91cd\u590d\u4f7f\u7528\u5b83\u4eec\u6210\u4e3a\u53ef\u80fd\u3002\\n* \u6dfb\u52a0 `\u627f\u8bfa<Void> fetch()` \u65b9\u6cd5\u5230 [OTStateManager](https://github.com/activej/activej/blob/v4.1/extra/cloud-ot/src/main/java/io/activej/ot/OTStateManager.java). \u83b7\u53d6\u7684\u66f4\u6539\u5c06\u4e0d\u4f1a\u5e94\u7528\u4e8e\u5f53\u524d\u72b6\u6001\u3002\\n* \u5728 [ActiveJ\u5e8f\u5217\u5316\u5668\u4e2d\u6539\u8fdb\u4e86\u53cd\u5e8f\u5217\u5316\u5b57\u6bb5\u7684\u94f8\u9020\u3002](https://serializer.activej.io/)\\n* \u4e3a\u666e\u901a\u7ec4\u4ef6\u6dfb\u52a0\u4e86\u9ed8\u8ba4\u7684 [Initializer](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/api/Initializer.java)s\\n* \u5728\u5bf9 [LogOTState\u5e94\u7528\u64cd\u4f5c\u65f6\u589e\u52a0\u4e86\u524d\u63d0\u6761\u4ef6\u3002](https://github.com/activej/activej/blob/v4.1/extra/cloud-etl/src/main/java/io/activej/etl/LogOTState.java)\\n* \u4ece\u666e\u901a\u7684HTTP\u542f\u52a8\u5668\u4e2d\u5220\u9664\u4e86 [JmxModule](https://github.com/activej/activej/blob/v4.1/boot-jmx/src/main/java/io/activej/jmx/JmxModule.java)\\n* \u5728 [RpcClient](https://github.com/activej/activej/blob/v4.1/cloud-rpc/src/main/java/io/activej/rpc/client/RpcClient.java) \uff0c\u589e\u52a0\u4e86\u65b0\u7684JMX\u7edf\u8ba1\u4fe1\u606f\uff0c\u7528\u4e8e\u76d1\u63a7\u65e0\u54cd\u5e94\u7684RPC\u670d\u52a1\u5668\\n* \u6dfb\u52a0\u4e86 [ApplicationSettings](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/ApplicationSettings.java) \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u53d6\u9ed8\u8ba4\u7684 `Locale\u3002`\\n* \u5728\u683c\u5f0f\u5316 [EventStats](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/EventStats.java) \u548c [ValueStats\u65f6\uff0c\u575a\u6301\u4f7f\u7528 `en-US` locale\u3002](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/ValueStats.java)"},{"id":"ActiveJ 4.0 - \u5f02\u5e38\u7684\u91cd\u6784","metadata":{"permalink":"/zh/blog/2021/02/16/v4.0","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2021-02-16-v4.0.md","title":"ActiveJ 4.0 - \u5f02\u5e38\u7684\u91cd\u6784","description":"ActiveJ v4.0 \u88ab\u91ca\u653e\uff0c2021 Feb 16.(\u89c1Maven)\u3002 \u8fd9\u79cd\u91ca\u653e\u5305\u62ec\u5bf9\u4f8b\u5916\u60c5\u51b5\u8fdb\u884c\u91cd\u5927\u8c03\u6574\u3002 \u6b64\u7248\u672c\u8fd8\u5f15\u5165\u5f02\u6b65\u9ad8\u6027\u80fd ActiveJ Redis\u5ba2\u6237\u7aef\u3002 \u4e3a\u6027\u80fd\u4f18\u5316\u4e86\u5176\u4ed6\u7ec4\u4ef6\u3002","date":"2021-02-16T00:00:00.000Z","formattedDate":"2021\u5e742\u670816\u65e5","tags":[],"readingTime":2.235,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.1 - \u4f18\u5316\u548c\u7b80\u5316","permalink":"/zh/blog/2021/03/19/v4.1"}},"content":"ActiveJ v4.0 \u88ab\u91ca\u653e\uff0c2021 Feb 16.([\u89c1Maven](https://mvnrepository.com/artifact/io.activej/activej/4.0))\u3002 \u8fd9\u79cd\u91ca\u653e\u5305\u62ec\u5bf9\u4f8b\u5916\u60c5\u51b5\u8fdb\u884c\u91cd\u5927\u8c03\u6574\u3002 \u6b64\u7248\u672c\u8fd8\u5f15\u5165\u5f02\u6b65\u9ad8\u6027\u80fd ActiveJ Redis\u5ba2\u6237\u7aef\u3002 \u4e3a\u6027\u80fd\u4f18\u5316\u4e86\u5176\u4ed6\u7ec4\u4ef6\u3002\\n\\n* **\u5f02\u5e38\u60c5\u51b5\u7684\u91cd\u6784**\\n    * \u6240\u6709\u7684\u516c\u5171\u5e38\u6570\u4f8b\u5916\u88ab\u5220\u9664/\u9690\u85cf\u3002\\n    * **StacklessException** \u5df2\u88ab\u5220\u9664\u3002 \u6269\u5c55 **\u7684 StacklessException** \u73b0\u5728\u6269\u5c55\u5e38\u89c4 **Exception**, \u5176\u4e2d\u4e00\u4e9b\u4ecd\u7136\u662f *\u65e0\u5806\u6808* *\u65e0\u5806\u6808* \u5f02\u5e38\u80fd\u591f\u5305\u542b\u7528\u4e8e\u8c03\u8bd5\u76ee\u7684\u7684\u5806\u6808\u8ddf\u8e2a\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u5f02\u5e38\u7684 [\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/ApplicationSettings.java) `\u4f7f\u7528StackTrace` \u5230 **true** \u6765\u5b9e\u73b0\u3002\\n    * \u91cd\u65b0\u547d\u540d\u7684\u4f8b\u5916\u60c5\u51b5\u3002\\n        * **ParseException** -> [MalformedDataException](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/exception/MalformedDataException.java)\\n        * **HttpException** -> [HttpError](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpError.java) ([HttpException](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpException.java) \u73b0\u5728\u662f\u5176\u4ed6HTTP\u5f02\u5e38\u7684\u7236\u7c7b)\\n        * **OTTransformException** -> [TransformException](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/TransformException.java)\\n        * **OTNoCommitException** -> [NoCommitException](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/NoCommitException.java)\\n    * \u4e3a\u9876\u5c42\u7ec4\u4ef6\u7b49\u589e\u52a0\u4e86\u65b0\u7684\u4f8b\u5916\u60c5\u51b5\u3002\\n* \u5f15\u5165\u4e86\u5f02\u6b65\u8f7b\u91cf\u9ad8\u6027\u80fd [ActiveJ Redis\u5ba2\u6237\u7aef](https://github.com/activej/activej/tree/v4.0/extra/cloud-redis) \u4e0e\u53ef\u6269\u5c55\u7684 API\u3002 [\u6837\u4f8b](https://github.com/activej/activej/tree/v4.0/examples/cloud/redis) \u548c [\u57fa\u51c6](https://github.com/activej/activej/tree/v4.0/benchmarks/redis) \u5230 Redis \u5ba2\u6237\u7aef\u4e5f\u88ab\u6dfb\u52a0\u3002\\n* \u5728\u7f51\u7edc\u4ee3\u7801\u3001HTTP\u5904\u7406\uff08\u7279\u522b\u662f\u5728\u6d41\u6c34\u7ebf\u6a21\u5f0f\u4e0b\uff09\u548c\u6570\u636e\u5e8f\u5217\u5316\u65b9\u9762\u8fdb\u884c\u4f18\u5316\u3002\\n* \u91cd\u547d\u540d **ByteBufQueue** -> [ByteBufs](https://github.com/activej/activej/blob/v4.0/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBufs.java). \u5df2\u6dfb\u52a0\u5b57\u8282\u7d22\u5f15\u5230 **ByteScanner**, \u91cd\u7f6e `ByteBufs::scanBytes` \u6dfb\u52a0 `ByteBufs::consumeBytes` \u65b9\u6cd5\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff0c\u5982 `ByteBufs::scanBytes`\uff0c\u4f46\u5b9e\u9645\u6d88\u8017\u626b\u63cf\u7684\u5b57\u8282/bufs\u3002\\n* \u5220\u9664\u4e86 **StreamMapper**\uff0c\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7 `StreamFilter.mapper(Function<I, O>)\u5b9e\u73b0\u6d41\u6620\u5c04\u3002`\\n* \u5df2\u5220\u9664 **\u53d8\u538b\u5668**, **StreamTransducer**, **AbstractStreamReducer**, **StreamMerger** class\u3002 \u6d41\u7684\u5408\u5e76\u53ef\u4ee5\u901a\u8fc7 [StreamReducer\u6765\u5b8c\u6210\u3002](https://github.com/activej/activej/blob/v4.0/core-datastream/src/main/java/io/activej/datastream/processor/StreamReducer.java)\\n* \u91cd\u547d\u540d\u4e3a **MergeSortReducer** -> **MergeReducer**, **MergeDistinctReducer** -> **DeduplicateReducer**\\n* \u589e\u52a0\u4e86\u4ece [Cube](https://github.com/activej/activej/blob/v4.0/extra/cloud-lsmt-cube/src/main/java/io/activej/cube/Cube.java) \uff0c\u901a\u8fc7\u8c03\u7528 `Cube::getIrrelevantChunks`\uff0c\u83b7\u5f97\u65e0\u5173\u7684\u5757\u7684\u80fd\u529b\u3002 \u901a\u8fc7\u8c03\u7528 `CubeConsolidationController::cleanup\u4e0d\u76f8\u5173\u7684\u5757\u53ef\u4ee5\u6e05\u7406\u4e0d\u76f8\u5173\u7684\u5757`\u3002\\n* \u6dfb\u52a0\u4e86JUnit\u6d4b\u8bd5\u89c4\u5219 [ClassBuilderConstantsRule](https://github.com/activej/activej/blob/v4.0/test/src/main/java/io/activej/test/rules/ClassBuilderConstantsRule.java) \uff0c\u9a8c\u8bc1\u6240\u6709 [ClassBuilder](https://github.com/activej/activej/blob/v4.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java)\'s \u9759\u6001\u5e38\u91cf\u5728\u6d4b\u8bd5\u901a\u8fc7\u540e\u88ab\u6e05\u7a7a\u3002\\n* \u5c06\u5927\u591a\u6570\u5305\u542b *\u89e3\u6790* \u7684\u7c7b/\u65b9\u6cd5\u6539\u540d\u4e3a\u5305\u542b *\u89e3\u7801*\u3002"}]}')}}]);