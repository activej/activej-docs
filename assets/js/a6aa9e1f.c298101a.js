"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3089],{63074:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(80102),r=a(67294),l=a(86010),i=a(12630),s=a(83699),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(97325);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,n.Z)(e,v),o=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},47703:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),r=a(39962),l=a(63074),i=a(15191),s=a(83699),c=a(97325);var o=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(s.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(83309);var d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,c=(0,r.Z)().siteConfig.title,d=t.blogDescription,u=t.blogTitle,g="/"===t.permalink?c:u;return n.createElement(l.Z,{title:g,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o,{metadata:t}))}},15191:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(86010),l=a(3905),i=a(97325),s=a(83699),c=a(79524),o=a(83309),m=a(27136),d=a(60034),u="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",h=a(34081),v="image_1yU8";var b=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_1R69";function f(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var k=function(e){var t,a,v,b,E=(v=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),k=(0,c.C)().withBaseUrl,N=e.children,_=e.frontMatter,Z=e.assets,y=e.metadata,T=e.truncated,P=e.isBlogPostPage,B=void 0!==P&&P,j=y.date,x=y.formattedDate,w=y.permalink,C=y.tags,L=y.readingTime,A=y.title,I=y.editUrl,M=y.authors,R=null!=(t=Z.image)?t:_.image,U=!B&&T,S=C.length>0;return n.createElement("article",{className:B?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(b=B?"h1":"h2",n.createElement("header",null,n.createElement(b,{className:u,itemProp:"headline"},B?A:n.createElement(s.Z,{itemProp:"url",to:w},A)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:j,itemProp:"datePublished"},x),void 0!==L&&n.createElement(n.Fragment,null," \xb7 ",E(L))),n.createElement(f,{authors:M,assets:Z}))),R&&n.createElement("meta",{itemProp:"image",content:k(R,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(S||T)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=B,a))},S&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":U})},n.createElement(h.Z,{tags:C})),B&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:I})),U&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":S})},n.createElement(s.Z,{to:y.permalink,"aria-label":"Read more about "+A},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},60034:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(97325),l=a(83117),i=a(80102),s=a(86010),c="iconEdit_2_ui",o=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(83309);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},34081:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(67294),r=a(86010),l=a(97325),i=a(83699),s="tag_1Okp",c="tagRegular_3MiF",o="tagWithCount_1HU1";var m=function(e){var t,a=e.permalink,l=e.name,m=e.count;return n.createElement(i.Z,{href:a,className:(0,r.Z)(s,(t={},t[c]=!m,t[o]=m,t))},l,m&&n.createElement("span",null,m))},d="tags_2ga9",u="tag_11ep";function g(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(d,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(m,{name:t,permalink:a}))}))))}},98434:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(83117),r=a(67294),l=a(86010),i=a(23746),s=a(94358),c=a(87594),o=a.n(c),m=a(57596),d=a(97325),u="codeBlockContainer_2gih",g="codeBlockContent_3z4W",p="codeBlockTitle_1Kb7",h="codeBlock_6upA",v="codeBlockWithTitle_xy-i",b="copyButton_2e3i",E="codeBlockLines_xlV7",f=a(83309),k=/{([\d,-]+)}/,N=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function _(e){var t=e.children,a=e.className,c=e.metastring,_=e.title,Z=(0,f.LU)().prism,y=(0,r.useState)(!1),T=y[0],P=y[1],B=(0,r.useState)(!1),j=B[0],x=B[1];(0,r.useEffect)((function(){x(!0)}),[]);var w=(0,f.bc)(c)||_,C=(0,r.useRef)(null),L=[],A=(0,m.Z)(),I=Array.isArray(t)?t.join(""):t;if(c&&k.test(c)){var M=c.match(k)[1];L=o()(M).filter((function(e){return e>0}))}var R=a&&a.replace(/language-/,"");!R&&Z.defaultLanguage&&(R=Z.defaultLanguage);var U=I.replace(/\n$/,"");if(0===L.length&&void 0!==R){for(var S,D="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"]);case"jsx":case"tsx":return N(["js","jsBlock","jsx"]);case"html":return N(["js","jsBlock","html"]);case"python":case"py":return N(["python"]);default:return N()}}(R),z=I.replace(/\n$/,"").split("\n"),O=0;O<z.length;){var W=O+1,$=z[O].match(F);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=W+",";break;case"highlight-start":S=W;break;case"highlight-end":D+=S+"-"+(W-1)+","}z.splice(O,1)}else O+=1}L=o()(D),U=z.join("\n")}var q=function(){(0,s.Z)(U),P(!0),setTimeout((function(){return P(!1)}),2e3)};return r.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(j),theme:A,code:U,language:R}),(function(e){var t,a=e.className,i=e.style,s=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.createElement("div",{className:u},w&&r.createElement("div",{style:i,className:p},w),r.createElement("div",{className:(0,l.Z)(g,R)},r.createElement("pre",{tabIndex:0,className:(0,l.Z)(a,h,"thin-scrollbar",(t={},t[v]=w,t)),style:i},r.createElement("code",{className:E},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return L.includes(t+1)&&(a.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,n.Z)({key:t},a),e.map((function(e,t){return r.createElement("span",(0,n.Z)({key:t},o({token:e,key:t})))})))})))),r.createElement("button",{ref:C,type:"button","aria-label":(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(b,"clean-btn"),onClick:q},T?r.createElement(d.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(d.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}}}]);