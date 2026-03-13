// it is a command for effect changes in same terminal without opening new terminal
// --> source ~/.zshrc

// git ia a version control system that helps developers to track changes in their code and collaborate with other developers
// 1) track the history of changes in the code
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
// there 4 file statuses of files in git 
// 1) untracked --> file is not in git history to track , 2) modified --> file is changed , 3) staged --> file is ready to commit , 4) unmodified --> file is not changed
// git workflow is 1) github repo --> 2) clone the repo in local system --> 3) make changes in the code --> 4) stage the changes --> 5) commit the changes --> 6) push the changes to remote repo on github.


// this is from github to local system
// > git clone <repository_url> --> it is clone a remote repository in local system.


// this is from local system to github
// > git init --> it is a command to initialize a new git repo in the current directory.
// > "git remote add origin <remote_repository_url>" --> it is a command to connect local repo with remote repo. we have to add the remote repo to our local repo using the command. origin is a default name for the remote repository, but you can choose any name you want.
// > git remote -v --> it is a command to check the remote repository that is connected to the local repository.


// > git status --> it is display the state of the code
// > git add . --> it is a command to stage all the changes in the current directory and its subdirectories.
// > git add <file_name> --> it is a command to stage the changes in the specified file.
// > git restore <file_name> --> it is a command to unstage the changes in the specified file.
// > git restore --staged <file_name> --> it is a command to unstage the changes in the specified file after adding file and also restore the file to its previous state.
// > git commit -m "message" --> it is a command to commit the staged changes with a message that describes the changes.
// > git push origin main --> it is a command to upload committed local changes to the remote repo on github. 
// "origin" is the name of the remote repo and "main" is the name of the branch.
// > git push -u origin main --> it is a command to push the changes to the remote repo and also set the upstream branch.
// it is used when we want to push the changes for the first time to the remote repo. after running this command, we can simply run "git push" to push the changes in future without specifying the remote and branch name.
// > git pull origin main --> it is a command to fetch and merge the changes from the remote repo to the local repo. 
// it is used when we want to update our local repo with the latest changes from the remote repo.

// now we work on branches and merge the branches
// > git branch --> it is a command to list all the branches in the local repository and working branch.
// > git branch -M main --> it is a command to rename the current branch to main. it is used when we want to change the name of the default branch from master to main.
// > git checkout <branch_name> --> it is a command to switch to the specified branch. 
// it is used when we want to work on a different branch or when we want to merge the changes from one branch to another.

// > git checkout -b <branch_name> --> it is a command to create a new branch and switch to that branch. 
// it is used when we want to work on a new feature or bug fix without affecting the main branch.

// > git branch -d <branch_name> --> it is a command to delete the specified branch. it is not delete current branch.
// it is used when we want to delete a branch that is no longer needed or when we want to clean up the branches in the repository.

// > git branch -D <branch_name> --> it is a command to force delete the specified branch.
// it is used when we want to delete a branch that has unmerged changes or when we want to delete a branch that is not fully merged with the main branch.

// > git diff <branch_name> --> it is a command to show the differences between the current branch and the specified branch. it is used when we want to see the changes that have been made in the specified branch compared to the current branch.

// > git merge <branch_name> --> it is a command to merge the specified branch into the current branch. 
// it is used when we want to combine the changes from one branch to another. for example, when we want to merge a feature branch into the main branch after completing the work on that feature.



// extra commonds
// ls -a --> shows all the files and folders in the current directory including hidden files and folders.