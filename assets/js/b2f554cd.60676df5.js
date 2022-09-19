"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"ActiveJ 5.4.3 - Simplified custom serializers","metadata":{"permalink":"/blog/2022/09/16/v5.4.3","source":"@site/blog/2022-09-16-v5.4.3.md","title":"ActiveJ 5.4.3 - Simplified custom serializers","description":"ActiveJ v5.4.3 was released on Sep 16,","date":"2022-09-16T00:00:00.000Z","formattedDate":"September 16, 2022","tags":[],"readingTime":0.255,"truncated":false,"authors":[],"nextItem":{"title":"ActiveJ 5.4.2 - Minor bug fixes","permalink":"/blog/2022/09/05/v5.4.2"}},"content":"ActiveJ v5.4.3 was released on Sep 16,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.4.3)). This release introduces a simplified\\napproach for creating serializers for custom classes.\\n\\n* Added an abstract `SimpleSerializerDef` class that simplifies the creation of custom serializers. Serializers for custom\\nclasses can now be created without the use of the Expressions API"},{"id":"ActiveJ 5.4.2 - Minor bug fixes","metadata":{"permalink":"/blog/2022/09/05/v5.4.2","source":"@site/blog/2022-09-05-v5.4.2.md","title":"ActiveJ 5.4.2 - Minor bug fixes","description":"ActiveJ v5.4.2 was released on Sep 5,","date":"2022-09-05T00:00:00.000Z","formattedDate":"September 5, 2022","tags":[],"readingTime":0.33,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.4.3 - Simplified custom serializers","permalink":"/blog/2022/09/16/v5.4.3"},"nextItem":{"title":"ActiveJ 5.4.1 - Stream Codecs optimizations","permalink":"/blog/2022/08/31/v5.4.1"}},"content":"ActiveJ v5.4.2 was released on Sep 5,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.4.2)). This release includes\\nminor bug fixes for stream codecs.\\n\\n* Fixed a bug when a stream codec tried to safely decode more items than are present in the input of the stream. \\n* Relative path tests in [ActiveJ FS](/fs) are ignored when the project directory is located on a drive other than the temporary directory."},{"id":"ActiveJ 5.4.1 - Stream Codecs optimizations","metadata":{"permalink":"/blog/2022/08/31/v5.4.1","source":"@site/blog/2022-08-31-v5.4.1.md","title":"ActiveJ 5.4.1 - Stream Codecs optimizations","description":"ActiveJ v5.4.1 was released on Aug 31,","date":"2022-08-31T00:00:00.000Z","formattedDate":"August 31, 2022","tags":[],"readingTime":0.27,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.4.2 - Minor bug fixes","permalink":"/blog/2022/09/05/v5.4.2"},"nextItem":{"title":"ActiveJ 5.4 - Codegen and Serializer optimizations","permalink":"/blog/2022/08/19/v5.4"}},"content":"ActiveJ v5.4.1 was released on Aug 31,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.4.1)). This release includes\\noptimizations for Stream Codecs to optimize memory usage.\\n\\n* Optimized encoding and decoding of arrays of primitives, as well as arrays of variable-length ints and longs.\\n* Minimized the required number of flushes when writing data to a byte array."},{"id":"ActiveJ 5.4 - Codegen and Serializer optimizations","metadata":{"permalink":"/blog/2022/08/19/v5.4","source":"@site/blog/2022-08-19-v5.4.md","title":"ActiveJ 5.4 - Codegen and Serializer optimizations","description":"ActiveJ v5.4 was released on Aug 19,","date":"2022-08-19T00:00:00.000Z","formattedDate":"August 19, 2022","tags":[],"readingTime":0.805,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.4.1 - Stream Codecs optimizations","permalink":"/blog/2022/08/31/v5.4.1"},"nextItem":{"title":"ActiveJ 5.3 - JMX improvements","permalink":"/blog/2022/06/17/v5.3"}},"content":"ActiveJ v5.4 was released on Aug 19,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.4)). This release includes\\nimprovements to [ActiveJ Codegen](/codegen),[ActiveJ Serializer](/serializer), and minor fixes to other\\ncomponents.\\n\\n* [ActiveJ Codegen](/codegen)\\n    * Generated method calls that use `self` instances as method arguments are now automatically resolved.\\n    * Slightly optimized method lookup.\\n* [ActiveJ Serializer](/serializer)\\n    * Optimized serializer builder\'s cache. Ensured that previously defined serializers are reused.\\n    * Ensured that dangling references are cleaned up if serialization fails.\\n* [Net](/async-io/net)\\n    * Fix order of promise completion when SSL socket receives `close_notify` message.\\n* [HTTP](/http)\\n    * Multimap of HTTP headers is now properly resized.\\n    * Fatal errors in HTTP server connections are now handled correctly.\\n    * Added the `HttpMessage#takeBodyStream` method instead of the `HttpMessage#getBodyStream` method as it has a more\\n      semantically correct name. `HttpMessage#getBodyStream` method is now deprecated and is a candidate for removal in\\n      the next major release.\\n* Misc\\n    * Added additional application error logging in Launcher.\\n    * Fixed `@NotNull` annotations for function parameters."},{"id":"ActiveJ 5.3 - JMX improvements","metadata":{"permalink":"/blog/2022/06/17/v5.3","source":"@site/blog/2022-06-17-v5.3.md","title":"ActiveJ 5.3 - JMX improvements","description":"ActiveJ v5.3 was released Jun 17,","date":"2022-06-17T00:00:00.000Z","formattedDate":"June 17, 2022","tags":[],"readingTime":0.59,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.4 - Codegen and Serializer optimizations","permalink":"/blog/2022/08/19/v5.4"},"nextItem":{"title":"ActiveJ 5.2 - Minor improvements","permalink":"/blog/2022/04/19/v5.2"}},"content":"ActiveJ v5.3 was released Jun 17,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.3)). This release includes\\nminor improvements to JMX, as well as several bug fixes.\\n\\n* JMX\\n  * Added the ability to use custom `JmxReducer`s for `@JmxOperation`s. \\n  * JMX attributes and operations of `Map` type now respect the specified `JmxReducer` when reducing map values.\\n  * Added the ability to specify a predicate for whether worker instances should be registered in JMX or not.\\n* [ActiveJ Codegen](/codegen)\\n  * Ability to use parameterized types for record fields has been added.\\n* [HTTP](/http)\\n  * Fixed a bug with quality factors parsing in headers.\\n  * Improved handling of runtime exceptions.\\n* [Datastream](/async-io/datastream)\\n  * Fixed acknowledgement completion in `StreamReducer` as well as in several `StreamConsumer`s"},{"id":"ActiveJ 5.2 - Minor improvements","metadata":{"permalink":"/blog/2022/04/19/v5.2","source":"@site/blog/2022-04-19-v5.2.md","title":"ActiveJ 5.2 - Minor improvements","description":"ActiveJ v5.2 was released Apr 19,","date":"2022-04-19T00:00:00.000Z","formattedDate":"April 19, 2022","tags":[],"readingTime":0.59,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.3 - JMX improvements","permalink":"/blog/2022/06/17/v5.3"},"nextItem":{"title":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","permalink":"/blog/2022/01/04/v5.1"}},"content":"ActiveJ v5.2 was released Apr 19,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.2)). This release includes\\nminor improvements mainly for [HTTP client/server](/http) and [ActiveJ Serializer](/serializer).\\n\\n* [HTTP](/http)\\n  * Added dedicated enum for setting `SameSite` policy on cookies. \\n  * Malformed HTTP requests now result in a code `400` response rather than connection drop.\\n  * HTTP inspectors can now inspect malformed HTTP requests and responses.\\n  * [RoutingServlet](https://github.com/activej/activej/blob/v5.1.1/core-http/src/main/java/io/activej/http/RoutingServlet.java) now correctly decodes percent-encoded URL path parts.\\n  * Added checks for DNS label sizes.\\n  * Minor improvements of the [UrlParser](https://github.com/activej/activej/blob/v5.1.1/core-http/src/main/java/io/activej/http/UrlParser.java).\\n* [ActiveJ Serializer](/serializer)\\n  * Added additional preconditions for subclass serializer.\\n  * Removed unnecessary caching from [SerializerBuilder](https://github.com/activej/activej/blob/v5.1.1/core-serializer/src/main/java/io/activej/serializer/SerializerBuilder.java).\\n* [ActiveJ FS](/fs)\\n  * Storage paths are now normalized, so local file systems now work properly with relative storage paths."},{"id":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","metadata":{"permalink":"/blog/2022/01/04/v5.1","source":"@site/blog/2022-01-04-v5.1.md","title":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","description":"ActiveJ v5.1 was released Jan 4,","date":"2022-01-04T00:00:00.000Z","formattedDate":"January 4, 2022","tags":[],"readingTime":0.535,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.2 - Minor improvements","permalink":"/blog/2022/04/19/v5.2"},"nextItem":{"title":"ActiveJ 5.0 - New major release","permalink":"/blog/2021/10/29/v5.0"}},"content":"ActiveJ v5.1 was released Jan 4,\\n2022 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.1)). This release includes\\nimprovements to [ActiveJ FS](/fs), [ActiveJ Inject](/inject) and [boot](/boot/launcher) modules in general.\\n\\n* [ActiveJ Inject](/inject) and [boot](/boot/launcher) modules\\n  * [TriggersModule](https://github.com/activej/activej/blob/v5.1/boot-triggers/src/main/java/io/activej/trigger/TriggersModule.java) \\n  now properly handles [optional dependencies](/inject/optional-dependencies)\\n  * Nested optional dependencies (e.g. `OptionalDependency<OptionalDependency<?>>`) are prohibited\\n  * Services (as well as those obtained from an optional dependencies) are guaranteed to start/stop exactly once\\n  * Added shortcuts for obtaining optional dependencies from [Injector](https://github.com/activej/activej/blob/v5.1/core-inject/src/main/java/io/activej/inject/Injector.java)\\n* [ActiveJ FS](/fs)\\n  * Added a new [exception](https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/exception/ActiveFsStructureException.java) to\\n  indicate errors in a structure of a file system.\\n  * Added a precondition that checks whether local file systems ([LocalActiveFs](https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalActiveFs.java) and \\n  [LocalBlockingFs](https://github.com/activej/activej/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalBlockingFs.java)) were started before being used."},{"id":"ActiveJ 5.0 - New major release","metadata":{"permalink":"/blog/2021/10/29/v5.0","source":"@site/blog/2021-10-29-v5.0.md","title":"ActiveJ 5.0 - New major release","description":"ActiveJ v5.0 was released Oct 29,","date":"2021-10-29T00:00:00.000Z","formattedDate":"October 29, 2021","tags":[],"readingTime":1.835,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.1 - Boot and ActiveJ FS improvements","permalink":"/blog/2022/01/04/v5.1"},"nextItem":{"title":"ActiveJ 4.3 - Small improvements for multiple modules","permalink":"/blog/2021/05/28/v4.3"}},"content":"ActiveJ v5.0 was released Oct 29,\\n2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.0)). This release includes\\nmajor changes in [ActiveJ Inject](/inject), [ActiveJ Codegen](/codegen), [ActiveJ Serializer](/serializer)\\n[promises API](/async-io/promise). The release also introduced improved type scanning facility and \\noverall minor improvements in other components.\\n\\n* [ActiveJ Inject](/inject)\\n  * Refactored and simplified inner components to speed up dependency injection and provide better support for binding \\n[specialization](/specializer)\\n  * Simplified type resolution in dependency injection\\n  * Added the ability to transform imported and exported bindings using patterns (see [example](/inject/binding-transformation))\\n  * Replaced `@Optional` annotation with an explicit [OptionalDependency](https://github.com/activej/activej/blob/v5.0/core-inject/src/main/java/io/activej/inject/binding/OptionalDependency.java)\\n  class\\n* [ActiveJ Codegen](/codegen)\\n  * Improved [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) and [DefiningClassLoader](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/DefiningClassLoader.java) classes\\n  * Class generation may now be 100% lazy\\n  * Added in-memory [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) caches\\n  * Added the ability to use [BytecodeStorage](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/BytecodeStorage.java) as a persistent cache for generated bytecode\\n  * Added the ability to call super methods as well as protected methods\\n  * Improved built-in expressions for array/collection/map iteration\\n* [ActiveJ Serializer](/serializer)\\n  * Added the ability to specify serializer annotations directly on type use (see [example](/serializer/examples#path-based-serialization))\\n  * Automatic class member ordering is now supported within the same JVM\\n  * Added support for serializer annotation aliases\\n  * Improved array serialization as well as serialization of booleans\\n  * Refactored class hierarchy of collection serializers. \\n  * Abstract collection serializers now support builder pattern\\n* [Promise](/async-io/promise)\\n  * Greatly improved exception handling\\n  * Renamed promise chaining methods `thenEx` and `mapEx` to `then` and `map`\\n  * Added new conditional chaining methods as well as dedicated null-handling chaining methods \\n  * All the changing methods now take \\"throwing\\" functions. If a checked exception is thrown in a chaining function, \\nthe whole promise is completed exceptionally\\n* Miscellaneous improvements\\n  * Removed `codec` module. Components that require JSON marshalling now internally use the \\n[DSL-JSON](https://github.com/ngs-doo/dsl-json) library  \\n  * Added new [types](https://github.com/activej/activej/tree/v5.0/util-types) module which contains various reflection and type utilities, including advanced type scanner\\n  * [Common](https://github.com/activej/activej/tree/v5.0/util-common) module has been massively refactored to make common functions and components more consistent\\n  * Restructured asynchronous exceptions\\n  * Unchecked exception handling can now be precisely configured using a thread-scoped or global \\n[FatalErrorHandler facility](https://github.com/activej/activej/blob/v5.0/util-common/src/main/java/io/activej/common/exception/FatalErrorHandler.java) \\n  * Made ActiveJ compatible with Java 17\\n  * Added various `DiscoveryService` interfaces for node discovery within server cluster ([RPC](/rpc), [FS](/fs))\\n  * Removed `AsyncServletDecorator` facility\\n  * Removed `StreamCodecRegistry` facility\\n  * Multiple small improvements and fixes"},{"id":"ActiveJ 4.3 - Small improvements for multiple modules","metadata":{"permalink":"/blog/2021/05/28/v4.3","source":"@site/blog/2021-05-28-v4.3.md","title":"ActiveJ 4.3 - Small improvements for multiple modules","description":"ActiveJ v4.3 was released May 28,","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":0.535,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.0 - New major release","permalink":"/blog/2021/10/29/v5.0"},"nextItem":{"title":"ActiveJ 4.2 - Expanded functionality","permalink":"/blog/2021/04/13/v4.2"}},"content":"ActiveJ v4.3 was released May 28,\\n2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.3)). This release introduced\\nsmall improvements for multiple modules.\\n\\n* Added new method `onConnecting` to [AsyncHttpClient](https://github.com/activej/activej/blob/v4.3/core-http/src/main/java/io/activej/http/AsyncHttpClient.java)\\n  \'s `Inspector`. Now, the number of connection that are being\\n  established can be monitored via `JmxInspector#getConnecting` attribute\\n* When HTTP connection closes, the proper exception is propagated to HTTP request and response body suppliers\\n* [ThrottlingController](https://github.com/activej/activej/blob/v4.3/core-eventloop/src/main/java/io/activej/eventloop/inspector/ThrottlingController.java)\\n  now throttles all the processing if tasks consecutively execute for abnormally long time\\n* [ForwardingStreamSupplier](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/ForwardingStreamSupplier.java)\\n  now correctly binds peer `StreamSupplier` to `StreamConsumer`\\n* Fixed asynchronous recursion in [ChannelSerializer](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/csp/ChannelSerializer.java)\\n* Missing measures in [Aggregation](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/Aggregation.java)\\n  are initialized with default \'zero\' values\\n* [HyperLogLog](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/measure/HyperLogLog.java)\\n  now correctly adds `int` values"},{"id":"ActiveJ 4.2 - Expanded functionality","metadata":{"permalink":"/blog/2021/04/13/v4.2","source":"@site/blog/2021-04-13-v4.2.md","title":"ActiveJ 4.2 - Expanded functionality","description":"ActiveJ v4.2 was released Apr 13, 2021 (see on Maven). This release expanded","date":"2021-04-13T00:00:00.000Z","formattedDate":"April 13, 2021","tags":[],"readingTime":0.745,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.3 - Small improvements for multiple modules","permalink":"/blog/2021/05/28/v4.3"},"nextItem":{"title":"ActiveJ 4.1 - Optimization and simplification","permalink":"/blog/2021/03/19/v4.1"}},"content":"ActiveJ v4.2 was released Apr 13, 2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.2)). This release expanded\\nfunctionality of some components.\\n\\n* **[ActiveJ Redis client](https://github.com/activej/activej/tree/v4.2/extra/cloud-redis)**\\n    * Added `connect()` methods\\n      to [RedisClient](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisClient.java)\\n      that take up authentication credentials\\n    * Added new specialized exceptions for ActiveJ Redis module:\\n        - [RedisAuthenticationException](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisAuthenticationException.java)\\n        - [RedisPermissionException](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisPermissionException.java)\\n* **[RecordScheme](https://github.com/activej/activej/blob/v4.2/core-codegen/src/main/java/io/activej/record/RecordScheme.java)**\\n    * Added ability to specify fields in `RecordScheme` that would be used for `equals()` and `hashCode()` implementation\\n    * Added ability to specify fields that would be used to generate a record `Comparator`\\n* **[FileLocker](https://github.com/activej/activej/blob/v4.2/util-common/src/main/java/io/activej/common/FileLocker.java)**\\n    * Made `FileLocker` constructors public\\n    * `FileLocker` now implements `java.io.Closeable` interface\\n* **[StateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/StateManager.java)**\\n    * Added `tryLoadSnapshot()` and `tryLoadDiff()` methods that return `null` rather than throwing an exception\\n    * Added `tryLoad()` method to [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java)\\n      that returns `null` rather than throwing an exception\\n    * Added `save()` method to [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java)\\n      that takes up a revision for the state to be saved with\\n* Improved processing of HTTP requests with large URLs"},{"id":"ActiveJ 4.1 - Optimization and simplification","metadata":{"permalink":"/blog/2021/03/19/v4.1","source":"@site/blog/2021-03-19-v4.1.md","title":"ActiveJ 4.1 - Optimization and simplification","description":"ActiveJ v4.1 was released Mar 19, 2021 (see on Maven).","date":"2021-03-19T00:00:00.000Z","formattedDate":"March 19, 2021","tags":[],"readingTime":0.83,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.2 - Expanded functionality","permalink":"/blog/2021/04/13/v4.2"},"nextItem":{"title":"ActiveJ 4.0 - Refactoring of exceptions","permalink":"/blog/2021/02/16/v4.0"}},"content":"ActiveJ v4.1 was released Mar 19, 2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.1)).\\nThis release included optimization and simplification of HTTP code, expanding functionality of some components.\\n\\n* **HTTP refactoring and optimizations**\\n    * Optimized and simplified processing of incoming HTTP messages, headers and URLs\\n    * Added preconditions for an HTTP message which guard against using recycled messages\\n    * User-created HTTP messages ([HttpRequest](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpRequest.java)\\n      for [AsyncHttpClient](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncHttpClient.java) /\\n      [HttpResponse](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpResponse.java) in\\n      [AsyncServlet](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncServlet.java)) are not recycled anymore\\n      (only message body is recycled if present), thus making it possible to cache and reuse them\\n* Added `Promise<Void> fetch()` method to [OTStateManager](https://github.com/activej/activej/blob/v4.1/extra/cloud-ot/src/main/java/io/activej/ot/OTStateManager.java).\\n  Fetched changes are stored without being applied to the current state.\\n* Improved casting of deserialized fields in [ActiveJ Serializer](https://serializer.activej.io/)\\n* Added default [Initializer](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/api/Initializer.java)s\\n  for common components\\n* Added preconditions when applying operations to [LogOTState](https://github.com/activej/activej/blob/v4.1/extra/cloud-etl/src/main/java/io/activej/etl/LogOTState.java)\\n* Removed [JmxModule](https://github.com/activej/activej/blob/v4.1/boot-jmx/src/main/java/io/activej/jmx/JmxModule.java) from common HTTP launchers\\n* Added new JMX stats to [RpcClient](https://github.com/activej/activej/blob/v4.1/cloud-rpc/src/main/java/io/activej/rpc/client/RpcClient.java)\\n  for monitoring unresponsive RPC servers\\n* Added [ApplicationSettings](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/ApplicationSettings.java)\\n  method for obtaining a default `Locale`\\n* Stick to using `en-US` locale when formatting [EventStats](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/EventStats.java)\\n  and [ValueStats](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/ValueStats.java)"},{"id":"ActiveJ 4.0 - Refactoring of exceptions","metadata":{"permalink":"/blog/2021/02/16/v4.0","source":"@site/blog/2021-02-16-v4.0.md","title":"ActiveJ 4.0 - Refactoring of exceptions","description":"ActiveJ v4.0 was released Feb 16, 2021 (see on Maven).","date":"2021-02-16T00:00:00.000Z","formattedDate":"February 16, 2021","tags":[],"readingTime":1.335,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.1 - Optimization and simplification","permalink":"/blog/2021/03/19/v4.1"}},"content":"ActiveJ v4.0 was released Feb 16, 2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.0)).\\nThis release included major refactoring of exceptions. This release also introduces asynchronous high-performance\\nActiveJ Redis client. Other components were optimized for the performance.\\n\\n* **Exceptions refactoring**\\n    * All public constant exceptions were removed/hidden.\\n    * **StacklessException** was removed. Classes that extended **StacklessException** now extend regular **Exception**,\\n      some of them are still *stackless*. *Stackless* exceptions provide the ability to include stack trace for debugging purposes.\\n      This can be achieved by setting exception\'s [ApplicationSetting](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/ApplicationSettings.java)\\n      `withStackTrace` to **true**.\\n    * Renamed exceptions:\\n        * **ParseException** -> [MalformedDataException](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/exception/MalformedDataException.java)\\n        * **HttpException** -> [HttpError](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpError.java)\\n          ([HttpException](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpException.java)\\n          is now a parent class for other HTTP exceptions)\\n        * **OTTransformException** -> [TransformException](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/TransformException.java)\\n        * **OTNoCommitException** -> [NoCommitException](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/NoCommitException.java)\\n    * Added new exceptions for top-level components, etc.\\n* Introduced asynchronous lightweight high-performance [ActiveJ Redis Client](https://github.com/activej/activej/tree/v4.0/extra/cloud-redis)\\n  with extendable API. [Examples](https://github.com/activej/activej/tree/v4.0/examples/cloud/redis) and [benchmarks](https://github.com/activej/activej/tree/v4.0/benchmarks/redis)\\n  for Redis client were added as well.\\n* Optimizations in network code, HTTP processing (especially in pipelining mode), and data serialization.\\n* Renamed **ByteBufQueue** -> [ByteBufs](https://github.com/activej/activej/blob/v4.0/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBufs.java).\\n  Added byte index to **ByteScanner**, refactored `ByteBufs::scanBytes`.\\n  Added `ByteBufs::consumeBytes` method that works like `ByteBufs::scanBytes`, but actually consumes scanned bytes/bufs.\\n* Removed **StreamMapper**, now stream mapping can be achieved via `StreamFilter.mapper(Function<I, O>)`\\n* Removed **Transducer**, **StreamTransducer**, **AbstractStreamReducer**, **StreamMerger** classes. Merging of streams can be\\n  done via [StreamReducer](https://github.com/activej/activej/blob/v4.0/core-datastream/src/main/java/io/activej/datastream/processor/StreamReducer.java)\\n* Renamed **MergeSortReducer** -> **MergeReducer**, **MergeDistinctReducer** -> **DeduplicateReducer**\\n* Added ability to obtain irrelevant chunks from [Cube](https://github.com/activej/activej/blob/v4.0/extra/cloud-lsmt-cube/src/main/java/io/activej/cube/Cube.java)\\n  by calling `Cube::getIrrelevantChunks`. Irrelevant chunks can be cleaned up by calling `CubeConsolidationController::cleanupIrrelevantChunks`.\\n* Added JUnit test rule [ClassBuilderConstantsRule](https://github.com/activej/activej/blob/v4.0/test/src/main/java/io/activej/test/rules/ClassBuilderConstantsRule.java)\\n  which validates that all of the [ClassBuilder](https://github.com/activej/activej/blob/v4.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java)\'s\\n  static constants are cleared after test passes.\\n* Renamed most classes/methods that contained *parse* to contain *decode* instead."}]}')}}]);