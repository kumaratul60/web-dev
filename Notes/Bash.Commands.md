# Bash Command Documentation: From Basics to Advanced

This document provides a comprehensive guide to common bash commands, ranging from basic navigation to advanced development tools. It is structured to be accessible to beginners while also providing depth for experienced users.

## Basic File System Navigation

These commands are fundamental for interacting with your computer's file system through the terminal.

### `pwd` - Print Working Directory

- **Description:** `pwd` (print working directory) displays the absolute path of your current location in the file system. This is helpful to know exactly where you are working.
- **Syntax:**
  ```bash
  pwd
  ```
- **Example:**
  ```bash
  /home/user/projects
  ```
- **Use Cases:**
  - Confirming your current location before executing commands.
  - Troubleshooting when lost in a nested directory structure.

### `cd` - Change Directory

- **Description:** `cd` (change directory) allows you to navigate between folders (directories) within the file system.
- **Syntax:**
  ```bash
  cd <directory>
  ```
- **Special Cases:**
  - `cd ..`: Moves you up one directory level (to the parent directory).
  - `cd`: Moves you to your home directory.
  - `cd -`: Moves you to the previous directory.
- **Examples:**
  - Navigating forward:
  ```bash
  cd projects
  cd my-project/src
  ```
  - Navigating backward:
  ```bash
  cd ..
  cd ../..
  ```
  - Navigating to the previous directory:
  ```bash
  cd -
  ```
- **Use Cases:**
  - Moving between project folders.
  - Accessing configuration or data files located in specific directories.
  - Rapidly switching between different locations.

### `ls` - List Directory Contents

- **Description:** `ls` (list) displays the files and folders within a specified directory. If no directory is specified, it displays the contents of the current directory.
- **Syntax:**
  ```bash
  ls [options] [directory]
  ```
- **Common Options:**
  - `-l`: Long listing format, which includes file permissions, ownership, size, and modification date/time.
  - `-a`: List all files, including hidden files (those starting with a dot `.`).
  - `-h`: Display file sizes in human-readable format (e.g., K, M, G).
  - `-t`: Sort files by modification time (newest first).
  - `-r`: Reverse the order of the list.
  - `-S`: Sort files by size (largest first).
- **Examples:**

  - Basic listing:

  ```bash
  ls
  ```

  - Long listing:

  ```bash
  ls -l
  ```

  - Listing with hidden files:

  ```bash
  ls -a
  ```

  - Long listing with human-readable sizes:

  ```bash
  ls -lh
  ```

  - List the content of specified folder:

  ```bash
  ls  folder-name
  ```

- **Use Cases:**
  - Viewing files in your current directory.
  - Checking if specific files or folders exist.
  - Quickly inspecting file properties like permissions and size.

## File and Directory Manipulation

These commands enable you to create, modify, and organize files and directories.

### `mkdir` - Make Directory

- **Description:** `mkdir` (make directory) creates a new folder (directory).
- **Syntax:**
  ```bash
  mkdir <directory_name>
  ```
- **Example:**

  ```bash
  mkdir my_new_folder
  mkdir -p path/to/new/directory  #creates parent directories if they don't exist
  ```

- **Use Cases:**
  - Creating project folders.
  - Organizing files into different categories.
  - Setting up directory structures for software development projects.

### `touch` - Create an Empty File

- **Description:** `touch` creates an empty file. It is commonly used to create new files quickly.
- **Syntax:**
  ```bash
  touch <filename>
  ```
- **Examples:**
  ```bash
  touch index.js
  touch styles.css
  touch data.txt
  ```
- **Use Cases:**
  - Creating a new file quickly.
  - Updating the last access time of a file.

### `cat` - Print File Content

- **Description:** `cat` (concatenate) displays the contents of one or more files to the standard output (your terminal).
- **Syntax:**
  ```bash
  cat <filename>
  ```
  ```bash
  cat file1.txt file2.txt   # concatenate the file content
  ```
- **Examples:**
  ```bash
  cat index.js
  ```
- **Use Cases:**
  - Quickly viewing the content of a file.
  - Combining the content of multiple files and printing them out.

### `vi` (vim) - Text Editor

