"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5068],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return t?n.createElement(d,i(i({ref:r},m),{},{components:t})):n.createElement(d,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5165:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={title:"How To Run Your Tests Locally Against Chrome",slug:"29-chrome-driver",number:29,publish_date:new Date("2015-11-11T00:00:00.000Z"),tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:"setup"},i=void 0,l={unversionedId:"non-updated-tips/chrome-driver/java/readme",id:"non-updated-tips/chrome-driver/java/readme",title:"How To Run Your Tests Locally Against Chrome",description:"The Problem",source:"@site/docs/non-updated-tips/29-chrome-driver/java/readme.md",sourceDirName:"non-updated-tips/29-chrome-driver/java",slug:"/non-updated-tips/chrome-driver/java/29-chrome-driver",permalink:"/docs/non-updated-tips/chrome-driver/java/29-chrome-driver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/29-chrome-driver/java/readme.md",tags:[{label:"drivers",permalink:"/docs/tags/drivers"},{label:"chromedriver",permalink:"/docs/tags/chromedriver"},{label:"chrome",permalink:"/docs/tags/chrome"},{label:"different browsers",permalink:"/docs/tags/different-browsers"}],version:"current",frontMatter:{title:"How To Run Your Tests Locally Against Chrome",slug:"29-chrome-driver",number:29,publish_date:"2015-11-11T00:00:00.000Z",tags:["drivers","chromedriver","chrome","different browsers"],level:2,category:"setup"},sidebar:"tutorialSidebar",previous:{title:"How To Run Your Tests Locally Against Chrome",permalink:"/docs/non-updated-tips/chrome-driver/csharp/29-chrome-driver"},next:{title:"How To Test For Disabled Elements",permalink:"/docs/non-updated-tips/disabled-element/csharp/40-disabled-element"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Another Example",id:"another-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],m={toc:p},u="wrapper";function c(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"It's straightforward to get your tests running locally against Firefox. But when you want to run them against a different browser like Chrome, you quickly run into configuration overhead that can seem overly complex and lacking in code examples for getting started."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"With the introduction of WebDriver (circa Selenium 2) a lot of benefits were realized (e.g. more effective & faster browser execution, no more single host origin issues, etc). But with it came some architectural & configuration differences that may not be widely known. Namely -- browser drivers."),(0,a.kt)("p",null,"WebDriver works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser."),(0,a.kt)("p",null,"Let's step through an example using ",(0,a.kt)("a",{parentName:"p",href:"https://sites.google.com/a/chromium.org/chromedriver/"},"ChromeDriver"),"."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"Before starting, we'll need to download the latest ChromeDriver binary executable from ",(0,a.kt)("a",{parentName:"p",href:"http://chromedriver.storage.googleapis.com/index.html"},"here"),". Once we have it we'll need to tell Selenium where it is. And there are three ways to do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add it to your System PATH"),(0,a.kt)("li",{parentName:"ul"},"Specify it your test setup"),(0,a.kt)("li",{parentName:"ul"},"Launch ChromeDriver and connect to it via Selenium Remote")),(0,a.kt)("p",null,"Let's step through the latter two options."),(0,a.kt)("p",null,"We'll start by importing our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ChromeDriverExample.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.junit.Assert.assertThat;\n\npublic class ChromeDriverExample {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        System.setProperty("webdriver.chrome.driver",\n                System.getProperty("user.dir") + "/../../vendor/chrome-driver-2.15/chromedriver_mac32");\n        driver = new ChromeDriver();\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n')),(0,a.kt)("p",null,"Notice that in ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," we are telling Selenium where the ChromeDriver exectuable is with ",(0,a.kt)("inlineCode",{parentName:"p"},'setProperty("webdriver.chrome.driver"')," before creating an instance of the browser. And by using ",(0,a.kt)("inlineCode",{parentName:"p"},'System.getProperty("user.dir")')," we are able to reference the ChromeDriver binary within our project."),(0,a.kt)("p",null,"Now we're ready to add a test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ChromeDriverExample.java\n// ...\n    @Test\n    public void chromeDriverTest() {\n        driver.get("http://the-internet.herokuapp.com/");\n        assertThat(driver.getTitle(), is(equalTo("The Internet")));\n    }\n\n}\n')),(0,a.kt)("p",null,"If we save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test"),") it will launch an instance of Chrome, visit the homepage of ",(0,a.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/"},"the-internet"),", and assert that the page title loaded."),(0,a.kt)("h2",{id:"another-example"},"Another Example"),(0,a.kt)("p",null,"Alternatively, we can launch ChromeDriver from the command-line..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> ./chromedriver\nStarting ChromeDriver 2.18.343837 (52eb4041461e46a6b73308ebb19e85787ced4281) on port 9515\nOnly local connections are allowed.\n")),(0,a.kt)("p",null,"...and connect to it with Selenium Remote."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: ChromeDriverExample.java\n// ...\n    @Before\n    public void setUp() throws Exception {\n        driver = new RemoteWebDriver(new URL("http://localhost:9515"), DesiredCapabilities.chrome());\n    }\n// ...\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This approach will perform faster since ChromeDriver is already running and your test just needs to connect to it. Whereas the prior approach needs to start and stop ChromeDriver for ",(0,a.kt)("em",{parentName:"strong"},"each")," test. The trade-off here is that ChromeDriver will keep running after your tests complete. So you'll either need to ensure it's always up, and/or come up with a way to shut it down after your tests finish.")),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen."),(0,a.kt)("u",null,"Example 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver stops")),(0,a.kt)("u",null,"Example 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ChromeDriver starts (via command-line execution)"),(0,a.kt)("li",{parentName:"ul"},"Chrome opens"),(0,a.kt)("li",{parentName:"ul"},"Test runs"),(0,a.kt)("li",{parentName:"ul"},"Chrome closes"),(0,a.kt)("li",{parentName:"ul"},"ChromeDriver continues to run until stopped")),(0,a.kt)("h2",{id:"outro"},"Outro"),(0,a.kt)("p",null,"Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver"},"ChromeDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver"},"FirefoxDriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver"},"InternetExplorer Driver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/SafariDriver"},"SafariDriver"))),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/elemental-selenium-tips"},"here"),"."),(0,a.kt)("p",null,"Happy Testing!"))}c.isMDXComponent=!0}}]);