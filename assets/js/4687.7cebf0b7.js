(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4687],{38173:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function l(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var l=0;return function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}a.r(t),a.d(t,{default:function(){return l}})},23855:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return null}},24524:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(86010)),u=a(83551),o=n(a(90050)),i=a(90792),c=n(a(58474));var d=function(){var e,t=(0,o.default)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,d=(0,u.useThemeConfig)().announcementBar;if(!d)return null;var s=d.content,f=d.backgroundColor,m=d.textColor,v=d.isCloseable;return!s||v&&a?null:l.default.createElement("div",{className:c.default.announcementBar,style:{backgroundColor:f,color:m},role:"banner"},l.default.createElement("div",{className:(0,r.default)(c.default.announcementBarContent,(e={},e[c.default.announcementBarCloseable]=v,e)),dangerouslySetInnerHTML:{__html:s}}),v?l.default.createElement("button",{type:"button",className:c.default.announcementBarClose,onClick:n,"aria-label":(0,i.translate)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},l.default.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};t.default=d},69296:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=n(a(86010)),i=n(a(34791)),c=a(83551),d=n(a(79524)),s=n(a(48856)),f=n(a(82432)),m=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,a=e.href,n=e.label,o=e.prependBaseUrlToHref,c=(0,r.default)(e,m),s=(0,d.default)(t),f=(0,d.default)(a,{forcePrependBaseUrl:!0});return u.default.createElement(i.default,(0,l.default)({className:"footer__link-item"},a?{href:o?f:a}:{to:s},c),n)}var h=function(e){var t=e.sources,a=e.alt;return u.default.createElement(f.default,{className:"footer__logo",alt:a,sources:t})};var b=function(){var e=(0,c.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,l=void 0===n?[]:n,r=t.logo,f=void 0===r?{}:r,m={light:(0,d.default)(f.src),dark:(0,d.default)(f.srcDark||f.src)};return e?u.default.createElement("footer",{className:(0,o.default)("footer",{"footer--dark":"dark"===e.style})},u.default.createElement("div",{className:"container"},l&&l.length>0&&u.default.createElement("div",{className:"row footer__links"},l.map((function(e,t){return u.default.createElement("div",{key:t,className:"col footer__col"},null!=e.title?u.default.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?u.default.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?u.default.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):u.default.createElement("li",{key:e.href||e.to,className:"footer__item"},u.default.createElement(v,e))}))):null)}))),(f||a)&&u.default.createElement("div",{className:"footer__bottom text--center"},f&&(f.src||f.srcDark)&&u.default.createElement("div",{className:"margin-bottom--sm"},f.href?u.default.createElement(i.default,{href:f.href,className:s.default.footerLogoLink},u.default.createElement(h,{alt:f.alt,sources:m})):u.default.createElement(h,{alt:f.alt,sources:m})),a?u.default.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null};t.default=b},71694:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=["width","height"],i=function(e){var t=e.width,a=void 0===t?20:t,n=e.height,i=void 0===n?20:n,c=(0,r.default)(e,o);return u.default.createElement("svg",(0,l.default)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:i},c),u.default.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};t.default=i},16416:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=["width","height","className"],i=function(e){var t=e.width,a=void 0===t?30:t,n=e.height,i=void 0===n?30:n,c=e.className,d=(0,r.default)(e,o);return u.default.createElement("svg",(0,l.default)({"aria-label":"Menu",className:c,width:a,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},d),u.default.createElement("title",null,"Menu"),u.default.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};t.default=i},84687:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(86010)),u=n(a(78093)),o=n(a(24524)),i=n(a(36469)),c=n(a(69296)),d=n(a(17227)),s=n(a(99116)),f=n(a(73637)),m=a(83551);a(46206);var v=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName,v=e.pageClassName;return(0,f.default)(),l.default.createElement(d.default,null,l.default.createElement(s.default,e),l.default.createElement(u.default,null),l.default.createElement(o.default,null),l.default.createElement(i.default,null),l.default.createElement("div",{className:(0,r.default)(m.ThemeClassNames.wrapper.main,n,v)},t),!a&&l.default.createElement(c.default,null))};t.default=v},99116:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,o.default)(),a=t.siteConfig,n=a.favicon,f=a.themeConfig.metadatas,h=t.i18n,b=h.currentLocale,p=h.localeConfigs,g=e.title,_=e.description,E=e.image,y=e.keywords,k=e.searchMetadatas,C=(0,i.default)(n),w=(0,s.useTitleFormatter)(g),N=b,P=p[b].direction;return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,null,r.default.createElement("html",{lang:N,dir:P}),n&&r.default.createElement("link",{rel:"shortcut icon",href:C}),r.default.createElement("title",null,w),r.default.createElement("meta",{property:"og:title",content:w})),r.default.createElement(d.default,{description:_,keywords:y,image:E}),r.default.createElement(v,null),r.default.createElement(m,null),r.default.createElement(c.default,(0,l.default)({tag:s.DEFAULT_SEARCH_TAG,locale:b},k)),r.default.createElement(u.default,null,f.map((function(e,t){return r.default.createElement("meta",(0,l.default)({key:"metadata_"+t},e))}))))};var l=n(a(22122)),r=n(a(67294)),u=n(a(31514)),o=n(a(39962)),i=n(a(79524)),c=n(a(61629)),d=n(a(24175)),s=a(83551),f=a(45094);function m(){var e=(0,o.default)().i18n,t=e.defaultLocale,a=e.locales,n=(0,s.useAlternatePageUtils)();return r.default.createElement(u.default,null,a.map((function(e){return r.default.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.default.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function v(e){var t=e.permalink,a=(0,o.default)().siteConfig.url,n=function(){var e=(0,o.default)().siteConfig.url,t=(0,f.useLocation)().pathname;return e+(0,i.default)(t)}(),l=t?""+a+t:n;return r.default.createElement(u.default,null,r.default.createElement("meta",{property:"og:url",content:l}),r.default.createElement("link",{rel:"canonical",href:l}))}},17227:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.children;return l.default.createElement(r.default,null,l.default.createElement(u.default,null,l.default.createElement(o.DocsPreferredVersionContextProvider,null,t)))};var l=n(a(67294)),r=n(a(80307)),u=n(a(50712)),o=a(83551)},32827:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=n(a(34791)),i=n(a(82432)),c=n(a(79524)),d=n(a(39962)),s=a(83551),f=["imageClassName","titleClassName"],m=function(e){var t=(0,d.default)().isClient,a=(0,s.useThemeConfig)().navbar,n=a.title,m=a.logo,v=void 0===m?{src:""}:m,h=e.imageClassName,b=e.titleClassName,p=(0,r.default)(e,f),g=(0,c.default)(v.href||"/"),_={light:(0,c.default)(v.src),dark:(0,c.default)(v.srcDark||v.src)};return u.default.createElement(o.default,(0,l.default)({to:g},p,v.target&&{target:v.target}),v.src&&u.default.createElement(i.default,{key:t,className:h,sources:_,alt:v.alt||n||"Logo"}),null!=n&&u.default.createElement("strong",{className:b},n))};t.default=m},36469:function(e,t,a){"use strict";var n=a(20862).default,l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(22122)),u=n(a(67294)),o=l(a(86010)),i=l(a(99730)),c=l(a(35171)),d=l(a(48002)),s=a(83551),f=l(a(57002)),m=l(a(69729)),v=n(a(93301)),h=l(a(85046)),b=l(a(32827)),p=l(a(16416)),g=l(a(93882)),_="right";var E=function(){var e,t=(0,s.useThemeConfig)(),a=t.navbar,n=a.items,l=a.hideOnScroll,E=a.style,y=t.colorMode.disableSwitch,k=(0,u.useState)(!1),C=k[0],w=k[1],N=(0,d.default)(),P=N.isDarkTheme,M=N.setLightTheme,L=N.setDarkTheme,S=(0,f.default)(l),I=S.navbarRef,O=S.isNavbarVisible;(0,m.default)(C);var T=(0,u.useCallback)((function(){w(!0)}),[w]),A=(0,u.useCallback)((function(){w(!1)}),[w]),B=(0,u.useCallback)((function(e){return e.target.checked?L():M()}),[M,L]),j=(0,v.default)();(0,u.useEffect)((function(){j===v.windowSizes.desktop&&w(!1)}),[j]);var D=n.some((function(e){return"search"===e.type})),x=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:_)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:_)}))}}(n),V=x.leftItems,U=x.rightItems;return u.default.createElement("nav",{ref:I,className:(0,o.default)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===E,"navbar--primary":"primary"===E,"navbar-sidebar--show":C},e[g.default.navbarHideable]=l,e[g.default.navbarHidden]=l&&!O,e))},u.default.createElement("div",{className:"navbar__inner"},u.default.createElement("div",{className:"navbar__items"},null!=n&&0!==n.length&&u.default.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:T,onKeyDown:T},u.default.createElement(p.default,null)),u.default.createElement(b.default,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,o.default)("navbar__title")}),V.map((function(e,t){return u.default.createElement(h.default,(0,r.default)({},e,{key:t}))}))),u.default.createElement("div",{className:"navbar__items navbar__items--right"},U.map((function(e,t){return u.default.createElement(h.default,(0,r.default)({},e,{key:t}))})),!y&&u.default.createElement(c.default,{className:g.default.displayOnlyInLargeViewport,checked:P,onChange:B}),!D&&u.default.createElement(i.default,null))),u.default.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),u.default.createElement("div",{className:"navbar-sidebar"},u.default.createElement("div",{className:"navbar-sidebar__brand"},u.default.createElement(b.default,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:A}),!y&&C&&u.default.createElement(c.default,{checked:P,onChange:B})),u.default.createElement("div",{className:"navbar-sidebar__items"},u.default.createElement("div",{className:"menu"},u.default.createElement("ul",{className:"menu__list"},n.map((function(e,t){return u.default.createElement(h.default,(0,r.default)({mobile:!0},e,{onClick:A,key:t}))})))))))};t.default=E},36971:function(e,t,a){"use strict";var n=a(95318).default,l=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(22122)),u=n(a(19756)),o=l(a(67294)),i=n(a(86010)),c=n(a(34791)),d=n(a(79524)),s=a(45094),f=a(83551),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],h=["className"],b=["items","className","position"],p=["className"],g=["mobile"];function _(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,l=e.href,i=e.label,s=e.activeClassName,f=void 0===s?"navbar__link--active":s,v=e.prependBaseUrlToHref,h=(0,u.default)(e,m),b=(0,d.default)(n),p=(0,d.default)(t),g=(0,d.default)(l,{forcePrependBaseUrl:!0});return o.default.createElement(c.default,(0,r.default)({},l?{href:v?g:l}:Object.assign({isNavLink:!0,activeClassName:f,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}}:null),h),i)}function E(e){var t,a=e.items,n=e.position,l=e.className,c=(0,u.default)(e,v),d=(0,o.useRef)(null),s=(0,o.useRef)(null),f=(0,o.useState)(!1),m=f[0],b=f[1];(0,o.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]);var p=function(e,t){return void 0===t&&(t=!1),(0,i.default)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?o.default.createElement("div",{ref:d,className:(0,i.default)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":m})},o.default.createElement(_,(0,r.default)({className:p(l)},c,{onClick:c.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!m))}}),null!=(t=c.children)?t:c.label),o.default.createElement("ul",{ref:s,className:"dropdown__menu"},a.map((function(e,t){var n=e.className,l=(0,u.default)(e,h);return o.default.createElement("li",{key:t},o.default.createElement(_,(0,r.default)({onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var n=d.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(n,!0)},l)))})))):o.default.createElement(_,(0,r.default)({className:p(l)},c))}function y(e){var t,a,n,l=e.items,c=e.className,d=(e.position,(0,u.default)(e,b)),m=(0,o.useRef)(null),v=(0,s.useLocation)().pathname,h=(0,o.useState)((function(){var e;return null==(e=!(null!=l&&l.some((function(e){return(0,f.isSamePath)(e.to,v)}))))||e})),g=h[0],E=h[1],y=function(e,t){return void 0===t&&(t=!1),(0,i.default)("menu__link",{"menu__link--sublist":t},e)};if(!l)return o.default.createElement("li",{className:"menu__list-item"},o.default.createElement(_,(0,r.default)({className:y(c)},d)));var k=null!=(t=m.current)&&t.scrollHeight?(null==(a=m.current)?void 0:a.scrollHeight)+"px":void 0;return o.default.createElement("li",{className:(0,i.default)("menu__list-item",{"menu__list-item--collapsed":g})},o.default.createElement(_,(0,r.default)({role:"button",className:y(c,!0)},d,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(n=d.children)?n:d.label),o.default.createElement("ul",{className:"menu__list",ref:m,style:{height:g?void 0:k}},l.map((function(e,t){var a=e.className,n=(0,u.default)(e,p);return o.default.createElement("li",{className:"menu__list-item",key:t},o.default.createElement(_,(0,r.default)({activeClassName:"menu__link--active",className:y(a)},n,{onClick:d.onClick})))}))))}var k=function(e){var t=e.mobile,a=void 0!==t&&t,n=(0,u.default)(e,g),l=a?y:E;return o.default.createElement(l,n)};t.default=k},24520:function(e,t,a){"use strict";var n=a(95318).default;t.Z=function(e){var t,a,n=e.docId,f=e.activeSidebarClassName,m=e.label,v=e.docsPluginId,h=(0,r.default)(e,s),b=(0,i.useActiveDocContext)(v),p=b.activeVersion,g=b.activeDoc,_=(0,d.useDocsPreferredVersion)(v).preferredVersion,E=(0,i.useLatestVersion)(v),y=null!=(t=null!=p?p:_)?t:E,k=y.docs.find((function(e){return e.id===n}));if(!k){var C=y.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+n+" in version "+y.name+".\nAvailable docIds=\n- "+C)}return u.default.createElement(o.default,(0,l.default)({exact:!0},h,{className:(0,c.default)(h.className,(a={},a[f]=g&&g.sidebar===k.sidebar,a)),label:null!=m?m:k.id,to:k.path}))};var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=n(a(36971)),i=a(17849),c=n(a(86010)),d=a(83551),s=["docId","activeSidebarClassName","label","docsPluginId"]},37999:function(e,t,a){"use strict";var n=a(95318).default;t.Z=function(e){var t,a,n=e.mobile,f=e.docsPluginId,m=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=(0,r.default)(e,d),p=(0,i.useActiveDocContext)(f),g=(0,i.useVersions)(f),_=(0,i.useLatestVersion)(f),E=(0,c.useDocsPreferredVersion)(f),y=E.preferredVersion,k=E.savePreferredVersionName;var C=null!=(t=null!=(a=p.activeVersion)?a:y)?t:_,w=n?"Versions":C.label,N=n?void 0:s(C).path;return u.default.createElement(o.default,(0,l.default)({},b,{mobile:n,label:w,to:N,items:function(){var e=g.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))};var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=n(a(36971)),i=a(17849),c=a(83551),d=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}},66028:function(e,t,a){"use strict";var n=a(95318).default;t.Z=function(e){var t,a=e.label,n=e.to,s=e.docsPluginId,f=(0,r.default)(e,d),m=(0,i.useActiveVersion)(s),v=(0,c.useDocsPreferredVersion)(s).preferredVersion,h=(0,i.useLatestVersion)(s),b=null!=(t=null!=m?m:v)?t:h,p=null!=a?a:b.label,g=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return u.default.createElement(o.default,(0,l.default)({},f,{label:p,to:g}))};var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=n(a(36971)),i=a(17849),c=a(83551),d=["label","to","docsPluginId"]},29153:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,f=(0,r.default)(e,s),m=(0,c.default)().i18n,v=m.currentLocale,h=m.locales,b=m.localeConfigs,p=(0,d.useAlternatePageUtils)();function g(e){return b[e].label}var _=h.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),E=[].concat(a,_,n),y=t?"Languages":g(v);return u.default.createElement(o.default,(0,l.default)({},f,{href:"#",mobile:t,label:u.default.createElement("span",null,u.default.createElement(i.default,{style:{verticalAlign:"text-bottom",marginRight:5}}),u.default.createElement("span",null,y)),items:E}))};var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=n(a(36971)),i=n(a(71694)),c=n(a(39962)),d=a(83551),s=["mobile","dropdownItemsBefore","dropdownItemsAfter"]},5347:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e.mobile)return null;return l.default.createElement("div",{className:u.default.searchWrapper},l.default.createElement(r.default,null))};var l=n(a(67294)),r=n(a(99730)),u=n(a(60685))},85046:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.type,a=(0,l.default)(e,c),n=function(e){void 0===e&&(e="default");var t=d[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.default.createElement(n,a)};var l=n(a(19756)),r=n(a(67294)),u=n(a(36971)),o=n(a(29153)),i=n(a(5347)),c=["type"],d={default:function(){return u.default},localeDropdown:function(){return o.default},search:function(){return i.default},docsVersion:function(){return a(66028).Z},docsVersionDropdown:function(){return a(37999).Z},doc:function(){return a(24520).Z}}},99730:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=n(a(23855))},61629:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.locale,a=e.version,n=e.tag;return l.default.createElement(r.default,null,t&&l.default.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&l.default.createElement("meta",{name:"docusaurus_version",content:a}),n&&l.default.createElement("meta",{name:"docusaurus_tag",content:n}))};var l=n(a(67294)),r=n(a(31514))},78093:function(e,t,a){"use strict";var n=a(95318).default,l=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),u=n(a(90792)),o=a(45094),i=n(a(77287));function c(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){var e=(0,r.useRef)(null),t=(0,o.useLocation)();return(0,r.useEffect)((function(){!t.hash&&e.current&&c(e.current)}),[t.pathname]),r.default.createElement("div",{ref:e},r.default.createElement("a",{href:"#main",className:i.default.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&c(t)}},r.default.createElement(u.default,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};t.default=d},25406:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)).default.createContext(void 0);t.default=l},80307:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(21878)),u=n(a(25406));var o=function(e){var t=(0,r.default)(),a=t.isDarkTheme,n=t.setLightTheme,o=t.setDarkTheme;return l.default.createElement(u.default.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:o}},e.children)};t.default=o},82432:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(22122)),r=n(a(19756)),u=n(a(67294)),o=n(a(86010)),i=n(a(39962)),c=n(a(48002)),d=n(a(8705)),s=["sources","className","alt"],f=function(e){var t=(0,i.default)().isClient,a=(0,c.default)().isDarkTheme,n=e.sources,f=e.className,m=e.alt,v=void 0===m?"":m,h=(0,r.default)(e,s),b=t?a?["dark"]:["light"]:["light","dark"];return u.default.createElement(u.default.Fragment,null,b.map((function(e){return u.default.createElement("img",(0,l.default)({key:e,src:n[e],alt:v,className:(0,o.default)(d.default.themedImage,d.default["themedImage--"+e],f)},h))})))};t.default=f},35171:function(e,t,a){"use strict";var n=a(20862).default,l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,o.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,l=t.lightIcon,c=t.lightIconStyle,d=(0,i.default)().isClient;return u.default.createElement(m,(0,r.default)({disabled:!d,icons:{checked:u.default.createElement(s,{icon:a,style:n}),unchecked:u.default.createElement(f,{icon:l,style:c})}},e))};var r=l(a(22122)),u=n(a(67294)),o=a(83551),i=l(a(39962)),c=l(a(86010)),d=l(a(60994)),s=function(e){var t=e.icon,a=e.style;return u.default.createElement("span",{className:(0,c.default)(d.default.toggle,d.default.dark),style:a},t)},f=function(e){var t=e.icon,a=e.style;return u.default.createElement("span",{className:(0,c.default)(d.default.toggle,d.default.light),style:a},t)},m=(0,u.memo)((function(e){var t=e.className,a=e.icons,n=e.checked,l=e.disabled,r=e.onChange,o=(0,u.useState)(n),i=o[0],d=o[1],s=(0,u.useState)(!1),f=s[0],m=s[1],v=(0,u.useRef)(null);return u.default.createElement("div",{className:(0,c.default)("react-toggle",t,{"react-toggle--checked":i,"react-toggle--focus":f,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void d(null==t?void 0:t.checked)}},u.default.createElement("div",{className:"react-toggle-track"},u.default.createElement("div",{className:"react-toggle-track-check"},a.checked),u.default.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),u.default.createElement("div",{className:"react-toggle-thumb"}),u.default.createElement("input",{ref:v,checked:i,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:r,onFocus:function(){return m(!0)},onBlur:function(){return m(!1)}}))}))},22713:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,a(67294).createContext)(void 0);t.default=n},50712:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(83527)),u=n(a(72011)),o=n(a(22713));var i=function(e){var t=(0,r.default)(),a=t.tabGroupChoices,n=t.setTabGroupChoices,i=(0,u.default)(),c=i.isAnnouncementBarClosed,d=i.closeAnnouncementBar;return l.default.createElement(o.default.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:c,closeAnnouncementBar:d}},e.children)};t.default=i},72011:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(67294),l=a(83551),r=(0,l.createStorageSlot)("docusaurus.announcement.dismiss"),u=(0,l.createStorageSlot)("docusaurus.announcement.id"),o=function(){var e=(0,l.useThemeConfig)().announcementBar,t=(0,n.useState)(!0),a=t[0],o=t[1],i=(0,n.useCallback)((function(){r.set("true"),o(!0)}),[]);return(0,n.useEffect)((function(){if(e){var t=e.id,a=u.get();"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;u.set(t),n&&r.set("false"),(n||"false"===r.get())&&o(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:i}};t.default=o},57002:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(67294),r=a(45094),u=n(a(5717)),o=function(e){var t=(0,r.useLocation)(),a=(0,l.useState)(e),n=a[0],o=a[1],i=(0,l.useRef)(!1),c=(0,l.useState)(0),d=c[0],s=c[1],f=(0,l.useCallback)((function(e){null!==e&&s(e.getBoundingClientRect().height)}),[]);return(0,u.default)((function(t,a){var n=t.scrollY,l=a.scrollY;if(e)if(n<d)o(!0);else{if(i.current)return i.current=!1,void o(!1);l&&0===n&&o(!0);var r=document.documentElement.scrollHeight-d,u=window.innerHeight;l&&n>=l?o(!1):n+u<r&&o(!0)}}),[d,i]),(0,l.useEffect)((function(){e&&o(!0)}),[t.pathname]),(0,l.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:n}};t.default=o},73637:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(67294);a(7989);var l=function(){(0,n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};t.default=l},69729:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(67294);var l=function(e){void 0===e&&(e=!0),(0,n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])};t.default=l},5717:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(67294),r=n(a(36136)),u=function(){return{scrollX:r.default.canUseDOM?window.pageXOffset:0,scrollY:r.default.canUseDOM?window.pageYOffset:0}},o=function(e,t){void 0===t&&(t=[]);var a=(0,l.useRef)(u()),n=function(){var t=u();e&&e(t,a.current),a.current=t};(0,l.useEffect)((function(){var e={passive:!0};return n(),window.addEventListener("scroll",n,e),function(){return window.removeEventListener("scroll",n,e)}}),t)};t.default=o},83527:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(38173)),r=a(67294),u=a(83551),o="docusaurus.tab.",i=function(){var e=(0,r.useState)({}),t=e[0],a=e[1],n=(0,r.useCallback)((function(e,t){(0,u.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},n=(0,l.default)((0,u.listStorageKeys)());!(e=n()).done;){var r=e.value;if(r.startsWith(o))t[r.substring(o.length)]=(0,u.createStorageSlot)(r).get()}a(t)}catch(i){console.error(i)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),n(e,t)}}};t.default=i},21878:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(67294),r=n(a(36136)),u=a(83551),o=(0,u.createStorageSlot)("theme"),i="light",c="dark",d=function(e){return e===c?c:i},s=function(e){(0,u.createStorageSlot)("theme").set(d(e))},f=function(){var e=(0,u.useThemeConfig)().colorMode,t=e.defaultMode,a=e.disableSwitch,n=e.respectPrefersColorScheme,f=(0,l.useState)(function(e){return r.default.canUseDOM?d(document.documentElement.getAttribute("data-theme")):d(e)}(t)),m=f[0],v=f[1],h=(0,l.useCallback)((function(){v(i),s(i)}),[]),b=(0,l.useCallback)((function(){v(c),s(c)}),[]);return(0,l.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(m))}),[m]),(0,l.useEffect)((function(){if(!a)try{var e=o.get();null!==e&&v(d(e))}catch(t){console.error(t)}}),[v]),(0,l.useEffect)((function(){a&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;v(t?c:i)}))}),[]),{isDarkTheme:m===c,setLightTheme:h,setDarkTheme:b}};t.default=f},48002:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(67294),r=n(a(25406));var u=function(){var e=(0,l.useContext)(r.default);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e};t.default=u},90050:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(67294),r=n(a(22713));var u=function(){var e=(0,l.useContext)(r.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=u},93301:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.windowSizes=void 0;var l=a(67294),r=n(a(36136)),u={desktop:"desktop",mobile:"mobile"};t.windowSizes=u;var o=function(){var e=r.default.canUseDOM;function t(){if(e)return window.innerWidth>996?u.desktop:u.mobile}var a=(0,l.useState)(t),n=a[0],o=a[1];return(0,l.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),n};t.default=o},46206:function(e,t,a){"use strict";a.r(t)},7989:function(e,t,a){"use strict";a.r(t)},58474:function(e,t,a){"use strict";a.r(t),t.default={announcementBar:"announcementBar_3WsW",announcementBarClose:"announcementBarClose_38nx",announcementBarContent:"announcementBarContent_3EUC",announcementBarCloseable:"announcementBarCloseable_3myR"}},48856:function(e,t,a){"use strict";a.r(t),t.default={footerLogoLink:"footerLogoLink_MyFc"}},93882:function(e,t,a){"use strict";a.r(t),t.default={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_GrZ2",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey"}},60685:function(e,t,a){"use strict";a.r(t),t.default={searchWrapper:"searchWrapper_3rmH"}},77287:function(e,t,a){"use strict";a.r(t),t.default={skipToContent:"skipToContent_1oUP"}},8705:function(e,t,a){"use strict";a.r(t),t.default={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"}},60994:function(e,t,a){"use strict";a.r(t),t.default={toggle:"toggle_71bT"}}}]);