- **Description:** `vi` (or `vim`) is a powerful text editor available on most Unix-like systems. It is modal, meaning it operates in different modes for text editing.
- **Basic Usage:**

  1.  **Open a File:**
      ```bash
      vi <filename>
      ```
      If the file doesn't exist, `vi` will create it.
  2.  **Insert Mode:**
      - Press `i` to enter insert mode, which allows you to type text.
  3.  **Normal Mode (Escape):**
      - Press `Esc` to return to normal mode.
  4.  **Save and Exit:**
      - In normal mode, type `:wq!` and press `Enter` to save changes and exit.
  5.  **Exit Without Saving:**
      - In normal mode, type `:q!` and press `Enter` to exit without saving.

- **Use Cases:**
  - Editing configuration files.
  - Quickly creating or modifying code snippets.
  - Performing complex text manipulation using vim's advanced commands.

### `mv` - Move or Rename Files/Folders

- **Description:** `mv` (move) is used for moving files or folders from one location to another, or for renaming them.
- **Syntax:**
  - **Moving a file/folder:**
    ```bash
    mv <source> <destination>
    ```
  - **Renaming a file/folder:**
    ```bash
    mv <old_name> <new_name>
    ```
- **Examples:**
  - Moving a file:
    ```bash
    mv file.txt documents/
    ```
  - Moving a folder
    ```bash
     mv folder1  new_folder_path/
    ```
  - Renaming a file:
    ```bash
     mv old_file.txt new_file.txt
    ```
  - Renaming a folder:
    ```bash
     mv old_folder new_folder
    ```
- **Use Cases:**
  - Reorganizing your file structure.
  - Renaming files and folders.

### `cp` - Copy Files/Folders

- **Description:** `cp` (copy) is used for copying files and folders.
- **Syntax:**
  - **Copying a file:**
    ```bash
    cp <source_file> <destination_file>
    ```
  - **Copying a folder:**
    ```bash
    cp -r <source_folder> <destination_folder>
    ```
- **Options:**
  - `-r` or `-R`: Recursively copies directories (including their contents).
- **Examples:**
  - Copying a file:
    ```bash
    cp file.txt backup.txt
    cp file.txt documents/
    ```
  - Copying a folder:
    ```bash
    cp -r folder1 folder2
    cp -R folder1 documents/
    ```
- **Use Cases:**
  - Creating backups of files.
  - Duplicating configuration files.

## Searching Files

### `grep` - Search for Text

- **Description:** `grep` (global regular expression print) is a powerful command for searching for patterns in files.
- **Syntax:**
  ```bash
  grep [options] <pattern> <filename(s)>
  ```
- **Common Options:**
  - `-i`: Case-insensitive search.
  - `-v`: Invert match, showing lines that _don't_ contain the pattern.
  - `-r`: Recursive search in directories.
  - `-n`: Show line numbers.
  - `-l`: List filenames containing the matching pattern.
  - `-c`: Count the number of matched lines.
- **Examples:**
  - Search for a word in a file:
    ```bash
    grep "error" log.txt
    ```
  - Case-insensitive search:
    ```bash
    grep -i "Error" log.txt
    ```
  - Search recursively in a folder:
    ```bash
    grep -r "api_key" my_project/
    ```
  - Show line numbers:
    ```bash
    grep -n "debug" app.log
    ```
- **Use Cases:**
  - Locating errors or warnings in log files.
  - Searching for specific lines of code within source files.
  - Filtering output of other commands.

## Advanced Commands: Node, npm, nvm, Git

These tools are essential for modern web development and version control.

### `node` - JavaScript Runtime

- **Description:** `node` is the command for running Node.js applications.
- **Syntax:**

  ```bash
  node <filename.js>
  ```

  ```bash
  node  -v # to check node version
  ```

  ```bash
  node -e 'console.log("hello world");' #run this code in terminal
  ```

- **Use Cases:**
  - Running server-side JavaScript applications.
  - Executing scripts for automated tasks.

### `npm` - Node Package Manager

- **Description:** `npm` (Node Package Manager) is used for managing project dependencies and running scripts.
- **Syntax:**
  ```bash
  npm <command> [options]
  ```
