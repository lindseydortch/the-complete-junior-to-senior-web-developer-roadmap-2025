# Performance Part 1 
## Bruno's Request
- Keiko Corp website is slow, Bruno wants us to make their website faster 
- We will go through the best practices with performance and then we will implement on Keiko Corp's website 

## Introduction To Performance Part 1
- All big companies prioritize performance on a site because people don't want to wait for a page to load 
- Recap of what happens when you browse a website 
  - Client <-- GET www.superfresh.com --> Server 
    - We get the assets from the server and then the client breaks them down 
- Improving a companies page speed leads to more revenue for them 
  - Each second of delay on website decreases customer satisfaction and decreases revenue 

## 3 Keys To Performance
- Frontend (Browser) <-- GET www.superfresh.com --> Backend 
- There are three fullproof ways to improve speed on our website 
  - We can improve things on the client-side 
  - We can improve the transfer of our files over the wire 
    - Network Latency - every request needs time to travel from client to the server and back, so it is the time it takes to do that transfer  
  - We can improve the processing done on the backend or backend processing 
    - The web server needs time to load data, maybe from the database and maybe even assemble the website before it sends it over  
- For our website to be as fast as possible we can improve something in all three of these sections 
- There are a million ways to optimize your website, but in order to think like a senior developer, we need to solve our problem and find the solution that solves that probel in the most efficient and valuable way 
  - If you're optimizing your site and you don't even know what is slowing it down, or you don't even have comparison numbers or benchmarks to see if your optimizations have actually improved your speed, then you're wasting your time 
  - We will focus on the things that improve 90% of your website 
- What we will focus on: 
  - Frontend 
    - Critical Render Path - Part 1 
    - Optimized Code - Part 2 
    - Progressive Web App - Part 2 
  - Transfer 
    - Minimize Files - Part 1 
    - Minimize Delivery - Part 1 
  - Backend 
    - CDNs - Part 3
    - Caching - Part 3
    - Load Balancing - Part 3
    - DB Scaling - Part 3
    - GZIP - Part 3

## Network Performance
- The internet as we know if at the end of the day is submarine cables, land wires, satellites, signal towers that allow us to connect to computers 
  - Every time we open the browser and visit a website we have to send a request somewhere to a server to get the files off of that computer and back all the way to us so that the user can display those files 
- The two ways to make sure we're optimizing right 
  - Honey I shrunk the files 
    - Minimize Text - simple to do with things like uglify.js 
      - HTML 
      - CSS 
      - JS 
    - Minimize Images 
      - JPG 
    - Think of it as a diet to make sure everything is nice and small 
    - Minifying our files by deleting the spaces and indentations because a computer doesn't care about those, it's able to read them in one line 
    - This is part of the build process, when an app is ready for production we use something like webpack to minimize all of these files and make them smaller 
    - Images are going to be the most complex, we will go over those in the next video 
  - The traveling deliveryman 

## Image File Formats
- Minimizing Images 
  - The primary way to change an image size is to change the file format and pick the file format that is the best for the job 
- JPEG, GIF, PNG and SVG - four main image formats on the web, each has their own use case 
  - JPEG - best for photos, but don't allow for transparency - for complex images with lots of colors - often larger files 
  - GIF - You usually limit the number of colors you can use in a GIF 
    - Reducing color count leads to huge file savings 
  - PNG - limit the amount of colors you can use 
    - Great for logos 
    - Can add transparency 
  - SVG - vector graphics - designers work with them in Designer, Illustrator, etc. 
    - You can expand an svg to several times it's original size and it will be just as sharp and just as clear as it's original size 
    - Simplistic visual things with little colors 
- There are more file formats, they have compression, etc. 
  - Browser support for the new types is not completely there yet 

## Resources: Image File Formats
- Links to more resources on image file formats if you want to come back to them 

## Image Optimizations
- Minimize Images 
  - If you want transparency: use a PNG 
  - If you want animations: use a GIF
  - If you want colorful images: use a JPG 
  - If you want simple icons, logos, and illustrations: use SVGs
  - Reduce PNG with TinyPNG (free)
  - Reduce JPG with JPEG-optimizer (free)
  - Try to choose simple illustrations over highly detailed photographs 
    - Do you really need that super detailed photo of your dog or can you use a dog icon instead? 
  - Always lower JPEG image quality (30 - 60%)
    - You can save with the quality down using the Mac preview app 
  - Resize image based on size it will be displayed 
    - Something not a lot of people do 
    - Match the images resolution to the size that will be displayed on the website 
      - Example: CSS is 500px, chop it down to the actual size 
  - Display different sized images for different backgrounds 
  - Use CDNs like imgix
  - Remove image metadata 

