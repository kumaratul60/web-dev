# GIT Command Documentation: From Basics to Advanced

This document provides a comprehensive guide to common bash commands, ranging from basic navigation to advanced development tools. It is structured to be accessible to beginners while also providing depth for experienced users.

... (The Basic File System Navigation, File and Directory Manipulation, and Searching sections remain the same as in the previous response) ...

## Advanced Commands: Node, npm, nvm, Git

These tools are essential for modern web development and version control.

... (The Node, npm, and nvm sections remain the same as in the previous response) ...

### `git` - Version Control (Detailed)

- **Description:** `git` is a powerful distributed version control system that tracks changes to files over time, enables collaboration, and allows you to revert to previous states of your project.

- **Syntax:**

  ```bash
  git <command> [options]
  ```

- **Core Concepts:**

  - **Repository:** A directory that contains all the project files and the version history.
  - **Working Directory:** The actual files you are working on.
  - **Staging Area (Index):** A holding area for changes before they are committed.
  - **Commit:** A snapshot of the staged changes at a particular point in time.
  - **Branch:** A parallel version of the project that allows for isolated development.
  - **Remote:** A copy of the repository on a server.
  - **HEAD:** A pointer to the currently active branch or commit.

- **Common Commands (Expanded):**

  - **`git init` - Initialize a new Git repository:**

    ```bash
    git init  # create new git project in folder
    ```

    - **Use Case:** Start tracking changes in a new or existing project.

  - **`git clone <repository_url>` - Clone a Git repository from a remote server:**

    ```bash
    git clone https://github.com/user/my-repo.git
    ```

    - **Use Case:** Obtain a copy of an existing project hosted on a server.

  - **`git status` - Check the state of the working tree:**

    ```bash
    git status
    ```

    - **Use Case:** Check which files have been modified, staged, or are untracked.
    - **Output Info:**
      - **Untracked files:** files that git is not following
      - **Modified files:** files that have been changed but not yet added to the staging area
      - **Changes to be committed:** files that have been staged and are ready for commit

  - **`git add <file(s)>` - Stage changes for commit:**

    ```bash
    git add .  # Stage all changes in directory
    git add filename.txt  # Stage a specific file
    git add *.js # Stage all javascript files
    git add folder/  #stage the specific folder and file inside that
    ```

    - **Use Case:** Prepare specific changes for the next commit.

  - **`git add -p` - Stage changes interactively (patch mode):**

    ```bash
    git add -p
    ```

    - **Description:** This command allows you to stage changes in a very granular way, by reviewing each "hunk" (section) of changes individually. Git will present you with each change made in a file, and you can choose whether to stage that specific change or not.
    - **Interactive Prompt:** When you run `git add -p`, you'll see a prompt for each change, allowing you to choose one of the following options:
      - `y`: Stage this hunk.
      - `n`: Don't stage this hunk.
      - `q`: Quit the interactive staging process.
      - `a`: Stage this and all remaining hunks in this file.
      - `d`: Don't stage this hunk and all the remaining hunks in the file.
      - `s`: Split the hunk into smaller hunks.
      - `e`: Manually edit the hunk to be staged.
      - `?`: Show help.
    - **Use Cases:**
      - Staging only specific parts of your changes within a file.
      - Reviewing your changes before committing to ensure that there are no accidental commits.
      - Splitting complex changes into smaller, more manageable commits.

  - **`git commit -m "<message>"` - Commit staged changes:**

    ```bash
    git commit -m "Fix: Issue in form validation"
    ```

    - **`-m "<message>"`:** Includes a commit message (required).
    - **Commit Hash:** Each commit is assigned a unique SHA-1 hash (a long string of characters), which identifies that specific commit.
    - **Use Case:** Save your current staged changes to the commit history.

  - **`git commit --amend` - Amend the last commit:**

    ```bash
     git commit --amend -m "New Commit Message"
    ```

    - **Use Case:** change the last commit message or add the new file to the last commit.

  - **`git push [remote_name] [branch_name]` - Upload local commits to a remote repository:**

    ```bash
    git push origin main  # push in main branch to the 'origin' remote
    git push # if the branch is track with the remote branch, then can use this command
    ```

    - **`origin`:** A common name for the default remote repository.
    - **`main`/`master`:** Common branch names.
    - **Use Case:** Share your commits with others or back up your project to a server.

  - **`git pull [remote_name] [branch_name]` - Download commits from a remote repository:**

    ```bash
    git pull origin main  # pull changes from main branch of 'origin' remote
    git pull # if the branch is track with the remote branch, then can use this command
    ```

    - **Use Case:** Keep your local repository synchronized with the remote repository, and update your local changes.

  - **`git fetch [remote_name]` - Download objects and refs from another repository**

    ```bash
    git fetch origin
    ```

    - **Use Case:** update the remote branch in your local machine.
    - **Note:** it does not merge changes into the local branches

  - **`git branch` - List branches:**

    ```bash
    git branch
    git branch -a # list all branches
    ```

    - **Use Case:** See what branches are available in your local repository.

  - **`git branch <branch_name>` - Create a new branch:**

    ```bash
    git branch develop
    ```

    - **Use Case:** Create a new isolated branch for developing a new feature.

  - **`git checkout <branch_name>` - Switch to a different branch:**
    ```bash
    git checkout develop
    git checkout -b new_branch # creates and checkout new branch
    ```
    - **Use Case:** Move between different development branches.
  - **`git checkout <commit hash>` - Switch to a specific commit:**

    ```bash
    git checkout 34894jfj8934jdflkjdfs
    ```

    - **Use Case:** Navigate to a previous state of the project at a specific commit.
    - **Note:** After switching to a commit you'll enter a detached `HEAD` state, meaning any new commit won't be associated with a branch.

  - **`git checkout -` - Switch to the previous branch:**
    ```bash
    git checkout -
    ```
    - **Use Case:** Quickly switch to the branch you were working on previously.
  - **`git merge <branch_name>` - Merge a branch into the current branch:**

    ```bash
    git merge develop # merge develop branch into current branch
    ```

    - **Use Case:** Combine changes from another branch into your current branch.

  - **`git rebase [branch_name]` - Reapply commits on top of another branch**

    ```bash
    git rebase main # rebase current branch on main
    ```

    - **Description:** Rebase is an alternative to merge for integrating changes from one branch into another. It replays your commits on top of the target branch, resulting in a linear project history.
    - **Use Cases:**
      - Cleaning up your branch history by eliminating merge commits.
      - Ensuring your branch is up-to-date before merging or pushing.
    - Rewriting the commit history and creating cleaner commit history.
    - **Warning:** Rebasing can rewrite history. Use caution when rebasing shared branches as it can cause issues for collaborators if you force-push after rebasing.

  - **`git branch -d <branch_name>` - Delete a local branch:**

    ```bash
    git branch -d develop # delete branch
    ```

    - **Use case:** Remove an unwanted or already merged branch.
    - **Note:** Use `-D` to force delete a branch without merging.

  - **`git push origin --delete <branch_name>` - Delete a remote branch:**

    ```bash
    git push origin --delete develop # delete branch from remote
    ```

    - **Use case:** Remove unwanted remote branch

  - **`git log` - View commit history:**

    ```bash
    git log
    git log --oneline # one line commit history
    git log --graph --decorate --pretty=oneline --abbrev-commit # detailed commit history
    ```

    - **`--oneline`:** Display commits in a concise one-line format with the commit hash.
    - **`--graph`**: Show a text-based graph of the commit history
    - **`--decorate`**: Show where the HEAD and the branches are.
    - **`--abbrev-commit`:** Display abbreviated commit hashes.
    - **Use Case:** Review the history of changes in the project.

  - **`git reflog` - show the history of changes to the `HEAD`**

    ```bash
    git reflog
    ```

    - **Description:** Shows a log of where your `HEAD` has pointed, even if those commits are not reachable by any branch. It allows you to revert back to a previous state.
    - **Use Case:** Allows you to see all the commits including deleted commits, and you can easily check out in old commits.

  - **`git revert <commit_hash>` - Revert to an old commit:**

    ```bash
    git revert 4389kj34h4jkbjlkasd
    ```

    - **Use Case:** Creates a new commit that undoes the changes introduced in the specified commit.
    - **Note:** it doesn't remove the older commit history

  - **`git reset <commit_hash>` - Reset working directory to an old commit:**
    ```bash
    git reset --hard 4389kj34h4jkbjlkasd  # reset everything to old commit
    git reset 4389kj34h4jkbjlkasd      # keep local changes
    ```
    - **Use Case:** Reverts the working tree to an older commit.
    - **Note:** `git reset --hard` will erase any local changes

