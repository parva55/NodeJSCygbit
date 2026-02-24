// File System Module
const fs = require("node:fs"); // fs is a built-in module in node.js but thid is full module
// const {readFile, readFileSync, writeFile} = require("fs"); // fs is a built-in module in node.js but this is destructuring of fs module

// Read the file asynchronously it is acynchronous function
// acynchronous --> etle aa function pn run thase sathe sathe biju pn function run thase
fs.readFile("./local/readtext.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    throw err; // throw error if any
  } else {
    console.log("File read content async", data); // this will print the content of the file
  }
});

// Read the file synchronously it is synchronous function
// synchronous --> etle aa function run thase pachi biju function run thase
const test = fs.readFileSync("./local/readtext.txt", "utf8");
console.log("File read content sync", test);

// Write to a file asynchronously
fs.writeFile(
  "./local/writetext.txt",
  "Hello Team, Welcome to Cygbit",
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File written successfully");
    }
  },
);

// Write to a file synchronously
fs.writeFileSync("./local/writetext2.txt", test);
// readstream and writestream we understand later

// Append to a file it is add new content to the existing file
fs.appendFile("./local/writetext.txt", "\nThis is appended text.", (err) => {
  if (err) {
    console.error("Error appending file:", err);
  }
});

// Rename a file it is change the name of the file
fs.rename("./local/writetext2.txt", "./local/writetext3.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
  }
});

// Delete a file it is remove the file from the system
fs.unlink("./local/writetext3.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  }
});