## Image Optimizations 2
- Minimize Images
  - Display different sized images for different backgrounds 
    - Use media queries to send the different screen sizes 
    - Don't forget print screen mode as well
    - In order to make this work save your images in different file sizes 
    - Example setting via CSS background property 
    - Does the file still get loaded if we're not calling the screen size? 
      - It loads when the screen gets to that size, you can see this in the network tab 
  - Use CDNs like imgix
    - Use caching and then optimize your images and then gives you an URL 
    - CDN's allow faster access through their servers of images instead of uploading ourselves 
  - Remove image metadata 
    - verexif - removes your metadata 
    - We don't want people to see what device a picture was taken from and where, it's extra information we don't need to have in our photo 
    - Not only good for performance, but good for security reasons 

## Exercise: #1 - Media Queries
- Exercise for media queries 

## Delivery Optimizations
- In addition to just reducing download size, let's also consider reducing download frequency (the traveling delivery man)
- Reducing the number of components that a page requires, proportionally reduces the number of HTTP requests it has to make 
  - This doesn't mean ommitting content, it means structuring it more efficiently 
- How do we reduce these requests? 
  - If you're using bootstrap or foundation or anything that helps you with your UI and adds new CSS files, ask yourself, are they really necessary or could you use Flexbox or CSS Frid which are superb alternatives and they're both native 
    - Same with JS and JS libraries - jQuery for example, now the native DOM 
  - Think twice before adding on another script or library 
- Have less files and don't make the delivery man work so hard 
- Can't we just send them all at once? 
  - Thanks to the HTTP protocol, our browsers will only simultaneously download a set maximum number of files from one domain at a time
    - This can range from 2-6 depending on your browser 
    - It also has limits on the total size it can carry 

## Resources: Delivery Optimizations
- Link to max requests a browser can handle concurrently: https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser

## Exercise: #2 - Network Optimizations
- Go through the tasks in the index.html
  - Test in your devtools, change the connection and disable cache 

## Solution: #2 - Network Optimizations
- Solution for Exercise on Network Optimization

## Critical Render Path Introduction
- The first step is to request a website and then the server returns an HTML file 
  - Inside of the browser once it receives that HTML file it starts reading it and it starts creating the DOM 
  - When the browser reads the HTML it incrementally generates this tree model of the HTML tags that we need to build for the website (the DOM)
    - This DOM describes the contents of the page 
    - But just as it starts to do this, it encounters a style link to grab the CSS, then it asks for the CSS file from the server and then goes back to creating the DOM
    - Once the browser receives all of the CSS it starts to generate a tree model called the CSSOM
      - This CSS object model has the styling information attached to the tree nodes and this tree describes how the content is styled 
    - Then it sees the JS script server then this JS file is read by the browser and executes any changes that it might want onto the DOM and the CSSOM 
- Once all of this is done, the browser combines the DOM and the CSSOM into a render tree 
  - The render tree includes information from the HTML and the styling and layout information of CSS 
  - The browser uses this render tree to figure out the layout 
    - Then once it figures this out, it paints all of the pixels 
- Images are happening too as it sees an image tag, but it's not part of this process, this happens in the background 
- Critical Render Path 
  - One of the most important concepts for optimizing browser performance 
  - This path shows what it takes to paint the website on the screen 
  - We can optimize the critical render path like we did with the network 

## Critical Render Path 
- When a user requests a page for your site, the page HTML starts streaming to the browser 
  - As soon as a browser encounters a tag for an external image, a script, a CSS file it will start downloading that file simultaneusly 
  - When the browser receives our HTML it parses it
    - Breaking it down into a vocabulary it understands 
- After understanding the document, it starts creating the DOM
  - As soon as it sees an external resource, it foes ahead and starts downloading those 
  - CSS and JS files take high priority other files like images take lower priority 
