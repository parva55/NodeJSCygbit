// node.js is runtime environment for executing JS code outside of browser
// "ryan dahl" is the creator of node.js and it was run using google chrome v8 engine and it was run in 2009
// node.js is a server-side runtime environment that allows developers to run JavaScript code on the server side
// etle jya sudhi nodejs chalu che tya suddhi e beckend server chalu rahe che

// install node.js and npm for provide runtime environment for executing JS code outside of browser and npm is package manager for node.js
// install node from official website and check version using "node -v" and "npm -v" in terminal
// npm is patckage store like playstore and appstore
// now we can initialize node project using "npm init" and it will ask for package name, version, description, entry point, test command, git repository, keywords, author and license then it gives us package.json file which is used to manage the dependencies and scripts of the project

// now i start note in terminal using "node" command and exit from node using ".exit" or "ctrl + d"
// create index.js file and run using "node index.js"
// now check list of node version using this command "nvm ls" for find remote all the Node versions available "nvm ls-remote"
// and use speific version using if avalable in system "nvm use v18.16.0"  else install using "nvm install v18.16.0"

// now install Express using "npm i express" it is a web framework for node.js
// also uninstall express using "npm uninstall express"
// we can also run this index file in browser using html file to link this js file to html file
// what we are writing in nodeJs is a module and we can use this module in other js file using "import" and "export"
// there are two types of modules in node.js CommonJS and ES6 modules
// CommonJS is used by default in node.js and we can use it using "require"
// ES6 modules are used in modern JavaScript and we can use it using "import"
// --> we can also use "import" in node.js by using "type": "module" in package.json file
// --> or by using .mjs extension for the file
// in JS callback means function that is passed as an argument to another function and it is executed after the completion of the main function

// there are three type of commoponents 1) filebased 2) buildIn 3) third party
// built-in modules are the modules that come with Node.js by default, such as 'fs', 'path', 'os', etc.
// third-party modules are the modules that are not part of Node.js but can be installed using npm, such as 'express', 'mongoose', 'pokemon', 'nodemon' etc.

// there are 2 type of uses of modules 1) promise based 2) callback based
// promise based modules are the modules that return a promise, such as 'node:fs/promises', 'axios', etc.
// callback based modules are the modules that use callbacks to handle asynchronous operations, such as 'node:fs', 'http', etc.

// NPM is a package manager for Node.js that allows developers to install and manage third-party modules and packages for their projects.
// package are is use by installing them from NPM and modules are pre installed code that is core of node.js
// npm is used to install or uninstall dependencies or devdependencies for the project and it also helps to manage the version of the packages and their dependencies
// dependencies are the packages that are required for the project to run 
// devDependencies are the packages that are required for development purposes only and not required for production

// install package using "npm install <package-name>" and uninstall using "npm uninstall <package-name>"
// we can also install package globally using "npm i -g <package-name>" and uninstall using "npm uninstall -g <package-name>"
// for specific version of package we can use "npm i <package-name>@<version>" and uninstall using "npm uninstall <package-name>@<version>"
// we can also use "npx <package-name>" to run the package without installing it globally 
// node_modules folder is created in the project directory when we install any package and it contains all the installed packages and their dependencies
// "have evu samjie ke ek npm package install karyu ane e bija package per depend hoy to e package pn node_modules folder ma install thase ane e package ni andar jya sudhi depend hoy tya sudhi install thase"

// package.json file has sripts section where we can define custom scripts for our project and we can run those scripts using "npm run <script-name>" in terminal
// for example we can define a script "start" that runs "node src/Modules/HTTPModule.js" and we can run it using "npm start" in terminal
// "to gana commands ma npm run aave che and npm start ma run nthi aavtu enu reason su che"
// "node install karie tyare ena paths ma start and test commond run aave che etle sript ma run nhi aave baki badha scripts ma run add karvu padse"
// "etle jyare npm pachi run aave etle e script ma find karse ene"
// we are creating scripts in package.json file for ex: we print "Hello, World!" using "npm run demo" in terminal
// also combine multiple commands using "&&" in script

// to run NodeJS.js file we need to run "node src/NodeJS.js" in terminal`
// to run FSModule.js file we need to run "node src/Modules/FSModule.js" in terminal
// to run PathModule.js file we need to run "node src/Modules/PathModule.js" in terminal
// to run OSModule.js file we need to run "node src/Modules/OSModule.js" in terminal
// to run HTTPModule.js file we need to run "node src/Modules/HTTPModule.js" in terminal
// to run PokemonModule.js file we need to run "node src/Modules/PokemonModule.js" in terminal

// nodemon is use in terminal to run node.js file and it will automatically restart the server when we make changes in the file
// "npm install nodemon -g --save-dev" // to install nodemon globally and save it as dev dependency in package.json file
// "nodemon src/Modules/PokemonModule.js" to run HTTPModule.js file using nodemon
// if abouve command not work then use "npx nodemon src/Modules/PokemonModule.js" without installing nodemon it works globally


// now we deploy this server on render.com using git
// to deploy this server on render we need to create a render Web Service and then push the code to git
// we can also use Render CLI to deploy the server install Render CLI using
// "curl -fsSL https://raw.githubusercontent.com/render-oss/cli/refs/heads/main/bin/install.sh | sh" globaly
// ADD PATH "export PATH=$PATH:/Users/cygbitdeveloper/.local/bin" AND version using "/Users/cygbitdeveloper/.local/bin/render --version"
// now for uninstall "sudo rm ~/.local/bin/render" and run this to confirm "ls -l ~/.local/bin/render" and "render --version"
// now we run "render login" to login to render.com using CLI and it will ask for token
// You can manage and revoke CLI tokens from your account settings page at any time.
// now run "render workspace set" to set the workspace to render account details
// now we can use "render services" to show list of services on render.com

// not working commont learn more about it
// we can also create a web service using "render services create --type web --name <service-name> --repo <repo-url> --branch <branch-name> --plan <free> --region <region> --env <env-type> --build-command <command> --start-command <command>" ask for service name, repo-url, branch-name, free, region, node, "npm install" and "npm start"
// we can also use "render dashboard[SERVICE_ID]" to open the server in browser
// we can also use "render deploys list[SERVICE_ID]" and "render deploys list --service <service-name>" to show deploys of the service
// we can also use "render deploys create[SERVICE_ID]" to create new deploy of the service
// we can also use "render logs[SERVICE_ID]" to see the logs of the server
// we can also use "render restart[SERVICE_ID]" to restart the server


