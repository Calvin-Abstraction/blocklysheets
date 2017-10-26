/**
 * @fileoverview Blocks used for sheets.
 * @author zachdecook@gmail.com (Zach DeCook)
 */
Blockly.Blocks['sheets_start'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("=");
    this.setInputsInline(false);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sheets_cell'] = {
  init: function() {
    this.appendValueInput("inputCell")
        .setCheck("String")
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