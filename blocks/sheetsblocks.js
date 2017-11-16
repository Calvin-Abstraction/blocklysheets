/**
 * @fileoverview Blocks used for sheets.
 * @author zachdecook@gmail.com (Zach DeCook)
 */
Blockly.Blocks['equals'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("B")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sheets_cell'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Column")
        .appendField(new Blockly.FieldTextInput("column"), "column")
        .appendField("Row")
        .appendField(new Blockly.FieldTextInput("row"), "row");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sheets_cell_absolute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[" ",""], ["$","$"]]), "selectionFirst")
        .appendField("Column")
        .appendField(new Blockly.FieldTextInput("column"), "column")
        .appendField(new Blockly.FieldDropdown([[" ",""], ["$","$"]]), "selectionSecond")
        .appendField("Row")
        .appendField(new Blockly.FieldTextInput("row"), "row");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};