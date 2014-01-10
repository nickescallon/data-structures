var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  var child = makeTree(value);
  if (child.parent === null){
    child.parent = this;
  }
  this.children.push(child);
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

treeMethods.removeFromParent = function(){
  if (this.parent){
    for (var i=0; i<this.parent.children.length; i++){
      if (this.parent.children[i] === this){
        this.parent.children.splice(i, 1);
        this.parent = null;
        break;
      }
    }
  }
};

