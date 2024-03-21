"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[3955],{33955:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>s,default:()=>o,frontMatter:()=>d,toc:()=>a});var i=r(85893),t=r(11151);const d={},s=void 0,a=[{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["In this example we are going to take the code from our previous tip (",(0,i.jsx)(n.a,{href:"http://elementalselenium.com/tips/7-use-a-page-object",children:"Using a Page Object"}),") and modify it to use a Base Page Object."]}),"\n",(0,i.jsx)(n.p,{children:"Previous tip's code to be modified:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  ENV['base_url'] = 'http://the-internet.herokuapp.com/dynamic_loading/2'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nclass DynamicLoading\n\n  START_BUTTON = { css: '#start button' }\n  FINISH_BUTTON = { css: '#finish' }\n\n  attr_reader :driver\n\n  def initialize(driver)\n    @driver = driver\n    visit\n    verify_page\n  end\n\n  def visit\n    driver.get ENV['base_url']\n  end\n\n  def start\n    driver.find_element(START_BUTTON).click\n  end\n\n  def finish_present?\n    wait_for { @driver.find_element(FINISH_BUTTON).displayed? }\n  end\n\n  def finish_text\n    driver.find_element(FINISH_BUTTON).text\n  end\n\n  private\n\n    def verify_page\n      expect(driver.title).to eql('The Internet')\n    end\n\n    def wait_for(seconds=10)\n      Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\n    end\n\nend\n\nend\n\nrun do\n  dynamic_loading = DynamicLoading.new(@driver)\n  dynamic_loading.start\n  dynamic_loading.finish_present?\n  expect(dynamic_loading.finish_text).to eql('Hello World!')\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now let's modify this code to perform a Google search. First, we include our libraries and wire up our setup, teardown, and run actions as usual."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"require 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\n  ENV['base_url'] = 'http://www.google.com'\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next we create our Base Page Object. It's a simple Ruby class that our other Page Objects will inherit from."}),"\n",(0,i.jsxs)(n.p,{children:["At the top of it we set an ",(0,i.jsx)(n.code,{children:"attr_reader"})," to store the Selenium driver object that gets passed to it through the ",(0,i.jsx)(n.code,{children:"initialize"})," method. And the rest of the class is filled with a series of common Selenium actions that we pull from the GoogleSearch Page Object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"class Base\n\n  attr_reader :driver\n\n  def initialize(driver)\n    @driver = driver\n  end\n\n  def visit(url='/')\n    driver.get(ENV['base_url'] + url)\n  end\n\n  def find(locator)\n    driver.find_element locator\n  end\n\n  def clear(locator)\n    find(locator).clear\n  end\n\n  def type(locator, input)\n    find(locator).send_keys input\n  end\n\n  def click_on(locator)\n    find(locator).click\n  end\n\n  def displayed?(locator)\n    driver.find_element(locator).displayed?\n    true\n    rescue Selenium::WebDriver::Error::NoSuchElementError\n      false\n  end\n\n  def text_of(locator)\n    find(locator).text\n  end\n\n  def title\n    driver.title\n  end\n\n  def wait_for(seconds=5)\n    Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\n  end\n\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["With the Base class in hand we simply update the GoogleSearch Page Object to inherit from it (with ",(0,i.jsx)(n.code,{children:"< Base"})," after the class name) and wire it up and clean things up."]}),"\n",(0,i.jsxs)(n.p,{children:["Since we have some actions we want to execute when we load the GoogleSearch object, we keep them in the ",(0,i.jsx)(n.code,{children:"initialize"})," method. But since we are inheriting from the Base class we need to call ",(0,i.jsx)(n.code,{children:"super"})," before them. This is responsible for passing the driver object into the Base class and making all of its methods run smoothly."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"class GoogleSearch < Base\n\n  SEARCH_BOX        = { name: 'q' }\n  TOP_SEARCH_RESULT = { css: '#rso .g' }\n\n  def initialize(driver)\n    super(driver)\n    visit('/')\n    verify_page\n  end\n\n  def search_for(search_term)\n    type SEARCH_BOX, search_term\n    find(SEARCH_BOX).send_keys(:enter)\n  end\n\n  def search_result_present?(search_result)\n    wait_for { displayed?(TOP_SEARCH_RESULT) }\n    text_of(TOP_SEARCH_RESULT).include? search_result\n  end\n\n  private\n\n    def verify_page\n      expect(driver.title).to include ('Google')\n    end\n\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once that's done, we'll add our actual test script."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"run {\n  google = GoogleSearch.new(@driver)\n  google.search_for 'elemental selenium tips'\n  result = google.search_result_present? 'Elemental Selenium'\n  expect(result).to be == true\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"expected-behavior",children:"Expected Behavior"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Load Google"}),"\n",(0,i.jsxs)(n.li,{children:["Search for ",(0,i.jsx)(n.em,{children:"elemental selenium tips"})]}),"\n",(0,i.jsx)(n.li,{children:"Wait for the first search result to render"}),"\n",(0,i.jsx)(n.li,{children:"Grab the text from it"}),"\n",(0,i.jsx)(n.li,{children:"Assert that the text we want is within it"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Now we are in a position to write more Page Objects that leverage common actions without duplication or any Selenium code directly in them."}),"\n",(0,i.jsx)(n.p,{children:"Hopefully this tip has helped you find your way further down the rabbit hole of Page Objects (in a good way)."}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);