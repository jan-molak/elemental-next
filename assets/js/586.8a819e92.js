"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[586],{30586:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>a,toc:()=>o});var i=t(85893),r=t(11151);const a={},s=void 0,o=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In this example we are going to take the following sample code and upgrade it with the use of a Page Object."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  @base_url = 'http://the-internet.herokuapp.com/dynamic_loading/2'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\ndef wait_for(seconds=10)\n  Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\nend\n\nrun do\n    @driver.get @base_url\n    @driver.find_element(css: '#start button').click\n    wait_for { @driver.find_element(css: '#finish').displayed? }\n    expect(@driver.find_element(css: '#finish').text).to eql('Hello World!')\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"The first order of business is pretty simple. We keep our setup, teardown, and run actions mostly the same.\nBut we change the base_url from an instance variable to an environment variable. Doing this will enable\nus to access it from anywhere in our test suite."}),"\n",(0,i.jsx)(n.p,{children:"While the usage of environment variables can be a slippery slope, this is an ideal candidate for it since\nit effects the overall behavior of the suite."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  ENV['base_url'] = 'http://the-internet.herokuapp.com/dynamic_loading/2'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next we create a Page Object for the Dynamic Loading page by using a standard Ruby class and add some relevant\nbits to it."}),"\n",(0,i.jsx)(n.p,{children:"At the top of it we pull out the CSS locators used in our test steps and put them into helpfully\nnamed constants to use instead. And instead of using the two part 'how', 'what' approach, we are\nusing a hash to store the locator type and its value."}),"\n",(0,i.jsxs)(n.p,{children:["Next we use ",(0,i.jsx)(n.code,{children:"attr_reader"})," to create a place to store the Selenium WebDriver instance for use throughout the class."]}),"\n",(0,i.jsxs)(n.p,{children:["The class expects an argument (e.g. the Selenium WebDriver instance) which is received through the initialize method.\nInside the initialize method we take care of passing the Selenium object into the ",(0,i.jsx)(n.code,{children:"attr_reader"})," object along with\nvisiting the page and verifying that we are in the correct place. All of these things will execute in order when\nthis class is instantiated."]}),"\n",(0,i.jsx)(n.p,{children:"We then break out each of the test steps into methods that execute the behavior specific to the page while also\nswapping out the hard-coded CSS locators for our new CSS locator constant variables."}),"\n",(0,i.jsx)(n.p,{children:"At the bottom of the class we have private helper methods. These methods aren't necessarily specific to the page\nthis class represents, but they are useful for it to function. So we want to access them within the class, but\nmake it so they're not available outside of the class. Using the private classification gets us this behavior nicely."}),"\n",(0,i.jsxs)(n.p,{children:["And lastly, we update the ",(0,i.jsx)(n.code,{children:"displayed?"})," private method to take a single argument for a 'locator' object (e.g. one of\nour CSS locator constant variables)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"class DynamicLoading\n\n  START_BUTTON = { css: '#start button' }\n  FINISH_BUTTON = { css: '#finish' }\n\n  attr_reader :driver\n\n  def initialize(driver)\n    @driver = driver\n    visit\n    verify_page\n  end\n\n  def visit\n    driver.get ENV['base_url']\n  end\n\n  def start\n    driver.find_element(START_BUTTON).click\n  end\n\n  def finish_present?\n    wait_for { @driver.find_element(FINISH_BUTTON).displayed? }\n  end\n\n  def finish_text\n    driver.find_element(FINISH_BUTTON).text\n  end\n\n  private\n\n    def verify_page\n      expect(driver.title).to eql('The Internet')\n    end\n\n    def wait_for(seconds=10)\n      Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\n    end\n\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"With our new Page Object in hand, our run action cleans up considerably. Making it more succinct and readable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"run do\n  dynamic_loading = DynamicLoading.new(@driver)\n  dynamic_loading.start\n  dynamic_loading.finish_present?\n  expect(dynamic_loading.finish_text).to eql('Hello World!')\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It's worth noting that while we are peforming an assertion in the Page Object in our ",(0,i.jsx)(n.code,{children:"verify_page"}),"\naction ",(0,i.jsx)(n.strong,{children:"assertions should only be performed in your test scripts"})," (just like the run action above).\nUsing a ",(0,i.jsx)(n.code,{children:"verify_page"})," action is just a helpful exception to the rule."]}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Load Dynamic Loading page on The Internet"}),"\n",(0,i.jsx)(n.li,{children:"Click on start"}),"\n",(0,i.jsx)(n.li,{children:"Wait for the finish message to appear"}),"\n",(0,i.jsx)(n.li,{children:"Grab the text from it"}),"\n",(0,i.jsx)(n.li,{children:"Assert that the text we want is within it"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Hopefully this tip has helped you wade into the waters of Page Objects in Selenium."}),"\n",(0,i.jsx)(n.p,{children:"Stay tuned for a future tip where we implement a Base Page Object class to abstract things even further\nand roll our own Domain Specific Language (DSL) for our test suite."}),"\n",(0,i.jsx)(n.p,{children:"Until then, Happy Testing!"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);