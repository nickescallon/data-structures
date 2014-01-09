var mixin = function(stack){
  return _.extend(stack, stackMethods);
};


var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var result = mixin({});
  result.storage = {};
  result.len = 0;
  return result;
};
  
var stackMethods = {
  size: function(){return this.len},
  push: function(value){
    this.len++;
    this.storage[this.len] = value;
  },
  pop: function(){
    if (this.len){
      var result = this.storage[this.len];
      this.len--;
      return result;
    }
  }
 };

