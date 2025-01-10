# Performance Part 2

## Bruno's Request
- They want a performance boost and a PWA 

## Section Overview
- We are going to learn the last two pieces of optimizing frontend code 
  - Optimized Code 
  - Progressive Web App 
    - Trying to make our web applications as close to native mobile apps as possible 
    - With increased mobile usage around the world, we want a way for our web apps to work fast and find a way for these to work offline 
- We're going to talk about optimizing code by writing efficient functions using react wisely and get into code splitting 

## Updated Code For This Section
- Link to updated code for this section 

## Optimizing Code
- Once downloaded one of JavaScript's heaviesgt costs is the time for the JavaScript engine which is inside of the browser to parse and compile the code (read and understand the code)
  - We can use chrome's dev tools to analyze performance 
    - It will output whatever we do in the time period when we record 
    - The main parts that are interesting, we have a timeline of what gets loaded on the page and then we have a green line for the first paint and then a blue line for the DOMContentLoaded and then a red line for when the page has loaded 
    - In the summary tab, we see that there is loading, scripting, rendering and painting 
      - Yellow is scripting and includes the parse and compile 
      - We also get access to the call tree 
  - Spending a long time parsing and compiling code for a browser can heavily delay how soon a user can interact with your site 
- Flow
  - Request JS --- JS Arrives -- Compile/Parse/Execute --  fetch() --- Content Arrives -- Compile/Parse/Execute -- Page Interactive
  - It's not just the parse and compile that has a cost JavaScript execution which is running the code once parse and compile happen is one of the operations that has to happen on the main thread 
    - The main thread - like a worker in the browser, there's just one worker doing all the work and we can block it with heavy JavaScript 
  - A tool to see this in action we can go to webpagetest and then we can see a processing breakdown in a better fashion than devtools (devtools could potentially do this better now based on how old this video is)
- Side note: Angular 2 AoT (Ahead-of-Time)
  - Browsers due just-in-time compilation 
  - There is pros and cons to using AoT
  - Limiting animations because they require a lot of processing power - this is especially true for mobile devices
- When you include inline JS in your HTML - this is a render blocking operation 
  - If you go to Evaluate Scripts - parseHTML is a part of it 
- You want to keep your parse and compile times low and ideally adopt something like a performance budget for your team that ensures you keep an eye on your JS code 
- The holy grail of what we want to achieve with our code 
  - Fast time to first meaningful paint 
  - Fast time to interactive 

## Code Splitting Introduction
- To start off we're going to focus on how to deliver JS files in the most efficient way possible 
- In HTTP/1 environments it was common to bundle all of your code in one massiv JavaScript file that was created by combining all of our smaller ones 
  - This was done because a large amount of requests were detrimental performance 
  - But as these files got bigger and bigger the question was asked, why should we ship it? 
    - With the HTTP/2 becoming more popular we are shifting to only send what we need during execution 
- Code splitting 
  - Send down a minimally functional page, composed of just HTML, JavaScript and CSS needed for the current route, the homepage and as more resources arrive, the app can lazy load or unlock more features 
  - By splitting things up to each compartment we reduce the work our worker needs to do to render the page 
  - Vendor files - all the files of the third part our app needs 
    - A note on third parties - they usually hae a production build - this comes out of the box with `npm run build` these are just simple if statements -- if environment === 'production' don't use the reduxLogger 
  - Lazy loading - loading them after your page becomes interactive 

## Exercise: #1 - Code Splitting
- Run `npm run build` and look at what is output 

## Code Splitting Part 1
- Set up the create-react-app and then set up the rest of the demo  
- With code splitting we will be able to build up and request the files we only need to load that component 

## ES2020: Dynamic import()
- ES2020 allowed for us to use dynamic imports to help with code splitting and is now native to JavaScript and not just React 

