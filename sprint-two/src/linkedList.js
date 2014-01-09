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

  list.removeHead = function(){
    if (this.head) {
      this.head = this.head.next;
    }
  };

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

  return node;
};
