(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[9564],{21395:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=a(85893),o=a(11151),i=a(52063),n=a(86822);const s={title:"How to Work with Multiple Windows",id:"4-work-with-multiple-windows",slug:"/4-work-with-multiple-windows",sidebar_label:"How to Work with Multiple Windows",description:"This tip will explain how to work with multiple windows in Selenium and switch between them.",number:4,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-08-21T00:00:00.000Z"),image:"img/cards/4-work-with-multiple-windows.png",tags:["windows","multiple windows","new window"],category:["fundamentals"]},l="How to Work with Multiple Windows",d={id:"work-with-multiple-windows/4-work-with-multiple-windows",title:"How to Work with Multiple Windows",description:"This tip will explain how to work with multiple windows in Selenium and switch between them.",source:"@site/tips/4-work-with-multiple-windows/main.mdx",sourceDirName:"4-work-with-multiple-windows",slug:"/4-work-with-multiple-windows",permalink:"/tips/4-work-with-multiple-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/4-work-with-multiple-windows/main.mdx",tags:[{label:"windows",permalink:"/tips/tags/windows"},{label:"multiple windows",permalink:"/tips/tags/multiple-windows"},{label:"new window",permalink:"/tips/tags/new-window"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1711022210,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"How to Work with Multiple Windows",id:"4-work-with-multiple-windows",slug:"/4-work-with-multiple-windows",sidebar_label:"How to Work with Multiple Windows",description:"This tip will explain how to work with multiple windows in Selenium and switch between them.",number:4,hide_table_of_contents:!0,level:2,publish_date:"2015-08-21T00:00:00.000Z",image:"img/cards/4-work-with-multiple-windows.png",tags:["windows","multiple windows","new window"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"How to Work with Frames",permalink:"/tips/3-work-with-frames"},next:{title:"How to Select from a Dropdown List",permalink:"/tips/5-select-from-a-dropdown"}},u={},c=[{value:"The Problem",id:"the-problem",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"Authors",id:"authors",level:2}];function h(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-work-with-multiple-windows",children:"How to Work with Multiple Windows"}),"\n",(0,r.jsx)(t.h2,{id:"the-problem",children:"The Problem"}),"\n",(0,r.jsx)(t.p,{children:"This tip will explain how to work with multiple windows in Selenium and switch between them."}),"\n",(0,r.jsx)(t.p,{children:"Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order\nto work with both the new and originating windows you'll need to switch between them."}),"\n",(0,r.jsx)(t.p,{children:"On the face of it, this is a pretty straightforward concept. But there may be a small challenge to watch out for\nthat you may find in some browsers and not others."}),"\n",(0,r.jsx)(t.p,{children:"Let's step through a couple of examples to demonstrate."}),"\n","\n",(0,r.jsx)(i.Z,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"}]}),"\n",(0,r.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Open the browser"}),"\n",(0,r.jsx)(t.li,{children:"Visit the page"}),"\n",(0,r.jsx)(t.li,{children:"Click to open a new window"}),"\n",(0,r.jsx)(t.li,{children:"Switch between the windows"}),"\n",(0,r.jsx)(t.li,{children:"Check the page title to make sure the correct window is in focus"}),"\n",(0,r.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"outro",children:"Outro"}),"\n",(0,r.jsx)(t.p,{children:"We hope this was a helpful guide on how to work with and switch between multiple windows."}),"\n",(0,r.jsx)(t.p,{children:"Happy Testing!"}),"\n",(0,r.jsx)(t.h2,{id:"special-thanks",children:"Special Thanks"}),"\n","\n","\n",(0,r.jsx)(n.Z,{name:"Jim Evans",imgSrc:"https://pbs.twimg.com/profile_images/1187184424/Jim_Evans_casual_small_400x400.jpg",description:"Provided the info for this tip.",url:"https://twitter.com/jimevansmusic"}),"\n",(0,r.jsx)(n.Z,{name:"Roman Isko",imgSrc:"https://github.com/sturman.png",description:"Contributed the initial Java code for this tip.",url:"https://github.com/sturman"}),"\n",(0,r.jsx)(n.Z,{name:"Mike Millgate",imgSrc:"https://github.com/trabulmonkee.png",description:"Contributed the Python code for this tip.",url:"https://github.com/trabulmonkee"}),"\n",(0,r.jsx)(n.Z,{name:"Isaul Vargas",imgSrc:"https://github.com/isaulv.png",description:"Python code review",url:"https://github.com/isaulv"}),"\n",(0,r.jsx)(n.Z,{name:"Peter Bittner",imgSrc:"https://github.com/bittner.png",description:"Python code review",url:"https://github.com/bittner"}),"\n",(0,r.jsx)(n.Z,{name:"Jonathan Taylor",imgSrc:"https://github.com/jtay2380.png",description:"Contributed the initial C# code for this tip.",url:"https://github.com/jtay2380"}),"\n",(0,r.jsx)(t.h2,{id:"authors",children:"Authors"}),"\n",(0,r.jsx)(n.Z,{name:"Dave Piacente",imgSrc:"https://github.com/tourdedave.png",description:"Original creator of Elemental Selenium",url:"https://github.com/tourdedave",author:!0}),"\n",(0,r.jsx)(n.Z,{name:"Diego Molina",imgSrc:"https://github.com/diemol.png",description:"Current maintainer of Elemental Selenium",url:"https://github.com/diemol",author:!0})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},65130:(e,t,a)=>{"use strict";a.d(t,{b:()=>s,k:()=>l});var r=a(67294),o=a(902),i=a(85893);const n=r.createContext(null);function s(e){let{children:t,content:a}=e;const o=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,i.jsx)(n.Provider,{value:o,children:t})}function l(){const e=(0,r.useContext)(n);if(null===e)throw new o.i6("DocProvider");return e}},86822:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});a(67294);var r=a(85893);const o=e=>{let{imgSrc:t,name:a,description:o,url:i,author:n=!1}=e;const s=n?"avatar__photo avatar__photo--lg":"avatar__photo";return(0,r.jsxs)("div",{className:"avatar margin-bottom--sm",children:[(0,r.jsx)("img",{className:s,src:t,alt:a}),(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)("a",{href:i,target:"_blank",children:a})}),(0,r.jsx)("small",{className:"avatar__subtitle",children:o})]})]})}},52063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>T});var r=a(67294),o=a(90512),i=a(12466),n=a(16550),s=a(20469),l=a(91980),d=a(67392),u=a(50012);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const o=(0,n.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,i=h(e),[n,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,c]=p({queryString:a,groupId:o}),[w,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,u.Nk)(a);return[o,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:o}),x=(()=>{const e=d??w;return m({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:n,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var b=a(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=a(85893);function v(e){let{className:t,block:a,selectedValue:r,selectValue:n,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),o=s[a].value;o!==r&&(d(t),n(o))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...i,className:(0,o.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function g(e){const t=w(e);return(0,_.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,_.jsx)(v,{...e,...t}),(0,_.jsx)(f,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,_.jsx)(g,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:r}=e;return(0,_.jsx)("div",{role:"tabpanel",className:(0,o.Z)(k.tabItem,r),hidden:a,children:t})}var S=a(65130);const T=function(e){let{languages:t}=e;const[o,i]=(0,r.useState)([]),n=(0,S.k)().frontMatter.id;return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,r.lazy)((()=>a(32515)(`./${n}/_${e.value}.mdx`)));return{label:e.label,component:t}})));i(e)})()}),[t]),(0,_.jsx)("div",{children:o.length>0&&(0,_.jsx)(y,{groupId:"elemental-selenium-tabs",children:o.map(((e,t)=>(0,_.jsx)(j,{value:e.label,label:e.label,children:(0,_.jsx)(r.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(e.component,{})})},t)))})})}},32515:(e,t,a)=>{var r={"./1-upload-a-file/_csharp.mdx":[81336,532,9286,1336],"./1-upload-a-file/_java.mdx":[51267,532,9286,1267],"./1-upload-a-file/_javascript.mdx":[83910,532,9286,3910],"./1-upload-a-file/_python.mdx":[87785,532,9286,7785],"./1-upload-a-file/_ruby.mdx":[46948,532,9286,6948],"./10-retry-test-actions/_ruby.mdx":[47238,7238],"./11-build-an-interactive-prompt/_ruby.mdx":[86332,6332],"./12-opt-out-of-ab-tests/_csharp.mdx":[51909,1909],"./12-opt-out-of-ab-tests/_java.mdx":[303,303],"./12-opt-out-of-ab-tests/_javascript.mdx":[72545,2545],"./12-opt-out-of-ab-tests/_python.mdx":[35926,5926],"./12-opt-out-of-ab-tests/_ruby.mdx":[59355,7054],"./13-how-to-access-basic-auth/_csharp.mdx":[56189,6189],"./13-how-to-access-basic-auth/_java.mdx":[78885,8885],"./13-how-to-access-basic-auth/_javascript.mdx":[98046,8046],"./13-how-to-access-basic-auth/_python.mdx":[82879,2879],"./13-how-to-access-basic-auth/_ruby.mdx":[57696,7696],"./14-interactive-prompts-revisited/_ruby.mdx":[26490,6490],"./15-download-secure-files/_ruby.mdx":[20181,181],"./16-take-screenshot-on-failure/_csharp.mdx":[41612,1612],"./16-take-screenshot-on-failure/_java.mdx":[6660,6660],"./16-take-screenshot-on-failure/_javascript.mdx":[59783,9783],"./16-take-screenshot-on-failure/_python.mdx":[14271,4271],"./16-take-screenshot-on-failure/_ruby.mdx":[99283,9283],"./17-retrieve-http-status-codes/_ruby.mdx":[74501,4501],"./19-data-driven-testing/_ruby.mdx":[5870,5870],"./2-download-a-file/_csharp.mdx":[62046,532,9286,2046],"./2-download-a-file/_java.mdx":[5789,532,9286,5789],"./2-download-a-file/_javascript.mdx":[72856,532,9286,2856],"./2-download-a-file/_python.mdx":[68401,532,9286,8401],"./2-download-a-file/_ruby.mdx":[97085,532,9286,7085],"./22-locator-strategy/_ruby.mdx":[88555,8555],"./23-dynamic-pages/_ruby.mdx":[42068,2068],"./24-rest-apis/_ruby.mdx":[16864,6864],"./25-how-to-work-with-tables/_csharp.mdx":[24335,4335],"./25-how-to-work-with-tables/_java.mdx":[60821,821],"./25-how-to-work-with-tables/_javascript.mdx":[28917,8917],"./25-how-to-work-with-tables/_python.mdx":[16062,6062],"./25-how-to-work-with-tables/_ruby.mdx":[19554,9554],"./26-cloud/_ruby.mdx":[73304,3304],"./27-parallel/_ruby.mdx":[28918,1685],"./29-chrome-driver/_csharp.mdx":[16716,6716],"./29-chrome-driver/_java.mdx":[60382,382],"./29-chrome-driver/_python.mdx":[32248,2248],"./29-chrome-driver/_ruby.mdx":[4860,4860],"./3-work-with-frames/_csharp.mdx":[62113,532,9286,2113],"./3-work-with-frames/_java.mdx":[29966,532,9286,9966],"./3-work-with-frames/_javascript.mdx":[24022,532,9286,4022],"./3-work-with-frames/_python.mdx":[80940,532,9286,940],"./3-work-with-frames/_ruby.mdx":[51205,532,9286,1205],"./30-mobile/_ruby.mdx":[48808,8808],"./32-css-vs-xpath/_ruby.mdx":[39760,9760],"./33-css-vs-xpath-2/_ruby.mdx":[12061,2061],"./34-css-vs-xpath-3/_ruby.mdx":[44200,4200],"./38-headless/_ruby.mdx":[81010,1010],"./39-drag-and-drop/_ruby.mdx":[36393,6393],"./4-work-with-multiple-windows/_csharp.mdx":[94990,532,9286,4990],"./4-work-with-multiple-windows/_java.mdx":[48910,532,9286,8910],"./4-work-with-multiple-windows/_javascript.mdx":[58167,532,9286,8167],"./4-work-with-multiple-windows/_python.mdx":[74493,532,9286,6342],"./4-work-with-multiple-windows/_ruby.mdx":[50610,532,9286,610],"./40-disabled-element/_csharp.mdx":[44881,4881],"./40-disabled-element/_java.mdx":[2893,2893],"./40-disabled-element/_javascript.mdx":[41687,1687],"./40-disabled-element/_python.mdx":[93311,3311],"./40-disabled-element/_ruby.mdx":[7352,7352],"./41-one-test-multiple-browsers/_ruby.mdx":[96651,6651],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[66449,6449],"./43-forgot-password/_ruby.mdx":[60579,579],"./44-exception-handling/_ruby.mdx":[64181,4181],"./45-how-to-test-checkboxes/_csharp.mdx":[17873,7873],"./45-how-to-test-checkboxes/_java.mdx":[53059,3059],"./45-how-to-test-checkboxes/_javascript.mdx":[2503,2503],"./45-how-to-test-checkboxes/_python.mdx":[67012,7012],"./45-how-to-test-checkboxes/_ruby.mdx":[21883,1883],"./47-waiting/_ruby.mdx":[19762,9762],"./48-load-testing/_ruby.mdx":[43553,3553],"./49-performance-testing/_ruby.mdx":[37023,7023],"./5-select-from-a-dropdown/_csharp.mdx":[12271,532,9286,2271],"./5-select-from-a-dropdown/_java.mdx":[69566,532,9286,9566],"./5-select-from-a-dropdown/_javascript.mdx":[70700,532,9286,700],"./5-select-from-a-dropdown/_python.mdx":[37112,532,9286,7112],"./5-select-from-a-dropdown/_ruby.mdx":[27820,532,9286,7820],"./50-how-to-work-with-hovers/_csharp.mdx":[73102,3102],"./50-how-to-work-with-hovers/_java.mdx":[20866,866],"./50-how-to-work-with-hovers/_javascript.mdx":[31253,1253],"./50-how-to-work-with-hovers/_python.mdx":[27177,7177],"./50-how-to-work-with-hovers/_ruby.mdx":[56559,6559],"./51-javascript-alerts/_csharp.mdx":[42300,2300],"./51-javascript-alerts/_java.mdx":[77153,7153],"./51-javascript-alerts/_javascript.mdx":[99050,9050],"./51-javascript-alerts/_python.mdx":[90934,934],"./51-javascript-alerts/_ruby.mdx":[1073,1073],"./52-grid/_java.mdx":[76471,6471],"./52-grid/_javascript.mdx":[64761,4761],"./52-grid/_python.mdx":[55454,5454],"./52-grid/_ruby.mdx":[59811,9811],"./53-growl/_csharp.mdx":[85762,5762],"./53-growl/_java.mdx":[66789,6789],"./53-growl/_javascript.mdx":[31447,1447],"./53-growl/_python.mdx":[71240,1240],"./53-growl/_ruby.mdx":[45299,5299],"./54-logging/_ruby.mdx":[24223,4223],"./55-wrapper/_ruby.mdx":[12748,7266],"./56-retry-failed-tests/_ruby.mdx":[56707,6707],"./57-junit-xml/_ruby.mdx":[19318,9318],"./58-tagging/_ruby.mdx":[75043,5043],"./60-list-tags/_ruby.mdx":[62354,2354],"./61-how-to-press-keyboard-keys/_csharp.mdx":[49625,9625],"./61-how-to-press-keyboard-keys/_java.mdx":[72079,2079],"./61-how-to-press-keyboard-keys/_javascript.mdx":[91248,1248],"./61-how-to-press-keyboard-keys/_python.mdx":[32349,2349],"./61-how-to-press-keyboard-keys/_ruby.mdx":[10949,949],"./63-right-click/_csharp.mdx":[99510,9510],"./63-right-click/_java.mdx":[44993,4993],"./63-right-click/_javascript.mdx":[69683,9683],"./63-right-click/_python.mdx":[42066,2066],"./63-right-click/_ruby.mdx":[17828,7828],"./64-limit-bandwidth/_ruby.mdx":[98399,8399],"./65-highlight-elements/_csharp.mdx":[88076,8076],"./65-highlight-elements/_java.mdx":[66872,6872],"./65-highlight-elements/_javascript.mdx":[91228,1228],"./65-highlight-elements/_python.mdx":[46034,6034],"./65-highlight-elements/_ruby.mdx":[99272,518],"./66-blacklist/_ruby.mdx":[78685,8685],"./67-broken-images/_ruby.mdx":[23671,3671],"./68-load-testing-revisited/_ruby.mdx":[21588,1588],"./69-safari/_java.mdx":[2263,2263],"./69-safari/_ruby.mdx":[22163,2163],"./7-use-a-page-object/_ruby.mdx":[30586,586],"./72-headless-chrome/_ruby.mdx":[94955,4955],"./73-open-new-window/_java.mdx":[62882,2882],"./73-open-new-window/_ruby.mdx":[20066,66],"./8-download-a-file-revisited/_csharp.mdx":[65065,5065],"./8-download-a-file-revisited/_java.mdx":[12062,2062],"./8-download-a-file-revisited/_python.mdx":[11190,1190],"./8-download-a-file-revisited/_ruby.mdx":[57369,7369],"./9-use-a-base-page-object/_ruby.mdx":[33955,3955]};function o(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(o)))}o.keys=()=>Object.keys(r),o.id=32515,e.exports=o},11151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s,a:()=>n});var r=a(67294);const o={},i=r.createContext(o);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);