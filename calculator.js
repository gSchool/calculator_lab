var leftOperand = null;
var rightOperand = null;
var operationClass = null;

var resultDisplay = null;

function BaseOperation(left, right) {
  this.left = left;
  this.right = right;
}

function AddOperation(left, right) {
  this.left = left;
  this.right = right;
}

AddOperation.prototype = new BaseOperation;
AddOperation.constructor = BaseOperation;

AddOperation.prototype.execute = function() {
  return this.left + this.right;
}

function SubtractOperation(left, right) {
  this.left = left;
  this.right = right;
}

SubtractOperation.prototype = new BaseOperation;
SubtractOperation.constructor = BaseOperation;

SubtractOperation.prototype.execute = function() {
  return this.left - this.right;
}

function MultiplyOperation(left, right) {
  this.left = left;
  this.right = right;
}

MultiplyOperation.prototype = new BaseOperation;
MultiplyOperation.constructor = BaseOperation;

MultiplyOperation.prototype.execute = function() {
  return this.left * this.right;
}

function DivideOperation(left, right) {
  this.left = left;
  this.right = right;
}

DivideOperation.prototype = new BaseOperation;
DivideOperation.constructor = BaseOperation;

DivideOperation.prototype.execute = function() {
  return this.left / this.right;
}

function numberClicked(e) {
  resultDisplay.innerText += e.target.innerText;
}

function operationClicked(e) {
  var operations = {
    'add': AddOperation,
    'subtract': SubtractOperation,
    'multiply': MultiplyOperation,
    'divide': DivideOperation,
  }
  
  leftOperand = parseInt(resultDisplay.innerText);
  operationClass = operations[e.target.attributes['id'].value];
  clearDisplay();
}

function addClicked() {
  operationClass = AddOperation;
  operationClicked();
}

function subtractClicked() {
  operationClass = SubtractOperation;
  operationClicked();
}

function multiplyClicked() {
  operationClass = MultiplyOperation;
  operationClicked();
}

function divideClicked() {
  operationClass = DivideOperation;
  operationClicked();
}

function clearDisplay() {
  resultDisplay.innerText = "";
}

function enterClicked() {
  rightOperand = parseInt(resultDisplay.innerText);
  var operation = new operationClass(leftOperand, rightOperand);
  resultDisplay.innerText = operation.execute();
}

function clearClicked() {
  leftOperand = null;
  rightOperand = null;
  operationClass = null;
  clearDisplay();
}

window.onload = function() {
  resultDisplay = document.querySelector('#result_display');

  var buttons = document.querySelectorAll('.button.number');

  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', numberClicked);
  }

  document.querySelector('.operation').addEventListener('click', operationClicked);

  document.querySelector('#ent').addEventListener('click', enterClicked);
  document.querySelector('#clr').addEventListener('click', clearClicked);
}
