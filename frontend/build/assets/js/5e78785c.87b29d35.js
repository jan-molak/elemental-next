"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"Python",id:"63-right-click-python",slug:"python/",number:63,publish_date:new Date("2016-11-20T00:00:00.000Z"),last_update:{date:new Date("2023-03-15T00:00:00.000Z")},tags:["right-click","right click","context menu","action builder","context click"],level:2,category:["fundamentals"],language:"python"},o="How to Right-click",l={unversionedId:"updated-tips/right-click/63-right-click-python",id:"updated-tips/right-click/63-right-click-python",title:"Python",description:"Intro",source:"@site/docs/updated-tips/63-right-click/python.md",sourceDirName:"updated-tips/63-right-click",slug:"/updated-tips/right-click/python/",permalink:"/docs/updated-tips/right-click/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/63-right-click/python.md",tags:[{label:"right-click",permalink:"/docs/tags/right-click"},{label:"context menu",permalink:"/docs/tags/context-menu"},{label:"action builder",permalink:"/docs/tags/action-builder"},{label:"context click",permalink:"/docs/tags/context-click"}],version:"current",frontMatter:{title:"Python",id:"63-right-click-python",slug:"python/",number:63,publish_date:"2016-11-20T00:00:00.000Z",last_update:{date:"2023-03-15T00:00:00.000Z"},tags:["right-click","right click","context menu","action builder","context click"],level:2,category:["fundamentals"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/updated-tips/how-to-press-keyboard-keys/ruby/"},next:{title:"Ruby",permalink:"/docs/updated-tips/right-click/ruby/"}},c={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-right-click"},"How to Right-click"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Sometimes you'll run into an app that has functionality hidden behind a right-click menu (a.k.a. a context menu). These menus tend to be system level menus that are untouchable by Selenium. So how do you test this functionality?"),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"By leveraging Selenium's Action Builder (a.k.a. ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html?highlight=actionchains#selenium.webdriver.common.action_chains.ActionChains"},"ActionChains")," in the Selenium Python bindings) we can issue a right-click command (a.k.a. a ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html?highlight=actionchains#selenium.webdriver.common.action_chains.ActionChains.context_click"},(0,r.kt)("inlineCode",{parentName:"a"},"context_click")),")."),(0,r.kt)("p",null,"We can then select an option from the menu by traversing it with keyboard arrow keys (which we can issue with the Action Builder's ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html?highlight=actionchains#selenium.webdriver.common.action_chains.ActionChains.send_keys"},(0,r.kt)("inlineCode",{parentName:"a"},"send_keys"))," command)."),(0,r.kt)("p",null,"Let's continue with an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by pulling in our requisite libraries, declare the test class, and wire up some simple ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: right_click.py\nimport unittest\nfrom selenium import webdriver\nfrom selenium.webdriver.common.action_chains import ActionChains\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.by import By\n\n\nclass RightClick(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,r.kt)("p",null,"Now we're ready to write our test."),(0,r.kt)("p",null,"We'll use an example from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that will render a custom context menu when we right-click on a specific area of the page (",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/context_menu"},"link"),"). Clicking the context menu will trigger a JavaScript alert which will say ",(0,r.kt)("inlineCode",{parentName:"p"},"You selected a context menu"),". We'll grab this text and use it to assert that the menu was actually triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filename: right_click.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/context_menu')\n        menu_area = driver.find_element(By.ID,'hot-spot')\n        ActionChains(driver).context_click(\n            menu_area).send_keys(\n            Keys.ARROW_DOWN).send_keys(\n            Keys.ARROW_DOWN).send_keys(\n            Keys.ARROW_DOWN).send_keys(\n            Keys.ENTER).perform()\n        alert = driver.switch_to.alert\n        assert alert.text == 'You selected a context menu'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"python right_click.py"),") from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser and visit the page"),(0,r.kt)("li",{parentName:"ul"},"Find and right-click the area which will render a custom context menu"),(0,r.kt)("li",{parentName:"ul"},"Select the context menu option with keyboard keys"),(0,r.kt)("li",{parentName:"ul"},"JavaScript alert appears"),(0,r.kt)("li",{parentName:"ul"},"Grab the text of the JavaScript alert"),(0,r.kt)("li",{parentName:"ul"},"Assert that the text from the alert is what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"To learn more about context menus, you can read ",(0,r.kt)("a",{parentName:"p",href:"http://blog.teamtreehouse.com/building-html5-context-menus"},"this write-up from the Tree House blog"),"."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);