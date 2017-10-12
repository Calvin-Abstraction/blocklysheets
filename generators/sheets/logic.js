/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Sheets for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 * @author zachdecook@gmail.com (Zach DeCook)
 */
'use strict';

goog.provide('Blockly.Sheets.logic');

goog.require('Blockly.Sheets');

Blockly.Sheets['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Sheets.valueToCode(block, 'IF' + n,
      Blockly.Sheets.ORDER_NONE) || 'false';
    branchCode = Blockly.Sheets.statementToCode(block, 'DO' + n);
    code += (n > 0 ? ' else ' : '') +
        'IF(' + conditionCode + ',' + branchCode;

    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Sheets.statementToCode(block, 'ELSE');
    code += ' ,\n' + branchCode + '}';
  }
  else
  {
	  code+=")";
  }
  return code + '\n';
};

Blockly.Sheets['controls_ifelse'] = Blockly.Sheets['controls_if'];

Blockly.Sheets['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.Sheets.ORDER_EQUALITY : Blockly.Sheets.ORDER_RELATIONAL;
  var argument0 = Blockly.Sheets.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Sheets.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Sheets['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.Sheets.ORDER_LOGICAL_AND :
      Blockly.Sheets.ORDER_LOGICAL_OR;
  var argument0 = Blockly.Sheets.valueToCode(block, 'A', order);
  var argument1 = Blockly.Sheets.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Sheets['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.Sheets.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.Sheets.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.Sheets['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Sheets.ORDER_ATOMIC];
};

Blockly.Sheets['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.Sheets.ORDER_ATOMIC];
};

Blockly.Sheets['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.Sheets.valueToCode(block, 'IF',
      Blockly.Sheets.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.Sheets.valueToCode(block, 'THEN',
      Blockly.Sheets.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.Sheets.valueToCode(block, 'ELSE',
      Blockly.Sheets.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.Sheets.ORDER_CONDITIONAL];
};
