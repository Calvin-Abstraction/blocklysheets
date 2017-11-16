/**
 * @fileoverview Generating Sheets language for sheets blocks.
 * @author zachdecook@gmail.com (Zach DeCook)
 */
Blockly.Sheets['sheets_start'] = function(block) {
  var value_name = Blockly.Sheets.valueToCode(block, 'NAME', Blockly.Sheets.ORDER_ATOMIC);
  var code = '=' + value_name;
  return code;
};