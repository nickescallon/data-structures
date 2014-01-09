var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.len = 0;
};

Stack.prototype.size = function(){
  return this.len;
};
Stack.prototype.push = function(value){
  this.len++;
  this.storage[this.len] = value;
};
Stack.prototype.pop = function(){
  if (this.len){
    var result = this.storage[this.len];
    this.len--;
  }
  return result;
};

var NewStack = new Stack();