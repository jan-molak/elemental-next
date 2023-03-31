"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"How To Remove Third-party Resources",slug:"66-blacklist",number:66,publish_date:new Date("2015-10-20T00:00:00.000Z"),tags:["browsermob-proxy","proxy"],level:3,category:"tools"},l=void 0,i={unversionedId:"non-updated-tips/blacklist/readme",id:"non-updated-tips/blacklist/readme",title:"How To Remove Third-party Resources",description:"The Problem",source:"@site/docs/non-updated-tips/66-blacklist/readme.md",sourceDirName:"non-updated-tips/66-blacklist",slug:"/non-updated-tips/blacklist/66-blacklist",permalink:"/docs/non-updated-tips/blacklist/66-blacklist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/66-blacklist/readme.md",tags:[{label:"browsermob-proxy",permalink:"/docs/tags/browsermob-proxy"},{label:"proxy",permalink:"/docs/tags/proxy"}],version:"current",frontMatter:{title:"How To Remove Third-party Resources",slug:"66-blacklist",number:66,publish_date:"2015-10-20T00:00:00.000Z",tags:["browsermob-proxy","proxy"],level:3,category:"tools"},sidebar:"tutorialSidebar",previous:{title:"How To Visually Verify Your Locators",permalink:"/docs/non-updated-tips/highlight-elements/javascript/65-highlight-elements"},next:{title:"How To Test For Broken Images",permalink:"/docs/non-updated-tips/broken-images/67-broken-images"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"There are plenty of external resources that get loaded onto a page that aren't directly relevant to the functionality you're testing (e.g., Facebook widgets, Analytics, JavaScript snippets, etc.). And these external resources have the potential to negatively impact your test runs due to slow load times."),(0,o.kt)("p",null,"So how do you protect your tests from these things that are outside of your control?"),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"By leveraging a proxy server in our tests we can block the external resources we don't want to load by adding them to a blacklist."),(0,o.kt)("p",null,"Let's dig in with an example."),(0,o.kt)("h2",{id:"an-example"},"An Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: For a brief primer on proxy servers check out ",(0,o.kt)("a",{parentName:"strong",href:"/tips/64-limit-bandwidth"},"tip 64"),".")),(0,o.kt)("p",null,"To get started we'll need to download a copy of Browsermob Proxy (",(0,o.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"link"),") and write our script. In it we'll pull in our requisite libraries (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"browsermob/proxy")," to control the proxy server, ",(0,o.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, and ",(0,o.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and it's matchers to perform assertions)."),(0,o.kt)("p",null,"After that, we'll configure the proxy server and wire up some simple ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods. As part of ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," we'll want to configure the blacklist. To do that we'll add a regular expression to find the resource we want to block and the status code we'd like the resource to be changed to (e.g., blocking a resource from loading with a ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," response code and having it return a ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," instead)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: blacklist.rb\n\nrequire 'browsermob/proxy'\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef configure_proxy\n  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.0-beta-9/bin/browsermob-proxy')\n  server.start\n  @proxy = server.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  return profile\nend\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\n  @proxy.blacklist('http:\\/\\/the-internet.herokuapp.com\\/slow_external', 404)\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"Now we're ready to wire up our test. Let's use an example from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," that has a slow loading resource. It has a rogue ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request that takes 30 seconds to load. You can see it ",(0,o.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/slow"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @proxy.new_har\n  @driver.get 'http://the-internet.herokuapp.com/slow'\n  entry = @proxy.har.entries.find { |e| e.request.url.include? 'slow_external' }\n  expect(entry).not_to be_nil\n  expect(entry.response.status).to eq(404)\nend\n")),(0,o.kt)("p",null,"We start the test by creating a new HTTP Archive (HAR) for tracking the page requests. We then load the example page, find the entry for the slow loading resource from the HAR, and assert that the response code for it is ",(0,o.kt)("inlineCode",{parentName:"p"},"404"),"."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"If you save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby blacklist.rb")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Proxy server starts"),(0,o.kt)("li",{parentName:"ul"},"Proxy server session created"),(0,o.kt)("li",{parentName:"ul"},"Browser opens"),(0,o.kt)("li",{parentName:"ul"},"Visit the page"),(0,o.kt)("li",{parentName:"ul"},"Find the entry we want from the HTTP Archive"),(0,o.kt)("li",{parentName:"ul"},"Check that the HTTP status code for the entry has the correct status code from the blacklist"),(0,o.kt)("li",{parentName:"ul"},"Browser closes"),(0,o.kt)("li",{parentName:"ul"},"Proxy session closes")),(0,o.kt)("h2",{id:"outro"},"Outro"),(0,o.kt)("p",null,"Happy Testing!"))}d.isMDXComponent=!0}}]);