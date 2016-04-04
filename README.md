# IntelliJ IDEA Key Bindings

[![Build Status](https://travis-ci.org/k--kato/vscode-intellij-idea-keybindings.svg?branch=master)](https://travis-ci.org/k--kato/vscode-intellij-idea-keybindings)
[![License: MIT](http://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)

Port of IntelliJ IDEA key bindings for VS Code.


## Installation

1. Install Visual Studio Code 0.10.11 or higher
1. Launch Code
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OS X)
1. Select `Install Extension`
1. Choose the extension '`intellijkeybind`' *or* run `ext install intellijkeybind`
1. Reload Visual Studio Code


## Contributing to the Code

Clone a copy of the repo:

```
git clone https://github.com/k--kato/vscode-intellij-idea-keybindings.git
```


### Building the code

First, install the package dependencies:

```
npm install
```

Now you can compile the code:

1. Launch Code
1. Run Build Task `Ctrl`-`Shift`-`B` (Windows, Linux) or `Cmd`-`Shift`-`B` (OS X)

or

1. Launch Code
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OS X)
1. Select `Tasks: Run Build Task`

After the initial compile, the source files will be watched and recompiled
when changes are saved.


## License

This extension is [licensed under the MIT License](LICENSE.txt).


## References

1. Source code, Resharper 9 Keybindings, https://marketplace.visualstudio.com/items?itemName=ms-vscode.resharper9-keybindings
1. Keymap OS X, IntelliJ IDEA Mac OS X Keymap, https://resources.jetbrains.com/assets/products/intellij-idea/IntelliJIDEA_ReferenceCard_mac.pdf
1. Keymap Windows and Linux, IntelliJ IDEA Default Keymap, https://resources.jetbrains.com/assets/products/intellij-idea/IntelliJIDEA_ReferenceCard.pdf
1. Key Bindings for Visual Studio Code, https://code.visualstudio.com/Docs/customization/keybindings
1. Integrate with External Tools via Tasks, https://code.visualstudio.com/docs/editor/tasks#_autodetecting-gulp-grunt-and-jake-tasks
1. gulp-strip-json-comments, https://www.npmjs.com/package/gulp-strip-json-comments
1. Icon, JetBrains IntelliJ IDEA Community Edition, https://raw.githubusercontent.com/JetBrains/intellij-community/5bae60425eb7e83f06c20cc1ab0678f5d2274ddc/platform/icons/src/idea.ico
