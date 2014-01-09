var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result = false;

  var search = function(target, tree){
    if (target === tree.value){
      result = true;
    } else if (tree.children){
      for(var i=0; i<tree.children.length; i++){
        search(target, tree.children[i]);
      }
    }
  };

  search(target, this);
  return result;
};

