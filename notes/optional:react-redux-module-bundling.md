# OPTIONAL: React + Redux + Module Bundling

## Angular Vs React Vs Vue Vs Svelte
- The top 3 freeworks 
  - Angular 
  - React
  - Vue 
- All of them have the goal of managing large applications on the frontend that have a lot of JavaScript 
- These libraries and frameworks are tools, each one of them is perfect for its own specific use case -- senior devs know this 
  - Each one has pros and cons and a senior developer knows which is good for the problem at hand 
  - There is no one tool that will solve for everything 
  - You need to be able to adapt to the new tools 
  - As a senior dev you need to be able to say this is good for this problem and know the pros and cons 
- Angular
  - Is a framework - they offer an entire kitchen and it is opinionated for if you have a lot of developers you can make sure everyone is using the same kitchen 
  - This would be good for banks 
  - Think of it as the kitchen 
- React 
  - A company with a strong developer team and also needs to be flexible and evolve  by adding different libraries and tools to the ecosystem and I can trust developers to build on top of react with all of these different tools 
  - Think of React as the oven, we get more flexibility 
- Vue 
  - A simple way of writing code that is friendly and if you hire a lot of junior developers 
  - Think of Vue as the microwave, it's super simple to pick up 
- We don't want to think in terms of absolutes 
  - However, React does stand above the others with the most downloads based on amount of jobs 
  - React teaches you good JS principals that last a lifetime, with Angular this can be hard to do 

## Important: Thinking Like A Senior Developer
- The goal of this course is not to teach the latest trends, the goal is to show how to think, how to problem solve, how senior developers use their brain in their day to day role to become or to be senior developers 
  - This means we don't worry about the latest version of a library, we learn the principles and the foundation of things, so that no matter what new versions come up in the future, it doesn't really matter 

## Optional Section
- Just a note on how to go through this section if you alreayd have experience with React and module bundling 

## Bruno's Request
- Bruno wants us to add Redux into their React project 

## Section Overview
- Our JS files have grown significantly over time, which caused issues with readability, maintainability, and bug issues 
- Frameworks and libraries help us solve issues with our readability, maintainability and bug maintenance with bigger codebases 
- We will go into React + Redux 
- We will then go into Webpack and bundling 
- We will also feel super comfortable with state management 

## Deep Dive Into This Topic
- A note on where to learn more React after this course

## Updated Code For This Section
- A place to find the updated code 

## Introduction To React & Robofriends Build
- Link to if you want to learn how the robofriends app was built 
  - React.js Fundamentals Section 
  - Extra Learning: React Hooks Section 

## Introduction To Redux And Webpack
- There are two main bottlenecks for JS 
  - Delivering the JS to the frontend 
  - DOM Manipulation 
- The better our deliver of JavaScript, the faster we're going to build the render tree and we also want to be smart about how much we re-render something 
- We have React to help us with this cycle of rendering, layout, paint and then modifying 
- We will learn about webpack which helps how we send our files 
- Then we will learn about React to allow us to improve the process of rendering, layout, paint 
- As senior developers, we need to think about why we would want to include Redux and why it would improve upon React 

## State Management
- State Management 
  - State - describes what our app should look like -- think of state as memory 
    - An app needs to remember things in order to work 
  - State management is a problem as our apps get bigger and bigger and bigger 
- Redux came up with a novel concept 
  - What if we just remove the state and these components have props and then the state we keep in a store (one massive object that describes how our app should look) and then we pass down this store to whatever component needs 
  - Redux made it to where none of the components need to hold state anymore and then we just pass down that state to whichever component needs it 
  - Redux took inspiration from databases using things like event sourcing and CQRS 

## Why Redux?
- Before we use anything, we need to understand why we would need to use soemthing 
- Why Use Redux? 
  - Good for managing large state 
    - React is good at what we call the view layer, but it isn't great for managing state 
  - Useful for sharing data between containers 
    - With React sharing state between containers is difficult because you have to move the state up one layer, so that you have a parent that can share the state between the two, but with Redux this makes it easy 
  - Predictable state management using the 3 principles 
    - The 3 principles 
      - Single source of truth 
        - We have one big object that describes the single state of the app
      - State is read only 
        - Encourages immutability 
        - Not modifying the object, this prevents unexpected errors, we create a new state after each action is taken by the user 
      - Changes using pure functions 
        - Receives an input and always returns an output that is predictable 
- Redux Vocab 
  - Action --> Reducer --> Store --> Make Changes 
    - Action - something a user does like clicking on a dropdown menu 
      - As soon as a user creates an action it then goes through the reducer 
    - Reducer - a pure function, receives an input which is the action and creates an output 
      - The output is the state or store 
    - Store - the state - the entire state of the app 
    - Make changes - makes changes to the view layer when the store is updated 
  - In the past in jQuery we just had Action <--> Make changes 
    - The more actions you have the more changes you have to make and then this could trigger other actions, etc. 
