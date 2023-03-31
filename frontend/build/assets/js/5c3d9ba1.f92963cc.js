"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"How To Take A Screenshot on Failure",slug:"16-take-screenshot-on-failure",number:16,publish_date:new Date("2015-11-11T00:00:00.000Z"),tags:["reporting","screenshot"],level:2,category:"reporting"},i=void 0,s={unversionedId:"non-updated-tips/take-screenshot-on-failure/java/readme",id:"non-updated-tips/take-screenshot-on-failure/java/readme",title:"How To Take A Screenshot on Failure",description:"The Problem",source:"@site/docs/non-updated-tips/16-take-screenshot-on-failure/java/readme.md",sourceDirName:"non-updated-tips/16-take-screenshot-on-failure/java",slug:"/non-updated-tips/take-screenshot-on-failure/java/16-take-screenshot-on-failure",permalink:"/docs/non-updated-tips/take-screenshot-on-failure/java/16-take-screenshot-on-failure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/16-take-screenshot-on-failure/java/readme.md",tags:[{label:"reporting",permalink:"/docs/tags/reporting"},{label:"screenshot",permalink:"/docs/tags/screenshot"}],version:"current",frontMatter:{title:"How To Take A Screenshot on Failure",slug:"16-take-screenshot-on-failure",number:16,publish_date:"2015-11-11T00:00:00.000Z",tags:["reporting","screenshot"],level:2,category:"reporting"},sidebar:"tutorialSidebar",previous:{title:"How To Take A Screenshot on Failure",permalink:"/docs/non-updated-tips/take-screenshot-on-failure/csharp/16-take-screenshot-on-failure"},next:{title:"How To Retrieve HTTP Status Codes",permalink:"/docs/non-updated-tips/retrieve-http-status-codes/17-retrieve-http-status-codes"}},l={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"With browser tests it can often be challenging to track down the issue that caused a failure. By itself a failure message along with a stack trace is hardly enough to go on. Especially when you run the test again and it passes."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"A simple way to gain insight into your test failures is to capture screenshots at the moment of a failure. And it's a quick and easy thing to add to your tests."),(0,a.kt)("p",null,"Let's dig in with an example."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"Let's start by importing our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with a setup method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: Screenshot.java\nimport org.junit.Before;\nimport org.junit.Rule;\nimport org.junit.Test;\nimport org.junit.rules.TestRule;\nimport org.junit.rules.TestWatcher;\nimport org.junit.runner.Description;\nimport org.openqa.selenium.OutputType;\nimport org.openqa.selenium.TakesScreenshot;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.firefox.FirefoxDriver;\nimport java.io.File;\nimport java.io.IOException;\nimport org.apache.commons.io.FileUtils;\nimport static org.hamcrest.CoreMatchers.*;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\npublic class Screenshot {\n    WebDriver driver;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n    }\n// ...\n")),(0,a.kt)("p",null,"We still need to handle our teardown. But in order to get the timing right with screenshots on failure we'll need to break from the norm of a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"@After")," annotation. For this we'll look to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/junit-team/junit/wiki/Rules"},"JUnit Rule"),", specifically the ",(0,a.kt)("a",{parentName:"p",href:"http://junit.org/apidocs/org/junit/rules/TestWatcher.html"},"TestWatcher"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Screenshot.java\n// ...\n    @Rule\n    public TestRule watcher = new TestWatcher() {\n        @Override\n        protected void failed(Throwable throwable, Description description) {\n            File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);\n            try {\n                FileUtils.copyFile(scrFile,\n                        new File("failshot_"\n                                + description.getClassName()\n                                + "_" + description.getMethodName()\n                                + ".png"));\n            } catch (IOException exception) {\n                exception.printStackTrace();\n            }\n        }\n\n        @Override\n        protected void finished(Description description) {\n            driver.quit();\n        }\n    };\n// ...\n')),(0,a.kt)("p",null,"With a ",(0,a.kt)("inlineCode",{parentName:"p"},"TestWatcher")," we easily gain access to a test after it's failed (e.g., in the ",(0,a.kt)("inlineCode",{parentName:"p"},"failed")," method) and when the test completes regardless of it's outcome (e.g., the ",(0,a.kt)("inlineCode",{parentName:"p"},"finished")," method). So for our teardown we issue ",(0,a.kt)("inlineCode",{parentName:"p"},"driver.quit();")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"finished"),". And when there's a failure we capture a screenshot and write it to disk (in the current working directory) in ",(0,a.kt)("inlineCode",{parentName:"p"},"failed"),"."),(0,a.kt)("p",null,"There are numerous ways to make the filename unique (e.g., unique ID, timestamp, etc.). The simplest way to get started is with the test class name and the test method name, which we've done."),(0,a.kt)("p",null,"Now let's wire up our test with a forced failure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: Screenshot.java\n// ...\n    @Test\n    public void OnError() {\n        driver.get("http://the-internet.herokuapp.com");\n        assertThat(false, is(true));\n    }\n\n}\n')),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Visit the page"),(0,a.kt)("li",{parentName:"ul"},"Fail"),(0,a.kt)("li",{parentName:"ul"},"Capture a screenshot in the current working directory with the name ",(0,a.kt)("inlineCode",{parentName:"li"},"failshot_Screenshot_OnError.png")),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"outro"},"Outro"),(0,a.kt)("p",null,"Happy Testing!"))}d.isMDXComponent=!0}}]);