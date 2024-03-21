"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[8917],{28917:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,toc:()=>o});var s=n(85893),a=n(11151);const r={},i=void 0,o=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["NOTE: You can see the application under test ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"here"}),". It's an example from ",(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/the-internet",children:"the-internet"}),". In the example there are 2 tables. We will start with the first table and then work with the second."]})}),"\n",(0,s.jsx)(t.p,{children:"We kick things off by pulling in our requisite libraries, declare our test class, and wire up some test setup and teardown methods."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/tables.spec.js\nconst assert = require("assert");\nconst { Builder, By, Key } = require("selenium-webdriver");\n\ndescribe("Tables", function() {\n  let driver;\n\n  beforeEach(async function() {\n  this.timeout(60000);\n    driver = await new Builder().forBrowser("chrome").build();\n  });\n\n  afterEach(async function() {\n    await driver.quit();\n  });\n// ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Here is the markup from the first table example we're working with. Note that it does not have any ",(0,s.jsx)(t.code,{children:"id"})," or ",(0,s.jsx)(t.code,{children:"class"})," attributes."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table1\" class=\"tablesorter\">\n    <thead>\n      <tr>\n        <th><span>Last Name</span></th>\n        <th><span>First Name</span></th>\n        <th><span>Email</span></th>\n        <th><span>Due</span></th>\n        <th><span>Web Site</span></th>\n        <th><span>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Smith</td>\n        <td>John</td>\n        <td>jsmith@gmail.com</td>\n        <td>$50.00</td>\n        <td>http://www.jsmith.com</td>\n        <td>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["There are 6 columns (",(0,s.jsx)(t.code,{children:"Last Name"}),", ",(0,s.jsx)(t.code,{children:"First Name"}),", ",(0,s.jsx)(t.code,{children:"Email"}),", ",(0,s.jsx)(t.code,{children:"Due"}),", ",(0,s.jsx)(t.code,{children:"Web Site"}),", and ",(0,s.jsx)(t.code,{children:"Action"}),"). Each one is sortable by clicking on the column header. The first click should sort them in ascending order, the second click in descending order."]}),"\n",(0,s.jsxs)(t.p,{children:["There is a small sampling of data in the table to work with (4 rows worth). So we should be able to sort the data, grab it, and confirm that it sorted correctly. So lets do that in our first test with the ",(0,s.jsx)(t.code,{children:"Due"})," column using a CSS pseudo Class."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/tables.spec.js\n// ...\n  it("should sort number column in ascending order", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    const due_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(4)")\n    );\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort());\n  });\n// ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After loading the page we find and click the column heading that we want with a CSS pseudo-class (e.g. ",(0,s.jsx)(t.code,{children:"#table1 thead tr th:nth-of-type(4)"}),"). This locator targets the 4th ",(0,s.jsx)(t.code,{children:"<th>"})," element in the table heading section (e.g., ",(0,s.jsx)(t.code,{children:"<thead>"}),") (which is the ",(0,s.jsx)(t.code,{children:"Due"})," column heading)."]}),"\n",(0,s.jsxs)(t.p,{children:["We then use another pseudo-class to find all ",(0,s.jsx)(t.code,{children:"<td>"})," elements within the ",(0,s.jsx)(t.code,{children:"Due"})," column by looking for the 4th ",(0,s.jsx)(t.code,{children:"<td>"})," of each row in the table body. Once we have them we grab each of their text values, clean them up (",(0,s.jsx)(t.code,{children:".replace('$','')"}),"), convert them to a number (",(0,s.jsx)(t.code,{children:"Number()"}),"), and store them all in a array called ",(0,s.jsx)(t.code,{children:"dues"}),". We then compare this collection to a sorted version of itself to see if they match. If they do, then the ",(0,s.jsx)(t.code,{children:"Due"})," column was sorted in ascending order and the test will pass."]}),"\n",(0,s.jsxs)(t.p,{children:["If we wanted to test for descending order, we would need to click the ",(0,s.jsx)(t.code,{children:"Due"})," heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/tables.spec.js\n// ...\n  it("should sort number column in descending order", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))\n      .click();\n    const due_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(4)")\n    );\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort().reverse());\n  });\n// ...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the ",(0,s.jsx)(t.code,{children:"Email"})," column."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/tables.spec.js\n// ...\n  it("should sort text column in ascending", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    await driver\n      .findElement(By.css("#table1 thead tr th:nth-of-type(3)"))\n      .click();\n    const email_column = await driver.findElements(\n      By.css("#table1 tbody tr td:nth-of-type(3)")\n    );\n    let emails = [];\n    for (const entry in email_column) {\n      emails.push(await email_column[entry].getText());\n    }\n    assert(emails === emails.sort());\n  });\n// ...\n'})}),"\n",(0,s.jsx)(t.p,{children:"The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion."}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"But what about older browsers?"}),"\n",(0,s.jsxs)(t.p,{children:["If we run these against an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating ",(0,s.jsx)(t.code,{children:"Unable to find element"}),". This is because older browsers don't support CSS Pseudo-classes."]}),"\n",(0,s.jsxs)(t.p,{children:["You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on ",(0,s.jsx)(t.strong,{children:"current browsers"})," and submit a request to your front-end developers to update the table markup with some semantic ",(0,s.jsx)(t.code,{children:"class"})," attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly."]}),"\n",(0,s.jsxs)(t.p,{children:["Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second example of ",(0,s.jsx)(t.a,{href:"http://the-internet.herokuapp.com/tables",children:"our application under test"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<table id=\"table2\" class=\"tablesorter\">\n    <thead>\n      <tr> <th><span class='last-name'>Last Name</span></th>\n        <th><span class='first-name'>First Name</span></th>\n        <th><span class='email'>Email</span></th>\n        <th><span class='dues'>Due</span></th>\n        <th><span class='web-site'>Web Site</span></th>\n        <th><span class='action'>Action</span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class='last-name'>Smith</td>\n        <td class='first-name'>John</td>\n        <td class='email'>jsmith@gmail.com</td>\n        <td class='dues'>$50.00</td>\n        <td class='web-site'>http://www.jsmith.com</td>\n        <td class='action'>\n          <a href='#edit'>edit</a>\n          <a href='#delete'>delete</a>\n        </td>\n      </tr>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With these new attributes the locators in our sorting tests become a lot simpler and more expressive. Let's write a new ",(0,s.jsx)(t.code,{children:"Due"})," ascending order test to demonstrate."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'// filename: test/tables.spec.js\n// ...\n  it("sort number column in ascending order with helpful locators", async function() {\n    await driver.get("http://the-internet.herokuapp.com/tables");\n    driver.findElement(By.css("#table2 thead .dues")).click();\n    const due_column = await driver.findElements(By.css("#table2 tbody .dues"));\n    let dues = [];\n    for (const entry in due_column) {\n      const text = await due_column[entry].getText();\n      dues.push(Number(text.replace("$", "")));\n    }\n    assert(dues === dues.sort());\n  });\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Not only will these selectors work in current ",(0,s.jsx)(t.em,{children:"and"})," older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order."]}),"\n",(0,s.jsx)(t.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["When we save this file and run it (e.g., ",(0,s.jsx)(t.code,{children:"mocha"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Browser opens"}),"\n",(0,s.jsx)(t.li,{children:"Load the page"}),"\n",(0,s.jsx)(t.li,{children:"Click the column heading"}),"\n",(0,s.jsx)(t.li,{children:"Grab the values for the target column"}),"\n",(0,s.jsx)(t.li,{children:"Assert that the column is sorted in the correct order (ascending or descending depending on the test)"}),"\n",(0,s.jsx)(t.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(t.p,{children:["CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out ",(0,s.jsx)(t.a,{href:"/docs/what-to-test/18-what-to-test",children:"tip 18"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For more info on CSS Pseudo-classes see ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/resources/selenium/css-selectors",children:"this write-up by Sauce Labs"}),", and maybe ",(0,s.jsx)(t.a,{href:"http://www.w3.org/TR/css3-selectors/#structural-pseudos",children:"the W3C spec CSS3"})," if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up ",(0,s.jsx)(t.a,{href:"http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Happy Testing!"})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);