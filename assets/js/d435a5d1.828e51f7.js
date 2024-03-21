(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[1514],{48536:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=a(85893),r=a(11151),n=a(52063);const s={title:"Opt Out of AB Tests",id:"12-opt-out-of-ab-tests",slug:"/12-opt-out-of-ab-tests",sidebar_label:"Opt Out of AB Tests",description:"Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.",number:12,hide_table_of_contents:!0,level:2,publish_date:new Date("2015-10-15T00:00:00.000Z"),tags:["ab tests","optimizely","opt-out"],category:["troubleshooting"]},i="How to Opt-out of A/B Tests",l={id:"opt-out-of-ab-tests/12-opt-out-of-ab-tests",title:"Opt Out of AB Tests",description:"Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.",source:"@site/tips/12-opt-out-of-ab-tests/main.mdx",sourceDirName:"12-opt-out-of-ab-tests",slug:"/12-opt-out-of-ab-tests",permalink:"/tips/12-opt-out-of-ab-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/12-opt-out-of-ab-tests/main.mdx",tags:[{label:"ab tests",permalink:"/tips/tags/ab-tests"},{label:"optimizely",permalink:"/tips/tags/optimizely"},{label:"opt-out",permalink:"/tips/tags/opt-out"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1711022210,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"Opt Out of AB Tests",id:"12-opt-out-of-ab-tests",slug:"/12-opt-out-of-ab-tests",sidebar_label:"Opt Out of AB Tests",description:"Occasionally when running tests you may see unexpected behavior due to A/B testing of the application you're working with. In order to keep your tests running without issue we need a clean way to opt-out of these split tests.",number:12,hide_table_of_contents:!0,level:2,publish_date:"2015-10-15T00:00:00.000Z",tags:["ab tests","optimizely","opt-out"],category:["troubleshooting"]},sidebar:"defaultSidebar",previous:{title:"Build An Interactive Prompt",permalink:"/tips/11-build-an-interactive-prompt"},next:{title:"Work With Basic Auth",permalink:"/tips/13-work-with-basic-auth"}},u={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Split Testing",id:"split-testing",level:3},{value:"About The Author",id:"about-the-author",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-opt-out-of-ab-tests",children:"How to Opt-out of A/B Tests"}),"\n",(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsxs)(t.p,{children:["Occasionally when running tests you may see unexpected behavior due to ",(0,o.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/A/B_testing",children:"A/B testing (a.k.a. split testing)"})," of\nthe application you're working with. In order to keep your tests running without issue we need a clean way to opt-out\nof these split tests."]}),"\n",(0,o.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,o.jsx)(t.p,{children:"First, here is a primer on Split Testing."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.h3,{id:"split-testing",children:"Split Testing"}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Split testing is a simple way to experiment with an application's features to see which changes lead to higher user\nengagement. A simple example would be testing variations of an e-mail landing page to see if more people sign up.\nIn such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2\nor 3 changes that could include changing text or images on the page, element positioning, color of the submit\nbutton, etc). Once the variants are configured, they are put into rotation, and the experiment starts. During this\nexperiment each user will see a different version of the feature and their engagement with it will be tracked. Split\ntests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant\nconverted higher than the control). If no winner is found, new variants may be created and another experiment tried.\nIf a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the\nform of an appended URL or forging a cookie."}),"\n",(0,o.jsxs)(t.p,{children:["Let's start with an example for each approach with a popular A/B testing platform, ",(0,o.jsx)(t.a,{href:"https://www.optimizely.com/",children:"Optimizely"}),"."]}),"\n","\n","\n",(0,o.jsx)(n.Z,{languages:[{label:"Python",value:"python"},{label:"C#",value:"csharp"},{label:"Java",value:"java"},{label:"JavaScript",value:"javascript"},{label:"Ruby",value:"ruby"}]}),"\n",(0,o.jsx)(t.h2,{id:"about-the-author",children:"About The Author"}),"\n",(0,o.jsx)(t.p,{children:"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read\nby thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's\nperfect for writing automated tests against)."}),"\n",(0,o.jsx)(t.p,{children:"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool,\nManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken\nat numerous conferences and meetups around the world about automated acceptance testing."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Dave Haeffner profile picture",src:a(89417).Z+"#author-img",title:"a title",width:"280",height:"280"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},65130:(e,t,a)=>{"use strict";a.d(t,{b:()=>i,k:()=>l});var o=a(67294),r=a(902),n=a(85893);const s=o.createContext(null);function i(e){let{children:t,content:a}=e;const r=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,n.jsx)(s.Provider,{value:r,children:t})}function l(){const e=(0,o.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}},52063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>A});var o=a(67294),r=a(90512),n=a(12466),s=a(16550),i=a(20469),l=a(91980),u=a(67392),d=a(50012);function c(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:r}}=e;return{value:t,label:a,attributes:o,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=h(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[u,c]=m({queryString:a,groupId:r}),[b,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Nk)(a);return[r,(0,o.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),f=(()=>{const e=u??b;return p({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,n]),tabValues:n}}var x=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(85893);function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.o5)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==o&&(u(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...n,className:(0,r.Z)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":o===t}),children:a??t},t)}))})}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=b(e);return(0,w.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,w.jsx)(y,{...e,...t}),(0,w.jsx)(g,{...e,...t})]})}function _(e){const t=(0,x.Z)();return(0,w.jsx)(v,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:o}=e;return(0,w.jsx)("div",{role:"tabpanel",className:(0,r.Z)(k.tabItem,o),hidden:a,children:t})}var T=a(65130);const A=function(e){let{languages:t}=e;const[r,n]=(0,o.useState)([]),s=(0,T.k)().frontMatter.id;return(0,o.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,o.lazy)((()=>a(32515)(`./${s}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,w.jsx)("div",{children:r.length>0&&(0,w.jsx)(_,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,w.jsx)(j,{value:e.label,label:e.label,children:(0,w.jsx)(o.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(e.component,{})})},t)))})})}},89417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/dave-haeffner-51c0929f88475823fb30e6519d3be0a3.jpeg"},32515:(e,t,a)=>{var o={"./1-upload-a-file/_csharp.mdx":[81336,532,9286,1336],"./1-upload-a-file/_java.mdx":[51267,532,9286,1267],"./1-upload-a-file/_javascript.mdx":[83910,532,9286,3910],"./1-upload-a-file/_python.mdx":[87785,532,9286,7785],"./1-upload-a-file/_ruby.mdx":[46948,532,9286,6948],"./10-retry-test-actions/_ruby.mdx":[47238,7238],"./11-build-an-interactive-prompt/_ruby.mdx":[86332,6332],"./12-opt-out-of-ab-tests/_csharp.mdx":[51909,1909],"./12-opt-out-of-ab-tests/_java.mdx":[303,303],"./12-opt-out-of-ab-tests/_javascript.mdx":[72545,2545],"./12-opt-out-of-ab-tests/_python.mdx":[35926,5926],"./12-opt-out-of-ab-tests/_ruby.mdx":[59355,7054],"./13-how-to-access-basic-auth/_csharp.mdx":[56189,6189],"./13-how-to-access-basic-auth/_java.mdx":[78885,8885],"./13-how-to-access-basic-auth/_javascript.mdx":[98046,8046],"./13-how-to-access-basic-auth/_python.mdx":[82879,2879],"./13-how-to-access-basic-auth/_ruby.mdx":[57696,7696],"./14-interactive-prompts-revisited/_ruby.mdx":[26490,6490],"./15-download-secure-files/_ruby.mdx":[20181,181],"./16-take-screenshot-on-failure/_csharp.mdx":[41612,1612],"./16-take-screenshot-on-failure/_java.mdx":[6660,6660],"./16-take-screenshot-on-failure/_javascript.mdx":[59783,9783],"./16-take-screenshot-on-failure/_python.mdx":[14271,4271],"./16-take-screenshot-on-failure/_ruby.mdx":[99283,9283],"./17-retrieve-http-status-codes/_ruby.mdx":[74501,4501],"./19-data-driven-testing/_ruby.mdx":[5870,5870],"./2-download-a-file/_csharp.mdx":[62046,532,9286,2046],"./2-download-a-file/_java.mdx":[5789,532,9286,5789],"./2-download-a-file/_javascript.mdx":[72856,532,9286,2856],"./2-download-a-file/_python.mdx":[68401,532,9286,8401],"./2-download-a-file/_ruby.mdx":[97085,532,9286,7085],"./22-locator-strategy/_ruby.mdx":[88555,8555],"./23-dynamic-pages/_ruby.mdx":[42068,2068],"./24-rest-apis/_ruby.mdx":[16864,6864],"./25-how-to-work-with-tables/_csharp.mdx":[24335,4335],"./25-how-to-work-with-tables/_java.mdx":[60821,821],"./25-how-to-work-with-tables/_javascript.mdx":[28917,8917],"./25-how-to-work-with-tables/_python.mdx":[16062,6062],"./25-how-to-work-with-tables/_ruby.mdx":[19554,9554],"./26-cloud/_ruby.mdx":[73304,3304],"./27-parallel/_ruby.mdx":[28918,1685],"./29-chrome-driver/_csharp.mdx":[16716,6716],"./29-chrome-driver/_java.mdx":[60382,382],"./29-chrome-driver/_python.mdx":[32248,2248],"./29-chrome-driver/_ruby.mdx":[4860,4860],"./3-work-with-frames/_csharp.mdx":[62113,532,9286,2113],"./3-work-with-frames/_java.mdx":[29966,532,9286,9966],"./3-work-with-frames/_javascript.mdx":[24022,532,9286,4022],"./3-work-with-frames/_python.mdx":[80940,532,9286,940],"./3-work-with-frames/_ruby.mdx":[51205,532,9286,1205],"./30-mobile/_ruby.mdx":[48808,8808],"./32-css-vs-xpath/_ruby.mdx":[39760,9760],"./33-css-vs-xpath-2/_ruby.mdx":[12061,2061],"./34-css-vs-xpath-3/_ruby.mdx":[44200,4200],"./38-headless/_ruby.mdx":[81010,1010],"./39-drag-and-drop/_ruby.mdx":[36393,6393],"./4-work-with-multiple-windows/_csharp.mdx":[94990,532,9286,4990],"./4-work-with-multiple-windows/_java.mdx":[48910,532,9286,8910],"./4-work-with-multiple-windows/_javascript.mdx":[58167,532,9286,8167],"./4-work-with-multiple-windows/_python.mdx":[74493,532,9286,6342],"./4-work-with-multiple-windows/_ruby.mdx":[50610,532,9286,610],"./40-disabled-element/_csharp.mdx":[44881,4881],"./40-disabled-element/_java.mdx":[2893,2893],"./40-disabled-element/_javascript.mdx":[41687,1687],"./40-disabled-element/_python.mdx":[93311,3311],"./40-disabled-element/_ruby.mdx":[7352,7352],"./41-one-test-multiple-browsers/_ruby.mdx":[96651,6651],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[66449,6449],"./43-forgot-password/_ruby.mdx":[60579,579],"./44-exception-handling/_ruby.mdx":[64181,4181],"./45-how-to-test-checkboxes/_csharp.mdx":[17873,7873],"./45-how-to-test-checkboxes/_java.mdx":[53059,3059],"./45-how-to-test-checkboxes/_javascript.mdx":[2503,2503],"./45-how-to-test-checkboxes/_python.mdx":[67012,7012],"./45-how-to-test-checkboxes/_ruby.mdx":[21883,1883],"./47-waiting/_ruby.mdx":[19762,9762],"./48-load-testing/_ruby.mdx":[43553,3553],"./49-performance-testing/_ruby.mdx":[37023,7023],"./5-select-from-a-dropdown/_csharp.mdx":[12271,532,9286,2271],"./5-select-from-a-dropdown/_java.mdx":[69566,532,9286,9566],"./5-select-from-a-dropdown/_javascript.mdx":[70700,532,9286,700],"./5-select-from-a-dropdown/_python.mdx":[37112,532,9286,7112],"./5-select-from-a-dropdown/_ruby.mdx":[27820,532,9286,7820],"./50-how-to-work-with-hovers/_csharp.mdx":[73102,3102],"./50-how-to-work-with-hovers/_java.mdx":[20866,866],"./50-how-to-work-with-hovers/_javascript.mdx":[31253,1253],"./50-how-to-work-with-hovers/_python.mdx":[27177,7177],"./50-how-to-work-with-hovers/_ruby.mdx":[56559,6559],"./51-javascript-alerts/_csharp.mdx":[42300,2300],"./51-javascript-alerts/_java.mdx":[77153,7153],"./51-javascript-alerts/_javascript.mdx":[99050,9050],"./51-javascript-alerts/_python.mdx":[90934,934],"./51-javascript-alerts/_ruby.mdx":[1073,1073],"./52-grid/_java.mdx":[76471,6471],"./52-grid/_javascript.mdx":[64761,4761],"./52-grid/_python.mdx":[55454,5454],"./52-grid/_ruby.mdx":[59811,9811],"./53-growl/_csharp.mdx":[85762,5762],"./53-growl/_java.mdx":[66789,6789],"./53-growl/_javascript.mdx":[31447,1447],"./53-growl/_python.mdx":[71240,1240],"./53-growl/_ruby.mdx":[45299,5299],"./54-logging/_ruby.mdx":[24223,4223],"./55-wrapper/_ruby.mdx":[12748,7266],"./56-retry-failed-tests/_ruby.mdx":[56707,6707],"./57-junit-xml/_ruby.mdx":[19318,9318],"./58-tagging/_ruby.mdx":[75043,5043],"./60-list-tags/_ruby.mdx":[62354,2354],"./61-how-to-press-keyboard-keys/_csharp.mdx":[49625,9625],"./61-how-to-press-keyboard-keys/_java.mdx":[72079,2079],"./61-how-to-press-keyboard-keys/_javascript.mdx":[91248,1248],"./61-how-to-press-keyboard-keys/_python.mdx":[32349,2349],"./61-how-to-press-keyboard-keys/_ruby.mdx":[10949,949],"./63-right-click/_csharp.mdx":[99510,9510],"./63-right-click/_java.mdx":[44993,4993],"./63-right-click/_javascript.mdx":[69683,9683],"./63-right-click/_python.mdx":[42066,2066],"./63-right-click/_ruby.mdx":[17828,7828],"./64-limit-bandwidth/_ruby.mdx":[98399,8399],"./65-highlight-elements/_csharp.mdx":[88076,8076],"./65-highlight-elements/_java.mdx":[66872,6872],"./65-highlight-elements/_javascript.mdx":[91228,1228],"./65-highlight-elements/_python.mdx":[46034,6034],"./65-highlight-elements/_ruby.mdx":[99272,518],"./66-blacklist/_ruby.mdx":[78685,8685],"./67-broken-images/_ruby.mdx":[23671,3671],"./68-load-testing-revisited/_ruby.mdx":[21588,1588],"./69-safari/_java.mdx":[2263,2263],"./69-safari/_ruby.mdx":[22163,2163],"./7-use-a-page-object/_ruby.mdx":[30586,586],"./72-headless-chrome/_ruby.mdx":[94955,4955],"./73-open-new-window/_java.mdx":[62882,2882],"./73-open-new-window/_ruby.mdx":[20066,66],"./8-download-a-file-revisited/_csharp.mdx":[65065,5065],"./8-download-a-file-revisited/_java.mdx":[12062,2062],"./8-download-a-file-revisited/_python.mdx":[11190,1190],"./8-download-a-file-revisited/_ruby.mdx":[57369,7369],"./9-use-a-base-page-object/_ruby.mdx":[33955,3955]};function r(e){if(!a.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(r)))}r.keys=()=>Object.keys(o),r.id=32515,e.exports=r},11151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,a:()=>s});var o=a(67294);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);