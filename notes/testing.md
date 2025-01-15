# Testing

## Bruno's Request
- Bruno needs some unit tests in their app 

## Section Overview
- As the complexity and size of the code increases, it becomes harder and harder for someone to fix a bug that may arise 
  - Bugs cost companies a lot of money, luckily we have testing 
- Testing - is a method in software develpment where individual units of source code, assets or programs are tested to see whether they work properly 
- TDD - Test driven development 
  - The idea of writing tests before you actually write your application code, so that you can start writing code based on the tests you provide 

## Updated Code For This Section
- Updated code for this section 

## Types of Tests
- Types of Tests 
  - Unit Tests
    - The most common and easiest to implement and the most important to have in your application 
    - Tests individual functions or classes to make sure it does what it says it does 
    - 90% of your time you'll spend writing these types of tests 
  - Integration Tests
    - Testing how different pieces of code work together 
    - Testing whether the database works with the Express app
  - Automation Tests 
    - UI tests - usually involves testing real life scenarios on the browser by controlling the browser and making sure the expected behavior is done 
    - You can have humans do this or you can write out tests, these become more expensive to implement 

## Testing Libraries
- Testing library - the scaffolding 
  - Gives us the ability to use some function calls and some new methods to actually write our tests 
  - Top 3 libraries 
    - Jasmine 
    - Jest 
    - Mocha 
- Assertion library 
  - Provides functions that are assertion functions, a tool to allow you to test that the variables contain the expected value 
  - What an assertion library does is: says expect that this object that just contains A equals 1 and then chains all these words together to test our assumption 
    - It kind of reads like English 
  - Top 3 libraries 
    - Jasmine 
    - Jest 
    - Chai - is typically paired with mocha
- Test runner 
  - Something that allows us to run our tests 
  - Top 4 Libraries 
    - Jasmine 
    - Jest 
    - Mocha 
    - Karma -- allows you to run tests in the browser 
      - Running tests on the browser can take a long time 
      - Puppeteer - stripped down browser that makes your tests run faster 
      - JSDOM - in JS implementation of the DOM 
- Mock/Spies/Stubs 
  - Spies - provide for us information about the function, how many times they were called, in what cases and by whom 
  - Stubbing - replaces selected functions with a function to ensure that the expected behavior happens 
  - Mock - like faking a function or a behavior to test different parts of a process 
    - Might be really good for integration tests 
  - Top 3 Libraries 
    - Jasmine 
    - Jest 
    - Simon - has to be paired with Mocha 
- Code coverage 
  - Shows percentage is of the codebase is covered by tests 
    - Can give us a report of where we're missing tests 
  - Is provided by libraries 
    - Istanbul - just has code coverage already included and has Instanbul running under the hood 
    - Jest 
- Most of these libraries follow Behaviorial Driven Development (BDD) 
  - BDD - we describe what a function does and say what behavior we expect out of it 
- Create-react-app has everything for our testing setup for us if we need it 
  - Uses Jest - jest is also created by meta 
- AVA and Tape - other testing libraries 
  - AVA does parallelism 
- When to use what 
  - Jest - you just want to get started and looking for a fast framework 
  - Mocha - flexible extendable configuration where you can change some things 
- In our tests since we're using react 
  - We are going to use 
    - Snapshot testing - comes with jest and allows us to some really cool things 
    - Enzyme - helps us write tests better for React projects - created by Airbnb 

## Note: The Next Videos
- The next videos cover a few more topics we may want to revisit after finishing this section, everything will most likely make sense at the end of the section 

## Unit Tests
- Should cover all small pure functions of an application 
- Small pure functions that take an input and return an output and that do one thing really well, one thing at a time are the way to go, it's the main principal in functional program 
  - This allows us to write our unit tests really easily over writing OOP 
- Pure function is a function that has no side effects, like affecting another part of a program and always return something based on an input 
  - It is deterministic, meaning you can put in the same input a million times and you'll still get the same output a million times the same output every time 
  - React components are mostly pure functions 
- You'll see unit tests 90% of the time 
- Unit tests don't test the contract 
  - Contract - the connection between things
    - Could be a contract between a server and a database, it could be a contract between a function and another function 
  - Unit tests would test the sign in function and a load function but not the contract between them 
- When it comes to unit tests, write code that is separated away nicely 
  - Clean, functional components or functions which make it easier to unit test because everything is small chunks 
  - This also leads to nice maintainable code in the long run 

## Integration Tests
- All about cross communication between different units of code 
  - You would probably use spies from a mocking library to ensure expected side effects instead of asserting an output 
  - Stubs to mock and modify parts of a process that are not inside of the specific test
    - Such as mocking a database call 
- A browser or browser like environment could help with the processes that are dependent on the window object 
- Integration tests has many different definitions 
  - Think of integration tests as connecting components to see how they work together, instead of inidividual small units 
  - The downside is they are more expensive a dev has to slow down and write them 
  - If you change something your tests will break 
  - They can be brittle and are much harder to write, it's hard to say when you have 100% completion 
- It is rare to see a big company with great integration tests 
- Start with unit tests and then start incorporating integration tests as well 

## Automation Testing
- Also called end-to-end testing 
  - UI tests that are always running inside a browser or inside of a browser like environment 
  - They need to make sure these scenarios work from the user's point of view 