## Code Splitting Part 2
- In order to use code splitting we need to learn the import syntax 
  - By using import in React we automatically tell it to code split 
  - With the dynamic import, we tell the app to import whenever it is ready 
    - This is asynchronous and then we can use .then() 

## Code Splitting Part 3
- We will be creating an async component 
  - We have the typical imports (React and Component, this is outdated)
  - We are going to create a Higher Order Component 
    - Higher Order Component - a component that returns another component (like a higher order function - a function that returns a function)
    - Like connect() in Redux 
    - Async components are pretty standard the code is pretty much the same all over 
    - The React docs have a higher order components section 
  - **The code in this component may be outdated due to still using class components** 
- Initially when loading with async components there is a flash, this is something you have to look at as a tradeoff 

## Code Splitting Part 4
- When it comes to code splitting there are a couple of options 
  - Route-Based chunking or splitting 
    - Splitting up the JS files based on the routes 
    - Component based chunking 
      - Code splitting not only on the route level, but at the component level as well 
- Think about the two options as your app gets bigger and bigger 
- React has documentation on code splitting 
  - They have react router and react-loadable (could be outdated information)

## Exercise: #2 - Code Splitting
- Exercise on code splitting 

## Solution: React.lazy() Code Splitting
- React.lazy() allows us to do code splitting easily (this may be outdated with the new suspense component)
- `npm audit fix --force` - make sure to update your packages, you won't be able to get all of them, but you can manually review some of the updates 
- We can use `React.lazy` when we import the components 
  - While our page is being imported, the user is going to be staring at the page wondering what happens, so this should be wrapped in a suspense component with a loading fallback 
- To quickly update your package with any minor version you do `npm update` 

## React Performance Optimizations
- How can we optimize our code in React? 
  - You want to check the React performance tool 
    - `localhost:3000/?react._perf`
    - Nothing happens, but now we can record and analyze the performance of our app 
    - We can now see our components and what they're doing in the performance tab 
    - We want to look at the CPU section - this means JS is happening 
      - In user timing - you can scroll into what components and shows us what kind of work it's doing and we can see it updating, rendering, etc. 
    - You can see fine grain timing of the components you're using 
  - Keep in mind when you run this, you're running this on the dev version of your app which is a lot slower than the production version of your app 
- How can we help the load process with Redux? 
  - By using redux we can be smart about what component updates, we can connect components at a lower level 
  - Because every time you update a top level component it re-renders your children components all the way down 
- Also use React devTools to see your updates 
  - It will highlight where your component is being re-rendered 
  - The color represents how often things are being re-rendered 
    - The faster they're being re-rendered it is closer to red the slower is blue 
  - This helps detect unnecesarry re-render cycle 
  - Keep in mind seeing yellow and red isn't a bad thing with some things you can't avoid this 

## Resources: React Performance
- Note on devTools and how to view React performance in devTools 

## React Performance Optimizations 2
- We have a lifecycle we can use called `shouldComponentUpdate()`
  - Receives nextProps and nextState
  - We returned false - to tell it to never re-render this component 
  - Gives us the ability to control this update cycle 
- State updates are not synchronous, anytime you need to derive next state based on the current state, so you need to grab the current state and return the new state
- In shouldComponentUpdate, we can check to see if the state changes 
  - You can also extend a PureComponent will only re-render if the props change 
    - It does shallow comparison of props it may miss prop changes with deeply nested props 
  - Don't overuse shouldComponentUpdate because you're running another function - this is called before render - use it catiously 
    - Actually measure your performance 
- A tool why-did-you-update? 
  - Will show you avoidable re-renders and you can implement it into your React app with a few lines 

## Resources: React Performance 2
- Link to Why Did you Render npm package: https://www.npmjs.com/package/@welldone-software/why-did-you-render
- Links to learning more about the asynchronous nature of setState (this could be obsolete with newer React features)

