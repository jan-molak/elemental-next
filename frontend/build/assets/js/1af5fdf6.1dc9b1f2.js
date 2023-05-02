"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"CSharp",id:"50-hovers-csharp",slug:"csharp/",number:50,publish_date:new Date("2015-07-01T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"csharp"},i="How to Work with Hovers",l={unversionedId:"updated-tips/how-to-work-with-hovers/50-hovers-csharp",id:"updated-tips/how-to-work-with-hovers/50-hovers-csharp",title:"CSharp",description:"Intro",source:"@site/docs/50-how-to-work-with-hovers/csharp.md",sourceDirName:"updated-tips/50-how-to-work-with-hovers",slug:"/how-to-work-with-hovers/csharp/",permalink:"/elemental-next/docs/how-to-work-with-hovers/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/50-how-to-work-with-hovers/csharp.md",tags:[{label:"hover",permalink:"/elemental-next/docs/tags/hover"},{label:"hovers",permalink:"/elemental-next/docs/tags/hovers"},{label:"action builder",permalink:"/elemental-next/docs/tags/action-builder"}],version:"current",frontMatter:{title:"CSharp",id:"50-hovers-csharp",slug:"csharp/",number:50,publish_date:"2015-07-01T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["hover","hovers","action builder"],level:1,category:["fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/performance-testing/49-performance-testing-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/how-to-work-with-hovers/java/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},h="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-work-with-hovers"},"How to Work with Hovers"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"If you need to work with mouse hovers in your tests, it might not be obvious how to do this with Selenium. A quick search through the official Selenium documentation can also be confusing, and might leave you scouring online forums and search engines for the solution."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"The most popular use case for a hover action is to display additional menu options(submenu.)"),(0,a.kt)("p",null,"By leveraging Selenium's ",(0,a.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Interactions_Actions.htm"},"Action Builder")," we can handle more complex user interactions like hovers. This is done by telling Selenium which element we want to move the mouse to, and then performing what we need to after."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Our example application is available ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/hovers"},"here")," on ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has a few avatars displayed in a grid layout. When you hover over each of them they display additional user information and a link to view a full profile."),(0,a.kt)("p",null,"Let's write a test that will hover over the first avatar and make sure that its additional information appears."),(0,a.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Hovers.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Interactions;\n\npublic class Hovers\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now let's write our test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Hovers.cs\n    [Test]\n    public void MouseHoverDisplays()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/hovers");\n\n        IWebElement Avatar = Driver.FindElement(By.ClassName("figure"));\n        Actions Builder = new Actions(Driver);\n        Builder.MoveToElement(Avatar).Build().Perform();\n\n        By Hover = By.ClassName("figcaption");\n        Assert.That(Driver.FindElement(Hover).Displayed);\n    }\n}\n')),(0,a.kt)("p",null,"After visiting the page we find the first avatar and store it in a variable (",(0,a.kt)("inlineCode",{parentName:"p"},"Avatar"),"). We then use Selenium's ",(0,a.kt)("inlineCode",{parentName:"p"},"MoveToElement")," method and pass the avatar variable to it (which triggers the hover) and check to see if the additional user information displayed."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Hovers.sln")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Hover over the first avatar"),(0,a.kt)("li",{parentName:"ul"},"Assert that the caption displayed for that avatar"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this will help you handle more complex user interactions like hovers."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);