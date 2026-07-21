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
  fs.readdir(`./public/notes`, (err, files) => {
    console.log('view files', files);
    res.render("prectice1", { files: files });
  });
});

app.post("/create", (req, res) => {
  console.log('create files',req.body);
  fs.writeFile(`./public/notes/${req.body.title.split(' ').join('')}.txt`,req.body.description,(err)=>{
    res.redirect(`/`);
  })
});

app.listen(PORT);
