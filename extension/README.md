# Blockly Sheets Extension

## Files

- `startBlocks.xml` Blocks that come up on a newly loaded page.
- `toolbox.xml` Which blocks are available in the toolbox.
- `Sidebar.html` Generated file that runs the client side application.
- `script.sh` Bash shell script that makes `Sidebar.html`. Needed to link files together.
- **Sidebar[a-zA-Z]+.html** Other source files that used to build `Sidebar.html`.	
- `Code.gs` Server side code that integrates with Google Sheets.
- `README.md` This file you are reading now.

## Testing

Run `script.sh` in Bash to create Sidebar.html and apply your changes into it.

For lightweight testing, just open Sidebar.html in your browser.

To test in Google Sheets,

1. Open a Google Sheets document
2. Click the `Tools > Script Editor...` menu item
3. Paste in our Code.gs file into the editor for Code.gs,
	overwriting the existing code
4. Create html file called Sidebar, paste in our Sidebar.html
	file over the other code
2. Click the `Run > Test as add-on...` menu item
6. (It may prompt you to create new project) Configure test for the document, click `test` button
8. Wait for the document to load
9. `Add-ons > blocklysheets > Start`