## Optimizing Code Review
- Optimize JS 
  - Only load what's needed 
    - Code Splitting 
    - Tree Shaking 
      - Done behind the scenes for us with webpack 
      - Removes unused code from your app 
  - Avoid blocking main thread 
    - Minimizing JS parse/compile/execute time 
  - Avoid memory leaks 
    - Memory leaks - making sure we don't keep adding memory into our apps 
    - Example, if we have too many event listeners and don't get rid of them when we leave the page 
  - Avoid multiple re-rendering 

## Resources: Tree Shaking 101
- A guide to follow on how to utilize tree shaking in your apps: https://web.dev/articles/reduce-javascript-payloads-with-tree-shaking

## Progressive Web Apps
- What is a Progressive Web App? 
  - A web app is a website that allows users to interact with the web page in many ways 
    - However, whether it is a game, twitter or Facebook it is in the browser 
  - A native app - is an app that is on a mobile phone 
    - Meant to work on a native platoform 
  - Progressive web apps were made to make web apps in browser behave more like the apps on your phone 
- To create a web app all you need to know is some HTML, CSS and JS and you're good to go 
  - To create a native app, you need to learn a native language like Java for Android Apps or Swift/Objective C for iPhone apps 
    - Unlike viewing on the broswer native apps have all the files needed to view on your mobile phone 
    - This is why files live on your phone 
    - Native apps can send you push applications and even work offline and you get access to the device software 
  - Native apps are built to work offline 
  - Native apps you can find on the webstore 
- This is where progressive web apps come in, you can make web apps behave like native apps
  - Think of progressive web apps as web apps, but they behave ore like native apps 
  - Existing web apps would be associated on their existing web server and you don't have to submit the changes to the app store 
  - The same app will run on all browser platforms - you don't have to worry about it being built for Android and iOS 
- What's the goal of all of this? 
  - Better user experience 
  - Faster websites 
  - With new HTML5 API's we're starting to get access to hardware that only natives apps used to have access to 
- If you go to whatcanwedo.today - you can see what we can do with our web apps 
- Google came up with PWA's, but has less support from Apple 
  - Google has more market share in the web, while apple has their closed ecosystem of the web store 
  - It's always good to think about these things when working with technologies developed by these big companies 
- Progressive web apps do enhance the experience of our users 
- Create-react-app comes preset with PWA capabilities 
- How do we make our robofriends app into a PWA? 
  - Lighthouse by Google has a plugin we can use to see how close we are to being a progressive web app 

## Opt-In Service Worker in CRA
- A note on changes to service-worker file, so just watch and notate the process instead of coding along for the next few videos 

## Resources: Progressive Web Apps
- Links to further resources on PWA's 

## Progressive Web Apps Examples
- Think of a PWA a running list of things you can do than a static list  
- In devTools and go to application and go to the manifest we can see the "Add to homescreen" button that appears for mobile users 
  - This creates a Chrome App on your desktop or mobile
- The 3 most important parts to build your own PWA 
  - HTTPS 
  - App Manifest 
  - Service Worker 

## PWA - HTTPS
- Progressive Web Apps have a certain checklist (this list can get constantly changed)
  - We've done most of the list, this is why we have 3 things we need to focus on 
- HTTPS 
  - Prevents bad actors from tampering with communications between our app and browser 
  - Google is really pushing for HTTPs encryption 
  - If you have forms on your website and they're not HTTPs it'll show up here as not secure 
  - In general you should always serve your websites through HTTPS 
- How do we have https already? 
  - We have this out of the box with github-pages 
  - Not all websites can be hosted on github-pages 
  - The easiest way to get HTTPS is to use Let's Encrypt - a certificate authority - gives you free ones that are easy to set up 
  - Cloudefare - is a CDN -- server that you can put your files on 
    - They host your site on their pages and automatically through them you can get HTTPs

## Resources: PWA - HTTPS
- Links to the progressive web apps checklist and let's encrypt and a note on how to setup github pages 

