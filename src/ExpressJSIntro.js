// "express js etle framework che je flow aape che kam karva mate no ane badhi requests and responses handle kare che"
// "react js etle tools aape che kam karva mate na"
// roles of express js is receive request, process request, create route, process data, send response, handle errors, convert blob to json, separate get and post requests, connect database to server,  etc.
// Express js is a web framework for node.js that allows us to create web applications and APIs easily and it is built on top of http module of node.js
// it provides a lot of features such as routing, middleware, template engine, etc. that makes it easier to create web applications and APIs
// we can create a server using express and handle different routes using app.get(), app.post(), app.put(), app.delete() methods
// we can also use middleware to handle requests and responses and we can also use template engine to render dynamic HTML pages

// create a simple server using express js and handle different routes and send response to the client
// this is similar to http module but it is more easier to use and it provides a lot of features that makes it easier to create web applications and APIs
const express = require("express");

// express is a function so that we write express() to create an instance of express 
// we can use that instance to create a server and handle different routes
// routes is just what we use after port number in url to access pages
// ex. /home, /contact, /about, etc

// middleware is a function we run before routes run
// "middlewate etle request and route ni vachhe no function che je route run thay eni pahla run thay che"
// requestHandler is a middleware function that is called when a request is made to the server and it has two parameters req and res which are request and response objects respectively

const app = express();
const PORT = 8200; // Define the port number for the server


// handle get request to home route
app.get("/", (req, res) => {
  res.send("Welcome to Express JS Server");
});

// handle post request to contact route
app.post("/contact", (req, res) => {
  res.send("This is contact page");
});

app.listen(PORT);
