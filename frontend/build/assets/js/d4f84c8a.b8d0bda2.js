"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"How To Run Your Tests Locally Against Chrome",slug:"29-chrome-driver",number:29,publish_date:new Date("2016-06-13T00:00:00.000Z"),tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:"setup"},i=void 0,l={unversionedId:"non-updated-tips/chrome-driver/csharp/readme",id:"non-updated-tips/chrome-driver/csharp/readme",title:"How To Run Your Tests Locally Against Chrome",description:"The Problem",source:"@site/docs/non-updated-tips/29-chrome-driver/csharp/readme.md",sourceDirName:"non-updated-tips/29-chrome-driver/csharp",slug:"/non-updated-tips/chrome-driver/csharp/29-chrome-driver",permalink:"/docs/non-updated-tips/chrome-driver/csharp/29-chrome-driver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/29-chrome-driver/csharp/readme.md",tags:[{label:"drivers",permalink:"/docs/tags/drivers"},{label:"chromedriver",permalink:"/docs/tags/chromedriver"},{label:"chrome",permalink:"/docs/tags/chrome"},{label:"different browsers",permalink:"/docs/tags/different-browsers"}],version:"current",frontMatter:{title:"How To Run Your Tests Locally Against Chrome",slug:"29-chrome-driver",number:29,publish_date:"2016-06-13T00:00:00.000Z",tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:"setup"},sidebar:"tutorialSidebar",previous:{title:"How To Work With HTML Data Tables",permalink:"/docs/non-updated-tips/tables/javascript/25-tables"},next:{title:"How To Run Your Tests Locally Against Chrome",permalink:"/docs/non-updated-tips/chrome-driver/java/29-chrome-driver"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Another Example",id:"another-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Outro",id:"outro",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers."),(0,a.kt)("p",null,"WebDriver works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser."),(0,a.kt)("p",null,"Let's step through an example using ",(0,a.kt)("a",{parentName:"p",href:"https://sites.google.com/a/chromium.org/chromedriver/"},"ChromeDriver"),"."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,a.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. And there are three ways to do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add it to your System PATH"),(0,a.kt)("li",{parentName:"ul"},"Specify it your test setup"),(0,a.kt)("li",{parentName:"ul"},"Launch ChromeDriver and connect to it via Selenium Remote")),(0,a.kt)("p",null,"Let's step through the latter two options."),(0,a.kt)("p",null,"Let's start by including our requisite classes for our test framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"using NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"using OpenQA.Selenium"),", etc.), accessing C# methods to work with the local file system (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"using System.IO"),"), and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Chrome;\nusing System.IO;\n\npublic class Chrome\n{\n    IWebDriver Driver;\n    string VendorDirectory = Directory.GetParent(\n        Path.GetDirectoryName(typeof(Chrome).Assembly.Location)).\n            Parent.FullName + @"\\Vendor";\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new ChromeDriver(VendorDirectory);\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n')),(0,a.kt)("p",null,"Notice the field variable declaration for ",(0,a.kt)("inlineCode",{parentName:"p"},"VendorDirectory"),". With it we are effectively grabbing the full path of the project directory and appending the ",(0,a.kt)("inlineCode",{parentName:"p"},"Vendor")," directory to it. This is then put to use when creating an instance of Chrome (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"Driver = new ChromeDriver(VendorDirectory);"),")."),(0,a.kt)("p",null,"Now we're ready to add a test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\n// ...\n    [Test]\n    public void PageLoads()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(Driver.Title.Equals("The Internet"));\n    }\n}\n')),(0,a.kt)("p",null,"If we save this file and run the project (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln"),") it will launch an instance of Chrome, visit the homepage of ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,a.kt)("h2",{id:"another-example"},"Another Example"),(0,a.kt)("p",null,"Alternatively, we can launch ChromeDriver from the command-line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> ./chromedriver.exe\nStarting ChromeDriver 2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4) on port 9515\nOnly local connections are allowed.\n")),(0,a.kt)("p",null,"We can then connect to it with Selenium Remote."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Chrome.cs\n// ...\n    [SetUp]\n    public void SetUp()\n    {\n        //Driver = new ChromeDriver(VendorDirectory);\n        DesiredCapabilities Capabilities = new DesiredCapabilities();\n        DesiredCapabilities.Chrome();\n        Driver = new RemoteWebDriver(new Uri("http://localhost:9515"), Capabilities);\n    }\n\n// ...\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This approach will perform faster since ChromeDriver is already running and your test just needs to connect to it. Whereas the prior approach needs to start and stop ChromeDriver for ",(0,a.kt)("em",{parentName:"strong"},"each")," test. The trade-off here is that ChromeDriver will keep running after your tests complete. So you'll either need to ensure it's always up, and/or come up with a way to shut it down after your tests finish.")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run the project (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Chrome.sln")," from the command-line) here is what will happen."),(0,a.kt)("h3",{id:"example-1"},"Example 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,a.kt)("h3",{id:"example-2"},"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts (via command-line execution)"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver continues to run until stopped")),(0,a.kt)("h2",{id:"outro"},"Outro"),(0,a.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver"},"ChromeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver"},"FirefoxDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver"},"InternetExplorerDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/"},"EdgeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/SafariDriver"},"SafariDriver"))),(0,a.kt)("p",null,"Happy Testing!"))}c.isMDXComponent=!0}}]);