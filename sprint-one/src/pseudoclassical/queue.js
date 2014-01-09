var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.len = 0;
  this.storage = {};
  this.firstIndex = 0;
  this.count = 0;
};

Queue.prototype.size = function() {
  return this.len;
}
Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.len++;
  this.count++;
}
Queue.prototype.dequeue = function() {
  if(this.len) {
    var result = this.storage[this.firstIndex];
    this.len--;
    this.firstIndex++;
  }
  return result;
}

var NewQueue = new Queue();