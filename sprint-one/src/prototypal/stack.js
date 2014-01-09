var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var newStack = Object.create(stackMethods);
  newStack.len = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){return this.len};
stackMethods.push = function(value){
  this.len++;
  this.storage[this.len] = value;
};
stackMethods.pop  = function(){
  if (this.len){
    var result = this.storage[this.len];
    this.len--;
  }
  return result;
};

