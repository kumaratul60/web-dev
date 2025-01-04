# GIT Command Documentation: From Basics to Advanced

This document provides a comprehensive guide to common bash commands, ranging from basic navigation to advanced development tools. It is structured to be accessible to beginners while also providing depth for experienced users.

## Table of Contents

- [GIT Command Documentation: From Basics to Advanced](#git-command-documentation-from-basics-to-advanced)
  - [Table of Contents](#table-of-contents)
    - [`git` - Version Control (Detailed)](#git---version-control-detailed)
      - [Core Concepts](#core-concepts)
      - [Common Commands](#common-commands)
      - [Advanced Commands](#advanced-commands)
  - [Git Diff and Git Patch](#git-diff-and-git-patch)
    - [**`git diff`**](#git-diff)
      - [Overview](#overview)
      - [Common Use Cases](#common-use-cases)
      - [Additional Options](#additional-options)
    - [**`git patch`**](#git-patch)
      - [Overview](#overview-1)
      - [Creating a Patch](#creating-a-patch)
      - [Applying a Patch](#applying-a-patch)
    - [**Use Cases for Git Diff and Patches**](#use-cases-for-git-diff-and-patches)
    - [**Best Practices**](#best-practices)
    - [**Further Reading**](#further-reading)
  - [Important Notes](#important-notes)

### `git` - Version Control (Detailed)

- **Description:** `git` is a powerful distributed version control system that tracks changes to files over time, enables collaboration, and allows you to revert to previous states of your project.

- **Syntax:**

  ```bash
  git <command> [options]
  ```

#### Core Concepts

- **Repository:** A directory that contains all the project files and the version history.
- **Working Directory:** The actual files you are working on.
- **Staging Area (Index):** A holding area for changes before they are committed.
- **Commit:** A snapshot of the staged changes at a particular point in time.
- **Branch:** A parallel version of the project that allows for isolated development.
- **Remote:** A copy of the repository on a server.
- **HEAD:** A pointer to the currently active branch or commit.

#### Common Commands

- **Initialize a new Git repository:**

  ```bash
  git init  # create new git project in folder
  ```

  - **Use Case:** Start tracking changes in a new or existing project.

- **Clone a Git repository from a remote server:**

  ```bash
  git clone <repository_url>
  ```

  - **Use Case:** Obtain a copy of an existing project hosted on a server.

- **Check the state of the working tree:**

  ```bash
  git status
  ```

  - **Use Case:** Check which files have been modified, staged, or are untracked.
  - **Output Info:**
    - **Untracked files:** files that git is not following
    - **Modified files:** files that have been changed but not yet added to the staging area
    - **Changes to be committed:** files that have been staged and are ready for commit

- **Stage changes for commit:**

  ```bash
  git add <file(s)>
  ```

  - **Use Case:** Prepare specific changes for the next commit.

- **Stage changes interactively (patch mode):**

  ```bash
  git add -p
  ```

  - **Use Case:** Stage changes in a granular way by reviewing each "hunk" of changes individually.

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

- **Commit staged changes:**

  ```bash
  git commit -m "<message>"
  ```

  - **`-m "<message>"`:** Includes a commit message (required).
  - **Commit Hash:** Each commit is assigned a unique SHA-1 hash (a long string of characters), which identifies that specific commit.

  - **Use Case:** Save your current staged changes to the commit history.

- **Amend the last commit:**

  ```bash
  git commit --amend -m "New Commit Message"
  ```

  - **Use Case:** Change the last commit message or add new files to the last commit.

- **Upload local commits to a remote repository:**

  ```bash
  git push [remote_name] [branch_name]
  ```

  - **Use Case:** Share your commits with others or back up your project to a server.

  ```bash
   git push origin main  # push in main branch to the 'origin' remote
   git push # if the branch is track with the remote branch, then can use this command
  ```

  - **`origin`:** A common name for the default remote repository.
  - **`main`/`master`:** Common branch names.
  - **Use Case:** Share your commits with others or back up your project to a server.

- **Download commits from a remote repository:**

  ```bash
  git pull [remote_name] [branch_name]
  ```

  - **Use Case:** Keep your local repository synchronized with the remote repository.

- **Download objects and refs from another repository:**

  ```bash
  git fetch [remote_name]
  ```

  - **Use Case:** Update the remote branch in your local machine without merging changes into local branches.

- **List branches:**

  ```bash
  git branch
  ```

  - **Use Case:** See what branches are available in your local repository.

- **Create a new branch:**

  ```bash
  git branch <branch_name>
  ```

  - **Use Case:** Create a new isolated branch for developing a new feature.

- **Switch to a different branch:**

  ```bash
  git checkout <branch_name>
  ```

  - **Use Case:** Move between different development branches.

- **Merge a branch into the current branch:**

  ```bash
  git merge <branch_name>
  ```

  - **Use Case:** Combine changes from another branch into your current branch.

- **Reapply commits on top of another branch:**

  ```bash
  git rebase [branch_name]
  ```

  - **Use Case:** Rebase is an alternative to merge for integrating changes from one branch into another.

  - **Description:** Rebase is an alternative to merge for integrating changes from one branch into another. It replays your commits on top of the target branch, resulting in a linear project history.
  - **Use Cases:**
    - Cleaning up your branch history by eliminating merge commits.
    - Ensuring your branch is up-to-date before merging or pushing.
  - Rewriting the commit history and creating cleaner commit history.
  - **Warning:** Rebasing can rewrite history. Use caution when rebasing shared branches as it can cause issues for collaborators if you force-push after rebasing.

- **Delete a local branch:**

  ```bash
  git branch -d <branch_name>
  ```

  - **Use Case:** Remove an unwanted or already merged branch.

- **Delete a remote branch:**

  ```bash
  git push origin --delete <branch_name>
  ```

  - **Use Case:** Remove an unwanted remote branch.

- **View commit history:**

  ```bash
  git log
  ```

  - **Use Case:** Review the history of changes in the project.

- **Show the history of changes to the `HEAD`:**

  ```bash
  git reflog
  ```

  - **Use Case:** See all the commits including deleted commits.

  - **Description:** Shows a log of where your `HEAD` has pointed, even if those commits are not reachable by any branch. It allows you to revert back to a previous state.

- **Revert to an old commit:**

  ```bash
  git revert <commit_hash>
  ```

  - **Use Case:** Creates a new commit that undoes the changes introduced in the specified commit.

- **Reset working directory to an old commit:**

  ```bash
  git reset <commit_hash>
  ```

  - **Use Case:** Reverts the working tree to an older commit.

- **Apply specific commits from different branches to the current branch:**

  ```bash
  git cherry-pick <commit-hash>
  ```

  - **Use Case:** Useful for picking specific commits from other branches and applying them to the current branch.

- **Save local changes to a stash:**

  ```bash
  git stash
  git stash save "message"
  git stash list
  git stash apply
  git stash apply stash@{2}
  ```

  - **Use Case:** Temporarily save local changes which are not ready to commit. Use `git stash save "message"` to add a custom message, `git stash list` to view all stashes, and `git stash apply` or `git stash apply stash@{2}` to apply the last or a specific stash.

- **Show changes in the working directory:**

  ```bash
  git diff
  ```

  - **Use Case:** Inspect what changes you have made since the last commit.

- **Show the remote of the local project:**

  ```bash
  git remote -v
  ```

  - **Use Case:** Inspect the remote URL you are working with.

#### Advanced Commands

- **Configure git settings:**

  ```bash
  git config --global user.name "your name"
  git config --global user.email "your email"
  git config --list
  ```

  - **Use Case:** Configure global settings in Git.

- **Find a specific commit that introduced a bug:**

  ```bash
  git bisect start
  git bisect bad
  git bisect good <commit_hash>
  ```

  - **Use Case:** Identify the commit that introduced a bug. Git will automatically move to the next commit to test based on your input.

- **Remove untracked files:**
- **`git clean` - Remove untracked files**

  ```bash
  git clean -fd
  ```

  - **Use Case:** Remove all untracked files and folders that are not Git-controlled.

## Git Diff and Git Patch

### **`git diff`**

#### Overview

`git diff` is a Git command used to display changes between different states of a repository. This includes changes in the working directory, staging area, and between commits.

#### Common Use Cases

- **Compare Unstaged Changes:**

  ```bash
  git diff
  ```

- **Compare Staged Changes:**

  ```bash
  git diff --cached
  ```

- **Compare Changes Between Commits:**

  ```bash
  git diff <commit1> <commit2>
  ```

- **Compare a Specific File:**

  ```bash
  git diff <file>
  ```

- **Compare Branches:**

  ```bash
  git diff <branch1> <branch2>
  ```

#### Additional Options

- **Show Only a Summary:**

  ```bash
  git diff --stat
  ```

- **Ignore Whitespace Changes:**

  ```bash
  git diff -w
  ```

- **Highlight Word Changes:**

  ```bash
  git diff --word-diff
  ```

- **Display `<n>` lines of context around changes:**

  ```bash
  git diff -U<n>
  ```

### **`git patch`**

#### Overview

A patch in Git is a file that contains the differences (or "diff") between two states of a repository. Patches can be shared, applied, or stored for later use.

#### Creating a Patch

- **From Unstaged Changes:**

  ```bash
  git diff > changes.patch
  ```

- **From Staged Changes:**

  ```bash
  git diff --cached > changes.patch
  ```

- **Between Commits:**

  ```bash
  git diff <commit1> <commit2> > changes.patch
  ```

#### Applying a Patch

- **Apply a Patch File:**

  ```bash
  git apply changes.patch
  ```

### **Use Cases for Git Diff and Patches**

1. **Code Review:** Inspect differences before committing or merging.
2. **Collaboration:** Share patch files with team members to apply specific changes.
3. **Backup:** Save changes as patch files for later restoration.

### **Best Practices**

- Use `git diff --cached` before committing to review staged changes.
- Use patches to share isolated fixes or features with teammates.
- Always test after applying a patch to ensure it integrates correctly.

### **Further Reading**

- [Git Documentation: Diff](https://git-scm.com/docs/git-diff)
- [Git Documentation: Apply](https://git-scm.com/docs/git-apply)

## Important Notes

- **Commit messages:** Write clear and concise commit messages that explain the reason for the change.
- **Branching strategy:** Employ a branching strategy (e.g., Gitflow) to manage development effectively.
- **Remote workflow:** Understand the pull, push, and merge workflows for collaborating effectively.
- **Git GUI Clients:** If you are new to git and finding it difficult to remember all the commands, you can use Git GUI clients, such as GitHub Desktop, GitKraken, SourceTree, etc.
- **Read the documentation:** Explore more options, flags, and features using `git --help` or online documentation.
