"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"Python",id:"8-download-a-file-revisited-python",slug:"python/",number:8,publish_date:new Date("2016-11-24T00:00:00.000Z"),last_update:{date:"03-14-2023"},tags:["files","downloading"],level:2,category:["remote"],language:"python"},i="How to Download a File Without a Browser",l={unversionedId:"updated-tips/download-a-file-revisited/8-download-a-file-revisited-python",id:"updated-tips/download-a-file-revisited/8-download-a-file-revisited-python",title:"Python",description:"Intro",source:"@site/docs/updated-tips/8-download-a-file-revisited/python.md",sourceDirName:"updated-tips/8-download-a-file-revisited",slug:"/updated-tips/download-a-file-revisited/python/",permalink:"/elemental-next/docs/updated-tips/download-a-file-revisited/python/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/8-download-a-file-revisited/python.md",tags:[{label:"files",permalink:"/elemental-next/docs/tags/files"},{label:"downloading",permalink:"/elemental-next/docs/tags/downloading"}],version:"current",frontMatter:{title:"Python",id:"8-download-a-file-revisited-python",slug:"python/",number:8,publish_date:"2016-11-24T00:00:00.000Z",last_update:{date:"03-14-2023"},tags:["files","downloading"],level:2,category:["remote"],language:"python"},sidebar:"tutorialSidebar",previous:{title:"CSharp",permalink:"/elemental-next/docs/updated-tips/download-a-file-revisited/csharp/"},next:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/download-a-file-revisited/ruby/"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-download-a-file-without-a-browser"},"How to Download a File Without a Browser"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"In a ",(0,a.kt)("a",{parentName:"p",href:"/tips/2-download-a-file"},"previous tip")," we went through how to download files with Selenium by configuring the browser to download them locally and verifying their file size when done."),(0,a.kt)("p",null,"While the previous method works, it requires a custom configuration that is inconsistent from browser to browser."),(0,a.kt)("p",null,"Ultimately, we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,a.kt)("em",{parentName:"p"},"can")," be downloaded, which we can do by using an HTTP client alongside Selenium in our test."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Ultimately we shouldn't care if a file was downloaded or not. Instead, we should care that a file ",(0,a.kt)("em",{parentName:"p"},"can")," be downloaded. And we can do that by using an HTTP client alongside Selenium in our test."),(0,a.kt)("p",null,"With an HTTP library we can perform a header (or ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD"),") request for the file. Instead of downloading the file we'll receive header information for the file which contains information like the content type and content length (amongst other things). With this information we can easily confirm the file is what we expect without onerous configuration, local disk usage, or lengthy download times (depending on the file size)."),(0,a.kt)("p",null,"Let's continue with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To start things off let's pull in our requisite libraries (",(0,a.kt)("inlineCode",{parentName:"p"},"import unittest")," for our test framework, ",(0,a.kt)("inlineCode",{parentName:"p"},"from selenium import webdriver")," to drive the browser, and ",(0,a.kt)("inlineCode",{parentName:"p"},"import httplib")," for our HTTP library), declare our test class, and wire up some test ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tearDown")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: file_download_revisited.py\nimport unittest\nfrom selenium import webdriver\nimport httplib # Use http.client if using Python 3.x.x\nfrom selenium.webdriver.common.by import By\n\n\nclass FileDownloadRevisited(unittest.TestCase):\n\n    def setUp(self):\n        self.driver = webdriver.Firefox()\n\n    def tearDown(self):\n        self.driver.quit()\n# ...\n")),(0,a.kt)("p",null,"Now we're ready to write up our test."),(0,a.kt)("p",null,"It's just a simple matter of visiting the page with download links, grabbing a URL from one of them, and performing a ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD")," request with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# filename: file_download_revisited.py\n# ...\n    def test_example_1(self):\n        driver = self.driver\n        driver.get('http://the-internet.herokuapp.com/download')\n        download_link = driver.find_element(By.CSS_SELECTOR,'.example a').get_attribute('href')\n\n        connection = http.client.HTTPConnection('the-internet.herokuapp.com')\n        connection.request('HEAD', download_link)\n        response = connection.getresponse()\n        content_type = response.getheader('Content-type')\n        content_length = response.getheader('Content-length')\n        content_length = int(content_length)\n\n        assert content_type == 'application/octet-stream'\n        assert content_length > 0\n\nif __name__ == \"__main__\":\n    unittest.main()\n")),(0,a.kt)("p",null,"Once we receive the response we can check its header for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-length")," to make sure the file is the correct type and not empty."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"python file_download_revisited.py")," from the command-line) here is what will will happen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Grab the URL of the first download link"),(0,a.kt)("li",{parentName:"ul"},"Perform a ",(0,a.kt)("inlineCode",{parentName:"li"},"HEAD")," request against it with an HTTP library"),(0,a.kt)("li",{parentName:"ul"},"Store the response"),(0,a.kt)("li",{parentName:"ul"},"Check the response headers to see that the file type is correct"),(0,a.kt)("li",{parentName:"ul"},"Check the response headers to see that the file is not empty")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Compared to the browser specific configuration with Selenium this is hands down a leaner, faster, and more maintainable approach. But unfortunately it only works with files served up from a flat URL. So if you're trying to test file downloads that are generated in-memory as part of the browser session (a.k.a. not accessible from a URL) then you'll need to reach for the browser specific Selenium configuration."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);