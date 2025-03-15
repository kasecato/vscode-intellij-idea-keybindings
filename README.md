# IntelliJ IDEA Key Bindings for Visual Studio Code

[![License: MIT](https://img.shields.io/badge/license-MIT-orange.png)](LICENSE.md) [![Marketplace Version](https://vsmarketplacebadges.dev/version/k--kato.intellij-idea-keybindings.png)](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings) [![Install](https://vsmarketplacebadges.dev/installs-short/k--kato.intellij-idea-keybindings.png)](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings)

Port of IntelliJ IDEA key bindings for VS Code. Includes keymaps for popular JetBrains products like IntelliJ Ultimate, WebStorm, PyCharm, PHP Storm, etc.

### Editing

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
ctrl+space | ctrl+space | Basic code completion (the name of any class, method or variable) | ✅
ctrl+shift+space | ctrl+shift+space | Smart code completion (filters the list of methods and variables by expected type) | N/A
enter | enter | Choose Lookup Item | ✅
tab | tab | Choose Lookup Item Replace | ✅
ctrl+shift+enter | cmd+shift+enter | Complete Current Statement | ✅
ctrl+p | cmd+p | Parameter info (within method call arguments) | ✅
ctrl+q | ctrl+j | Quick documentation lookup | ✅
N/A | f1 | Quick documentation lookup | ✅
ctrl+f1 | shift+f1 | External Doc | N/A
ctrl+mouseover | cmd+mouseover | Brief Info | N/A
ctrl+f1 | cmd+f1 | Show descriptions of error or warning at caret | ✅
alt+insert | cmd+n | Generate code... (Getters, Setters, Constructors, hashCode/equals, toString) | ✅
alt+insert | cmd+n | New... | ✅
ctrl+o | ctrl+o | Override methods | ✅
ctrl+i | ctrl+i | Implement methods | ✅
ctrl+alt+t | cmd+alt+t | Surround with... (if..else, try..catch, for, synchronized, etc.) | N/A
N/A | N/A | Open in Opposite Group | ✅
ctrl+/ | cmd+/ | Comment/uncomment with line comment | ✅
ctrl+numpad_divide | cmd+numpad_divide | Comment/uncomment with line comment | ✅
ctrl+shift+/ | cmd+alt+/ | Comment/uncomment with block comment | ✅
ctrl+shift+numpad_divide | cmd+alt+numpad_divide | Comment/uncomment with block comment | ✅
ctrl+w | alt+up | Select successively increasing code blocks | ✅
ctrl+shift+w | alt+down | Decrease current selection to previous state | ✅
alt+q | ctrl+shift+q | Context info | N/A
alt+enter | alt+enter | Show intention actions and quick-fixes | ✅
ctrl+alt+l | cmd+alt+l | Reformat code | ✅
ctrl+alt+l | cmd+alt+l | Reformat selected code | ✅
ctrl+alt+o | ctrl+alt+o | Optimize imports | ✅
ctrl+alt+i | ctrl+alt+i | Auto-indent line(s) | N/A
tab | tab | Indent selected lines | N/A
shift+tab | shift+tab | Unindent selected lines | N/A
ctrl+x | cmd+x | Cut current line or selected block to clipboard | ✅
shift+delete | cmd+delete | Cut current line or selected block to clipboard | ✅
ctrl+c | cmd+c | Copy current line or selected block to clipboard | ✅
ctrl+v | cmd+v | Paste from clipboard | ✅
ctrl+shift+v | cmd+shift+v | Paste from recent buffers... | N/A
ctrl+d | cmd+d | Duplicate Line | ✅
ctrl+d | cmd+d | Duplicate Selection | ✅
ctrl+y | cmd+backspace | Delete line at caret | ✅
ctrl+shift+j | ctrl+shift+j | Smart line join | ✅
ctrl+enter | cmd+enter | Smart line split | ✅
shift+enter | shift+enter | Start new line | ✅
ctrl+shift+u | cmd+shift+u | Toggle case for word at caret or selected block | N/A
ctrl+shift+] | cmd+shift+] | Select till code block end | N/A
ctrl+shift+[ | cmd+shift+[ | Select till code block start | N/A
ctrl+right | alt+right | Cursor to word end | ✅
ctrl+right | alt+right | Cursor to hump end | ✅
ctrl+left | alt+left | Cursor to word start | ✅
ctrl+left | alt+left | Cursor to hump start | ✅
ctrl+shift+right | alt+shift+right | Select to word end | ✅
ctrl+shift+right | alt+shift+right | Select to hump end | ✅
ctrl+shift+left | alt+shift+left | Select to word start | ✅
ctrl+shift+left | alt+shift+left | Select to hump start | ✅
ctrl+delete | alt+delete | Delete to word end | ✅
ctrl+delete | alt+delete | Delete to hump end | ✅
ctrl+backspace | alt+backspace | Delete to word start | ✅
ctrl+backspace | alt+backspace | Delete to hump start | ✅
ctrl+. | cmd+. | Fold selection | ✅
ctrl+= | cmd+= | Expand code block | ✅
ctrl+numpad_add | cmd+numpad_add | Expand code block | ✅
ctrl+- | cmd+- | Collapse code block | ✅
ctrl+numpad_subtract | cmd+numpad_subtract | Collapse code block | ✅
ctrl+alt+= | cmd+alt+= | Expand code block recursively | ✅
ctrl+alt+numpad_add | cmd+alt+numpad_add | Expand code block recursively | ✅
ctrl+alt+- | cmd+alt+- | Collapse code block recursively | ✅
ctrl+alt+numpad_subtract | cmd+alt+numpad_subtract | Collapse code block recursively | ✅
ctrl+shift+= | cmd+shift+= | Expand all | ✅
ctrl+shift+numpad_add | cmd+shift+numpad_add | Expand all | ✅
ctrl+shift+- | cmd+shift+- | Collapse all | ✅
ctrl+shift+numpad_subtract | cmd+shift+numpad_subtract | Collapse all | ✅
ctrl+f4 | cmd+w | Close active editor tab | ✅
alt+j | ctrl+g | Add selection for Next Occurrence | ✅
alt+shift+j | ctrl+shift+g | Unselect Occurrence | ✅
shift+alt+down | shift+alt+down | Move Line Down | ✅
shift+alt+up | shift+alt+up | Move Line Up | ✅
shift+alt+insert | shift+cmd+8 | Column Selection Mode | ✅
shift+alt+. | shift+ctrl+. | Increase Font Size in All Editors | ✅
shift+alt+, | shift+ctrl+, | Decrease Font Size in All Editors | ✅

### Search/Replace

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
shift shift | shift shift | Search everywhere | ✅
ctrl+f | cmd+f | Find | ✅
f3 | cmd+g | Find next | ✅
shift+f3 | cmd+shift+g | Find previous | ✅
ctrl+r | cmd+r | Replace | ✅
ctrl+shift+f | cmd+shift+f | Find in path | ✅
ctrl+shift+r | cmd+shift+r | Replace in path | ✅
ctrl+shift+s | cmd+shift+s | Search structurally (Ultimate Edition only) | N/A
ctrl+shift+m | cmd+shift+m | Replace structurally (Ultimate Edition only) | N/A

### Usage Search

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
alt+f7 | alt+f7 | Find usages | ✅
alt+ctrl+f7 | alt+cmd+f7 | Show usages | ✅
N/A | ctrl+alt+down | Next Highlighted Usage | ✅
N/A | ctrl+alt+up | Previous Highlighted Usage | ✅
ctrl+f7 | cmd+f7 | Find usages in file | N/A
ctrl+shift+f7 | cmd+shift+f7 | Highlight usages in file | N/A
ctrl+alt+f7 | cmd+alt+f7 | Show usages | N/A

### Compile and Run

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
ctrl+f9 | cmd+f9 | Make project (compile modifed and dependent) | ✅
ctrl+shift+f9 | cmd+shift+f9 | Compile selected file, package or module | N/A
alt+shift+f10 | ctrl+alt+r | Select configuration and run | ✅
alt+shift+f9 | ctrl+alt+d | Select configuration and debug | ✅
ctrl ctrl | ctrl ctrl | Run Anything | ✅
shift+f10 | ctrl+r | Run | ✅
shift+f9 | ctrl+d | Debug | ✅
ctrl+shift+f10 | ctrl+shift+r | Run context configuration from editor | N/A
ctrl+shift+f10 | ctrl+shift+r | Debug context configuration from editor | N/A

### Debugging

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
ctrl+f2 | cmd+f2 | Stop | ✅
f8 | f8 | Step over | ✅
f7 | f7 | Step into | ✅
shift+f7 | shift+f7 | Smart step into | N/A
shift+f8 | shift+f8 | Step out | ✅
alt+f9 | alt+f9 | Run to cursor | ✅
alt+f8 | alt+f8 | Evaluate expression | ✅
alt+f8 | alt+f8 | Evaluate expression (selection) | ✅
f9 | cmd+alt+r | Resume program | ✅
ctrl+f8 | cmd+f8 | Toggle breakpoint | ✅
ctrl+shift+f8 | cmd+shift+f8 | View breakpoints | ✅

### Navigation

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
ctrl+n | cmd+o | Go to class | ✅
ctrl+shift+n | cmd+shift+o | Go to file | ✅
ctrl+alt+shift+n | cmd+alt+o | Go to symbol | ✅
alt+left | ctrl+left | Go to previous editor tab | ✅
N/A | shift+cmd+[ | Go to previous editor tab | ✅
alt+right | ctrl+right | Go to next editor tab | ✅
N/A | shift+cmd+] | Go to next editor tab | ✅
f12 | f12 | Go back to previous tool window | N/A
escape | escape | Go to editor (from tool window) | N/A
shift+escape | shift+escape | Hide Active Tool Window | ✅
ctrl+shift+f4 | cmd+shift+f4 | Close active run/messages/find/... tab | N/A
ctrl+shift+' | cmd+shift+' | Maximize Tool Window (Problems, Output, Debug Console, Terminal) | ✅
ctrl+g | cmd+l | Go to line | ✅
ctrl+e | cmd+e | Recent files popup | ✅
ctrl+alt+left | cmd+alt+left | Navigate back | ✅
N/A | cmd+[ | Navigate back | ✅
ctrl+alt+right | cmd+alt+right | Navigate forward | ✅
N/A | cmd+] | Navigate forward | ✅
ctrl+shift+backspace | cmd+shift+backspace | Navigate to last edit location | ✅
alt+f1 | alt+f1 | Select current file or symbol in any view | N/A
ctrl+b | cmd+b | Go to declaration | ✅
ctrl+alt+b | cmd+alt+b | Go to implementation(s) | ✅
ctrl+u | cmd+u | Go to super implementation(s) | ✅
ctrl+shift+i | alt+space | Open quick definition lookup | ✅
N/A | cmd+y | Open quick definition lookup | ✅
ctrl+shift+b | ctrl+shift+b | Go to type declaration | ✅
ctrl+u | cmd+u | Go to super-method/super-class | ✅
alt+up | ctrl+up | Go to previous method | N/A
alt+down | ctrl+down | Go to next method | N/A
ctrl+] | cmd+] | Move to code block end | N/A
ctrl+[ | cmd+[ | Move to code block start | N/A
alt+7 | cmd+7 | Structure | ✅
ctrl+f12 | cmd+f12 | File structure popup | ✅
ctrl+h | ctrl+h | Type hierarchy | ✅
ctrl+shift+h | cmd+shift+h | Method hierarchy | N/A
ctrl+alt+h | ctrl+alt+h | Call hierarchy | ✅
f2 | f2 | Next highlighted error | ✅
shift+f2 | shift+f2 | Previous highlighted error | ✅
f4 | f4 | Edit source | ✅
ctrl+enter | cmd+down | View source | ✅
shift+ctrl+down | shift+alt+down | Move Statement Down | ✅
shift+ctrl+up | shift+alt+up | Move Statement Up | ✅
alt+home | alt+home | Show navigation bar | N/A
f11 | f3 | Toggle bookmark | N/A
ctrl+f11 | alt+f3 | Toggle bookmark with mnemonic | N/A
ctrl+0 | ctrl+0 | Go to numbered bookmark | N/A
shift+f11 | cmd+f3 | Show bookmarks | N/A
ctrl+alt+shift+down | ctrl+alt+shift+down | Next Change | ✅
ctrl+alt+shift+up | ctrl+alt+shift+up | Previous Change | ✅
ctrl+home | cmd+home | Move Caret to Text Start | ✅
ctrl+end | cmd+end | Move Caret to Text End | ✅
ctrl+shift+m | ctrl+m | Move Caret to Matching Brace | ✅
ctrl+shift+t | cmd+shift+t | Go to Test | ✅

### Refactoring

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
f5 | f5 | Copy | N/A
ctrl+alt+shift+t | ctrl+t | Refactor This... | ✅
f6 | f6 | Move | ✅
alt+delete | cmd+delete | Safe Delete | N/A
shift+f6 | shift+f6 | Rename | ✅
shift+f6 | shift+f6 | Select All Occurrences | ✅
shift+f6 | shift+f6 | Rename (File) | ✅
ctrl+f6 | cmd+f6 | Change Signature | ✅
ctrl+alt+n | cmd+alt+n | Inline | N/A
ctrl+alt+m | cmd+alt+m | Extract Method | ✅
ctrl+alt+v | cmd+alt+v | Extract Variable | ✅
ctrl+alt+f | cmd+alt+f | Extract Field | ✅
ctrl+alt+c | cmd+alt+c | Extract Constant | ✅
ctrl+alt+p | cmd+alt+p | Introduce Parameter | ✅

### VCS/Local History

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
ctrl+alt+k | cmd+k | Commit project to VCS | ✅
ctrl+shift+k | cmd+alt+k | Push commits to VCS | ✅
ctrl+t | cmd+t | Update project from VCS | ✅
ctrl+alt+z | cmd+alt+z | Rollback Lines | ✅
alt+shift+c | alt+shift+c | View recent changes | N/A

### Live Templates

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
ctrl+alt+j | cmd+alt+j | Surround with Live Template | N/A
ctrl+j | cmd+j | Insert Live Template | N/A

### General

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
alt+0 | cmd+0 | Activate Messages window (Problems) | ✅
alt+numpad0 | cmd+numpad0 | Activate Messages window (Problems) | ✅
alt+1 | cmd+1 | Open corresponding tool window (Explorer) | ✅
alt+numpad1 | cmd+numpad1 | Open corresponding tool window (Explorer) | ✅
alt+1 | cmd+1 | Close corresponding tool window (Explorer) | ✅
alt+numpad1 | cmd+numpad1 | Close corresponding tool window (Explorer) | ✅
alt+3 | cmd+3 | Open corresponding tool window (Search) | ✅
alt+numpad3 | cmd+numpad3 | Open corresponding tool window (Search) | ✅
alt+3 | cmd+3 | Close corresponding tool window (Search) | ✅
alt+numpad3 | cmd+numpad3 | Close corresponding tool window (Search) | ✅
alt+5 | cmd+5 | Open corresponding tool window (Debug) | ✅
alt+numpad5 | cmd+numpad5 | Open corresponding tool window (Debug) | ✅
alt+5 | cmd+5 | Close corresponding tool window (Debug) | ✅
alt+numpad5 | cmd+numpad5 | Close corresponding tool window (Debug) | ✅
alt+9 | cmd+9 | Open corresponding tool window (Git) | ✅
alt+numpad9 | cmd+numpad9 | Open corresponding tool window (Git) | ✅
alt+9 | cmd+9 | Close corresponding tool window (Git) | ✅
alt+numpad9 | cmd+numpad9 | Close corresponding tool window (Git) | ✅
ctrl+s | cmd+s | Save all | ✅
ctrl+alt+y | cmd+alt+y | Synchronize | N/A
N/A | ctrl+cmd+f | Toggle full screen mode | ✅
ctrl+shift+f12 | cmd+shift+f12 | Toggle maximizing editor | N/A
alt+shift+f | alt+shift+f | Add to Favorites | N/A
alt+shift+i | alt+shift+i | Inspect current file with current profile | N/A
ctrl+\` | ctrl+\` | Quick switch current scheme | ✅
ctrl+alt+s | cmd+, | Open Settings dialog | ✅
ctrl+alt+s | cmd+numpad_separator | Open Settings dialog | ✅
ctrl+alt+shift+s | cmd+; | Open Project Structure dialog | ✅
ctrl+shift+a | shift+cmd+a | Find Action | ✅
ctrl+tab | ctrl+tab | Switch between tabs and tool window | ✅
shift+f12 | shift+f12 | Restore Default layout | ✅

### Custom

Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------
ctrl+d | cmd+d | Compare Files | ✅
ctrl+d | cmd+d | Compare Selected Files | ✅
ctrl+shift+tab | ctrl+shift+tab | Select Opposite Diff Pane | ✅
f7 | f7 | Next difference | ✅
shift+f7 | shift+f7 | Previous difference | ✅
alt+ctrl+enter | alt+cmd+enter | Start new line before current | ✅
shift+ctrl+enter | shift+cmd+enter | Start new line | ✅
alt+f12 | alt+f12 | Opens and focuses corresponding tool window (Terminal) | ✅
alt+f12 | alt+f12 | Close corresponding tool window (Terminal) | ✅
ctrl+shift+alt+j | ctrl+cmd+g | Sublime Text style multiple selections | ✅
alt+left | shift+cmd+[ | Select previous tab (Terminal) | ✅
alt+right | shift+cmd+] | Select next tab (Terminal) | ✅
alt+tab | alt+tab | Goto next splitter | ✅
shift+alt+tab | shift+alt+tab | Goto previous splitter | ✅
enter | enter | Open Highlighted File (Explorer) | ✅
f4 | f4 | Open Highlighted File (Explorer) | ✅
alt+home | cmd+up | Jump to Navigation Bar | ✅
shift+ctrl+c | shift+cmd+c | Copy paths | ✅

### CamelHumps

If you enable the setting `Use "CamelHumps" words` in IntelliJ, commands like ctrl+left will go to the previous hump in camel case words, rather than the start of the word.
For similar functionality in VS Code, enalbe the config `intellij-idea-keybindings.useCamelHumpsWords` under Settings.

```json
{
    "intellij-idea-keybindings.useCamelHumpsWords": true
}
```

Note: CamelHumps mode with double-click is not supported.

### How to disable specific key bindings of this extension

If you want to disable a specific key binding of this extension, follow these steps:

1. Open `File` > `Preferences` > `Keyboard Shortcuts`
1. Search `IntelliJ IDEA Keybindings` or type directly like `"shift shift"`
1. Right click and `Remove Keybinding`

### IntelliJ Importer

![IntelliJ Importer](images/usage_intellij_importer.gif)

#### Import keymaps XML
1. Launch Code
1. Open command pallet `Ctrl`-`Shift`-`P` (Windows) or `Cmd`-`Shift`-`P` (macOS)
1. Choose `Import IntelliJ Keybindings (XML)`
1. Copy & Paste it into `keybindings.json`

## Installation

1. Install Visual Studio Code 1.94.0 or higher
1. Launch Code
1. From the extension view `Ctrl`-`Shift`-`X` (Windows, Linux) or `Cmd`-`Shift`-`X` (macOS)
1. Search and Choose the extension `Intellij IDEA Keybindings`
1. Reload Visual Studio Code

## Known Issues (IntelliJ Importer)

- Refactoring commands are not supported
- Sidebar controls are not supported
- Namepad control is not supported at the same time as numbers
- Intellij's custom keymap is not a full copy of its parent keymap. It inherits unmodified shortcuts from the parent keymap and defines only those that were changed. If you use a plugin like Emacs or Vim, only your changes will be exported in the XML
- Warning output for keymaps that could not be imported is not yet implemented
- Cannot load `settings.zip` file directly

## Contributing to the Code

Clone a copy of the repo:

```
git clone https://github.com/kasecato/vscode-intellij-idea-keybindings.git
```

### Building the code

First, install the package dependencies:

```
npm install
```

Now you can compile the code:

1. Launch Code
1. Edit **`src/package-with-comment.json`** (**NOT `package.json`**)
1. Run `npm: compile` Task `Ctrl`-`Shift`-`B` (Windows, Linux) or `Cmd`-`Shift`-`B` (macOS)
1. Run Command Markdown Generator `npm run usage`
1. Paste the Command Markdown to `README.md`

After the initial compile, the source files will be watched and recompiled when changes are saved.

## Contributors

* [@kasecato](https://github.com/kasecato)
* [@brianegan](https://github.com/brianegan)
* [@whinc](https://github.com/whinc)
* [@HSAR](https://github.com/HSAR)
* [@mastersimon](https://github.com/mastersimon)
* [@thekalinga](https://github.com/thekalinga)
* [@joaomoreno](https://github.com/joaomoreno)
* [@kasperpeulen](https://github.com/kasperpeulen)
* [@waderyan](https://github.com/waderyan)
* [@megha-n-bodke](https://github.com/megha-n-bodke)
* [@gregbacchus](https://github.com/gregbacchus)
* [@acim](https://github.com/acim)
* [@skysteve](https://github.com/skysteve)
* [@spik3s](https://github.com/spik3s)
* [@AlexAkhremenko](https://github.com/AlexAkhremenko)
* [@rtconner](https://github.com/rtconner)
* [@pavilion](https://github.com/pavilion)
* [@xc1427](https://github.com/xc1427)
* [@michielboekhoff](https://github.com/michielboekhoff)
* [@thekalinga](https://github.com/thekalinga)
* [@andrewda](https://github.com/andrewda)
* [@deftomat](https://github.com/deftomat)
* [@rinormaloku](https://github.com/rinormaloku)
* [@covertbert](https://github.com/covertbert)
* [@flashsphere](https://github.com/flashsphere)
* [@kroleg](https://github.com/kroleg)
* [@faucct](https://github.com/faucct)
* [@glyn](https://github.com/glyn)
* [@ronaldstevanus](https://github.com/ronaldstevanus)
* [@goncalossilva](https://github.com/goncalossilva)
* [@ZobairQ](https://github.com/ZobairQ)
* [@fabb](https://github.com/fabb)
* [@a-stewart](https://github.com/a-stewart)
* [@CsCherrYY](https://github.com/CsCherrYY)
* [@Eskibear](https://github.com/Eskibear)
* [@daxmc99](https://github.com/daxmc99)
* [@jacob314](https://github.com/jacob314)
* [@long76](https://github.com/long76)
* [@rxliuli](https://github.com/rxliuli)
* [@bananer](https://github.com/bananer)
* [@ShellWen](https://github.com/ShellWen)
* [@Strajk](https://github.com/Strajk)
* [@LunNova](https://github.com/LunNova)
* [@sfyr111](https://github.com/sfyr111)
* [@grgar](https://github.com/grgar)
* [@yasuaki640](https://github.com/yasuaki640)

## License

This extension is [licensed under the MIT License](LICENSE.md).


## References

1. Source code, Resharper 9 Keybindings, https://marketplace.visualstudio.com/items?itemName=ms-vscode.resharper9-keybindings
1. IntelliJ IDEA DEFAULT KEYMAP, https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf
1. Key Bindings for Visual Studio Code, https://code.visualstudio.com/docs/getstarted/keybindings
1. Icon, vscode-vs-keybindings, https://github.com/rebornix/vscode-vs-keybindings/raw/master/visualstudio-keyboard.png
