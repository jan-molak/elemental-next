(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[2676],{98303:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=a(74848),r=a(28453),n=a(54152);const i={title:"Dynamic Pages",id:"23-dynamic-pages",slug:"/23-dynamic-pages",sidebar_label:"Dynamic Pages",description:"Let's say you want to test some functionality of a web application but it loads things dynamically. You might think about using a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout that you likely bump up to address test instabilities as well.",number:23,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-10-13T00:00:00.000Z"),tags:["dynamic pages","ajax","javascript","waiting","explicit waits"],category:["fundamentals"]},o="How to Test Dynamic Pages",l={id:"dynamic-pages/23-dynamic-pages",title:"Dynamic Pages",description:"Let's say you want to test some functionality of a web application but it loads things dynamically. You might think about using a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout that you likely bump up to address test instabilities as well.",source:"@site/tips/23-dynamic-pages/main.mdx",sourceDirName:"23-dynamic-pages",slug:"/23-dynamic-pages",permalink:"/tips/23-dynamic-pages",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/23-dynamic-pages/main.mdx",tags:[{label:"dynamic pages",permalink:"/tips/tags/dynamic-pages"},{label:"ajax",permalink:"/tips/tags/ajax"},{label:"javascript",permalink:"/tips/tags/javascript"},{label:"waiting",permalink:"/tips/tags/waiting"},{label:"explicit waits",permalink:"/tips/tags/explicit-waits"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1711128683,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{title:"Dynamic Pages",id:"23-dynamic-pages",slug:"/23-dynamic-pages",sidebar_label:"Dynamic Pages",description:"Let's say you want to test some functionality of a web application but it loads things dynamically. You might think about using a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout that you likely bump up to address test instabilities as well.",number:23,hide_table_of_contents:!0,level:2,publish_date:"2015-10-13T00:00:00.000Z",tags:["dynamic pages","ajax","javascript","waiting","explicit waits"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"Locator Strategy",permalink:"/tips/22-locator-strategy"},next:{title:"REST APIs",permalink:"/tips/24-rest-apis"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"how-to-test-dynamic-pages",children:"How to Test Dynamic Pages"}),"\n",(0,s.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,s.jsx)(t.p,{children:"This tip will go over how to implement explicit waits for testing dynamic web pages."}),"\n",(0,s.jsxs)(t.p,{children:["Let's say you want to test some functionality of a web application but it loads things dynamically. You might think\nabout using a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout\n(like an ",(0,s.jsx)(t.a,{href:"https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings#implicit-waits",children:"Implicit Wait"}),") that you likely bump up to address test instabilities as well."]}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.em,{children:"may"})," work in the short term, but your tests are now slower and leaving you (and your team) feeling like your\ntest automation is on shaky ground -- uncertain of when the next break/fix cycle will happen."]}),"\n",(0,s.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,s.jsx)(t.p,{children:"By using a flexible wait strategy you can easily meet the rigors of testing dynamic web applications."}),"\n",(0,s.jsxs)(t.p,{children:["Thankfully Selenium comes with one built in -- ",(0,s.jsx)(t.a,{href:"https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings#explicit-waits",children:"Explicit Waits"}),". With them you specify a timeout and an action.\nSelenium will repeatedly try that action until it can either complete it successfully (at which point it will move\nonto the next step of the test), or it will throw a timeout exception (causing your test to error)."]}),"\n",(0,s.jsx)(t.p,{children:"Let's continue with an example."}),"\n","\n","\n",(0,s.jsx)(n.A,{languages:[{label:"Ruby",value:"ruby"}]}),"\n",(0,s.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,s.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,s.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(59278).A+"#author-img",title:"a title",width:"280",height:"280"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},62771:(e,t,a)=>{"use strict";a.d(t,{_:()=>o,u:()=>l});var s=a(96540),r=a(89532),n=a(74848);const i=s.createContext(null);function o(e){let{children:t,content:a}=e;const r=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,n.jsx)(i.Provider,{value:r,children:t})}function l(){const e=(0,s.useContext)(i);if(null===e)throw new r.dV("DocProvider");return e}},54152:(e,t,a)=>{"use strict";a.d(t,{A:()=>S});var s=a(96540),r=a(34164),n=a(23104),i=a(56347),o=a(205),l=a(57485),d=a(31682),u=a(89466);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:r}}=e;return{value:t,label:a,attributes:s,default:r}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=m(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[d,c]=p({queryString:a,groupId:r}),[b,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,u.Dv)(a);return[r,(0,s.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),y=(()=>{const e=d??b;return h({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,n]),tabValues:n}}var x=a(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(74848);function f(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==s&&(d(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...n,className:(0,r.A)("tabs__item",y.tabItem,n?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function _(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=b(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,w.jsx)(f,{...e,...t}),(0,w.jsx)(_,{...e,...t})]})}function v(e){const t=(0,x.A)();return(0,w.jsx)(g,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:s}=e;return(0,w.jsx)("div",{role:"tabpanel",className:(0,r.A)(k.tabItem,s),hidden:a,children:t})}var T=a(62771);const S=function(e){let{languages:t}=e;const[r,n]=(0,s.useState)([]),i=(0,T.u)().frontMatter.id;return(0,s.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,s.lazy)((()=>a(36217)(`./${i}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,w.jsx)("div",{children:r.length>0&&(0,w.jsx)(v,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,w.jsx)(j,{value:e.label,label:e.label,children:(0,w.jsx)(s.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(e.component,{})})},t)))})})}},59278:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});const s=a.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},36217:(e,t,a)=>{var s={"./1-upload-a-file/_csharp.mdx":[1192,1869,1432,1192],"./1-upload-a-file/_java.mdx":[28169,1869,1432,8169],"./1-upload-a-file/_javascript.mdx":[98576,1869,1432,8576],"./1-upload-a-file/_python.mdx":[723,1869,1432,723],"./1-upload-a-file/_ruby.mdx":[51777,1869,1432,1777],"./1-upload-a-file/_selenide.mdx":[76066,1869,1432,6066],"./10-retry-test-actions/_ruby.mdx":[76678,6678],"./11-build-an-interactive-prompt/_ruby.mdx":[57644,7644],"./12-opt-out-of-ab-tests/_csharp.mdx":[4654,4654],"./12-opt-out-of-ab-tests/_java.mdx":[38411,8411],"./12-opt-out-of-ab-tests/_javascript.mdx":[59790,9790],"./12-opt-out-of-ab-tests/_python.mdx":[28797,8797],"./12-opt-out-of-ab-tests/_ruby.mdx":[77971,7971],"./13-how-to-access-basic-auth/_csharp.mdx":[93998,3998],"./13-how-to-access-basic-auth/_java.mdx":[15787,5787],"./13-how-to-access-basic-auth/_javascript.mdx":[81966,1966],"./13-how-to-access-basic-auth/_python.mdx":[48477,8477],"./13-how-to-access-basic-auth/_ruby.mdx":[4723,4723],"./14-interactive-prompts-revisited/_ruby.mdx":[45725,5725],"./15-download-secure-files/_ruby.mdx":[46154,6154],"./16-take-screenshot-on-failure/_csharp.mdx":[31573,1573],"./16-take-screenshot-on-failure/_java.mdx":[77184,7184],"./16-take-screenshot-on-failure/_javascript.mdx":[33853,3853],"./16-take-screenshot-on-failure/_python.mdx":[18530,8530],"./16-take-screenshot-on-failure/_ruby.mdx":[40328,328],"./17-retrieve-http-status-codes/_ruby.mdx":[64279,6660],"./19-data-driven-testing/_ruby.mdx":[25174,5174],"./2-download-a-file/_csharp.mdx":[28810,1869,1432,8810],"./2-download-a-file/_java.mdx":[10351,1869,1432,351],"./2-download-a-file/_javascript.mdx":[21082,1869,1432,1082],"./2-download-a-file/_python.mdx":[26849,1869,1432,6849],"./2-download-a-file/_ruby.mdx":[82759,1869,1432,2759],"./22-locator-strategy/_ruby.mdx":[85814,5814],"./23-dynamic-pages/_ruby.mdx":[91589,3970],"./24-rest-apis/_ruby.mdx":[20686,686],"./25-how-to-work-with-tables/_csharp.mdx":[96837,6837],"./25-how-to-work-with-tables/_java.mdx":[17872,7872],"./25-how-to-work-with-tables/_javascript.mdx":[5197,5197],"./25-how-to-work-with-tables/_python.mdx":[38834,8834],"./25-how-to-work-with-tables/_ruby.mdx":[66168,6168],"./26-cloud/_ruby.mdx":[68307,8307],"./27-parallel/_ruby.mdx":[4428,2047],"./29-chrome-driver/_csharp.mdx":[77539,7539],"./29-chrome-driver/_java.mdx":[85650,5650],"./29-chrome-driver/_python.mdx":[57452,7452],"./29-chrome-driver/_ruby.mdx":[99474,9474],"./3-work-with-frames/_csharp.mdx":[94265,1869,1432,4265],"./3-work-with-frames/_java.mdx":[73084,1869,1432,3084],"./3-work-with-frames/_javascript.mdx":[81633,1869,1432,1633],"./3-work-with-frames/_python.mdx":[74478,1869,1432,4478],"./3-work-with-frames/_ruby.mdx":[59348,1869,1432,9348],"./3-work-with-frames/_serenity-js.mdx":[31169,1869,1432,1169],"./30-mobile/_ruby.mdx":[45299,5299],"./32-css-vs-xpath/_ruby.mdx":[51822,1822],"./33-css-vs-xpath-2/_ruby.mdx":[75816,5816],"./34-css-vs-xpath-3/_ruby.mdx":[26376,6376],"./38-headless/_ruby.mdx":[64492,4492],"./39-drag-and-drop/_ruby.mdx":[16096,3715],"./4-work-with-multiple-windows/_csharp.mdx":[14338,1869,1432,4338],"./4-work-with-multiple-windows/_java.mdx":[92839,1869,1432,2839],"./4-work-with-multiple-windows/_javascript.mdx":[53922,1869,1432,3922],"./4-work-with-multiple-windows/_python.mdx":[43753,1869,1432,3753],"./4-work-with-multiple-windows/_ruby.mdx":[45823,1869,1432,5823],"./40-disabled-element/_csharp.mdx":[1336,1336],"./40-disabled-element/_java.mdx":[33561,3561],"./40-disabled-element/_javascript.mdx":[63008,3008],"./40-disabled-element/_python.mdx":[45475,5475],"./40-disabled-element/_ruby.mdx":[57297,7297],"./41-one-test-multiple-browsers/_ruby.mdx":[26997,6997],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[65922,5922],"./43-forgot-password/_ruby.mdx":[84394,4394],"./44-exception-handling/_ruby.mdx":[82557,2557],"./45-how-to-test-checkboxes/_csharp.mdx":[75329,5329],"./45-how-to-test-checkboxes/_java.mdx":[89380,9380],"./45-how-to-test-checkboxes/_javascript.mdx":[58713,8713],"./45-how-to-test-checkboxes/_python.mdx":[87590,7590],"./45-how-to-test-checkboxes/_ruby.mdx":[11932,1932],"./47-waiting/_ruby.mdx":[44226,4226],"./48-load-testing/_ruby.mdx":[46841,6841],"./49-performance-testing/_ruby.mdx":[1096,1096],"./5-select-from-a-dropdown/_csharp.mdx":[62999,1869,1432,2999],"./5-select-from-a-dropdown/_java.mdx":[24494,1869,1432,4494],"./5-select-from-a-dropdown/_javascript.mdx":[7887,1869,1432,7887],"./5-select-from-a-dropdown/_python.mdx":[51032,1869,1432,1032],"./5-select-from-a-dropdown/_ruby.mdx":[77198,1869,1432,7198],"./50-how-to-work-with-hovers/_csharp.mdx":[63783,3783],"./50-how-to-work-with-hovers/_java.mdx":[97694,7694],"./50-how-to-work-with-hovers/_javascript.mdx":[21663,1663],"./50-how-to-work-with-hovers/_python.mdx":[18920,8920],"./50-how-to-work-with-hovers/_ruby.mdx":[27902,5521],"./51-javascript-alerts/_csharp.mdx":[76032,6032],"./51-javascript-alerts/_java.mdx":[1,1],"./51-javascript-alerts/_javascript.mdx":[58648,8648],"./51-javascript-alerts/_python.mdx":[65339,5339],"./51-javascript-alerts/_ruby.mdx":[54265,6646],"./52-grid/_java.mdx":[80557,557],"./52-grid/_javascript.mdx":[45228,5228],"./52-grid/_python.mdx":[87015,7015],"./52-grid/_ruby.mdx":[36197,6197],"./53-growl/_csharp.mdx":[85634,5634],"./53-growl/_java.mdx":[87719,7719],"./53-growl/_javascript.mdx":[11714,1714],"./53-growl/_python.mdx":[39913,9913],"./53-growl/_ruby.mdx":[14527,4527],"./54-logging/_ruby.mdx":[39496,9496],"./55-wrapper/_ruby.mdx":[80067,67],"./56-retry-failed-tests/_ruby.mdx":[79661,9661],"./57-junit-xml/_ruby.mdx":[26596,6596],"./58-tagging/_ruby.mdx":[79922,9922],"./6-open-new-window/_csharp.mdx":[45673,1869,1432,5673],"./6-open-new-window/_java.mdx":[97900,1869,1432,7900],"./6-open-new-window/_javascript.mdx":[42993,1869,1432,2993],"./6-open-new-window/_python.mdx":[3934,1869,1432,3934],"./6-open-new-window/_ruby.mdx":[67396,1869,1432,7396],"./60-list-tags/_ruby.mdx":[93024,3024],"./61-how-to-press-keyboard-keys/_csharp.mdx":[66059,6059],"./61-how-to-press-keyboard-keys/_java.mdx":[25530,5530],"./61-how-to-press-keyboard-keys/_javascript.mdx":[8915,8915],"./61-how-to-press-keyboard-keys/_python.mdx":[50116,116],"./61-how-to-press-keyboard-keys/_ruby.mdx":[41306,1306],"./63-right-click/_csharp.mdx":[20441,441],"./63-right-click/_java.mdx":[57404,7404],"./63-right-click/_javascript.mdx":[17921,7921],"./63-right-click/_python.mdx":[2958,2958],"./63-right-click/_ruby.mdx":[54996,4996],"./64-limit-bandwidth/_ruby.mdx":[14247,4247],"./65-highlight-elements/_csharp.mdx":[94636,4636],"./65-highlight-elements/_java.mdx":[73877,3877],"./65-highlight-elements/_javascript.mdx":[86724,6724],"./65-highlight-elements/_python.mdx":[94879,4879],"./65-highlight-elements/_ruby.mdx":[96877,6877],"./66-blacklist/_ruby.mdx":[26565,6565],"./67-broken-images/_ruby.mdx":[9923,9923],"./68-load-testing-revisited/_ruby.mdx":[28323,8323],"./69-safari/_java.mdx":[33591,3591],"./69-safari/_ruby.mdx":[11823,1823],"./7-use-a-page-object/_ruby.mdx":[17244,7244],"./72-headless-chrome/_ruby.mdx":[94531,4531],"./8-download-a-file-revisited/_csharp.mdx":[45932,5932],"./8-download-a-file-revisited/_java.mdx":[73525,3525],"./8-download-a-file-revisited/_python.mdx":[52127,2127],"./8-download-a-file-revisited/_ruby.mdx":[66381,6381],"./9-use-a-base-page-object/_ruby.mdx":[80582,582]};function r(e){if(!a.o(s,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(r)))}r.keys=()=>Object.keys(s),r.id=36217,e.exports=r},28453:(e,t,a)=>{"use strict";a.d(t,{R:()=>i,x:()=>o});var s=a(96540);const r={},n=s.createContext(r);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);