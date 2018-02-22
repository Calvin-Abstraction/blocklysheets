/**
 * @fileoverview Blocks used for sheets.
 * @author zachdecook@gmail.com (Zach DeCook)
 * @author andrewdt97@gmail.com (Andrew Thomas)
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

Blockly.Blocks['sheets_sum'] = {
  init: function() {
    this.appendValueInput("range")
        .setCheck(null)
        .appendField("Sum");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Sum requires a range block");
 this.setHelpUrl("");
  }
};