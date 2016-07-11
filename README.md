# IntelliJ IDEA Key Bindings for Visual Studio Code

[![Build Status](https://travis-ci.org/k--kato/vscode-intellij-idea-keybindings.svg?branch=master)](https://travis-ci.org/k--kato/vscode-intellij-idea-keybindings)
[![License: MIT](http://img.shields.io/badge/license-MIT-orange.svg)](LICENSE.md)

Port of IntelliJ IDEA key bindings for VS Code.

## Usage

### Editing

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
ctrl+space | ctrl+space | Basic code completion (the name of any class, method or variable) | Yes
ctrl+shft+space | ctrl+shft+space | Smart code completion (filters the list of methods and variables by expected type) | N/A
ctrl+shift+enter | cmd+shift+enter | Complete statement | Yes
ctrl+p | cmd+p | Parameter info (within method call arguments) | Yes
ctrl+q | ctrl+j | Quick documentation lookup | N/A
ctrl+f1 | shift+f1 | External Doc | N/A
ctrl+mouseover | cmd+mouseover | Brief Info | N/A
ctrl+f1 | cmd+f1 | Show descriptions of error or warning at caret | Yes
ctrl+insert | cmd+n | Generate code... (Getters, Setters, Constructors, hashCode/equals, toString) | N/A
ctrl+o | ctrl+o | Override methods | N/A
ctrl+i | ctrl+i | Implement methods | N/A
ctrl+alt+t | cmd+alt+t | Surround with... (if..else, try..catch, for, synchronized, etc.) | N/A
ctrl+/ | cmd+/ | Comment/uncomment with line comment | Yes
ctrl+numpad_divide | cmd+numpad_divide | Comment/uncomment with line comment | Yes
ctrl+alt+/ | cmd+alt+/ | Comment/uncomment with block comment | Yes
ctrl+alt+numpad_divide | cmd+alt+numpad_divide | Comment/uncomment with block comment | Yes
ctrl+w | alt+up | Select successively increasing code blocks | Yes
ctrl+shift+w | alt+down | Decrease current selection to previous state | Yes
alt+q | ctrl+shift+q | Context info | N/A
alt+enter | alt+enter | Show intention actions and quick-fixes | Yes
ctrl+alt+l | cmd+alt+l | Reformat code | Yes
ctrl+alt+o | ctrl+alt+o | Optimize imports | N/A
ctrl+alt+i | ctrl+alt+i | Auto-indent line(s) | N/A
tab | tab | Indent selected lines | N/A
shift+tab | shift+tab | Unindent selected lines | N/A
ctrl+x | cmd+x | Cut current line or selected block to clipboard | Yes
ctrl+c | cmd+c | Copy current line or selected block to clipboard | Yes
ctrl+v | cmd+v | Paste from clipboard | Yes
ctrl+shift+v | cmd+shift+v | Paste from recent buffers... | N/A
ctrl+d | cmd+d | Duplicate current line or selected block | Yes
ctrl+backspace | cmd+backspace | Delete line at caret | Yes
ctrl+shift+j | ctrl+shift+j | Smart line join | N/A
ctrl+enter | cmd+enter | Smart line split | Yes
shift+enter | shift+enter | Start new line | Yes
ctrl+shift+u | cmd+shift+u | Toggle case for word at caret or selected block | N/A
ctrl+shift+] | cmd+shift+] | Select till code block end | N/A
ctrl+shift+[ | cmd+shift+[ | Select till code block start | N/A
ctrl+delete | alt+delete | Delete to word end | Yes
ctrl+backspace | alt+backspace | Delete to word start | Yes
ctrl+= | cmd+= | Expand code block | Yes
ctrl+- | cmd+- | Collapse code block | Yes
ctrl+shift+= | cmd+shift+= | Expand all | Yes
ctrl+shift+- | cmd+shift+- | Collapse all | Yes
ctrl+f4 | cmd+w | Close active editor tab | Yes

### Search/Replace

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
shfit shift | shfit shift | Search everywhere | N/A
ctrl+f | cmd+f | Find | Yes
f3 | cmd+g | Find next | Yes
shift+f3 | cmd+shift+g | Find previous | Yes
ctrl+r | cmd+r | Replace | Yes
ctrl+shift+f | cmd+shift+f | Find in path | Yes
ctrl+shift+r | cmd+shift+r | Replace in path | Yes
ctrl+shift+s | cmd+shift+s | Search structurally (Ultimate Edition only) | N/A
ctrl+shift+m | cmd+shift+m | Replace structurally (Ultimate Edition only) | N/A

### Usage Search

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
alt+f7 | alt+f7 | Find usages | Yes
ctrl+f7 | cmd+f7 | Find usages in file | N/A
ctrl+shift+f7 | cmd+shift+f7 | Highlight usages in file | N/A
ctrl+alt+f7 | cmd+alt+f7 | Show usages | N/A

### Compile and Run

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
ctrl+f9 | cmd+f9 | Make project (compile modifed and dependent) | Yes
ctrl+shift+f9 | cmd+shift+f9 | Compile selected file, package or module | N/A
alt+shift+f10 | ctrl+alt+r | Select configuration and run | Yes
alt+shift+f9 | ctrl+alt+d | Select configuration and debug | Yes
shift+f10 | ctrl+r | Run | N/A
shift+f9 | ctrl+d | Debug | Yes
ctrl+shift+f10 | ctrl+shift+r | Run context configuration from editor | N/A

### Debugging

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
f8 | f8 | Step over | Yes
f7 | f7 | Step into | Yes
shift+f7 | shift+f7 | Smart step into | N/A
shift+f8 | shift+f8 | Step out | Yes
alt+f9 | alt+f9 | Run to cursor | Yes
alt+f8 | alt+f8 | Evaluate expression | Yes
alt+f8 | alt+f8 | Evaluate expression (selection) | Yes
f9 | cmd+alt+r | Resume program | Yes
ctrl+f8 | cmd+f8 | Toggle breakpoint | Yes
ctrl+shift+f8 | cmd+shift+f8 | View breakpoints | Yes

### Navigation

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
ctrl+n | cmd+o | Go to class | Yes
ctrl+shift+n | cmd+shift+o | Go to file | Yes
ctrl+alt+shift+n | cmd+alt+o | Go to symbol | Yes
alt+left | ctrl+left | Go to previous editor tab | Yes
alt+right | ctrl+right | Go to next editor tab | Yes
f12 | f12 | Go back to previous tool window | N/A
esc | esc | Go to editor (from tool window) | N/A
shift+esc | shift+esc | Hide active or last active window | N/A
ctrl+shift+f4 | cmd+shift+f4 | Close active run/messages/find/... tab | N/A
ctrl+g | cmd+l | Go to line | Yes
ctrl+e | cmd+e | Recent files popup | Yes
ctrl+alt+left | cmd+alt+left | Navigate back | Yes
ctrl+alt+right | cmd+alt+right | Navigate forward | Yes
ctrl+shift+backspace | cmd+shift+backspace | Navigate to last edit location | N/A
alt+f1 | alt+f1 | Select current file or symbol in any view | N/A
ctrl+b | cmd+b | Go to declaration | Yes
ctrl+alt+b | cmd+alt+b | Go to implementation(s) | N/A
ctrl+shift+i | alt+space | Open quick definition lookup | N/A
ctrl+shift+b | ctrl+shift+b | Go to type declaration | Yes
ctrl+u | cmd+u | Go to super-method/super-class | N/A
alt+up | ctrl+up | Go to previous method | N/A
alt+down | ctrl+down | Go to next method | N/A
ctrl+] | cmd+] | Move to code block end | N/A
ctrl+[ | cmd+[ | Move to code block start | N/A
ctrl+f12 | cmd+f12 | File structure popup | N/A
ctrl+h | ctrl+h | Type hierarchy | N/A
ctrl+shift+h | cmd+shift+h | Method hierarchy | N/A
ctrl+alt+h | ctrl+alt+h | Call hierarchy | N/A
f2 | f2 | Next highlighted error | N/A
shift+f2 | shift+f2 | Previous highlighted error | N/A
f4 | f4 | Edit source | N/A
ctrl+enter | cmd+down | View source | N/A
alt+home | alt+home | Show navigation bar | N/A
f11 | f3 | Toggle bookmark | N/A
ctrl+f11 | alt+f3 | Toggle bookmark with mnemonic | N/A
ctrl+0 | ctrl+0 | Go to numbered bookmark | N/A
shift+f11 | cmd+f3 | Show bookmarks | N/A

### Refactoring

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
f5 | f5 | Copy | N/A
f6 | f6 | Move | N/A
alt+delete | cmd+delete | Safe Delete | N/A
shift+f6 | shift+f6 | Rename | Yes
ctrl+f6 | cmd+f6 | Change Signature | N/A
ctrl+alt+n | cmd+alt+n | Inline | N/A
ctrl+alt+m | cmd+alt+m | Extract Method | N/A
ctrl+alt+v | cmd+alt+v | Extract Variable | N/A
ctrl+alt+f | cmd+alt+f | Extract Field | N/A
ctrl+alt+c | cmd+alt+c | Extract Constant | N/A
ctrl+alt+p | cmd+alt+p | Extract Parameter | N/A

### VCS/Local History

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
ctrl+k | cmd+k | Commit project to VCS | Yes
ctrl+t | cmd+t | Update project from VCS | Yes
alt+shift+c | alt+shift+c | View recent changes | N/A
ctrl+` | ctrl+v | ‘VCS’ quick popup | Yes

### Live Templates

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
ctrl+alt+j | cmd+alt+j | Surround with Live Template | N/A
ctrl+j | cmd+j | Insert Live Template | N/A

### General

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
alt+1 | cmd+1 | Open corresponding tool window (Explorer) | Yes
alt+5 | cmd+5 | Open corresponding tool window (Debug) | Yes
alt+9 | cmd+9 | Open corresponding tool window (Git) | Yes
ctrl+s | cmd+s | Save all | Yes
ctrl+alt+y | cmd+alt+y | Synchronize | Yes
ctrl+alt+f | ctrl+cmd+f | Toggle full screen mode | Yes
ctrl+shift+f12 | cmd+shift+f12 | Toggle maximizing editor | Yes
alt+shift+f | alt+shift+f | Add to Favorites | N/A
alt+shift+i | alt+shift+i | Inspect current file with current profile | N/A
ctrl+\` | ctrl+\` | Quick switch current scheme | Yes
ctrl+alt+s | cmd+, | Open Settings dialog | Yes
ctrl+alt+s | cmd+numpad_separator | Open Settings dialog | Yes
ctrl+alt+shift+s | cmd+; | Open Project Structure dialog | Yes
ctrl+shift+a | shift+cmd+a | Find Action | Yes
ctrl+tab | ctrl+tab | Switch between tabs and tool window | Yes

### Custom

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|---------- 
f7 | f7 | Next difference | Yes
shift+f7 | shift+f7 | Previous difference | Yes


## Installation

1. Install Visual Studio Code 0.10.11 or higher
1. Launch Code
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (macOS)
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
1. Run Build Task `Ctrl`-`Shift`-`B` (Windows, Linux) or `Cmd`-`Shift`-`B` (macOS)

or

1. Launch Code
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (macOS)
1. Select `Tasks: Run Build Task`

After the initial compile, the source files will be watched and recompiled
when changes are saved.


## License

This extension is [licensed under the MIT License](LICENSE.md).


## References

1. Source code, Resharper 9 Keybindings, https://marketplace.visualstudio.com/items?itemName=ms-vscode.resharper9-keybindings
1. Keymap OS X, IntelliJ IDEA Mac OS X Keymap, https://resources.jetbrains.com/assets/products/intellij-idea/IntelliJIDEA_ReferenceCard_mac.pdf
1. Keymap Windows and Linux, IntelliJ IDEA Default Keymap, https://resources.jetbrains.com/assets/products/intellij-idea/IntelliJIDEA_ReferenceCard.pdf
1. Key Bindings for Visual Studio Code, https://code.visualstudio.com/Docs/customization/keybindings
1. Integrate with External Tools via Tasks, https://code.visualstudio.com/docs/editor/tasks#_autodetecting-gulp-grunt-and-jake-tasks
1. gulp-strip-json-comments, https://www.npmjs.com/package/gulp-strip-json-comments
1. Icon, JetBrains IntelliJ IDEA Community Edition, https://raw.githubusercontent.com/JetBrains/intellij-community/5bae60425eb7e83f06c20cc1ab0678f5d2274ddc/platform/icons/src/idea.ico
