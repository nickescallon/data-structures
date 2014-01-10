var makeBinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
  binarySearchTree.insert = binarySearchTreeMethods.insert;
  binarySearchTree.contains = binarySearchTreeMethods.contains; 
  return binarySearchTree;
};


var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function (value) {
  if (value < this.value){
    if(this.left === null){
      var child = makeBinarySearchTree(value);
      this.left = child;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value){
    if (this.right === null){
      var child = makeBinarySearchTree(value);
      this.right = child;
    }else {
      this.right.insert(value);
    }
  }
};

binarySearchTreeMethods.contains = function (value) {
  if (value === this.value) {
    return true;
  }

  if (value < this.value && this.left) {
    return  this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }


  return false;

};

binarySearchTreeMethods.depthFirstLog = function (callback) {
  this.value = callback(this.value);
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }
};