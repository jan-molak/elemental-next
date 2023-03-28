"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),w=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=w(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=w(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var w=2;w<o;w++)a[w]=n[w];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>w});var i=n(7462),r=(n(7294),n(3905));const o={title:"How To Work with Multiple Windows",slug:"4-work-with-multiple-windows",number:4,publish_date:new Date("2015-11-09T00:00:00.000Z"),tags:["windows","multiple windows","new window"],level:2,category:"testing"},a=void 0,l={unversionedId:"non-updated-tips/work-with-multiple-windows/java/readme",id:"non-updated-tips/work-with-multiple-windows/java/readme",title:"How To Work with Multiple Windows",description:"The Problem",source:"@site/docs/non-updated-tips/4-work-with-multiple-windows/java/readme.md",sourceDirName:"non-updated-tips/4-work-with-multiple-windows/java",slug:"/non-updated-tips/work-with-multiple-windows/java/4-work-with-multiple-windows",permalink:"/docs/non-updated-tips/work-with-multiple-windows/java/4-work-with-multiple-windows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/4-work-with-multiple-windows/java/readme.md",tags:[{label:"windows",permalink:"/docs/tags/windows"},{label:"multiple windows",permalink:"/docs/tags/multiple-windows"},{label:"new window",permalink:"/docs/tags/new-window"}],version:"current",frontMatter:{title:"How To Work with Multiple Windows",slug:"4-work-with-multiple-windows",number:4,publish_date:"2015-11-09T00:00:00.000Z",tags:["windows","multiple windows","new window"],level:2,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Work with Multiple Windows",permalink:"/docs/non-updated-tips/work-with-multiple-windows/csharp/4-work-with-multiple-windows"},next:{title:"How To Select From a Dropdown List",permalink:"/docs/non-updated-tips/select-from-a-dropdown/csharp/5-select-from-a-dropdown"}},s={},w=[{value:"The Problem",id:"the-problem",level:2},{value:"An Example",id:"an-example",level:2},{value:"A Better Example",id:"a-better-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],p={toc:w},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"Occasionally you'll run into a link or action in the application you're testing that will open a new window. In order to work with both the new and originating windows you'll need to switch between them."),(0,r.kt)("p",null,"On the face of it, this is a pretty straightforward concept. But lurking within it is a small gotcha to watch out for that will bite you in some browsers and not others."),(0,r.kt)("p",null,"Let's step through a couple of examples to demonstrate."),(0,r.kt)("h2",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"First let's import our requisite classes (for annotations (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// filename: MultipleWindows.java\n\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport java.util.Set;\nimport static org.hamcrest.MatcherAssert.assertThat;\nimport static org.hamcrest.CoreMatchers.*;\n\npublic class MultipleWindows {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now let's write a test that exercises new window functionality from an application. In this case, we'll be using ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/windows"},"the new window example")," from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: MultipleWindows.java\n// ...\n    @Test\n    public void multipleWindows() {\n        driver.get("http://the-internet.herokuapp.com/windows");\n        driver.findElement(By.cssSelector(".example a")).click();\n        Object[] allWindows = driver.getWindowHandles().toArray();\n        driver.switchTo().window(allWindows[0].toString());\n        assertThat(driver.getTitle(), is(not("New Window")));\n        driver.switchTo().window(allWindows[1].toString());\n        assertThat(driver.getTitle(), is("New Window"));\n    }\n// ...\n')),(0,r.kt)("p",null,"After loading the page we click the link which spawns a new window. We then grab the window handles (a.k.a. unique identifier strings which represent each open browser window) and switch between them based on their order (assuming that the first one is the originating window, and that the second one is the new window). We round this test out by performing a simple check against the title of the page to make sure Selenium is focused on the correct window."),(0,r.kt)("p",null,"While this may seem like a good approach, it can present problems later. That's because the order of the window handles is not consistent across all browsers. Some return it in the order opened, others ",(0,r.kt)("em",{parentName:"p"},"alphabetically"),"."),(0,r.kt)("p",null,"Here's a more resilient approach. One that will work across all browsers."),(0,r.kt)("h2",{id:"a-better-example"},"A Better Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// filename: MultipleWindows.java\n// ...\n    @Test\n    public void multipleWindowsRedux() {\n        driver.get("http://the-internet.herokuapp.com/windows");\n        String firstWindow = driver.getWindowHandle();\n        String newWindow = "";\n        driver.findElement(By.cssSelector(".example a")).click();\n        Set<String> allWindows = driver.getWindowHandles();\n\n        for (String window : allWindows) {\n            if (!window.equals(firstWindow)) {\n                newWindow = window;\n            }\n        }\n\n        driver.switchTo().window(firstWindow);\n        assertThat(driver.getTitle(), is(not(equalTo("New Window"))));\n\n        driver.switchTo().window(newWindow);\n        assertThat(driver.getTitle(), is(equalTo("New Window")));\n    }\n\n}\n')),(0,r.kt)("p",null,"After loading the page we store the window handle in a variable (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"firstWindow"),") and then proceed with clicking the new window link."),(0,r.kt)("p",null,"Now that we have two windows open we grab all of the window handles and search through them to find the new window handle (e.g., the handle that doesn't match the one we've already stored). We store the new window result in another variable (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"newWindow"),") and then switch between the windows, checking page title each time to make sure the correct window is in focus."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen for either example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Click to open a new window"),(0,r.kt)("li",{parentName:"ul"},"Switch between the windows"),(0,r.kt)("li",{parentName:"ul"},"Check the page title to make sure the correct window is in focus"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"outro"},"Outro"),(0,r.kt)("p",null,"Hat tip to ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/jimevansmusic"},"Jim Evans")," for providing the info for this tip, and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for the initial code contribution. Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/elemental-selenium-tips"},"here"),"."),(0,r.kt)("p",null,"Happy Testing!"))}u.isMDXComponent=!0}}]);