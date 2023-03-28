"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"Javascript",id:"40-disabled-element-javascript",slug:"javascript/",number:40,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-27T00:00:00.000Z")},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"javascript"},i=void 0,s={unversionedId:"updated-tips/disabled-element/40-disabled-element-javascript",id:"updated-tips/disabled-element/40-disabled-element-javascript",title:"Javascript",description:"Disabled Element",source:"@site/docs/updated-tips/40-disabled-element/javascript.md",sourceDirName:"updated-tips/40-disabled-element",slug:"/updated-tips/disabled-element/javascript/",permalink:"/docs/updated-tips/disabled-element/javascript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/40-disabled-element/javascript.md",tags:[{label:"dropdown list",permalink:"/docs/tags/dropdown-list"},{label:"dropdown lists",permalink:"/docs/tags/dropdown-lists"},{label:"disabled element",permalink:"/docs/tags/disabled-element"}],version:"current",frontMatter:{title:"Javascript",id:"40-disabled-element-javascript",slug:"javascript/",number:40,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-27T00:00:00.000Z"},tags:["dropdown list","dropdown lists","disabled element"],level:2,category:["remote","troubleshooting"],language:"javascript"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/updated-tips/drag-and-drop/ruby/"},next:{title:"Ruby",permalink:"/docs/updated-tips/disabled-element/ruby/"}},o={},d=[{value:"Disabled Element",id:"disabled-element",level:2},{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"disabled-element"},"Disabled Element"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"On occasion you may have the need to check if an element on a page is disabled or enabled. Unfortunately, this is not a well-documented function of Selenium, so doing a trivial action like this can quickly become a pain."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"If we look at ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElement.html#isEnabled"},"the API documentation for Selenium's Element class")," we can see there is an available method called ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," that can help us accomplish what we want."),(0,r.kt)("p",null,"Let's take a look at how to use it."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For this example we will use ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"a dropdown list")," from ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled."),(0,r.kt)("p",null,"First we'll require our dependent libraries, declare our test class, and wire up some setup and teardown methods for our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/disabledElement.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\n\ndescribe("Disabled Element", function() {\n  let driver;\n\n  beforeEach(async function() {\n    this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n')),(0,r.kt)("p",null,"Now let's wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/disabledElement.spec.js\n// ...\n  it("dropdown list should contain disabled and enabled elements", async function() {\n    driver.get("http://the-internet.herokuapp.com/dropdown");\n    const dropdownList = await driver.findElements(By.css("option"));\n    assert((await dropdownList[0].isEnabled()) === false);\n  });\n});\n')),(0,r.kt)("p",null,"After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This returns a list of elements, so we use the first one (which is the one with the text of ",(0,r.kt)("inlineCode",{parentName:"p"},"'Please select an option'"),")."),(0,r.kt)("p",null,"Once we have the element we want we see if it's enabled (with ",(0,r.kt)("inlineCode",{parentName:"p"},".isEnabled"),") and assert based on the response."),(0,r.kt)("p",null,"Also, since we grabbed all of the dropdown list options, we can easily test the opposite case by checking the second or third option in the list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// filename: test/disabledElement.spec.js\n// ...\n  it("dropdown list should contain disabled and enabled elements", async function() {\n        // ...\n    assert(await dropdownList[1].isEnabled());\n  });\n});\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Grab all dropdown list elements"),(0,r.kt)("li",{parentName:"ul"},"Assert that the first element in the list is not enabled"),(0,r.kt)("li",{parentName:"ul"},"Assert that the second element in the list is enabled"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);