- How do we optimize this process? 
  - Load styles as soon as possible 
    - Get the CSS to the browser as soon as possible 
  - Load scripts as late as possible 
    - JavaScript requires the HTML and CSS parsing to finish before it can be run 
      - This way we give styles ample time to create the CSS object model 
    - If you put JS in the HTML head tag, it blocks page rendering
      - Scripts historically blocked additional resources from being downloaded more quickly  
    - Exceptions would be like the Google Analytics tag, but keep in mind this can slow down your website 
- Review 
  - HTML 
    - Load style tag in the <head>
    - Load script right before </body>
- Critical Render Path 
  - DOM --> CSSOM -- DOMContentLoaded --> Render Tree --> Layout --> Paint (Load)
    - 1. HTML --> 2. CSS & 3. JS --> 4. Parse JS --> Render Tree --> 6. Layout --> 7. Paint --> 8. Load JS to render tree 

## Critical Render Path 2
- CSS is rendered blocking 
  - In order to construct the render tree and print something on the screen, we're waiting for the CSS DOM to complete and combine it with the DOM to create the render tree 
  - With this in mind, we want to make this as light as possible 
- CSS Optimization
  - Only load whatever is needed 
    - Internal CSS - Pro: allows us to not have to request CSS file 
      - Good for above the fold loading 
    - We can also do inline CSS so we don't have to request the CSS file from the server 
  - Above the fold loading 
    - The user is only interested in what they can see, the priority is to see what is above the fold 
    - Maybe we only need the CSS we're using above the fold 
    - You can load the styles you need in the above the fold content 
    - The red line indicates how long it took to load, notice the CSS is loaded beforehand 
    - To move the CSS after, you can use JS 
      - You can do this in a script tag 
      <code>
        const loadstylesheet = src => {
          if (document.createStylesheet) {
            document.createStylesheet(src)
          } else {
            const stylesheet = document.createElement('link')
            stylesheet.href = src 
            stylesheet.type = 'text/css'
            stylesheet.rel = 'stylesheet'
            document.getElementsByTagName('head')[0].appendChild(stylesheet)
          }
        }

        window.onload = function() {
          console.log('window done!')
          loadstylesheet('./style3.css')
        }
      </code>
  - Media Attributes 
    - Media queries 
      - You can also do them in your HTML as well 
      - You can apply a stylesheet using the media attribute like you would a query 
    - We download in the background and not disrupt the page load if screen doesn't match
  - Less Specificity 
    - The more information we send over, the more bytes, the browser then needs to calculate the styling, so it needs to do more work if the specificty is complicated 

## Critical Render Path 3
- Before JS gets to the render tree, it can access and change the DOM and the CSSDOM 
  - The DOM construction is paused and the script is requested from the server 
    - Once the script is loaded, it can't be executed before all of the CSS is fetched as well and the CSSDOM is constructed 
      - After this it is constructed 
  - This is why JS is called parser blocking 
- JS Optimization
  - Load scripts asynchronously 
    - See <script async>
  - Defer loading of scripts 
    - See <script defer>
  - Minimize DOM manipulation 
    - The browser checks all of the scripts to make sure it has everything it needs to render the page 
    - Reads the JS -> Builds the DOM Tree -> and then finish loading all of the scripts 
    - So this is why our script 2 and 3 will load the console.logs along with the 1 before the event listeners for load and DOMContentLoaded 
  - Avoid long running JavaScript 
    - Things like alerts block the page because the JS code is running this provides a bad user experience 
- Script Tags 
  - <script>
    - HTML Parsing --> HTML Parsing Paused and Script Download and Script Execution Occur --> HTML Parsing 
  - <script async>
    - HTML Parsing and Script Downloaded --> HTML parsing paused and script is executed --> HTML Parsing 
    - Add them to anything that doesn't affect the DOM or the CSS document object model 
    - Should be used for all external scripts that require no knowledge of our code and not essential to our user experience 
      - Example: Google analytics scripts and tracking scripts 
    - If the core functionality requires JS 
  - <script defer>
    - HTML Parsing and script downloaded (happens somewhere in the middle) --> Script execution 
    - It will not block loading of page, but will execute after HTML has been parsed and will execute in order of appearance 
    - If core functionality does NOT require JS 
- Heads up: different browsers have different behaviors sometimes with async + defer. Results may vary 

