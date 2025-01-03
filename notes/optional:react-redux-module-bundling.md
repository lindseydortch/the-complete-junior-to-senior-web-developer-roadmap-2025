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
- 4/7

## Redux Store And Provider
- 

## Redux Connect()
- 

## Redux Middleware
- 

## Redux Async Actions
- 

## Redux Project Structures
- 5/7

## Project Files - Redux
- 

## Popular Tools For React + Redux
- 

## Module Bundlers
- 

## Modern Build Systems In 2024
- 

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

