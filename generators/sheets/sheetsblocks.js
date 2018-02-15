/**
 * @fileoverview Generating Sheets language for sheets blocks.
 * @author zachdecook@gmail.com (Zach DeCook)
 */
Blockly.Sheets['equals'] = function(block) {
  var value_a = Blockly.Sheets.valueToCode(block, 'A', Blockly.Sheets.ORDER_ATOMIC);
  var value_b = Blockly.Sheets.valueToCode(block, 'B', Blockly.Sheets.ORDER_ATOMIC);

  // relying on NOT doing complicated string things,
  // so we are using a \n for singaling end of statment
  var code = value_a + '=' + value_b + '\n';
  return code;
};

Blockly.Sheets['sheets_cell'] = function(block) {
  function validColumn(text) {
    for(var i = 0; i < text.length; i++) {
      if (!(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) return false;
    }
    return true;
  }

  var text_column = block.getFieldValue('column');
  text_column = text_column.toUpperCase();
  if (!validColumn(text_column)) {
    text_column = "FAIL COLUMN";
  }
  var text_row = block.getFieldValue('row');
  if ((text_row.charCodeAt(0) === 48) || isNaN(text_row)) {
    text_row = "FAIL ROW";
  }
  var code = text_column + text_row;
  return [code, Blockly.Sheets.ORDER_ATOMIC];
};

Blockly.Sheets['sheets_cell_absolute'] = function(block) {
  function validColumn(text) {
    for(var i = 0; i < text.length; i++) {
      if (!(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) return false;
    }
    return true;
  }

  var dropdown_selectionfirst = block.getFieldValue('selectionFirst');
  var text_column = block.getFieldValue('column');
  text_column = text_column.toUpperCase();
  if (!validColumn(text_column)) {
    text_column = "FAIL COLUMN";
  }
  var dropdown_selectionsecond = block.getFieldValue('selectionSecond');
  var text_row = block.getFieldValue('row');
  if ((text_row.charCodeAt(0) === 48) || isNaN(text_row)) {
    text_row = "FAIL ROW";
  }
  var code = dropdown_selectionfirst + text_column + dropdown_selectionsecond + text_row;
  return [code, Blockly.Sheets.ORDER_ATOMIC];
};

Blockly.Sheets['sheets_average'] = function(block) {
  var value_input = Blockly.Sheets.valueToCode(block, 'input', Blockly.Sheets.ORDER_ATOMIC);
  var code = 'average(' + value_input + ')';
  return [code, Blockly.Sheets.ORDER_ATOMIC];
};

