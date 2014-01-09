var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var count = 0
  var lowestCount = 0;
  
  list.addToTail = function(value){
    var results = makeNode(value);
    if (!this.head){
      this.head = results;
    } else {
      this.tail.next = results;
      this[count] = this.tail;
      count++;
    }

    this.tail = results;
  };

  list.removeHead = function(){
    if (this.head) {
      var temp = this.head.next;
      console.log(this.head);
      delete this[lowestCount];
      lowestCount++;
      this.head = temp;
    }
  };

  list.contains = function(target, node){
    for (var key in this) {
      if (this[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
