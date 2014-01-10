var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    var results = makeNode(value);
    if (!this.head){
      this.head = results;
    } else {
      this.tail.next = results;
    }
    this.tail = results;
  };

  list.addToHead = function(value) {
    var results = makeNode(value);
    if (!this.tail){
      this.tail = results;
    } else {
      this.head.previous = results;
      results.next = this.head;
    }
    this.head = results;
  }

  list.removeHead = function(){
    if (this.head) {
      this.head = this.head.next;
    }
  };

  list.removeTail = function(){
    if (this.tail){
      this.tail = this.tail.previous;
    }
  }

  list.contains = function(target, node){
    var result = false;
    node = node || this.head;

    var checkNodes = function(target, node){
        if (node.value === target){
          result = true;
        }else if (node.next) {
          checkNodes(target, node.next);
        }
    };
    
    checkNodes(target, node);
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
