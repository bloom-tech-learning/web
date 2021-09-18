## Required VS Code Extensions: 

-   ES Lint
-   Prettier
-   Styled Components 
-   Spell Checker
-   Live Server
-   Please Turn On Auto-Save for HTML and CSS / Turn it off for JavaScript

## Launching VS code from the command line
```sh
cat << EOF >> ~/.bash_profile
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```
## Start a new terminal to pick up your .bash_profile changes.
#### Note: Since zsh became the default shell in macOS Catalina, run the following commands to add VS Code to your path:
```sh
cat << EOF >> ~/.zprofile
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```