"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7289],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(b,u(u({ref:t},c),{},{components:a})):r.createElement(b,u({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,u[1]=o;for(var i=2;i<l;i++)u[i]=a[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7462),n=a(7294),l=a(6010),u=a(2466),o=a(6550),s=a(1980),i=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,i]=b({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var v=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==o&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",h.tabItem,u?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return n.createElement(T,(0,r.Z)({key:String(t)},e))}},2616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),u=a(5162);a(4996);const o={title:"This is a Second Template",id:"template2",sidebar_label:"Template-2",description:"A template file for elemental next files",hide_table_of_contents:!1,keywords:["selenium","template","automated-testing","how-to"]},s=void 0,i={unversionedId:"updated-tips/template/template2",id:"updated-tips/template/template2",title:"This is a Second Template",description:"A template file for elemental next files",source:"@site/docs/updated-tips/0-template/template-2.md",sourceDirName:"updated-tips/0-template",slug:"/updated-tips/template/template2",permalink:"/elemental-next/docs/updated-tips/template/template2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/0-template/template-2.md",tags:[],version:"current",frontMatter:{title:"This is a Second Template",id:"template2",sidebar_label:"Template-2",description:"A template file for elemental next files",hide_table_of_contents:!1,keywords:["selenium","template","automated-testing","how-to"]},sidebar:"tutorialSidebar",previous:{title:"Template-1",permalink:"/elemental-next/docs/updated-tips/template/template1"},next:{title:"CSharp",permalink:"/elemental-next/docs/updated-tips/how-to-upload-a-file/csharp/"}},c={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)(l.Z,{groupId:"choose-a-language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"java",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"js",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"python",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"ruby",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"csharp",mdxType:"TabItem"})),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)(l.Z,{groupId:"choose-a-language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JavaScript",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"java",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"js",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"python",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"ruby",mdxType:"TabItem"}),(0,n.kt)(u.Z,{value:"csharp",mdxType:"TabItem"})),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("h2",{id:"about-the-author"},"About The Author"))}b.isMDXComponent=!0}}]);