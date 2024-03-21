"use strict";(self.webpackChunkelemental_selenium=self.webpackChunkelemental_selenium||[]).push([[3671],{23671:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>t,default:()=>d,frontMatter:()=>s,toc:()=>l});var i=r(85893),a=r(11151);const s={},t=void 0,l=[{value:"Example 1 - A Proxy Example",id:"example-1---a-proxy-example",level:2},{value:"Example 2 - An HTTP Library Example",id:"example-2---an-http-library-example",level:2},{value:"Example 3 - A JavaScript Example",id:"example-3---a-javascript-example",level:2},{value:"Summary",id:"summary",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1---a-proxy-example",children:"Example 1 - A Proxy Example"}),"\n",(0,i.jsxs)(n.p,{children:["In this example we'll use Browsermob Proxy. For a primer on what this is and how to use it see ",(0,i.jsx)(n.a,{href:"/tips/64-limit-bandwidth",children:"tip 64"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: broken_image_1.rb\n\nrequire 'browsermob/proxy'\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef configure_proxy\n  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')\n  server.start\n  @proxy = server.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  return profile\nend\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @proxy.new_har\n\n  @driver.get 'http://the-internet.herokuapp.com/broken_images'\n\n  all_images = @driver.find_elements(tag_name: 'img')\n\n  broken_images = []\n  all_images.each do |img|\n    broken_images << @proxy.har.entries.find do |entry|\n      entry.request.url == img.attribute('src') && entry.response.status == 404\n    end\n  end\n\n  expect(broken_images).to be_empty\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you save this file and run it (e.g., ",(0,i.jsx)(n.code,{children:"ruby broken_image_1.rb"}),") here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Proxy server starts"}),"\n",(0,i.jsx)(n.li,{children:"Proxy server session created"}),"\n",(0,i.jsx)(n.li,{children:"Browser opens"}),"\n",(0,i.jsx)(n.li,{children:"Visit the page"}),"\n",(0,i.jsxs)(n.li,{children:["Iterate through each image in the HTTP Archive and see if it has a ",(0,i.jsx)(n.code,{children:"404"})," status code"]}),"\n",(0,i.jsx)(n.li,{children:"Store each broken image in a collection"}),"\n",(0,i.jsx)(n.li,{children:"Check that the broken images collection is empty"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-2---an-http-library-example",children:"Example 2 - An HTTP Library Example"}),"\n",(0,i.jsxs)(n.p,{children:["For this example, we'll use a simple HTTP library called ",(0,i.jsx)(n.a,{href:"https://github.com/rest-client/rest-client",children:(0,i.jsx)(n.code,{children:"rest-client"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: broken_image_2.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  require 'rest-client'\n\n  @driver.get 'http://the-internet.herokuapp.com/broken_images'\n\n  all_images = @driver.find_elements(tag_name: 'img')\n\n  all_images.each do |img|\n    RestClient.get img.attribute('src') do |response, request, result|\n      expect(response.code).to eq 200\n    end\n  end\n\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you save this file and run it (e.g., ",(0,i.jsx)(n.code,{children:"ruby broken_images_2.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Find all images on the page"}),"\n",(0,i.jsx)(n.li,{children:"Iterate through each image"}),"\n",(0,i.jsxs)(n.li,{children:["Perform a ",(0,i.jsx)(n.code,{children:"GET"})," request on the image and grab it's response status code"]}),"\n",(0,i.jsxs)(n.li,{children:["Assert that the status code is ",(0,i.jsx)(n.code,{children:"200"})]}),"\n",(0,i.jsx)(n.li,{children:"Close the browser"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By using an HTTP library we get the same outcome as we saw with a proxy server. There are additional requests being made but it's substantially faster since it has less overhead."}),"\n",(0,i.jsx)(n.h2,{id:"example-3---a-javascript-example",children:"Example 3 - A JavaScript Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ruby",children:"# filename: broken_image_3.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/broken_images'\n\n  all_images = @driver.find_elements tag_name: 'img'\n\n  broken_images = all_images.reject do |image|\n    @driver.execute_script(\n      \"return arguments[0].complete && \\\n        typeof arguments[0].naturalWidth != \\\"undefined\\\" && \\\n        arguments[0].naturalWidth > 0\",\n      image)\n  end\n\n  expect(broken_images).to be_empty\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you save this file and run it (e.g., ",(0,i.jsx)(n.code,{children:"broken_image_3.rb"})," from the command-line) here is what will happen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the browser"}),"\n",(0,i.jsx)(n.li,{children:"Find all images on the page"}),"\n",(0,i.jsx)(n.li,{children:"Iterate through each image and inspect that it finished loading and has a defined width"}),"\n",(0,i.jsx)(n.li,{children:"Store images that fail inspection in a collection"}),"\n",(0,i.jsx)(n.li,{children:"Assert that the collection is empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is the leanest approach since it requires no additional setup or extra requests. It's just a matter of executing some JavaScript code to inspect the images."}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Your circumstance may vary, so choose the approach that works best for you and your team."}),"\n",(0,i.jsxs)(n.p,{children:["A big thanks to ",(0,i.jsx)(n.a,{href:"https://twitter.com/bbbco",children:"Brian Goad"})," for the JavaScript solution and pointing me towards ",(0,i.jsx)(n.a,{href:"http://stackoverflow.com/questions/16784534/find-broken-images-in-page-image-replace-by-another-image/",children:"the StackOverflow post where he first came across this"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Happy Testing!"})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);