- **Common Commands:**

  - `npm install`: Install dependencies.
    ```bash
    npm install  # Install dependencies from the package.json file
    npm install <package-name>   #install specific package
    npm install <package-name>@<version-number> #install specific version of the package
    ```
  - `npm start`: Run the project's start script.
    ```bash
     npm start # run start script from package.json file
    ```
  - `npm run <script_name>`: Run custom scripts defined in `package.json`.
    ```bash
    npm run dev  # Run the `dev` script from `package.json`
    ```
  - `npm init`: Initialize a new npm project.
    ```bash
    npm init -y  # initializes a new nodejs project
    ```
  - `npm  --version`: Check current installed npm version
    ```bash
      npm --version
    ```
  - `npm update <package-name>`: Update package to the latest version
    ```bash
     npm update <package-name>
    ```
  - `npm uninstall <package-name>`: uninstall the package
    ```bash
    npm uninstall <package-name>
    ```

    ```

- **Use Cases:**
  - Managing dependencies in JavaScript projects.
  - Automating common development tasks.

### `nvm` - Node Version Manager

- **Description:** `nvm` (Node Version Manager) is a tool for managing multiple Node.js versions. This is helpful when working on different projects that require different Node.js versions.
- **Syntax:**
  ```bash
  nvm <command> [options]
  ```
- **Common Commands:**
  - `nvm install <version>`: Install a specific Node.js version.
    ```bash
    nvm install 18.16.0
    ```
  - `nvm use <version>`: Switch to a specific Node.js version.
    ```bash
    nvm use 18.16.0
    ```
  - `nvm ls`: List all installed Node.js versions.
    ```bash
    nvm ls
    ```
  - `nvm current`: Display the current version
    ```bash
    nvm current
    ```
  - `nvm uninstall <version>`: Uninstall a version
    ```bash
    nvm uninstall 18.16.0
    ```
- **Use Cases:**
  - Managing Node.js versions.
  - Isolating different project environments.
  - Upgrading to the latest versions of Node.js.

### `git` - Version Control

- **Description:** `git` is a distributed version control system that tracks changes to files over time and allows collaboration.
- **Syntax:**
  ```bash
  git <command> [options]
  ```
- **Common Commands:**
  - `git init`: Initialize a new Git repository.
    ```bash
    git init  # create new git project in folder
    ```
  - `git clone <repository_url>`: Clone a Git repository from a remote server.
    ```bash
    git clone https://github.com/user/my-repo.git
    ```
  - `git status`: Check the state of the working tree (modified, staged, etc).
    ```bash
    git status
    ```
  - `git add <file(s)>`: Stage changes for commit.
    ```bash
    git add .  # Stage all changes in directory
    git add  filename  # Stage the specific file
    ```
  - `git commit -m "<message>"`: Commit staged changes with a descriptive message.
    ```bash
    git commit -m "Fix: Issue in form validation"
    ```
  - `git push`: Upload local commits to a remote repository.
    ```bash
    git push  origin main  # push in main branch
    ```
  - `git pull`: Download commits from a remote repository.
    ```bash
    git pull origin main
    ```
  - `git branch`: List all branches of git
    ```bash
    git branch
    ```
  - `git branch <branch_name>`: Create a new branch of git
    ```bash
    git branch develop
    ```
  - `git checkout <branch_name>`: switch to different branches
    ```bash
    git checkout develop
    ```
  - `git merge <branch_name>`: merge different branch with each other
    ```bash
    git merge develop # merge develop branch in current branch
    ```
  - `git log`: View commit history.
    ```bash
    git log --oneline # one line commit history
     git log --graph --decorate --pretty=oneline --abbrev-commit # detailed commit history
    ```
- **Use Cases:**
  - Tracking changes in source code.
  - Collaborating on projects with others.
  - Managing different versions and releases of software.
  - Reverting back to an old commit state.

## Conclusion

This document covers a wide range of bash commands, starting from basic file system manipulation to more advanced development tools. Practice these commands to improve your efficiency in the terminal. Remember that these are just some common commands, and there are many other powerful commands that bash has to offer. Continue exploring the command-line environment to further your proficiency.
