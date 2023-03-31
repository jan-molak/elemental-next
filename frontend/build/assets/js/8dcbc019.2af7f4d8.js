"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,c=m["".concat(s,".").concat(d)]||m[d]||h[d]||o;return r?n.createElement(c,i(i({ref:t},u),{},{components:r})):n.createElement(c,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Python",id:"29-chrome-driver-python",slug:"python/",number:29,publish_date:new Date("2016-11-26T00:00:00.000Z"),last_update:{date:new Date("2023-03-09T00:00:00.000Z")},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"python"},i="How to Run Your Tests Locally Against Chrome",l={unversionedId:"updated-tips/chrome-driver/29-chrome-driver-python",id:"updated-tips/chrome-driver/29-chrome-driver-python",title:"Python",description:"Intro",source:"@site/docs/updated-tips/29-chrome-driver/python.md",sourceDirName:"updated-tips/29-chrome-driver",slug:"/updated-tips/chrome-driver/python/",permalink:"/docs/updated-tips/chrome-driver/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/29-chrome-driver/python.md",tags:[{label:"drivers",permalink:"/docs/tags/drivers"},{label:"chromedriver",permalink:"/docs/tags/chromedriver"},{label:"chrome",permalink:"/docs/tags/chrome"},{label:"different browsers",permalink:"/docs/tags/different-browsers"}],version:"current",frontMatter:{title:"Python",id:"29-chrome-driver-python",slug:"python/",number:29,publish_date:"2016-11-26T00:00:00.000Z",last_update:{date:"2023-03-09T00:00:00.000Z"},tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:["fundamentals","remote"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/updated-tips/cloud/ruby/"},next:{title:"Accessing Previous Tips Archive",permalink:"/docs/updated-tips/archives/"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-run-your-tests-locally-against-chrome"},"How to Run Your Tests Locally Against Chrome"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started."),(0,a.kt)("p",null,"With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"WebDriver")," works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"ChromeDriver")," is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally."),(0,a.kt)("p",null,"Let's step through an example using ChromeDriver (",(0,a.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/downloads"},"download here"),")."),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,a.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. And there are three ways to do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add it to the System PATH"),(0,a.kt)("li",{parentName:"ul"},"Specify it in the Selenium setup"),(0,a.kt)("li",{parentName:"ul"},"Launch ChromeDriver and connect to it via Selenium Remote")),(0,a.kt)("p",null,"Let's step through the latter two options."),(0,a.kt)("p",null,"We'll start by pulling in our requisite libraries for interacting with the operating system (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"import os"),"), our testing framework (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"import unittest"),"), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver"),"), declare our test class, and wire up some test ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: chrome.py\nimport os\nimport unittest\nfrom selenium import webdriver\n\n\nclass Chrome(unittest.TestCase):\n\n    def setUp(self):\n        chromedriver_path = os.getcwd() + '/vendor/chromedriver'\n        self.driver = webdriver.Chrome(chromedriver_path)\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,a.kt)("p",null,"Notice that in ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," we are telling Selenium where the ChromeDriver exectuable is with ",(0,a.kt)("inlineCode",{parentName:"p"},"chromedriver_path")," before creating an instance of the browser and passing it in as an argument."),(0,a.kt)("p",null,"Now we're ready to add a simple test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: chrome.rb\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/upload')\n        assert driver.title == 'The Internet'\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python chrome.py"),") it will launch an instance of Chrome, visit the homepage of ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("p",null,"Alternatively, we can launch ChromeDriver from the command-line..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> vendor/chromedriver\nStarting ChromeDriver on port 9515\nOnly local connections are allowed.\n")),(0,a.kt)("p",null,"...and connect to it with Selenium Remote."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: chrome.py\n# ...\n\n    def setUp(self):\n        self.driver = webdriver.Remote('http://localhost:9515', {'browserName': 'chrome'})\n\n# ...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This approach will perform faster since ChromeDriver is already running and your test just needs to connect to it. Whereas the prior approach needs to start and stop ChromeDriver for ",(0,a.kt)("em",{parentName:"strong"},"each")," test. The trade-off here is that ChromeDriver will keep running after your tests complete. So you'll either need to ensure it's always up, or come up with a way to shut it down after your tests finish.")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python chrome.py")," from the command-line) here is what will happen."),(0,a.kt)("u",null,"Example 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,a.kt)("u",null,"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts (via command-line execution)"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver continues to run until stopped")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver"},"ChromeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/dev-guide/tools/webdriver/"},"EdgeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver"},"FirefoxDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver"},"InternetExplorer Driver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/operasoftware/operaprestodriver"},"OperaPrestoDriver for Opera 12 and older")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/operasoftware/operachromiumdriver"},"OperaChromiumDriver for Opera 15 and newer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/SafariDriver"},"SafariDriver for Safari 5.1 - 9.x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webkit.org/blog/6900/webdriver-support-in-safari-10/"},"SafariDriver for Safari 10"))),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);