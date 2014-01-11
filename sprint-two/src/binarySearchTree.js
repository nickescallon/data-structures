var makeBinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
  binarySearchTree.insert = binarySearchTreeMethods.insert;
  binarySearchTree.contains = binarySearchTreeMethods.contains;
  binarySearchTree.breadthFirstLog = binarySearchTreeMethods.breadthFirstLog;

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
  callback(this.value);
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }
};

binarySearchTreeMethods.breadthFirstLog = function (callback) {
  var results = [];
  results.push(this);

  var traverse = function(node){
    console.log(node);
    callback(node.value);

    if (node.left){
      results.push(node.left);
    }
    if (node.right){
      results.push(node.right);
    }
    results.shift();
    while (results){
      traverse(results[0]);
    }
  }
  traverse(this);
}












