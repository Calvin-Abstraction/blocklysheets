/**
 * @fileoverview Generating Sheets language for sheets blocks.
 * @author zachdecook@gmail.com (Zach DeCook)
 */
Blockly.Sheets['equals'] = function(block) {
  var value_a = Blockly.Sheets.valueToCode(block, 'A', Blockly.Sheets.ORDER_ATOMIC);
  var value_b = Blockly.Sheets.valueToCode(block, 'B', Blockly.Sheets.ORDER_ATOMIC);
  var code = value_a + '=' + value_b;
  return code;
};

Blockly.Sheets['sheets_cell'] = function(block) {
  var text_column = block.getFieldValue('column');
  if (text_column.length > 1 || !(text_column.charCodeAt(0) >= 65 && text_column.charCodeAt(0) <= 90)) {
    return "FAIL COLUMN";
  }
  var text_row = block.getFieldValue('row');
  if ((text_row.charCodeAt(0) === 48) || isNaN(text_row)) {
    return "FAIL ROW";
  }
  var code = text_column + text_row;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Sheets.ORDER_ATOMIC];
};

Blockly.Sheets['sheets_cell_absolute'] = function(block) {
  var dropdown_selectionfirst = block.getFieldValue('selectionFirst');
  var text_column = block.getFieldValue('column');
  if (text_column.length > 1 || !(text_column.charCodeAt(0) >= 65 && text_column.charCodeAt(0) <= 90)) {
    return "FAIL COLUMN";
  }
  var dropdown_selectionsecond = block.getFieldValue('selectionSecond');
  var text_row = block.getFieldValue('row');
  if ((text_row.charCodeAt(0) === 48) || isNaN(text_row)) {
    return "FAIL ROW";
  }
  var code = dropdown_selectionfirst + text_column + dropdown_selectionsecond + text_row;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Sheets.ORDER_ATOMIC];
};



