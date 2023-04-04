"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"How To Access Selenium Logs In Real-time",slug:"54-logging",number:54,publish_date:new Date("2014-06-10T00:00:00.000Z"),tags:["logging","logs","growl","growl notifications"],level:3,category:"logging"},l=void 0,i={unversionedId:"non-updated-tips/logging/readme",id:"non-updated-tips/logging/readme",title:"How To Access Selenium Logs In Real-time",description:"The Problem",source:"@site/docs/non-updated-tips/54-logging/readme.md",sourceDirName:"non-updated-tips/54-logging",slug:"/non-updated-tips/logging/54-logging",permalink:"/elemental-next/docs/non-updated-tips/logging/54-logging",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/54-logging/readme.md",tags:[{label:"logging",permalink:"/elemental-next/docs/tags/logging"},{label:"logs",permalink:"/elemental-next/docs/tags/logs"},{label:"growl",permalink:"/elemental-next/docs/tags/growl"},{label:"growl notifications",permalink:"/elemental-next/docs/tags/growl-notifications"}],version:"current",frontMatter:{title:"How To Access Selenium Logs In Real-time",slug:"54-logging",number:54,publish_date:"2014-06-10T00:00:00.000Z",tags:["logging","logs","growl","growl notifications"],level:3,category:"logging"},sidebar:"tutorialSidebar",previous:{title:"How To Add Growl Notifications To Your Tests",permalink:"/elemental-next/docs/non-updated-tips/growl/java/53-growl"},next:{title:"How To Automatically Retry Failed Tests",permalink:"/elemental-next/docs/non-updated-tips/retry-failed-tests/56-retry-failed-tests"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Logging is a deep rabbit hole to fall down in Selenium. ",(0,o.kt)("a",{parentName:"p",href:"https://code.google.com/p/selenium/wiki/Logging"},"The documentation")," isn't complete and the approach for each of the browser and language bindings is inconsistent and hard to find examples for."),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"By accessing what we want through the ",(0,o.kt)("a",{parentName:"p",href:"https://code.google.com/p/selenium/wiki/JsonWireProtocol"},"WebDriver Wire Protocol"),", we can get at the logs we want in a browser agnostic way that also gets us the information in real time."),(0,o.kt)("h2",{id:"an-example"},"An Example"),(0,o.kt)("p",null,"First, we'll need to ",(0,o.kt)("a",{parentName:"p",href:"http://selenium-release.storage.googleapis.com/index.html"},"download a copy of Selenium Standalone Server")," and launch it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar selenium-server-standalone-2.42.0.jar\n")),(0,o.kt)("p",null,"Next, we'll want to create a mechanism to access the Selenium Server logs through the WebDriver Wire Protocol via an HTTP library -- filtering out the logs we don't want and return the most recent one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'# filename: logger.rb\n\nrequire \'rest-client\'\nrequire \'json\'\n\nclass Logger\n\n  def initialize(session_id)\n    @session_id = session_id\n  end\n\n  def latest\n    parse(fetch).last\n  end\n\n  private\n\n  def fetch\n    RestClient.post(\n      "http://127.0.0.1:4444/wd/hub/session/#{@session_id}/log",\n      { "type" => "client" }.to_json,\n      content_type: :json,\n      accept: :json\n    )\n  end\n\n  def parse(input)\n    logs = JSON.parse(input)\n    messages = []\n    logs["value"].each do |entry|\n      msg = entry["message"]\n      unless msg.include? "session:" or\n        msg.include? "fetching logs" or\n          msg.include? "execute script"\n            messages << msg.scan(/handle(.*)$/)[-1][-1]\n      end\n    end\n    messages\n  end\n\nend\n')),(0,o.kt)("p",null,"A couple of things to point out in this class."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"session_id")," will come from the instance of Selenium that gets created in our test (via Selenium Remote). This ID maps to a URI endpoint on the Selenium Server that we use to get the logging payload with an HTTP POST (see ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"). We are then taking that payload (which comes back as a JSON object in String form) and parsing it into JSON, iterating through it, grabbing the relevant bits we want (see ",(0,o.kt)("inlineCode",{parentName:"p"},"parse"),"). When that's all done, we return the last entry found (see ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),")."),(0,o.kt)("p",null,"And of ",(0,o.kt)("a",{parentName:"p",href:"https://code.google.com/p/selenium/wiki/Logging#Log_Types"},"all the available log types we can access"),", we're grabbing the client logs (which will give us the real time actions taken in our test)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: Each time we access the logs, it will clear the cache of logs. So the next time we access them, it will only return new entries.")),(0,o.kt)("p",null,"Now we're ready to wire up our test to use the Selenium Server, access our logger class, and output the latest log entries after each Selenium action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: log_test.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec-expectations'\ninclude RSpec::Matchers\nrequire_relative 'logger'\n\ndef setup\n  @driver = Selenium::WebDriver.for :remote, url: 'http://127.0.0.1:4444/wd/hub'\n  @logger = Logger.new(@driver.session_id)\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com'\n  puts @logger.latest\n  @driver.find_elements(css: 'a').last.click\n  puts @logger.latest\nend\n")),(0,o.kt)("p",null,"When we run this (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby log_test.rb"),"), here's what we should see."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," Done: [get: http://the-internet.herokuapp.com]\n Done: [click: 23 [[FirefoxDriver: firefox on MAC (2afa5f83-1aba-ad43-b1f3-9b4907ae9471)] -> css selector: a]]\n")),(0,o.kt)("p",null,"If we couple this with jQuery Growl Notifications (",(0,o.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/53-growl"},"covered in the last tip"),") then we can really put this information to work."),(0,o.kt)("p",null,"Let's add some helper methods to add jQuery Growl to the page and display notification messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def add_growl_notifications\n  @driver.execute_script(\"if (!window.jQuery) {\n      var jquery = document.createElement('script'); jquery.type = 'text/javascript';\n      jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';\n      document.getElementsByTagName('head')[0].appendChild(jquery);\n    }\")\n\n  @driver.execute_script(\"$.getScript('http://the-internet.herokuapp.com/js/vendor/jquery.growl.js')\")\n\n  @driver.execute_script(\"$('head').append('<link rel=\\\"stylesheet\\\" href=\\\"http://the-internet.herokuapp.com/css/jquery.growl.css\\\" type=\\\"text/css\\\" />');\")\nend\n\ndef display_growl_message(message)\n  @driver.execute_script(\"$.growl({ title: 'Selenium', message: '#{message}' });\")\n  sleep 2\nend\n")),(0,o.kt)("p",null,"Now let's update our test to perform an action and then display it through jQuery Growl notifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  add_growl_notifications\n  display_growl_message(@logger.latest)\nend\n")),(0,o.kt)("p",null,"When we run this (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby log_test.rb"),"), we should see the latest log action appear in a growl notification within the browser window."),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Load the browser"),(0,o.kt)("li",{parentName:"ul"},"Take an action"),(0,o.kt)("li",{parentName:"ul"},"Grab the action from the logs"),(0,o.kt)("li",{parentName:"ul"},"Display the action")),(0,o.kt)("h2",{id:"outro"},"Outro"),(0,o.kt)("p",null,"Stay tuned for a future tip where I'll cover how to wrap this behavior so it automatically occurs on every Selenium action for every page."),(0,o.kt)("p",null,"Happy Testing!"))}g.isMDXComponent=!0}}]);