const express = require("express");
const path = require("path");

const app = express();
const PORT = 8200;

// setting up parsers for form data
app.use(express.json()); // to parse JSON data from the request body
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded data from the request body

// setting up public static files
// "public static files etle aa files je apne FE pr use karva mate rakhi che ane te files ne public folder ma rakho ane te public folder ne main project folder ma rakho"
// "aama css files, js files, images, etc. rakhi sakie che ane te files ne apne FE pr use kari sakie che"
app.use(express.static("public")); // to serve static files from the public folder
// app.use(express.static(path.join(__dirname, "public"))); // both are same but this safer side

// setting up ejs for ejs pages
// "ejs etle embedded javascript template engine je ek templating engine che ane aa templating engine ma apne html code ma javascript code lakhine dynamic content generate kari sakie che"
// "exact dublicate code of html but with some dynamic content and we can use that dynamic content in our html code using ejs syntax"
// install ejs using "npm i ejs"
// setup ejs as a view engine
app.set("view engine", "ejs"); // to set ejs as the view engine for rendering dynamic content in HTML templates


app.get("/", (req, res) => {
  res.send("Working!");
});

// render ejs page
// "always ejs files ne views folder ma rakho ane views folder ne main project folder ma rakho"
app.get("/home", (req, res) => {
  res.render("index", { title: "Home Page" }); // to render the index.ejs template and pass the title variable to it for dynamic content generation
});



// dynamic routing is a way to create routes dynamically based on the parameters passed in the URL
// "dynamic routing etle aa routing ma route ni value dynamic hoy che ane te value url ma pass thay che ane te value ne req.params thi access kari sakie che"
// "ane je value dynamic che eni pahla ":" mukine dynamic url banavay che
// ex. /user/:id, /product/:id, etc
app.get("/user/:id", (req, res) => {
  const userId = req.params.id; // to access the dynamic parameter "id" from the URL
  res.send(`User ID: ${userId}`); // to send the user ID as a response
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


