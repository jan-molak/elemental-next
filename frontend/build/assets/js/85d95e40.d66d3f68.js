"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"How To Work With JavaScript Alerts",slug:"51-javascript-alerts",number:51,publish_date:new Date("2016-06-13T00:00:00.000Z"),tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:"testing"},o=void 0,l={unversionedId:"non-updated-tips/javascript-alerts/csharp/readme",id:"non-updated-tips/javascript-alerts/csharp/readme",title:"How To Work With JavaScript Alerts",description:"The Problem",source:"@site/docs/non-updated-tips/51-javascript-alerts/csharp/readme.md",sourceDirName:"non-updated-tips/51-javascript-alerts/csharp",slug:"/non-updated-tips/javascript-alerts/csharp/51-javascript-alerts",permalink:"/docs/non-updated-tips/javascript-alerts/csharp/51-javascript-alerts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/51-javascript-alerts/csharp/readme.md",tags:[{label:"javascript",permalink:"/docs/tags/javascript"},{label:"javascript alerts",permalink:"/docs/tags/javascript-alerts"},{label:"javascript popups",permalink:"/docs/tags/javascript-popups"},{label:"javascript dialogs",permalink:"/docs/tags/javascript-dialogs"}],version:"current",frontMatter:{title:"How To Work With JavaScript Alerts",slug:"51-javascript-alerts",number:51,publish_date:"2016-06-13T00:00:00.000Z",tags:["javascript","javascript alerts","javascript popups","javascript dialogs"],level:1,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Work With Hovers",permalink:"/docs/non-updated-tips/hovers/java/50-hovers"},next:{title:"How To Work With JavaScript Alerts",permalink:"/docs/non-updated-tips/javascript-alerts/java/51-javascript-alerts"}},p={},s=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"the-problem"},"The Problem"),(0,n.kt)("p",null,"If your application triggers any JavaScript pop-ups (a.k.a. alerts, dialogs, etc.) then you need to know how to handle them in your Selenium tests."),(0,n.kt)("h2",{id:"a-solution"},"A Solution"),(0,n.kt)("p",null,"Built into Selenium is the ability to switch to an alert window and either accept or dismiss it. This way your tests can continue unencumbered by dialog boxes that may feel just out of reach."),(0,n.kt)("p",null,"Let's dig in with an example."),(0,n.kt)("h2",{id:"an-example"},"An Example"),(0,n.kt)("p",null,"Our example application is available ",(0,n.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/javascript_alerts"},"here")," on ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/the-internet"},"the-internet"),". It has various JavaScript alerts available (e.g., an alert, a confirmation, and a prompt). Let's demonstrate testing a confirmation dialog (e.g., a prompt which asks the user to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel"),")."),(0,n.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), and start our class off with some setup and teardown methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: JavaScriptAlerts.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\n\npublic class JavaScriptAlerts\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,n.kt)("p",null,"Now let's write our test."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: JavaScriptAlerts.cs\n// ...\n    [Test]\n    public void JavaScriptAlertAppearsAndAccepted()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/javascript_alerts");\n        Driver.FindElement(By.CssSelector(".example li:nth-child(2) button")).Click();\n        IAlert Popup = Driver.SwitchTo().Alert();\n        Popup.Accept();\n        string Result = Driver.FindElement(By.Id("result")).Text;\n        Assert.That(Result.Equals("You clicked: Ok"));\n    }\n\n}\n')),(0,n.kt)("p",null,"A quick glance at the page's markup shows that there are no unique IDs on the buttons. So to click on the second button (to trigger the JavaScript confirmation dialog) we find it with a child CSS Pseudo-class (",(0,n.kt)("inlineCode",{parentName:"p"},"nth-child(2)"),")."),(0,n.kt)("p",null,"After click the button to trigger the JavaScript alert we use Selenium's ",(0,n.kt)("inlineCode",{parentName:"p"},"SwitchTo().Alert();")," method to focus on the JavaScript pop-up and use ",(0,n.kt)("inlineCode",{parentName:"p"},".Accept();")," to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Ok"),". If we wanted to click ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel")," we would have used ",(0,n.kt)("inlineCode",{parentName:"p"},".Dismiss();"),"."),(0,n.kt)("p",null,"After accepting the alert our browser window will automatically regain focus and the page will display the result that we chose. We use this text for our assertion, making sure that the words ",(0,n.kt)("inlineCode",{parentName:"p"},"You clicked: Ok")," are displayed."),(0,n.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,n.kt)("p",null,"When you save this file and run it (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\JavaScriptAlerts.sln")," from the command-line) here is what will happen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser"),(0,n.kt)("li",{parentName:"ul"},"Load the page"),(0,n.kt)("li",{parentName:"ul"},"Click the second button on the page"),(0,n.kt)("li",{parentName:"ul"},"JavaScript confirmation alert appears"),(0,n.kt)("li",{parentName:"ul"},"JavaScript confirmation alert is accepted and goes away"),(0,n.kt)("li",{parentName:"ul"},"Browser window is returned to focus"),(0,n.kt)("li",{parentName:"ul"},"Assert that the result on the page is what we expect"),(0,n.kt)("li",{parentName:"ul"},"Close the browser")),(0,n.kt)("h2",{id:"outro"},"Outro"),(0,n.kt)("p",null,"Happy Testing!"))}d.isMDXComponent=!0}}]);