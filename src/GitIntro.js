// it is a command for effect changes in same terminal without opening new terminal
// --> source ~/.zshrc

// git ia a version control system that helps developers to track changes in their code and collaborate with other developers
// 1) trch the history of changes in the code
// 2) collaborate with other developers
// 3) manage different versions of the code

// github is a web-based platform that provides hosting for software development and version control using git. It allows developers to collaborate on projects, share code, and manage their repositories.
// repository "repos" is a one type of folder that contains all the files and history of a project.

// after creating a repo. add readme file to the repo.
// README.md is a markdown file that is used to write documentation for the project. It is a plain text file that can be formatted using markdown syntax.
// so it is not a normal text file we learn to write documentation in markdown syntax. it is a simple way to format text using special characters. for example, we can use # to create a heading, * to create a bullet point, and also add html tags for more formatting.

// doing some changes in the file process is called commit. Git taking "snapshots" of your project at a commit
// add the changes means to stage them and the commit the changes means to save the changes in the history of the project.
// in github we directly do commit and push the changes to the remote repository.
// but in git we have to do it in two steps. first we have to stage the changes and then we have to commit the changes.
// store the commits in the form of repo history
// commit message is a screenshot name that describes the changes that have been made in the commit.

// start with git 
// install git on system
// 1) for windows (git Bash) --> download git from the official website and install it.
// 2) for mac (terminal) --> git is pre-installed on mac. you can install it using homebrew by running the command "brew install git".
// 3) for linux --> you can install git using the package manager of your distribution. for example, on ubuntu, you can run the command "sudo apt-get install git".

// to check the installation of git done then run
// git --version  --> it is a command to check the version of git that is installed on your system.

// to configure git with your name and email, there are 2 option global and local for set the configuration
// > git config --global user.name "Your Name" --> it is a command to set your name in git configuration.
// > git config --global user.email "your.email@example.com" --> it is a command to set your email in git configuration.
// > git config --list --> it is a command to list all the git configuration settings that are set on your system.


// now there are 2 words for commod in git is remote and local
// local means the changes that are made in the local repository on your system and remote means the changes that are made in the remote repository on github.

// > git clone <repository_url> --> it is clone a remote repository in local system.
// > git status --> it is display the state of the code
// > git init --> it is a command to initialize a new git repository in the current directory.

// > git add . --> it is a command to stage all the changes in the current directory and its subdirectories.
// > git commit -m "message" --> it is a command to commit the staged changes with a message that describes the changes.
// > git push origin main --> it is a command to push the committed changes to the remote repository on github. "origin" is the name of the remote repository and "main" is the name of the branch.


// to connect local repository with remote repository we have to add the remote repository to our local repository using the command "git remote add origin <remote_repository_url>".
// after connecting the local repository with remote repository we can push the changes from local repository to remote repository using the command "git push origin main" where "origin" is the name of the remote repository and "main" is the name of the branch.





// ls -a --> shows all the files and folders in the current directory including hidden files and folders.