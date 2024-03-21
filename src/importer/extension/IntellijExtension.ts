import * as vscode from 'vscode';

export class IntellijExtension {
    /**
     * Opens the currently active editor tab in the opposite editor group.
     * If the active editor is in the first group, it will open in the second group, and vice versa.
     * Focus is moved to the newly opened editor.
     */
    public static async openInOppositeGroup() {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
            // console.log('No active text editor found.');
            return; // Exit if there is no active text editor
        }

        // Determine the current view column of the active editor
        const currentViewColumn = activeEditor.viewColumn;

        // Decide in which view column the document should be opened
        let columnToShowIn: vscode.ViewColumn;
        if (currentViewColumn === vscode.ViewColumn.One || currentViewColumn === undefined) {
            columnToShowIn = vscode.ViewColumn.Two; // If in the first group or undefined, open in the second group
        } else if (currentViewColumn === vscode.ViewColumn.Two) {
            columnToShowIn = vscode.ViewColumn.One; // If in the second group, open in the first group
        } else {
            // Default to the first group if in any other group
            columnToShowIn = vscode.ViewColumn.One;
        }

        // Open the document in the specified view column and move focus to the new editor
        const openedEditor = await vscode.window.showTextDocument(activeEditor.document, { viewColumn: columnToShowIn, preview: false });
        vscode.window.showTextDocument(openedEditor.document, openedEditor.viewColumn);
    }
}