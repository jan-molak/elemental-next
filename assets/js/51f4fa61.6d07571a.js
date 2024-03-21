(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[2130],{93492:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=a(85893),r=a(11151),n=a(52063);const o={title:"REST APIs",id:"24-rest-apis",slug:"/24-rest-apis",sidebar_label:"REST APIs",description:"When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.",number:24,hide_table_of_contents:!0,level:2,publish_date:"2013-11-5",tags:["REST APIs","test setup","guest post"],category:["fundamentals"]},i="Fast and Reliable Test Setup with REST APIs",l={id:"rest-apis/24-rest-apis",title:"REST APIs",description:"When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.",source:"@site/tips/24-rest-apis/main.mdx",sourceDirName:"24-rest-apis",slug:"/24-rest-apis",permalink:"/tips/24-rest-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/elemental-next/blob/main/frontend/tips/24-rest-apis/main.mdx",tags:[{label:"REST APIs",permalink:"/tips/tags/rest-ap-is"},{label:"test setup",permalink:"/tips/tags/test-setup"},{label:"guest post",permalink:"/tips/tags/guest-post"}],version:"current",lastUpdatedBy:"Diego Molina",lastUpdatedAt:1711022210,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"REST APIs",id:"24-rest-apis",slug:"/24-rest-apis",sidebar_label:"REST APIs",description:"When we list out the properties that make a test a good test, some things that often come up are: Precise. The test should test one thing, and one thing only. A bug in some part of the application that is unrelated to the test should not cause the test to fail.",number:24,hide_table_of_contents:!0,level:2,publish_date:"2013-11-5",tags:["REST APIs","test setup","guest post"],category:["fundamentals"]},sidebar:"defaultSidebar",previous:{title:"Dynamic Pages",permalink:"/tips/23-dynamic-pages"},next:{title:"How To Work With Tables",permalink:"/tips/25-tables"}},u={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"fast-and-reliable-test-setup-with-rest-apis",children:"Fast and Reliable Test Setup with REST APIs"}),"\n",(0,s.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,s.jsxs)(t.p,{children:["This is a guest post from Robert Schultheis, a Test Engineer at ",(0,s.jsx)(t.a,{href:"http://www.knewton.com/",children:"Knewton"})," who is doing great things with REST\nAPIs in his testing practice"]}),"\n",(0,s.jsx)(t.p,{children:'When we list out the properties that make a test a "good test", some things that often come up are:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Precise."})," The test should test one thing, and one thing only. A bug in some part of the application that is\nunrelated to the test should not cause the test to fail."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Independent."})," A test should not have it's outcome affected by any other test in the test suite."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fast."})," This doesn't need much explanation. The quicker a test suite runs, the more useful it is."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Of course there are many other properties that might be included in such a list, but I mention these specifically\nbecause they can be particularly challenging to achieve in a Selenium test suite. The reason for this is that Selenium\ntests often involve setups that may include a sign-up, a login, some navigation, form submission, or other\ninteractions with a website. Only after doing those things are you ready to assert on some aspect of the website.\nIf you confine your tests to only being allowed to interact with the website, there is little that can be done to\nalleviate this issue."}),"\n",(0,s.jsx)(t.h2,{id:"a-solution",children:"A Solution"}),"\n",(0,s.jsx)(t.p,{children:"REST APIs are increasingly common in the backends of newer websites. If you are fortunate enough to have such an\narchitecture in the site you are testing it may make sense to make use of those REST APIs in your Selenium test suite.\nBy using calls to the REST APIs in the backend to perform parts of a test setup, and using Selenium to perform the\nassertion within the website normally, we can end up with tests that are faster, more focused, and more reliable."}),"\n",(0,s.jsx)(t.p,{children:"REST APIs are based on the HTTP protocol, which is the same protocol that powers essentially the entire internet.\nNearly every modern programming language has libraries that can be used to make HTTP requests, thus we can add\nsupport for calling into REST APIs to virtually any test suite."}),"\n","\n","\n",(0,s.jsx)(n.Z,{languages:[{label:"Ruby",value:"ruby"}]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65130:(e,t,a)=>{"use strict";a.d(t,{b:()=>i,k:()=>l});var s=a(67294),r=a(902),n=a(85893);const o=s.createContext(null);function i(e){let{children:t,content:a}=e;const r=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,n.jsx)(o.Provider,{value:r,children:t})}function l(){const e=(0,s.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}},52063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var s=a(67294),r=a(90512),n=a(12466),o=a(16550),i=a(20469),l=a(91980),u=a(67392),d=a(50012);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:r}}=e;return{value:t,label:a,attributes:s,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[u,c]=p({queryString:a,groupId:r}),[b,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Nk)(a);return[r,(0,s.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),f=(()=>{const e=u??b;return m({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),x(e)}),[c,x,n]),tabValues:n}}var x=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=a(85893);function _(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.o5)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==s&&(u(t),o(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...n,className:(0,r.Z)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=b(e);return(0,w.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,w.jsx)(_,{...e,...t}),(0,w.jsx)(y,{...e,...t})]})}function v(e){const t=(0,x.Z)();return(0,w.jsx)(g,{...e,children:c(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:s}=e;return(0,w.jsx)("div",{role:"tabpanel",className:(0,r.Z)(k.tabItem,s),hidden:a,children:t})}var T=a(65130);const I=function(e){let{languages:t}=e;const[r,n]=(0,s.useState)([]),o=(0,T.k)().frontMatter.id;return(0,s.useEffect)((()=>{(async()=>{const e=await Promise.all(t.map((async e=>{const t=(0,s.lazy)((()=>a(32515)(`./${o}/_${e.value}.mdx`)));return{label:e.label,component:t}})));n(e)})()}),[t]),(0,w.jsx)("div",{children:r.length>0&&(0,w.jsx)(v,{groupId:"elemental-selenium-tabs",children:r.map(((e,t)=>(0,w.jsx)(j,{value:e.label,label:e.label,children:(0,w.jsx)(s.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(e.component,{})})},t)))})})}},32515:(e,t,a)=>{var s={"./1-upload-a-file/_csharp.mdx":[81336,532,9286,1336],"./1-upload-a-file/_java.mdx":[51267,532,9286,1267],"./1-upload-a-file/_javascript.mdx":[83910,532,9286,3910],"./1-upload-a-file/_python.mdx":[87785,532,9286,7785],"./1-upload-a-file/_ruby.mdx":[46948,532,9286,6948],"./10-retry-test-actions/_ruby.mdx":[47238,7238],"./11-build-an-interactive-prompt/_ruby.mdx":[86332,6332],"./12-opt-out-of-ab-tests/_csharp.mdx":[51909,1909],"./12-opt-out-of-ab-tests/_java.mdx":[303,303],"./12-opt-out-of-ab-tests/_javascript.mdx":[72545,2545],"./12-opt-out-of-ab-tests/_python.mdx":[35926,5926],"./12-opt-out-of-ab-tests/_ruby.mdx":[59355,7054],"./13-how-to-access-basic-auth/_csharp.mdx":[56189,6189],"./13-how-to-access-basic-auth/_java.mdx":[78885,8885],"./13-how-to-access-basic-auth/_javascript.mdx":[98046,8046],"./13-how-to-access-basic-auth/_python.mdx":[82879,2879],"./13-how-to-access-basic-auth/_ruby.mdx":[57696,7696],"./14-interactive-prompts-revisited/_ruby.mdx":[26490,6490],"./15-download-secure-files/_ruby.mdx":[20181,181],"./16-take-screenshot-on-failure/_csharp.mdx":[41612,1612],"./16-take-screenshot-on-failure/_java.mdx":[6660,6660],"./16-take-screenshot-on-failure/_javascript.mdx":[59783,9783],"./16-take-screenshot-on-failure/_python.mdx":[14271,4271],"./16-take-screenshot-on-failure/_ruby.mdx":[99283,9283],"./17-retrieve-http-status-codes/_ruby.mdx":[74501,4501],"./19-data-driven-testing/_ruby.mdx":[5870,5870],"./2-download-a-file/_csharp.mdx":[62046,532,9286,2046],"./2-download-a-file/_java.mdx":[5789,532,9286,5789],"./2-download-a-file/_javascript.mdx":[72856,532,9286,2856],"./2-download-a-file/_python.mdx":[68401,532,9286,8401],"./2-download-a-file/_ruby.mdx":[97085,532,9286,7085],"./22-locator-strategy/_ruby.mdx":[88555,8555],"./23-dynamic-pages/_ruby.mdx":[42068,2068],"./24-rest-apis/_ruby.mdx":[16864,6864],"./25-how-to-work-with-tables/_csharp.mdx":[24335,4335],"./25-how-to-work-with-tables/_java.mdx":[60821,821],"./25-how-to-work-with-tables/_javascript.mdx":[28917,8917],"./25-how-to-work-with-tables/_python.mdx":[16062,6062],"./25-how-to-work-with-tables/_ruby.mdx":[19554,9554],"./26-cloud/_ruby.mdx":[73304,3304],"./27-parallel/_ruby.mdx":[28918,1685],"./29-chrome-driver/_csharp.mdx":[16716,6716],"./29-chrome-driver/_java.mdx":[60382,382],"./29-chrome-driver/_python.mdx":[32248,2248],"./29-chrome-driver/_ruby.mdx":[4860,4860],"./3-work-with-frames/_csharp.mdx":[62113,532,9286,2113],"./3-work-with-frames/_java.mdx":[29966,532,9286,9966],"./3-work-with-frames/_javascript.mdx":[24022,532,9286,4022],"./3-work-with-frames/_python.mdx":[80940,532,9286,940],"./3-work-with-frames/_ruby.mdx":[51205,532,9286,1205],"./30-mobile/_ruby.mdx":[48808,8808],"./32-css-vs-xpath/_ruby.mdx":[39760,9760],"./33-css-vs-xpath-2/_ruby.mdx":[12061,2061],"./34-css-vs-xpath-3/_ruby.mdx":[44200,4200],"./38-headless/_ruby.mdx":[81010,1010],"./39-drag-and-drop/_ruby.mdx":[36393,6393],"./4-work-with-multiple-windows/_csharp.mdx":[94990,532,9286,4990],"./4-work-with-multiple-windows/_java.mdx":[48910,532,9286,8910],"./4-work-with-multiple-windows/_javascript.mdx":[58167,532,9286,8167],"./4-work-with-multiple-windows/_python.mdx":[74493,532,9286,6342],"./4-work-with-multiple-windows/_ruby.mdx":[50610,532,9286,610],"./40-disabled-element/_csharp.mdx":[44881,4881],"./40-disabled-element/_java.mdx":[2893,2893],"./40-disabled-element/_javascript.mdx":[41687,1687],"./40-disabled-element/_python.mdx":[93311,3311],"./40-disabled-element/_ruby.mdx":[7352,7352],"./41-one-test-multiple-browsers/_ruby.mdx":[96651,6651],"./42-one-test-multiple-browsers-parallel/_ruby.mdx":[66449,6449],"./43-forgot-password/_ruby.mdx":[60579,579],"./44-exception-handling/_ruby.mdx":[64181,4181],"./45-how-to-test-checkboxes/_csharp.mdx":[17873,7873],"./45-how-to-test-checkboxes/_java.mdx":[53059,3059],"./45-how-to-test-checkboxes/_javascript.mdx":[2503,2503],"./45-how-to-test-checkboxes/_python.mdx":[67012,7012],"./45-how-to-test-checkboxes/_ruby.mdx":[21883,1883],"./47-waiting/_ruby.mdx":[19762,9762],"./48-load-testing/_ruby.mdx":[43553,3553],"./49-performance-testing/_ruby.mdx":[37023,7023],"./5-select-from-a-dropdown/_csharp.mdx":[12271,532,9286,2271],"./5-select-from-a-dropdown/_java.mdx":[69566,532,9286,9566],"./5-select-from-a-dropdown/_javascript.mdx":[70700,532,9286,700],"./5-select-from-a-dropdown/_python.mdx":[37112,532,9286,7112],"./5-select-from-a-dropdown/_ruby.mdx":[27820,532,9286,7820],"./50-how-to-work-with-hovers/_csharp.mdx":[73102,3102],"./50-how-to-work-with-hovers/_java.mdx":[20866,866],"./50-how-to-work-with-hovers/_javascript.mdx":[31253,1253],"./50-how-to-work-with-hovers/_python.mdx":[27177,7177],"./50-how-to-work-with-hovers/_ruby.mdx":[56559,6559],"./51-javascript-alerts/_csharp.mdx":[42300,2300],"./51-javascript-alerts/_java.mdx":[77153,7153],"./51-javascript-alerts/_javascript.mdx":[99050,9050],"./51-javascript-alerts/_python.mdx":[90934,934],"./51-javascript-alerts/_ruby.mdx":[1073,1073],"./52-grid/_java.mdx":[76471,6471],"./52-grid/_javascript.mdx":[64761,4761],"./52-grid/_python.mdx":[55454,5454],"./52-grid/_ruby.mdx":[59811,9811],"./53-growl/_csharp.mdx":[85762,5762],"./53-growl/_java.mdx":[66789,6789],"./53-growl/_javascript.mdx":[31447,1447],"./53-growl/_python.mdx":[71240,1240],"./53-growl/_ruby.mdx":[45299,5299],"./54-logging/_ruby.mdx":[24223,4223],"./55-wrapper/_ruby.mdx":[12748,7266],"./56-retry-failed-tests/_ruby.mdx":[56707,6707],"./57-junit-xml/_ruby.mdx":[19318,9318],"./58-tagging/_ruby.mdx":[75043,5043],"./60-list-tags/_ruby.mdx":[62354,2354],"./61-how-to-press-keyboard-keys/_csharp.mdx":[49625,9625],"./61-how-to-press-keyboard-keys/_java.mdx":[72079,2079],"./61-how-to-press-keyboard-keys/_javascript.mdx":[91248,1248],"./61-how-to-press-keyboard-keys/_python.mdx":[32349,2349],"./61-how-to-press-keyboard-keys/_ruby.mdx":[10949,949],"./63-right-click/_csharp.mdx":[99510,9510],"./63-right-click/_java.mdx":[44993,4993],"./63-right-click/_javascript.mdx":[69683,9683],"./63-right-click/_python.mdx":[42066,2066],"./63-right-click/_ruby.mdx":[17828,7828],"./64-limit-bandwidth/_ruby.mdx":[98399,8399],"./65-highlight-elements/_csharp.mdx":[88076,8076],"./65-highlight-elements/_java.mdx":[66872,6872],"./65-highlight-elements/_javascript.mdx":[91228,1228],"./65-highlight-elements/_python.mdx":[46034,6034],"./65-highlight-elements/_ruby.mdx":[99272,518],"./66-blacklist/_ruby.mdx":[78685,8685],"./67-broken-images/_ruby.mdx":[23671,3671],"./68-load-testing-revisited/_ruby.mdx":[21588,1588],"./69-safari/_java.mdx":[2263,2263],"./69-safari/_ruby.mdx":[22163,2163],"./7-use-a-page-object/_ruby.mdx":[30586,586],"./72-headless-chrome/_ruby.mdx":[94955,4955],"./73-open-new-window/_java.mdx":[62882,2882],"./73-open-new-window/_ruby.mdx":[20066,66],"./8-download-a-file-revisited/_csharp.mdx":[65065,5065],"./8-download-a-file-revisited/_java.mdx":[12062,2062],"./8-download-a-file-revisited/_python.mdx":[11190,1190],"./8-download-a-file-revisited/_ruby.mdx":[57369,7369],"./9-use-a-base-page-object/_ruby.mdx":[33955,3955]};function r(e){if(!a.o(s,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(r)))}r.keys=()=>Object.keys(s),r.id=32515,e.exports=r},11151:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i,a:()=>o});var s=a(67294);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);