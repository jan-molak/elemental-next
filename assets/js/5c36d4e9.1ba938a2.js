(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[5389],{72375:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(85893),s=a(11151),o=a(52063);const n={title:"CSS vs. XPath 2",id:"33-css-vs-xpath-2",slug:"/33-css-vs-xpath-2",sidebar_label:"CSS vs. Xpath 2",description:"To get a real taste of what the performance difference is between CSS and XPath, we will need to dig deeper. We'll do that by running everything from a local machine while using a performance benchmarking utility.",number:33,hide_table_of_contents:!0,level:2,publish_date:new Date("2014-01-14T00:00:00.000Z"),tags:["selectors","xpath","css","css selectors","locators","locator strategy"],category:["resources"]},l="CSS vs. XPath, Under a Microscope",i={id:"css-vs-xpath-2/33-css-vs-xpath-2",title:"CSS vs. XPath 2",description:"To get a real taste of what the performance difference is between CSS and XPath, we will need to dig deeper. We'll do that by running everything from a local machine while using a performance benchmarking utility.",source:"@site/tips/33-css-vs-xpath-2/main.mdx",sourceDirName:"33-css-vs-xpath-2",slug:"/33-css-vs-xpath-2",permalink:"/tips/33-css-vs-xpath-2",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/33-css-vs-xpath-2/main.mdx",tags:[{label:"selectors",permalink:"/tips/tags/selectors"},{label:"xpath",permalink:"/tips/tags/xpath"},{label:"css",permalink:"/tips/tags/css"},{label:"css selectors",permalink:"/tips/tags/css-selectors"},{label:"locators",permalink:"/tips/tags/locators"},{label:"locator strategy",permalink:"/tips/tags/locator-strategy"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1711022210,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"CSS vs. XPath 2",id:"33-css-vs-xpath-2",slug:"/33-css-vs-xpath-2",sidebar_label:"CSS vs. Xpath 2",description:"To get a real taste of what the performance difference is between CSS and XPath, we will need to dig deeper. We'll do that by running everything from a local machine while using a performance benchmarking utility.",number:33,hide_table_of_contents:!0,level:2,publish_date:"2014-01-14T00:00:00.000Z",tags:["selectors","xpath","css","css selectors","locators","locator strategy"],category:["resources"]},sidebar:"defaultSidebar",previous:{title:"CSS vs. Xpath",permalink:"/tips/32-css-vs-xpath"},next:{title:"CSS vs. Xpath 3",permalink:"/tips/34-css-vs-xpath-3"}},d={},c=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"css-vs-xpath-under-a-microscope",children:"CSS vs. XPath, Under a Microscope"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["NOTE: This is part 2 of 3. For the first installment,\n",(0,r.jsx)(t.a,{href:"https://elementalselenium.com/docs/css-vs-xpath/32-css-vs-xpath",children:"go here"}),".\nFor the last installment, go ",(0,r.jsx)(t.a,{href:"https://elementalselenium.com/docs/xpath-vs-css-revisited-2/34-xpath-vs-css-revisited-2",children:"here"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,r.jsxs)(t.p,{children:["In a previous tip we reviewed ",(0,r.jsx)(t.a,{href:"https://elementalselenium.com/docs/css-vs-xpath/32-css-vs-xpath",children:"the performance of CSS vs. XPath against Sauce Labs"}),".\nWhile it demonstrated that each locator strategy is reasonably equivalent across browsers, it didn't adequately paint\nthe whole picture for us."]}),"\n",(0,r.jsx)(t.p,{children:"Given that it was an end-to-end test there were a lot of variables at play -- Sauce startup, browser start up, and\nlatency to and from the application under test. The unfortunate takeaway from that experiment could be that one driver\nmay be faster than the other (e.g. IE vs Firefox), when in fact, that's not the case at all."}),"\n",(0,r.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,r.jsx)(t.p,{children:"To get a real taste of what the performance difference is between CSS and XPath, we will need to dig deeper. We'll do\nthat by running everything from a local machine while using a performance benchmarking utility. We'll also want to\nfocus on a specific Selenium action rather than the entire test run, and run things numerous times."}),"\n","\n","\n",(0,r.jsx)(o.Z,{languages:[{label:"Ruby",value:"ruby"}]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},65130:(e,t,a)=>{"use strict";a.d(t,{b:()=>l,k:()=>i});var r=a(67294),s=a(902),o=a(85893);const n=r.createContext(null);function l(e){let{children:t,content:a}=e;const s=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,o.jsx)(n.Provider,{value:s,children:t})}function i(){const e=(0,r.useContext)(n);if(null===e)throw new s.i6("DocProvider");return e}},52063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var r=a(67294),s=a(90512),o=a(12466),n=a(16550),l=a(20469),i=a(91980),d=a(67392),c=a(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:s}}=e;return{value:t,label:a,attributes:r,default:s}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const s=(0,n.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function x(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,o=h(e),[n,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,u]=p({queryString:a,groupId:s}),[x,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Nk)(a);return[s,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:s}),v=(()=>{const e=d??x;return m({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:n,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(85893);function w(e){let{className:t,block:a,selectedValue:r,selectValue:n,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),s=l[a].value;s!==r&&(d(t),n(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:c,...o,className:(0,s.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function _(e){let{lazy:t,children:a,selectedValue:s}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(w,{...e,...t}),(0,f.jsx)(_,{...e,...t})]})}function g(e){const t=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:r}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,s.Z)(k.tabItem,r),hidden:a,children:t})}var S=a(65130);const C=function(e){let{languages:t}=e;const[s,o]=(0,r.useState)([]),n=(0,S.k)().frontMatter.id;return(0,r.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,r.lazy)((()=>a(32515)(`./${n}/_${e.value}.mdx`)));return{label:e.label,component:t}})));o(e)})()}),[t]),(0,f.jsx)("div",{children:s.length>0&&(0,f.jsx)(g,{groupId:"elemental-selenium-tabs",children:s.map(((e,t)=>(0,f.jsx)(j,{value:e.label,label:e.label,children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(e.component,{})})},t)))})})}},32515:(e,t,a)=>{var r={"./1-upload-a-file/_csharp.mdx":[81336,532,9286,1336],"./1-upload-a-file/_java.mdx":[51267,532,9286,1267],"./1-upload-a-file/_javascript.mdx":[83910,532,9286,3910],"./1-upload-a-file/_python.mdx":[87785,532,9286,7785],"./1-upload-a-file/_ruby.mdx":[46948,532,9286,6948],"./10-retry-test-actions/_ruby.mdx":[47238,7238],"./11-build-an-interactive-prompt/_ruby.mdx":[86332,6332],"./12-opt-out-of-ab-tests/_csharp.mdx":[51909,1909],"./12-opt-out-of-ab-tests/_java.mdx":[303,303],"./12-opt-out-of-ab-tests/_javascript.mdx":[72545,2545],"./12-opt-out-of-ab-tests/_python.mdx":[35926,5926],"./12-opt-out-of-ab-tests/_ruby.mdx":[59355,7054],"./13-how-to-access-basic-auth/_csharp.mdx":[56189,6189],"./13-how-to-access-basic-auth/_java.mdx":[78885,8885],"./13-how-to-access-basic-auth/_javascript.mdx":[98046,8046],"./13-how-to-access-basic-auth/_python.mdx":[82879,2879],"./13-how-to-access-basic-auth/_ruby.mdx":[57696,7696],"./14-interactive-prompts-revisited/_ruby.mdx":[26490,6490],"./15-download-secure-files/_ruby.mdx":[20181,181],"./16-take-screenshot-on-failure/_csharp.mdx":[41612,1612],"./16-take-screenshot-on-failure/_java.mdx":[6660,6660],"./16-take-screenshot-on-failure/_javascript.mdx":[59783,9783],"./16-take-screenshot-on-failure/_python.mdx":[14271,4271],"./16-take-screenshot-on-failure/_ruby.mdx":[99283,9283],"./17-retrieve-http-status-codes/_ruby.mdx":[74501,4501],"./19-data-driven-testing/_ruby.mdx":[5870,5870],"./2-download-a-file/_csharp.mdx":[62046,532,9286,2046],"./2-download-a-file/_java.mdx":[5789,532,9286,5789],"./2-download-a-file/_javascript.mdx":[72856,532,9286,2856],"./2-download-a-file/_python.mdx":[68401,532,9286,8401],"./2-download-a-file/_ruby.mdx":[97085,532,9286,7085],"./22-locator-strategy/_ruby.mdx":[88555,8555],"./23-dynamic-pages/_ruby.mdx":[42068,2068],"./24-rest-apis/_ruby.mdx":[16864,6864],"./25-how-to-work-with-tables/_csharp.mdx":[24335,4335],"./25-how-to-work-with-tables/_java.mdx":[60821,821],"./25-how-to-work-with-tables/_javascript.mdx":[28917,8917],"./25-how-to-work-with-tables/_python.mdx":[16062,6062],"./25-how-to-work-with-tables/_ruby.mdx":[19554,9554],"./26-cloud/_ruby.mdx":[73304,3304],"./27-parallel/_ruby.mdx":[28918,1685],"./29-chrome-driver/_csharp.mdx":[16716,6716],"./29-chrome-driver/_java.mdx":[60382,382],"./29-chrome-driver/_python.mdx":[32248,2248],"./29-chrome-driver/_ruby.mdx":[4860,4860],"./3-work-with-frames/_csharp.mdx":[62113,532,9286,2113],"./3-work-with-frames/_java.mdx":[29966,532,9286,9966],"./3-work-with-frames/_javascript.mdx":[24022,532,9286,4022],"./3-work-with-frames/_python.mdx":[80940,532,9286,940],"./3-work-with-frames/_ruby.mdx":[51205,532,9286,1205],"./30-mobile/_ruby.mdx":[48808,8808],"./32-css-vs-xpath/_ruby.mdx":[39760,9760],"./33-css-vs-xpath-2/_ruby.mdx":[12061,2061],"./34-css-vs-xpath-3/_ruby.mdx":[44200,4200],"./38-headless/_ruby.mdx":[81010,1010],"./39-drag-and-drop/_ruby.mdx":[36393,6393],"./4-work-with-multiple-windows/_csharp.mdx":[94990,532,9286,4990],"./4-work-with-multiple-windows/_java.mdx":[48910,532,9286,8910],"./4-work-with-multiple-windows/_javascript.mdx":[58167,532,9286,8167],"./4-work-with-multiple-windows/_python.mdx":[74493,532,9286,6342],"./4-work-with-multiple-windows/_ruby.mdx":[50610,532,9286,610],"./40-disabled-element/_csharp.mdx":[44881,4881],"./40-disabled-element/_java.mdx":[2893,2893],"./40-disabled-element/_javascript.mdx":[41687,1687],"./40-disabled-element/_python.mdx":[93311,3311],"./40-disabled-element/_ruby.mdx":[7352,7352],"./41-one-test-multiple-browsers/_ruby.mdx":[96651,6651],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[66449,6449],"./43-forgot-password/_ruby.mdx":[60579,579],"./44-exception-handling/_ruby.mdx":[64181,4181],"./45-how-to-test-checkboxes/_csharp.mdx":[17873,7873],"./45-how-to-test-checkboxes/_java.mdx":[53059,3059],"./45-how-to-test-checkboxes/_javascript.mdx":[2503,2503],"./45-how-to-test-checkboxes/_python.mdx":[67012,7012],"./45-how-to-test-checkboxes/_ruby.mdx":[21883,1883],"./47-waiting/_ruby.mdx":[19762,9762],"./48-load-testing/_ruby.mdx":[43553,3553],"./49-performance-testing/_ruby.mdx":[37023,7023],"./5-select-from-a-dropdown/_csharp.mdx":[12271,532,9286,2271],"./5-select-from-a-dropdown/_java.mdx":[69566,532,9286,9566],"./5-select-from-a-dropdown/_javascript.mdx":[70700,532,9286,700],"./5-select-from-a-dropdown/_python.mdx":[37112,532,9286,7112],"./5-select-from-a-dropdown/_ruby.mdx":[27820,532,9286,7820],"./50-how-to-work-with-hovers/_csharp.mdx":[73102,3102],"./50-how-to-work-with-hovers/_java.mdx":[20866,866],"./50-how-to-work-with-hovers/_javascript.mdx":[31253,1253],"./50-how-to-work-with-hovers/_python.mdx":[27177,7177],"./50-how-to-work-with-hovers/_ruby.mdx":[56559,6559],"./51-javascript-alerts/_csharp.mdx":[42300,2300],"./51-javascript-alerts/_java.mdx":[77153,7153],"./51-javascript-alerts/_javascript.mdx":[99050,9050],"./51-javascript-alerts/_python.mdx":[90934,934],"./51-javascript-alerts/_ruby.mdx":[1073,1073],"./52-grid/_java.mdx":[76471,6471],"./52-grid/_javascript.mdx":[64761,4761],"./52-grid/_python.mdx":[55454,5454],"./52-grid/_ruby.mdx":[59811,9811],"./53-growl/_csharp.mdx":[85762,5762],"./53-growl/_java.mdx":[66789,6789],"./53-growl/_javascript.mdx":[31447,1447],"./53-growl/_python.mdx":[71240,1240],"./53-growl/_ruby.mdx":[45299,5299],"./54-logging/_ruby.mdx":[24223,4223],"./55-wrapper/_ruby.mdx":[12748,7266],"./56-retry-failed-tests/_ruby.mdx":[56707,6707],"./57-junit-xml/_ruby.mdx":[19318,9318],"./58-tagging/_ruby.mdx":[75043,5043],"./60-list-tags/_ruby.mdx":[62354,2354],"./61-how-to-press-keyboard-keys/_csharp.mdx":[49625,9625],"./61-how-to-press-keyboard-keys/_java.mdx":[72079,2079],"./61-how-to-press-keyboard-keys/_javascript.mdx":[91248,1248],"./61-how-to-press-keyboard-keys/_python.mdx":[32349,2349],"./61-how-to-press-keyboard-keys/_ruby.mdx":[10949,949],"./63-right-click/_csharp.mdx":[99510,9510],"./63-right-click/_java.mdx":[44993,4993],"./63-right-click/_javascript.mdx":[69683,9683],"./63-right-click/_python.mdx":[42066,2066],"./63-right-click/_ruby.mdx":[17828,7828],"./64-limit-bandwidth/_ruby.mdx":[98399,8399],"./65-highlight-elements/_csharp.mdx":[88076,8076],"./65-highlight-elements/_java.mdx":[66872,6872],"./65-highlight-elements/_javascript.mdx":[91228,1228],"./65-highlight-elements/_python.mdx":[46034,6034],"./65-highlight-elements/_ruby.mdx":[99272,518],"./66-blacklist/_ruby.mdx":[78685,8685],"./67-broken-images/_ruby.mdx":[23671,3671],"./68-load-testing-revisited/_ruby.mdx":[21588,1588],"./69-safari/_java.mdx":[2263,2263],"./69-safari/_ruby.mdx":[22163,2163],"./7-use-a-page-object/_ruby.mdx":[30586,586],"./72-headless-chrome/_ruby.mdx":[94955,4955],"./73-open-new-window/_java.mdx":[62882,2882],"./73-open-new-window/_ruby.mdx":[20066,66],"./8-download-a-file-revisited/_csharp.mdx":[65065,5065],"./8-download-a-file-revisited/_java.mdx":[12062,2062],"./8-download-a-file-revisited/_python.mdx":[11190,1190],"./8-download-a-file-revisited/_ruby.mdx":[57369,7369],"./9-use-a-base-page-object/_ruby.mdx":[33955,3955]};function s(e){if(!a.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(s)))}s.keys=()=>Object.keys(r),s.id=32515,e.exports=s},11151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l,a:()=>n});var r=a(67294);const s={},o=r.createContext(s);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);