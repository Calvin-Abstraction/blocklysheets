/**
 * @fileoverview Generating Sheets language for sheets blocks.
 * @author zachdecook@gmail.com (Zach DeCook)
 */
Blockly.Sheets['sheets_start'] = function(block) {
  var value_name = Blockly.Sheets.valueToCode(block, 'NAME', Blockly.Sheets.ORDER_ATOMIC);
  var code = '=' + value_name;
  return code;
};

Blockly.Sheets['sheets_cell'] = function(block) {
  var text_column = block.getFieldValue('column');
  var text_row = block.getFieldValue('row');
  var value_inputcell = Blockly.Sheets.valueToCode(block, 'inputCell', Blockly.Sheets.ORDER_ATOMIC);
  var code = text_column + text_row;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Sheets.ORDER_ATOMIC];
};

