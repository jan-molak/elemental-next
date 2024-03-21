"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[1612],{41612:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>o,frontMatter:()=>r,toc:()=>c});var i=t(85893),s=t(11151);const r={},a=void 0,c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Let's start by including our requisite classes for our test framework (e.g., ",(0,i.jsx)(n.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,i.jsx)(n.code,{children:"OpenQA.Selenium"}),", etc.), accessing C#'s image functionality (e.g., ",(0,i.jsx)(n.code,{children:"System.Drawing.Imaging"}),"), and start our class off with some setup and teardown methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"// filename: Screenshot.cs\nusing NUnit.Framework;\nusing NUnit.Framework.Interfaces;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Drawing.Imaging;\n\npublic class Screenshot\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        if (TestContext.CurrentContext.Result.Outcome.Status.Equals(TestStatus.Failed))\n            TakeScreenshot();\n\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Notice in the teardown we have a conditional statement before we call ",(0,i.jsx)(n.code,{children:"Driver.Quit();"}),". It's checking to see if the test failed, if it has then it will take a screenshot. Right now the method we're referencing isn't declared. Let's add it now."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// filename: Screenshot.cs\n// ...\n    private void TakeScreenshot()\n    {\n        string SaveLocation = @"C:\\Temp\\" +\n                               "failshot_" +\n                               TestContext.CurrentContext.Test.FullName +\n                               ".png";\n        ITakesScreenshot ScreenshotDriver = (ITakesScreenshot) Driver;\n        ScreenshotDriver.GetScreenshot().SaveAsFile(SaveLocation, ScreenshotImageFormat.Png);\n    }\n// ...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["There are numerous ways to make the filename unique for the screenshot (e.g., unique ID, timestamp, etc.). The simplest way to get started is with the full test name (e.g., test class name and test method name), which we've done. We also specified the save location on disk using a string literal (e.g., ",(0,i.jsx)(n.code,{children:'@"C:\\Temp"'}),"), feel free to change it to suit your needs."]}),"\n",(0,i.jsxs)(n.p,{children:["The rest is a simple matter of casting the ",(0,i.jsx)(n.code,{children:"Driver"})," as an ",(0,i.jsx)(n.code,{children:"ITakeScreenshot"})," object and calling ",(0,i.jsx)(n.code,{children:"GetScreenshot().SaveAsFile"})," (specifying the save location and image format -- which is PNG in this case)."]}),"\n",(0,i.jsx)(n.p,{children:"Now let's wire up our test with a forced failure."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// filename: Screenshot.cs\n// ...\n    [Test]\n    public void ScreenShotOnFailure()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(false.Equals(true));\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["When you save this file and run it (",(0,i.jsx)(n.code,{children:"nunit3-console.exe .\\Screenshot.sln"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Visit the page"}),"\n",(0,i.jsx)(n.li,{children:"Test Fails"}),"\n",(0,i.jsxs)(n.li,{children:["Selenium Captures a screenshot in ",(0,i.jsx)(n.code,{children:"C:\\Temp"})," with the name ",(0,i.jsx)(n.code,{children:"failshot_Screenshot.ScreenShotOnFailure.png"})]}),"\n",(0,i.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);