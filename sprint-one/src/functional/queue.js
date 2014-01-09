var makeQueue = function(){
  var instance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var lowestIndex = 0;
  var count = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[count] = value;
    size++;
    count++;
  };

  instance.dequeue = function(){
    if (size){
      var result = storage[lowestIndex];
      lowestIndex++;
      size--;
    }
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
