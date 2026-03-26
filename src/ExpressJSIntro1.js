// "express js etle framework che je flow aape che kam karva mate no ane badhi requests and responses handle kare che"
// "react js etle library che je tools aape che kam karva mate na"

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
// there are 2 ways to use middleware in express js
// 1. application level middleware --> it is used to handle all the requests and responses for the entire application and it is defined using app.use() method
// 2. route level middleware --> it is used to handle specific routes and it is defined using app.get(), app.post(), etc. methods

const app = express();
const PORT = 8200; // Define the port number for the server

// handle and create routes
app.get("/", (req, res) => {
  res.send("Welcome to Express JS Server");
});

// 1) application level middleware
// if we use this in starting it runs every time when we make a request to the server
// "aa middleware ma ek function che jena 3 parameters che req, res, next ane aa function route run thay eni pahla run thay che"
app.use((req, res, next) => {
  console.log("Application Level Middleware");
  next(); // next() is used to pass the control to the next middleware function or route handler
});


// 2) route level middleware
// "aa middleware ma ek function che jena 3 parameters che req, res, next ane aa function route run thay eni pahla run thay che"
// "route level middleware etle aa middleware specific route par run thay che"
app.get(
  "/home",
  (req, res, next) => {
    console.log("Route Level Middleware");
    next(); // next() is used to pass the control to the next middleware function or route handler
  },
  (req, res) => {
    res.send("This is home page");
  },
);

// error handling middleware
// "error handling middleware etle aa middleware error handle karva mate use thay che"
// "error handling middleware ma 4 parameters che err, req, res, next ane aa function route run thay eni pahla run thay che"
app.get("/about", (req, res, next) => {
  return next(new Error("not found")); // it is shows me in console
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!"); // it is shows me in FE
});


// form handing and working with the forms
// handle backend process of forms and make sure data is coming from any FE and we can process that data and send response to the client
// we install cookie-parser and body-parser to handle forms data and cookies in express js

// there are two words session and cookie 
// session is a server-side storage mechanism that allows us to store data about a user's session on the server. It is used to store data that is specific to a user's session, such as login information, shopping cart contents, etc. The session data is stored on the server and a unique session ID is sent to the client as a cookie. The client sends this session ID back to the server with each request, allowing the server to retrieve the corresponding session data.
// "koi pn data FE pr rakhi sakie che ane te data ne koi pn BE pr request ma automatic send kari sakie che ej data ne cookie kevay che ane aa BE FE cookie connection ne session kevay che ane aa session data server pr store thay che ane cookie client pr store thay che"
// cookie is mainly used in authentication and authorization process to identify the user and maintain their session

// form data is converted into a blob string and sent to the server and then we can parse that data on the server and use it as per our requirement
// this is done in starting of the code after creating routes and before listening to the server
// "simple ana thi json data read thay che" 
app.use(express.json()); // it is used to parse the incoming request body in JSON format and make it available in req.body
// "simple ana thi x-www-form-urlencoded data read thay che" 
app.use(express.urlencoded({ extended: true })); // it is used to parse the incoming request body in URL-encoded format and make it available in req.body




app.listen(PORT);
