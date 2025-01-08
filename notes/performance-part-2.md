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

## Resources: React Performance 2
- 

## Optimizing Code Review
- 

## Resources: Tree Shaking 101
- 

## Progressive Web Apps
- 

## Opt-In Service Worker in CRA
- 5/9

## Resources: Progressive Web Apps
- 

## Progressive Web Apps Examples
- 

## PWA - HTTPS
- 

## Resources: PWA - HTTPS
- 

## PWA - App Manifest
- 6/9

## Resources: PWA - App Manifest
- 

## PWA - Service Workers
- 

## Update for CRA v4 and React 17+
- 

## PWA - Final Thoughts
- 

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