## Resources: Async + Defer
- A note on async and defer with link to learn more 
  - Because of HTML parsing, the location of the script tags when you put `async` and `defer` attributes on them is important 
  - Link to resource: https://stackoverflow.com/questions/10808109/script-tag-async-defer

## Critical Render Path 4
- Once the render tree is completed we then have the layout --> paint 
- Last step - we have the JS 
  - If JS events change any part of the page, it causes a redraw of the render tree, and it forces us to go through the layout and paint again 
- This is what web apps are right? 
  - Users interact with the page and the JS contasntly modifies the page by cycling through the render tree, layout and paint 
  - Modern web browsers are smart enough to only conduct partial redraw, but we can't rely on this being efficient and performant, so it is our job to make this performant 
  - JS is largely event based and we want it to manipulate our DOM, but we have to limit the under-performant effects we can cause with it 
- Keep in mind that all browsers are different and note that Chrome is working on having JS not be event blocking 

## Exercise: #3 - Critical Render Path
- Exercises on the Critical Render Path
  - Didn't practice because I have experience working with defer and async JS 

## Exercise: #4 - Keiko Corp Website
- We have the Keiko Corp website we were asked to make faster 
  - Looking at the site, we need to put it to the test 
    - We need to look at the pagespeed insights and webpagetest.org (you can put in a location and type of device)
      - We will get back a list of optimizations we can do to make it faster, shows you exactly what to fix 

## Resources: Keiko Corp Website
- For the repo and create a Github pages for it so you have a URL you can test on 

## Solution: Keiko Corp Website
- If we noticed we're using libraries that don't work 
- First, we look at the HTML file 
  - We have a bunch of CSS files we are importing and most of them aren't minimized 
  - Then we want to see if we even need the libraries or can we use them natively 
  - Then we look at the script tags and we need to move them down to the end of the body and then ask ourselves do we even need it 
    - Some of these libraries don't even work on the site 
  - Then go through and minimize the JS files 
- Above the fold loading, so we can ignore our images and add a style tag for the main part of the page that the viewer sees right away and then everything below the fold loads after 
- Then look at the media attributes and where we can add in media queries 
- Then look at specificity (this is such a minor thing, but does still effect load speeds)
- Then defer and async scripts 
- Then minimize DOM manipulation 
  - So this is where we see issues with jQuery and parallax and then we can use the native features in the browser 
    - We can go to youmightnotneedjquery.com to see a list of replacements for jQuery 

## Optional: Resource Prefetching
- A note about a resource to learn more about resource pre-fetching 
  - https://css-tricks.com/prefetching-preloading-prebrowsing/

## Resources: Performance Tools
- Resources and Guides for more practice on improving performance 
- TODO: save these resources to browser *Come back to this resource*

## HTTP/2
- HTTP/2 is a protocol update that's still compatable with HTTP but its main goal is to improve network latency 
  - Network Latency - How fast we can deliver files back and forth 
- HTTP/2 may change how you consider combining resources 
  - The techniques we discussed like minification, compression, image optimization should definitely be continued with HTTP/2
    - However, physically combining files might not achieve the desired results with HTTP/2 because of something called multiplexing 
    - This is because server requests are faster on HTTP, so eliminating a request may not be sunstantially faster 
- HTTP/2 is binary instead of textual 
  - It is fully multiplexed 
  - In theory, it can have on connection for something called parallelism 
    - With one connection have many many files connected to it 
    - It can also support server push 
- It is not fully adopted yet, but it is still evolving 
- Implementing a server with HTTP/2 
  - If you're using node above version 8 you can deliver files through that protocol 
  - `const http2 = require('http2')`

## Resources: HTTP/2
- A resource on all about HTTP2 and the why: 
  - https://hpbn.co/http2/

## HTTP/3
- As of 2019 HTTP/3 has started being developed, here is a resource to learn more: 
  - https://blog.cloudflare.com/http3-the-past-present-and-future/

## Section Summary
- Premature optimization is the root of all evil 
  - If you're trying to ship your project because you're trying to get it really really fast and you have 0 users, you're losing 
  - Optimize for performance based on the device and network capabilities of your users in ideally under 5 seconds and always test your performance on mobile devices on different network connections and experiment 

## Unlimited Update
- Return to this lesson if you think something needs to be updated 
