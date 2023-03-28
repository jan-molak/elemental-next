"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Ruby",id:"1-upload-a-file-ruby",slug:"ruby/",number:1,publish_date:new Date("2019-08-09T00:00:00.000Z"),last_update:{date:new Date("2023-02-27T00:00:00.000Z")},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"ruby"},o="How to Upload a File",l={unversionedId:"updated-tips/how-to-upload-a-file/1-upload-a-file-ruby",id:"updated-tips/how-to-upload-a-file/1-upload-a-file-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/1-how-to-upload-a-file/ruby.md",sourceDirName:"updated-tips/1-how-to-upload-a-file",slug:"/updated-tips/how-to-upload-a-file/ruby/",permalink:"/docs/updated-tips/how-to-upload-a-file/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/1-how-to-upload-a-file/ruby.md",tags:[{label:"file",permalink:"/docs/tags/file"},{label:"upload",permalink:"/docs/tags/upload"},{label:"file upload",permalink:"/docs/tags/file-upload"}],version:"current",frontMatter:{title:"Ruby",id:"1-upload-a-file-ruby",slug:"ruby/",number:1,publish_date:"2019-08-09T00:00:00.000Z",last_update:{date:"2023-02-27T00:00:00.000Z"},tags:["file","upload","file upload"],level:1,category:["remote","fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/updated-tips/how-to-upload-a-file/python/"},next:{title:"Javascript",permalink:"/docs/updated-tips/download-a-file/javascript/"}},p={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],s={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-upload-a-file"},"How to Upload a File"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium."),(0,r.kt)("p",null,"In these cases people often look to a third-party tool to manipulate this window (e.g., ",(0,r.kt)("a",{parentName:"p",href:"http://www.toolsqa.com/selenium-webdriver/autoit-selenium-webdriver/"},"AutoIt"),"). While this can help solve your short-term need, it sets you up for failure later by chaining you to a specific platform (e.g., AutoIt only works on Windows), effectively limiting your ability to test this functionality on different browser & operating system combinations."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"A work-around for this problem is to side-step the system dialog box entirely. We can do this by using Selenium to insert the full path of the file we want to upload (as text) into the form and then submit the form."),(0,r.kt)("p",null,"Let's step through an example."),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: We are using ",(0,r.kt)("a",{parentName:"strong",href:"http://the-internet.herokuapp.com/upload"},"a file upload example")," found on ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/tourdedave/the-internet"},"the-internet"),".")),(0,r.kt)("p",null,"First let's include our requisite libraries (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, and ",(0,r.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertion) and wire-up some simple ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: upload.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Now we're ready to write our file upload test."),(0,r.kt)("p",null,"==",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!! Code snippet needs validation !!")),"=="),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  filename = 'some-file.txt'\n  file = File.join(Dir.pwd, filename)\n\n  @driver.get 'http://the-internet.herokuapp.com/upload'\n  @driver.find_element(id: 'file-upload').send_keys file\n  @driver.find_element(id: 'file-submit').click\n\n  uploaded_file = @driver.find_element(id: 'uploaded-files').text\n  expect(uploaded_file).to eql filename\nend\n")),(0,r.kt)("p",null,"After specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"filename")," we get the full path to the file (which we're doing with ",(0,r.kt)("inlineCode",{parentName:"p"},"File.join(Dir.pwd, filename)"),"). This approach assumes that the file is living in the same directory as the test script."),(0,r.kt)("p",null,"Next we visit the page with the upload form, input the ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," text (e.g., the full path to the file plus the filename with it's extension), and submit the form. After the file is uploaded the page will display the filename that it just processed. We use this text to perform our assertion (making sure the uploaded file is what we expect)."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby upload.rb")," from the command-line) this is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the upload form page"),(0,r.kt)("li",{parentName:"ul"},"Inject the file path into the form and submit it"),(0,r.kt)("li",{parentName:"ul"},"Page displays the uploaded filename"),(0,r.kt)("li",{parentName:"ul"},"Grab the text from the page and assert it's what we expect"),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This approach will work across all browsers. If you want to use it with a remote instance (e.g., on Selenium Grid or Sauce Labs) then you'll want to have a look at ",(0,r.kt)("a",{parentName:"p",href:"https://seleniumhq.github.io/selenium/docs/api/rb/Selenium/WebDriver/DriverExtensions/UploadsFiles.html#file_detector%3D-instance_method"},(0,r.kt)("inlineCode",{parentName:"a"},"file_detector")),"."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);