"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[2300],{42300:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>o,frontMatter:()=>s,toc:()=>l});var i=t(85893),r=t(11151);const s={},a=void 0,l=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Our example application is available ",(0,i.jsx)(n.a,{href:"http://the-internet.herokuapp.com/javascript_alerts",children:"here"})," on ",(0,i.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". It has various JavaScript alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,i.jsx)(n.code,{children:"Ok"})," or ",(0,i.jsx)(n.code,{children:"Cancel"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["First let's include our requisite classes for our test framework (e.g., ",(0,i.jsx)(n.code,{children:"NUnit.Framework"}),"), driving the browser with Selenium (e.g., ",(0,i.jsx)(n.code,{children:"OpenQA.Selenium"}),", etc.), and start our class off with some setup and teardown methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"// filename: JavaScriptAlerts.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class JavaScriptAlerts\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now let's write our test."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// filename: JavaScriptAlerts.cs\n// ...\n    [Test]\n    public void JavaScriptAlertAppearsAndAccepted()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/javascript_alerts");\n        Driver.FindElement(By.CssSelector(".example li:nth-child(2) button")).Click();\n        IAlert Popup = Driver.SwitchTo().Alert();\n        Popup.Accept();\n        string Result = Driver.FindElement(By.Id("result")).Text;\n        Assert.That(Result.Equals("You clicked: Ok"));\n    }\n\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find it with a child CSS Pseudo-class (",(0,i.jsx)(n.code,{children:"nth-child(2)"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["After click the button to trigger the JavaScript alert we use Selenium's ",(0,i.jsx)(n.code,{children:"SwitchTo().Alert();"})," method to focus on the JavaScript pop-up and use ",(0,i.jsx)(n.code,{children:".Accept();"})," to click ",(0,i.jsx)(n.code,{children:"Ok"}),". If we wanted to click ",(0,i.jsx)(n.code,{children:"Cancel"})," we would have used ",(0,i.jsx)(n.code,{children:".Dismiss();"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After accepting the alert our browser window will automatically regain focus and the page will display the result that we chose. We use this text for our assertion, making sure that the words ",(0,i.jsx)(n.code,{children:"You clicked: Ok"})," are displayed."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["When you save this file and run it (e.g., ",(0,i.jsx)(n.code,{children:"nunit3-console.exe .\\JavaScriptAlerts.sln"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Load the page"}),"\n",(0,i.jsx)(n.li,{children:"Click the second button on the page"}),"\n",(0,i.jsx)(n.li,{children:"JavaScript confirmation alert appears"}),"\n",(0,i.jsx)(n.li,{children:"JavaScript confirmation alert is accepted and goes away"}),"\n",(0,i.jsx)(n.li,{children:"Browser window is returned to focus"}),"\n",(0,i.jsx)(n.li,{children:"Assert that the result on the page is what we expect"}),"\n",(0,i.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["We've learned how to accept/dismiss Javascript alerts using Selenium Webdriver by locating the alert using Selenium's ",(0,i.jsx)(n.code,{children:"SwitchTo().Alert();"}),". After accepting/dismissing the alert, our main browser window will automatically regain focus and the page will display the result."]}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);