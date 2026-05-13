//  creating notes making webapp using BE express js (like notepade app)
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8200;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readdir("public", (err, files) => {
    res.render("prectice1", { files: files });
  });
});

app.post("/create", (req, res) => {
  console.log(req.body);
});

app.listen(PORT);
