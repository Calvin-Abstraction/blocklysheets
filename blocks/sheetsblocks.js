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