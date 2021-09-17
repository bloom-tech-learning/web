## Fork and clone this repo. When you need to commit use the following commands.
```sh
git status
git add --all
git status
git commit -m "doc"
git push -u origin master
```

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

### Launching VS code from the command line
```sh
cat << EOF >> ~/.bash_profile
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```
#### Start a new terminal to pick up your .bash_profile changes.
#### Note: Since zsh became the default shell in macOS Catalina, run the following commands to add VS Code to your path:
```sh
cat << EOF >> ~/.zprofile
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```