- With Redux, we make sure all of the actions go through one reducer, everything flows with this function and through this function it always returns the same state based on the action and updates the store and then the store makes changes 
- Flux Pattern 
  - Action --> Dispatcher --> Store --> View 
  - An architecture pattern 
    - Architecture in software is used as a way to make sure that we're able to solve problems in a logical sense and in an organized fashion 
  - The flux pattern inspirec Redux 
    - It's the idea of having this action and then having a dispatcher that dispatches this action to the store that updates the view 
  - Has a one way data flow 
- Before the flux pattern we had MVC 
  - Model-View-Controller 
  - Action -> Controller -> Model <--> View 
  - The issue with MVC the controller changes different pieces of the model and etc, where we ran into the same thing with jQuery 
  - Great for when your apps are smaller 
- We want to architect our apps in a way that as they grow, everything is easier to reason about and understand 
- In redux we get to remove this.state and have it all in the Redux library 
- Redux doesn't completely replace state, we will learn when we want to still use React state 

## Updated Code For This Section
- Updated code will be included in comments to show changes like `import thinkMiddleware` is now `import {thunk}`

## Installing Redux
- We need to add Redux to our robofriends app, we will work together to make sure our code works as well 
- To install redux 
  - `npm i redux` 
- With Redux 90% of your code is going to be JS and teaches really good principles 
  - You may not always need Redux, but it is a good tool to learn because it has great concepts for you to learn 
  - We need to connect redux to react because it can work with any other library 
- Also install `react-redux` 
  - This connects the containers (`App.js`) to the Redux store and the container is going to communicate with the store 
  - The components won't know the Redux exists, the only connection will be between a container or smart component and the Redux store 

## Redux Toolkit
- Redux toolkit 
  - Redux has a ton of boilerplate code, so it makes our code more maintainable as our apps grow, but it does mean more typing and more files
  - Redux toolkit was created for this reason 
  - We won't use it in this course because we want to practice and see how things work without the magic behind it, but after this section check it out and then start using it 

## Redux Toolkit Example
- An example of code with and without using Redux toolkit

## Redux Actions And Reducers
- The first thing we want to do is create an action and a reducer 
  - Which is the first two components 
- We created an `actions.js` in our src folder 
  - We create an action function `setSearchField` and it is an object with type and payload 
    - payload - sending whatever data is needed, this is common to see throughout Redux 
  - We capatilized the type because it is a constant which are usually all caps in JS 
  - Using a constant variable we get an error if we spell it wrong where we're running the app
  - Most Redux demos will have a constant file to keep track of these as well  
- We created a `constants.js` for our constant variables 
- Reducer - reads the action and spits out state
  - We create a `reducers.js` 
  - We have the initialState and then we create our reducer 
  - Our reducer takes in the state and the action 
  - Reducers get our input of our state and an action and if they care about the action that they receive then they will act upon the state 
    - We use a switch statement for this 
  - `Object.assign({}, state, searchField: action.payload )`
    - We're taking our new state with action.payload 
    - This is standard Redux syntax 
    - You can also use object destructuring instead 
      - `{...state, searchField: action.payload}`
- Remember the 3 principles 
  - Single source of truth 
  - State is read only
  - Changes using pure functions 

## Redux Store And Provider
- We need to connect our Redux part of our application to the React part of our application 
  - react-redux comes with a provider and connect we can easily connect the two parts of our application 
- Before we create our Provider to connect the two we need to create our Store (the single source of truth)
  - We can create a store using the `createStore` function from Redux 
  - In real life we have multiple reducers, so we create a rooteReducer -- we combine in the store 
  - We don't pass down store as props, we wrap our app in the provider component and we pass the store to it, then we use connect to finish the connection 

## Redux Connect()
- The connect function is used to keep us from having to use store.subscribe 
  - .subscribe() - subscribes any component that is interested to be aware of Redux and listen to any changes 
  - .connect() simplifies this 
  - The Provider passes the store down to the components and then the connect tells the components which one the store applies to 
- `connect(mapStateToProps, mapDispatchToProps)(App)`
  - connect is a higher order function (a function that returns another function)
  - connect accepts two parameters (see App.js for setup) -- we can name the params anything we want, but the two below are the standard 
    - mapStateToProps - receives state 
    - mapDispatchToProps - receives dispatch
      - dispatch - what triggers the action - an action is an object we've created in order to send this action, we need to dispatch this object to the reducer 
  - In the connect runs the first part of the function for what to listen to and the actions and then it's going to give those props to the App 
  - You can now remove the state we declared before 
- There is a bunch of boilerplate here, but it's nice to clean up everything 

## Redux Middleware
- There's another part to the Redux diagram that was left out 
  - Action -- Middleware --> Reducer --> Store --> Make changes 
  - Middleware - listens for actions and it's a tunnel that actions go through and depending on what the middleware is it can modify the action or trigger another action 
    - They're like triggers that actions go through and something happens within this box before it hits the reducer 
