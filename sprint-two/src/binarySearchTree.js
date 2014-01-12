var makeBinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
  binarySearchTree.insert = binarySearchTreeMethods.insert;
  binarySearchTree.contains = binarySearchTreeMethods.contains;
  binarySearchTree.breadthFirstLog = binarySearchTreeMethods.breadthFirstLog;

  // binarySearchTree.minDepth = 
  binarySearchTree.maxDepth = 1;

  return binarySearchTree;
};


var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function (value) {
  this.maxDepth++;
  //each time something is inserted
  //if this is top level 
  //push to top level array

  var minDepth = Math.ceil(Math.log(this.maxDepth) / Math.log(2));
  if (this.maxDepth > minDepth * 2){
    var nodes = [];
    var child = makeBinarySearchTree(value);
    nodes.push(child);

    var getAllNodes = function(node){
      nodes.push(node);
      if (node.left){
        getAllNodes(node.left);
      }
      if (node.right){
        getAllNodes(node.right)
      }
    };
    getAllNodes(this);

    var sortBy = function (array, value) {
      return array.sort(function (a, b) {
        return a[value] > b[value];
      });
    }

    var sortedNodes = sortBy(nodes, "value" );

    var middles = [];

    var insertMiddle = function (someArray, node) {
      middles.push(node);


      var middle = someArray.length / 2;
      
      var leftOfMiddle = middle - 1;
      var rightOfMiddle = middle + 1;
      var leftArray = someArray.splice(0, leftOfMiddle);
      
      insertMiddle(leftArray);
    }

    this.value = sortedNodes.length / 2;

    create one array with 0 - just before middle
    create another array i just after middle to end
    get the middle of each array and call again





    
    // iterate through the tree and push every value to nodes
    //   - i think write a recursive function to push every node into the nodes array

    // _.sortby(nodes, value)

    // Grab median
    // //set maxdepth of median to nodes.length
    //  and recursively insert successive medians 

  }
  else if (value < this.value){
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












