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
- 

## Integration Tests
- 

## Automation Testing
- 

## Final Note On Testing
- 

## Setting Up Jest
- 3/8

## Our First Tests
- 

## Writing Tests
- 

## Quick Note: Upcoming API Endpoint + ES6 Modules
- 

## Asynchronous Tests
- 

## Asynchronous Tests 2
- 4/8

## Resources: Jest Cheat Sheet
- 

## Mocks and Spies
- 

## Exercise: #1 - Testing With Jest
- 

## Enzyme vs React Testing Library
- 

## Introduction To Enzyme
- 5/8

## Resources: Enzyme
- 

## Quick Note: Empty Snapshots
- 

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