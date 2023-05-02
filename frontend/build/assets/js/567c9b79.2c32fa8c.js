"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"CSharp",id:"29-chrome-driver-csharp",slug:"csharp/",number:29,publish_date:new Date("2016-11-26T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"csharp"},i="How to Run Your Tests Locally Against Chrome",l={unversionedId:"updated-tips/chrome-driver/29-chrome-driver-csharp",id:"updated-tips/chrome-driver/29-chrome-driver-csharp",title:"CSharp",description:"Intro",source:"@site/docs/29-chrome-driver/csharp.md",sourceDirName:"updated-tips/29-chrome-driver",slug:"/chrome-driver/csharp/",permalink:"/elemental-next/docs/chrome-driver/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/29-chrome-driver/csharp.md",tags:[{label:"drivers",permalink:"/elemental-next/docs/tags/drivers"},{label:"chromedriver",permalink:"/elemental-next/docs/tags/chromedriver"},{label:"chrome",permalink:"/elemental-next/docs/tags/chrome"},{label:"different browsers",permalink:"/elemental-next/docs/tags/different-browsers"}],version:"current",frontMatter:{title:"CSharp",id:"29-chrome-driver-csharp",slug:"csharp/",number:29,publish_date:"2016-11-26T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/cloud/26-cloud-ruby"},next:{title:"Java",permalink:"/elemental-next/docs/chrome-driver/java/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-run-your-tests-locally-against-chrome"},"How to Run Your Tests Locally Against Chrome"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started. "),(0,a.kt)("p",null,"With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"WebDriver")," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"ChromeDriver")," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."),(0,a.kt)("p",null,"Let's step through an example using ChromeDriver (",(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"download here"),")."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,a.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,a.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup")),(0,a.kt)("p",null,"Let's start by including our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"using NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"using OpenQA.Selenium"),", etc.), accessing C# methods to work with the local file system (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"using System.IO"),"), and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Chrome;\nusing System.IO;\n\npublic class Chrome\n{\n    IWebDriver Driver;\n    string VendorDirectory = Directory.GetParent(\n        Path.GetDirectoryName(typeof(Chrome).Assembly.Location)).\n            Parent.FullName + @"\\Vendor";\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new ChromeDriver(VendorDirectory);\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n')),(0,a.kt)("p",null,"Notice the field variable declaration for ",(0,a.kt)("inlineCode",{parentName:"p"},"VendorDirectory"),". With it we are effectively grabbing the full path of the project directory and appending the ",(0,a.kt)("inlineCode",{parentName:"p"},"Vendor")," directory to it. This is then put to use when creating an instance of Chrome (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"Driver = new ChromeDriver(VendorDirectory);"),")."),(0,a.kt)("p",null,"Now we're ready to add a test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\n// ...\n    [Test]\n    public void PageLoads()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(Driver.Title.Equals("The Internet"));\n    }\n}\n')),(0,a.kt)("p",null,"If we save this file and run the project (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln"),") it will launch an instance of Chrome, visit the homepage of ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run the project (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln")," from the command-line) here is what will happen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official ",(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference"},"Selenium Quick Reference page for Installing Browser Drivers"),"."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}d.isMDXComponent=!0}}]);