"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[3311],{93311:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>a,frontMatter:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const r={},l=void 0,d=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For this example we will use ",(0,s.jsx)(n.a,{href:"http://the-internet.herokuapp.com/dropdown",children:"a dropdown list"})," from ",(0,s.jsx)(n.a,{href:"http://github.com/saucelabs/the-internet",children:"the-internet"}),". In this list there a few options to select, one which should be disabled. Let's find this element and assert that it is disabled.\nFirst let's require our dependent libraries (",(0,s.jsx)(n.code,{children:"import unittest"})," for our test framework and ",(0,s.jsx)(n.code,{children:"from selenium import webdriver"})," to drive the browser), declare our test class, and wire up some test ",(0,s.jsx)(n.code,{children:"setUp"})," and ",(0,s.jsx)(n.code,{children:"tearDown"})," methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# filename: disabled_elements.py\nfrom time import sleep\nfrom selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nimport unittest\n\n\nclass DisabledElements(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now let's wire up our test."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# filename: disabled_elements.py\n# ...\n    def test_dropdown(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/dropdown')\n        wait = WebDriverWait(driver, 10)\n        dropdown_list = wait.until(\n            EC.presence_of_all_elements_located((By.ID, 'dropdown')))\n        assert not dropdown_list[0].is_enabled() is False\n\n\nif __name__ == \"__main__\":\n    unittest.main()\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After loading the page, we find all of the elements that have an option tag (which are all of the items in the dropdown list). This returns a list of elements, so we use the first one (which is the one with the text of ",(0,s.jsx)(n.code,{children:"'Please select an option'"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Once we have the element we want we see if it's enabled (with ",(0,s.jsx)(n.code,{children:".is_enabled"}),") and assert based on the response."]}),"\n",(0,s.jsx)(n.p,{children:"And since we grabbed all of the dropdown list options, we can easily test the opposite case by checking the second or third option in the list."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"        assert dropdown_list[1].is_enabled() is True\n"})}),"\n",(0,s.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["When we save this file and run it (e.g., ",(0,s.jsx)(n.code,{children:"python disabled_elements.py"})," from the command-line) here is what will happen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open a browser"}),"\n",(0,s.jsx)(n.li,{children:"Visit the page"}),"\n",(0,s.jsx)(n.li,{children:"Grab all dropdown list elements"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the first element in the list is not enabled"}),"\n",(0,s.jsx)(n.li,{children:"Assert that the second element in the list is enabled"}),"\n",(0,s.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Hopefully this tip has helped make the task of seeing whether or not an element is enabled or disabled more approachable."}),"\n",(0,s.jsx)(n.p,{children:"Happy Testing!"})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);