## PWA - App Manifest
- For a progressive web app to behave like a native app we need to mimic not just the function of a native app, but also some of the views that we get with it or the shell 
  - The idea is to make the web app as indistinguishable as possible to a real mobile app and we can do this with the app manifest 
- A lot of people forget to include the meta tag with viewport to optimize the site based on the device 
  - This is a must, but it will warn you in the lighthouse report if you are missing this meta tag 
- The manifest.json file is read by the browser and shows us the icon we will see if we download the app to our phone 
  - How do we generate these icons?
    - Through our favicon
    - There is a tool that generates all the favicons we need based by the image we give it at 
      - realfavicongenerator 
    - You just include them all in the src folder and then make sure they're pointed to in the manifest.json file 
- SplashScreen - in old versions of Chrome for Android tapping on the homescreen icon for an app would take up to 100 milliseconds and the user would see a blank white screen 
  - Spalshscreen loads the background color, name and web app that it gets from the manifest.json to show the user it is loading 

## Resources: PWA - App Manifest
- Links to the resources mentioned in the above lecture 

## PWA - Service Workers
- Service Worker 
  - Is a script that your browser runs in the background separate from the web page and web app 
  - It is generally used for features that don't need a web page or user interaction 
  - Think of a service worker as another worker in the background that runs along with the main thread 
  - A service worker acts as what we call a programmable proxy allowing us to control what happens on a request by request basis, this is the reason we can make our progressive web apps work offline 
  - Service workers have been added to browser including safari 
  - Besides offline experiences it also helps with background syncs and push notifications , but we will mainly focus on how they provide offline experiences 
- How do we use a service worker? 
  - create-react-app created a serviceWorker.js for us (this information may be out of date with things like vite)
  - There is a website called isserviceworkerready to see which browsers have implemented service workers 
- Registering the service worker is going to cause the browser to start the service worker install step in the background again with the other worker 
  - Once it is done it will be terminated to save memory or it will run in the background to keep track of messages and events that happen in the background 
  - You can see the service workers in the application tab in devTools 
- Without a service worker our browser is going to send a request to the network 
  - We tell the browser to talk to the service worker first 
  - It acts as a network proxy - intercepts any requests first made to the network and checks to see if you really need to communicate with the network 
  - The service worker then tries to access the cache API 
    - Cache API - kind of like a box where the browser stores files such as JavaScript files, CSS files, any static files 
    - The serviceworker then checks to see if what they need in that box and then brings it to the browser and then if it doesn't it goes back to the browser and then says it needs to talk to the network 
  - Cache storage - you can see in Application in devTools - you can see the css, icons, etc. 
    - We cache the shell of the website so that on repeat visits, even though the very first time the user browses and goes to a website it'll have to go to the network because this cache API will be empty
  - Once the network returns with those files, we can cache those files and on repeat visits, the app shell can be visited repeatedly 
- If create-react-app didn't create the serviceWorkers for us, we can create one ourselves 

## Update for CRA v4 and React 17+
- In 2020, the core react team doesn't ship with PWA anymore - there are some additional steps you will have to run to convert your react app to be able to perform the next step modifications to be PWA compliant 
  - Note on how to do this, if needed 

## PWA - Final Thoughts
- PWA have goals in mind, make website better and faster for the user, however as with all new technology, it still has some kinks to work out 
- With these sorts of technology be careful not to get caught up in the hype 

## Exercise: #3 - Your Own PWA
- 7/9

## Quick Note: Upcoming Video
- 

## Deploying Our React App
- 

## Service Worker Update
- 

## Solution Part 1 - PWA
- 

## Solution Part 2 - PWA
- 8/9

## Solution Files - PWA
- 

## Quick Note: Upcoming Video
- 

## OPTIONAL: Converting Our App To PWA
- 

## Deploying your PWA to the App Store
- 

## Section Summary
- 9/9

## Course Check-In
- 

