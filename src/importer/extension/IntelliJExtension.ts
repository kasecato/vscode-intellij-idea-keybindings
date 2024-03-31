import * as vscode from 'vscode';

export class IntelliJExtension {
    /**
     * Opens the currently active editor tab in the opposite editor group.
     * If the active editor is in the first group, it will open in the second group, and vice versa.
     * Focus is moved to the newly opened editor.
     */
    public static async openInOppositeGroup() {
        const activeEditor = vscode.window.activeTextEditor;

        // Check if there are any open text editors
        if (vscode.window.visibleTextEditors.length === 0) {
            // If there are no documents open, do nothing
            return;
        }

        if (!activeEditor || !activeEditor.viewColumn) {
            // Exit if there is no active text editor or view column
            return;
        }

        // Determine if there's an opposite group by checking if there are editors open in a different group
        const hasOppositeGroup = vscode.window.visibleTextEditors.some(
            editor => editor.viewColumn !== activeEditor.viewColumn
        );

        // Only proceed if there's an opposite group
        if (!hasOppositeGroup) {
            return; // Exit if there is no opposite group
        }

        // Decide in which view column the document should be opened
        let columnToShowIn = activeEditor.viewColumn === vscode.ViewColumn.One
            ? vscode.ViewColumn.Two
            : vscode.ViewColumn.One;

        // Open the document in the specified view column and move focus to the new editor
        const openedEditor = await vscode.window.showTextDocument(activeEditor.document, { viewColumn: columnToShowIn, preview: false });
        await vscode.window.showTextDocument(openedEditor.document, openedEditor.viewColumn);
    }

}