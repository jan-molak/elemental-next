"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[9783],{59783:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>l,frontMatter:()=>r,toc:()=>c});var s=t(85893),i=t(11151);const r={},a=void 0,c=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Let's start by importing our requisite libraries and wire up some setup and teardown methods."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// filename: test/screenshot.spec.js\nconst assert = require("assert");\nconst { Builder, By } = require("selenium-webdriver");\nconst fs = require("fs");\nconst path = require("path");\n\ndescribe("Screenshot", function() {\n  let driver;\n\n  beforeEach(async function() { this.timeout(60000) driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    if (this.currentTest.state !== "passed") {\n      const testName = this.currentTest.fullTitle().replace(/\\s/g, "-");\n      const fileName = path.join(__dirname, `screenshot_${testName}.jpg`);\n      fs.writeFileSync(fileName, await driver.takeScreenshot(), "base64");\n    }\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"afterEach"})," we check to see if the test was unsuccessful (e.g., ",(0,s.jsx)(n.code,{children:'this.currenTest.state !== "passed"'}),"). If not, then the test has either failed or errored and we capture a screenshot through the help of Selenium's ",(0,s.jsx)(n.code,{children:".takeScreenshot()"})," function. To save it to disk, we use ",(0,s.jsx)(n.code,{children:"fs"})," and its ",(0,s.jsx)(n.code,{children:"writeFileSync"})," function. It takes the full path to save to, the payload (e.g., the screenshot), and the encoding (which for the image is ",(0,s.jsx)(n.code,{children:'"base64"'}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["To make the filename unique we use the test name after cleaning it up (by replacing spaces with ",(0,s.jsx)(n.code,{children:"-"}),"). When this command executes it will save an image file (e.g., ",(0,s.jsx)(n.code,{children:"screenshot_Screenshot-on-failure.jpg"}),") to the local system in the current working directory."]}),"\n",(0,s.jsx)(n.p,{children:"Now to wire up a test which will fail."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// filename: test/screenshot.spec.js\n// ...\n  it("on failure", async function() {\n    await driver.get("http://the-internet.herokuapp.com");\n    assert(true === false);\n  });\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["When we save this file and run it (",(0,s.jsx)(n.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the browser"}),"\n",(0,s.jsxs)(n.li,{children:["Load the homepage of ",(0,s.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"})]}),"\n",(0,s.jsx)(n.li,{children:"Fail on the assertion"}),"\n",(0,s.jsx)(n.li,{children:"Capture a screenshot in the current working directory"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);