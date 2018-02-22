/**
 * @fileoverview Generating Sheets language for sheets blocks.
 * @author zachdecook@gmail.com (Zach DeCook)
 * @author andrewdt97@gmail.com	(Andrew Thomas)
 */
Blockly.Sheets['sheets_start'] = function(block) {
  var value_name = Blockly.Sheets.valueToCode(block, 'NAME', Blockly.Sheets.ORDER_ATOMIC);
  var code = '=' + value_name;
  return code;
};

Blockly.Sheets['sheets_sum'] = function(block) {
  var value_range = Blockly.Sheets.valueToCode(block, 'range', Blockly.Sheets.ORDER_ATOMIC);
  var code = 'sum(' + value_range + ')';
  return code;
};