- Why is middleware useful? 
  - We can install redux-logger and helps with logging in the console so we can debug our app easily 
  - After creating our logger function we need to connect it and the way we do this is through a function redux gives us `applyMiddleware`
    - We add this to our createStore() function and then put the middleware we want to apply
- Redux logger gives us a clean system to monitor each one of our actions, so no matter how many actions we have we can always predict what they're going to do 
  - Because reducer is a pure function we always know it's going to return the same state 
  - It gives us a chronological list of all the actions 
- Redux is an important library that changes the way we think about building applications 
  - Instead of thinking of code as something we just keep tacking on and keep building upon, Redux makes you think in a way of how can I make an app that is able to scale in a way where we have thousands of user interactions, how can we make it to where the information flows into one another into a predictable view into a system that is predictable 
  - As a senior developer, how are you building systems that work really well together and that flow easily 
  - How should you structure your app so that data flows smoothly? 

## Redux Async Actions
- We need to include our fetch request to our API, how do we make everything asynchronous because everything we have done so far has been synchronous
  - This is where we use applyMiddleware again, this is where we use reduxThunk 
    - reduxThunk is a middleware that provides a getState and dispatch function that are passed on, you're able to handle side effects, like AJAX calls with this package 
- When we pass in middleware it goes in order, so first it will go through our thunk middleware and then our logger 
- We want to keep track of the three status of our action, pending, request and failed 
- To combine our reducers, we use combineReducers function that combines our reducers into a rootReducer 
- Redux thunk is a middleware that waits and sees if any actions return a function instead of an object 
  - It waits for a function and not an object like we have been returning 
  - Without reduxThunk, our action wouldn't be understood if it was a function because it expects and object 

## Redux Project Structures
- As our app grows it will get bigger and bigger and bigger, having one container component that knows the redux store exists is not realistic, but because of the way Redux works we can use connect and pick and choose which components we want to connect to the Redux store 
  - Redux makes communication in between components really easy 
  - As the projects grow, group everything to the component with the DOM presentational components it needs, an actions, a constant, and reducer file 
    - This makes it easier instead of having massive general folder names 
    - It's also a good idea to have a folder and file for API fetch calls and a reusable function that we can reuse without having to keep typing out the .then and .catch statements 

## Project Files - Redux
- A note on where to find finalized code for the robofriends app 

## Popular Tools For React + Redux
- React is only a view layer library - this only enables you to build component driven interfaces
  - Once you start building large scale applications you need to be able to build on top of React 
- Tools we commonly use with React 
  - React Router - for routing, changing pages, this is pretty much the standard 
  - Utility Libraries - libraries that add to the current JS tools you get out of the box 
    - Ramda - functional programming idealogy 
    - lodash - also very popular 
  - Styling 
    - Glamourous 
    - styled-components 
    - CSS Modules   
  - Gatsby JS - good for static websites in React (React uses Gatsby for their old documentation)
  - Next.js - popular for server-side rendered apps 
  - Material-UI - for reusable components 
  - Semantic UI - also reusable React components 
  - Tools to make Redux better
    - Reselect - help with selectors 
    - Redux-Saga - handles asynchronous actions in Redux - ReduxThunk, but supercharged 
      - Can be complicated to learn at first 
  - ImmutableJS 
- Everytime you add a library, ask yourself, do you really need it because every library adds extra weight to the project 
  - Think about how will the customers and other developers benefit by adding these libraries 
  - As a senior developer, always consider the pros and cons on if you need something and if you do, analyze which tool is the best tool 

## Module Bundlers
- As our apps get bigger and bigger we have more and more JS to deliver so we have a need for a bundler, it bundles these files for us nicely so we don't have to do it manually 
  - Bundlers are able to combine a bunch of things together like HTML and CSS and bundle our JS 
  - create-react-app underneath the hood uses webpack to do this for us 
- Bundler Options 
  - Parcel - came out with the idea of 0 configuration 
  - Webpack 
  - rollup.js - good for tree shaking, throws out any code we don't need to use 
- Keep in mind
  - When should you use one of the three bundlers?  
    - This depends, sometimes you don't get control where it's set up 
    - Use parcel if you're on a project by yourself so you can get up and running easily 
    - rollup - for when you're shipping npm packages 
  - Configurations and configuration files always change 
    - Don't spend all your time on how to do a configuration file 

## Modern Build Systems In 2024
- A note on the current state of build systems 

## Converting To Vite@Latest
- 6/7

## Introduction To Webpack
- 

## Update: Babel 7 + Eslint + Webpack 5
- 

## Webpack
- 

## Updating Libraries: Babel 7 + Eslint
- 

## Quick Fix: Babel 7 Plugins
- 7/7

## Resources: Webpack Configurator
- 

## Parcel
- 

## Parcel V2!
- 

## Section Summary
- 

