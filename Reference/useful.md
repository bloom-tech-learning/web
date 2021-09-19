## List of super userful Git Commands to use everyday.

# Config / Setup

```
# Setting Global Username/Email
git config --global user.name "Aayush Tuladhar"'
git config --global user.email "aayush.tuladhar@gmail.com"'

# Clone a Repo from URL
git clone <url>

# Creating an empty GIT repository
git init
```

# Adding / Deleting Files

```
# Adding all files to Git
git add .

# Adds files to Git
git add <file1> <file2>

# Add folder to Git
git add <foldername>

# Remmove File from the Project
git rm <file1> <file2>
```

# Commit

```
# Performing Commit with Message
git commit <file> -m "Message"

# Perform Commit to All Tracked Files
git commit -a -m "Message"

# Reverts changed you performed in the <filename>
git checkout -- <filename>
```

# Commit History
```
# All Git Commits (Reverse Chronological Order)
git log

# All Git Commits with Diffs
git log -p

# Git Log with Graph
git log --all --decorate --oneline --graph

```

# Changes

```
# Show files added to the index, files with changes, and untracked files
git status

# Show unstaged changes made since your last commit
git diff

# Show changes staged for commit (i.e., difference between index and last commit)
git diff --cached

# Show changes since last commit
git diff HEAD
```

# Sharing

```
# Fetches from the remote and merge to the current branch
git pull

# Sync Master from Origin to Local 
git pull --rebase origin master

# Update the remote repository
git push <remote-name> <branch-name>
git push origin master
```

## Git Branching Explained

```
# Creates a new branch from the old branch
git checkout -b <newbranch> <oldbranch>

# Switch to <dbranch>
git checkout <branch>
git checkout -b      # -b Causes new branch to be created
git checkout -f      # -f Forcing to change branch. This is used to throw local changes

# Merge contents of <newbranch> to <oldbranch>
# The --no-ff cause merge to always create a new commit object, even if the merge should be performed with a fast-forward.

git merge --no-ff <newbranch>
git push origin develop
```

-----

# Creating a release version

`git checkout -b release-1.2 develop`

#### Making a commit
`git commit -a -m "Release Version"`

#### Finishing a release branch
```
git checkout master
git merge --no-ff release-1.2
git tag -a 1.2
```

#### Merging contents of release1.2 to the develop branch
```
git checkout develop
git merge --no-ff release-1.2
```

#### Deleting branch
`git branch -d release1.2`

--------------- from web48

## How to set up GIT SSH
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
open ~/.ssh/config
touch ~/.ssh/config
open ~/.ssh/config
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
ssh-add -K ~/.ssh/id_ed25519
pbcopy < ~/.ssh/id_ed25519.pub
```
### go to github copy from "pbcopy < ~/.ssh/id_ed25519.pub" cmd+V
### test git
```sh
ssh -T git@github.com
```

### How to submodoule on github
```sh
git submodule add git@github.com:beatlesm/web48.git

git add .
git commit -m ''
git push -u origin master
```
### Usefull branch command
```sh
git checkout -b first-last

git branch

git branch -d localBranchName

git push origin --delete remoteBranchName

git branch --r -l

```

## to make fancy Terminal on macos
```sh
  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```


