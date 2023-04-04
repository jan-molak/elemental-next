"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[556],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(a),c=i,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={title:"CSharp",id:"1-upload-a-file-csharp",slug:"csharp/",number:1,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-03-28T00:00:00.000Z")},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"csharp"},o="How to Upload a File",r={unversionedId:"updated-tips/how-to-upload-a-file/1-upload-a-file-csharp",id:"updated-tips/how-to-upload-a-file/1-upload-a-file-csharp",title:"CSharp",description:"Intro",source:"@site/docs/updated-tips/1-how-to-upload-a-file/csharp.md",sourceDirName:"updated-tips/1-how-to-upload-a-file",slug:"/updated-tips/how-to-upload-a-file/csharp/",permalink:"/elemental-next/docs/updated-tips/how-to-upload-a-file/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/1-how-to-upload-a-file/csharp.md",tags:[{label:"file",permalink:"/elemental-next/docs/tags/file"},{label:"upload",permalink:"/elemental-next/docs/tags/upload"},{label:"file upload",permalink:"/elemental-next/docs/tags/file-upload"}],version:"current",frontMatter:{title:"CSharp",id:"1-upload-a-file-csharp",slug:"csharp/",number:1,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-03-28T00:00:00.000Z"},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Template-2",permalink:"/elemental-next/docs/updated-tips/template/template2"},next:{title:"Java",permalink:"/elemental-next/docs/updated-tips/how-to-upload-a-file/java/"}},p={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-upload-a-file"},"How to Upload a File"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium."),(0,i.kt)("p",null,"In these cases people often look to a third-party tool to manipulate this window (e.g., ",(0,i.kt)("a",{parentName:"p",href:"http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/"},"AutoIt"),"). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations."),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) into the form and then submit the form."),(0,i.kt)("p",null,"Let's step through an example."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: We are using ",(0,i.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/upload"},"a file upload example")," found on ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),".")),(0,i.kt)("p",null,"First let's pull in our requisite classes for our testing framework (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"using NUnit.Framework;"),"), driving the browser with Selenium (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"using OpenQA.Selenium;"),"), and launching an instance of Firefox (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"using OpenQA.Selenium.Firefox;"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: FileUpload.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n// ...\n")),(0,i.kt)("p",null,"Now to create a class and take care of the test's setup and teardown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: FileUpload.cs\n// ...\npublic class FileUpload\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,i.kt)("p",null,"After specifying the class (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"public class FileUpload"),") we create a field variable (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"IWebDriver Driver;"),") to store our Selenium instance for reuse throughout the class. We then create a ",(0,i.kt)("inlineCode",{parentName:"p"},"SetUp()")," method with a ",(0,i.kt)("inlineCode",{parentName:"p"},"[SetUp]")," attribute so it runs before our test. In this method we are creating an instance of Selenium with Firefox (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"Driver = new FirefoxDriver();"),")."),(0,i.kt)("p",null,"After our test executes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"TearDown()")," method will run thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"[TearDown]")," attribute. This calls ",(0,i.kt)("inlineCode",{parentName:"p"},"Driver.Quit();")," which will close the browser instance."),(0,i.kt)("p",null,"Now to wire up our test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: FileUpload.cs\n// ...\n    [Test]\n    public void UploadFileFromDisk()\n    {\n        string File = "SomeFile.txt";\n        string FilePath = @"C:\\Temp\\" + File;\n\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/upload");\n        Driver.FindElement(By.Id("file-upload")).SendKeys(FilePath);\n        Driver.FindElement(By.Id("file-submit")).Click();\n\n        IWebElement FileUploaded = Driver.FindElement(By.Id("uploaded-files"));\n        Assert.IsTrue(FileUploaded.Text == File, "The File Did Not Upload Correctly");\n    }\n}\n')),(0,i.kt)("p",null,"We create an ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadFileFromDisk()")," method and add a ",(0,i.kt)("inlineCode",{parentName:"p"},"[Test]")," attribute so it is run as a test. In it we leverage a file from local disk by specifying the file (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeFile.txt"),") and its path (e.g., currently set to ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Temp\\"),", adapt as needed to suit your needs)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE: The value for ",(0,i.kt)("inlineCode",{parentName:"strong"},"FilePath")," starts with a ",(0,i.kt)("inlineCode",{parentName:"strong"},"@")," symbol. This denotes that what follows after it is a string literal. If we didn't have it, we would need to escape our backslashes (e.g, `\"C:","\\","Temp","\\",'").')),(0,i.kt)("p",null,"Next we visit the page with the upload form, input the string value of ",(0,i.kt)("inlineCode",{parentName:"p"},"FilePath")," (e.g., the full path to the file plus the filename with its extension), and submit the form. After the file is uploaded to the page it will display the filename it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect)."),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When we save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\FileUpload.sln")," from the command-line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the upload form page"),(0,i.kt)("li",{parentName:"ul"},"Inject the file path into the form and submit it"),(0,i.kt)("li",{parentName:"ul"},"Page displays the uploaded filename"),(0,i.kt)("li",{parentName:"ul"},"Grab the text from the page and assert it's what we expect"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at ",(0,i.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_IAllowsFileDetection.htm"},(0,i.kt)("inlineCode",{parentName:"a"},"IAllowsFileDetection")),"."),(0,i.kt)("p",null,"Thanks to Jonathan Taylor for contributing the initial C# code for this tip!"),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);