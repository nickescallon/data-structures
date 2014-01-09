var extendQueue = function (obj) {
  return _.extend(obj, queueMethods);
};

var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it her
  var result = extendQueue({});
  result.storage = {};
  result.len = 0;
  result.count = 0;
  result.lowestIndex = 0;
  return result;
};

var queueMethods = {
  size: function () {
    return this.len;
  },
  enqueue: function (value) {
    this.storage[this.count] = value;
    this.len++;
    this.count++;
  },
  dequeue: function() {
    if (this.len) {
      var result = this.storage[this.lowestIndex];
      this.lowestIndex++;
      this.len--;
    }
    return result;
  }
};