- **`git cherry-pick <commit-hash>` - apply specific commits from different branches to a current branch**
  ```bash
  git cherry-pick 4389kj34h4jkbjlkasd
  ```
  - **Use Case:** Useful for picking specific commits from other branches and applying them to the current branch
- **`git stash` - Save local changes to a stash:**

  ```bash
  git stash   # save all local change
  git stash save "message to the stash changes"  # save all local changes with custom message
  git stash list # check all stash
   git stash apply  # apply the last stash changes
  git stash apply stash@{2} # apply specific stash change by index
  ```

  - **Use Case:** Temporarily save local changes which are not ready to commit.

- **`git diff` - Show changes in the working directory:**

  ```bash
      git diff  # Show changes between your working directory and the staging area.
      git diff --staged  # Show changes between the staging area and the last commit
  ```

  - **Use Case:** Inspect what changes you have made since the last commit.

- **`git remote -v` - Show the remote of the local project:**

  ```bash
  git remote -v
  ```

  - **Use Case:** Inspect the remote URL you are working with.

- **Advanced Commands:**

  - **`git config` - Configure git setting**
    ```bash
       git config --global user.name "your name"
       git config --global user.email "your email"
       git config --list
    ```
    - **Use case:** Use to configure global settings in the git.
  - **`git bisect` - Find a specific commit that introduced a bug.**

  ````bash
      git bisect start # Start the bisect process
      git bisect bad # Mark the current commit as a bad commit
      git bisect good 4389kj34h4jkbjlkasd # Mark the commit as good.
   ```
    *   **Use case:** After you mark the good and bad commit, it checks out the middle commit and let you test whether the bug was present there or not, based on the response git automatically moves to the next good or bad commit to find out where the bug was introduced.

  * **`git clean` - Remove untracked files**
  ```bash
   git clean -fd # remove all untracked files
  ````

      * **Use Case:** remove all untracked files and folder which are not git controlled.

- **Important Notes:**

  - **Commit messages:** Write clear and concise commit messages that explain the reason for the change.
  - **Branching strategy:** Employ a branching strategy (e.g., Gitflow) to manage development effectively.
  - **Remote workflow:** Understand the pull, push, and merge workflows for collaborating effectively.
  - **Git GUI Clients:** If you are new to git and finding it difficult to remember all the commands, can use the git GUI clients, such as GitHub Desktop, GitKraken, SourceTree, etc
  - **Read the documentation:** Explore more options, flags, and features using `git --help` or online documentation.

... (The Conclusion section remains the same as in the previous response) ...