- In an ideal world we have automation tests everywhere 
  - These tests are the hardest to setup, users have different devices, etc. 
  - This is why there are services you can pay that do this for you 
  - You usually only find this at bigger companies because there are so many edge cases and expensive to implement 
- When to use what automation service 
  - Test Cafe - when you just want to get started and not worry about cross-browser and have all the tools in one 
  - webdriver.io - The best documentation 
  - Nightmare - you want simple ways to automate user actions or do something cool like web scraping
- The important thing with automation testing is like the other name suggests you want to test the entire process of your UI  
  - Many companies instead of writing these tests will hire people to do your automation testing 
- We want to create too different processes 
  - One for running unit tests and integration tests
    - You'd want to run unit tests and integration tests as you make change 
  - A completely separate one to run these UI tests (automation tests)
    - They cost a lot more money to run them repeatedly 
    - You would maybe want to run these once a day, once a week or before you push to main 

## Final Note On Testing
- Poudction 
  - App.js 
- Development 
  - App.test.js -- create-react-app will know what to do with this file type 
  - Keep in mind you only run your tests in development, you're never going to ship your test libraries or your test code into production 
    - Most of the time you use these as dev dependencies 

## Setting Up Jest
- Setting up our small Google example 
- Jest automatically looks for a folder with .test or spec 
- The it() function 
  - Pretty much all of these libraries have the same syntax 

## Our First Tests
- Because we're in node we don't have the import syntax (this might be out of date)
- With jest we can watch the `--watch` to our scripts 
  - npm test and npm start don't need the run command 
- We need to export our database as well, but this is not realistic 
  - Going through your real database is expensive, so we just mock it 
- Since we don't have access to the database we'd have to manually change out the function for our mockdatabase 
  - So this is why you want your functions to be pure and you also want to add things to them like a dependency injection 
    - Dependency Injection - in order to make a function reusable and use it in other parts of our codebase, have the database injected into the function, so anyone can inject the database by passing it a parameter 
- It's not just meaningful to run the function, we want to assert that this does what we expect it to do 
- In the docs you can see expect and toBe

## Writing Tests
- With tests, the more you have the better it is 
  - It's better to have a lot of tests that cover a lot of scenarios
  - Don't worry about DRY here since these never go into production 
- To test how many items are returned back to us, we can add .length if it's an array and .toEqual to whatever we expect that number to be 
- Just because your test passes, it doesn't mean it works, it's better to write them to fail first 
- We can group tests that are similar with a function called describe 

## Quick Note: Upcoming API Endpoint + ES6 Modules
- In the next video, you don't need to download node-fetch if you're on a later version of node 
- Also API may have changed, so if it doesn't work use one of the other listed APIs instead to go along with lecture 

## Asynchronous Tests
- One of the harder tests to write is asynchronous tests 

## Asynchronous Tests 2
- We always want to make sure we fail our tests and make sure our tests are working how we want them to 
- One tool we can use with Jest is 
  - `expect.assertions`
  - We use this to make sure our test is running 
  - This will return false when we do async functions 
- We can pass `done` in our parameters so we can say don't pass this test until it is done 
- If your code uses promises we can just return the promise, Jest is smart enough to know we're waiting for this to return 
  - When running asynchronous tests always use `expect.assertions`

## Resources: Jest Cheat Sheet
- Link to the Jest cheatsheet: https://github.com/sapegin/jest-cheat-sheet

## Mocks and Spies
- How can we improve this so we're not always making the fetch call 
  - This is where mocks come in, we make a fake function call and just pretend to have it running 
  - We use this mock to let us spy on the behavior of a function that is called indirectly by some other code rather than just testing the output and waiting for the asynchronous code to complete 
- For mocks we use 
  - `jest.fn().mockReturnValue(Promise.resolve({json: () => Promise.resolve({count: 87, results: [0,1,2,3,4,5]})}))`

## Exercise: #1 - Testing With Jest
- Practice writing your own tests 

## Enzyme vs React Testing Library
- A note on the upcoming lectures and the alternative to Enzyme (React Testing Library)

## Introduction To Enzyme
- There's a library by Airbnb that makes React testing easier 
  - Most of the time there will be documentation to be easier for you to set these libraries up
- Enzyme gives us three things we can use 
  - shallow 
    - 90% of the time you'll be using shallow 
    - It is useful because it just renders the component 
    - Let's you test one component/ one small piece at a time 
    - Your tests will fail when you have child components 
  - mount
  - render 

## Resources: Enzyme
- To learn more about render, shallow, and mount you can take a look at the enzyme documentation 

## Quick Note: Empty Snapshots
- A note on how to fix empty snapshots 

## Snapshot Testing
- 

## Snapshot Testing + Code Coverage
- 

## Exercise: #2 - Testing Stateful Components
- 6/8

## Testing Stateful Components
- 

## Quick Recap
- 

## Exercise: #3 - Testing Connected Components
- 

## Testing Connected Components
- 

## Testing Connected Components 2
- 7/8

## Exercise #4 - Testing All Components
- 

## Testing Reducers
- 

## Testing Actions
- 

## Exercise: #5 - Final Tests
- 

## Note: What Test is Best?
- 8/8

## Section Summary
- 

## Implement a New Life System
- 