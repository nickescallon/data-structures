var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var newQueue = Object.create(queueMethods)
  newQueue.len = 0;
  newQueue.storage = {};
  newQueue.lowestIndex = 0;
  newQueue.count = 0;
  return newQueue;
};

var queueMethods = {
  size: function(){
    return this.len;
  },
  enqueue: function(value){
    this.storage[this.count] = value;
    this.len++;
    this.count++;
  },
  dequeue: function() {
    if (this.len){
      var result = this.storage[this.lowestIndex];
      this.len--;
      this.lowestIndex++;
    }
    return result;
  }
};