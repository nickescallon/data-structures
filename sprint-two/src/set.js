var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this._storage){
    this._storage = {};
  }
    this._storage[item] = item;
};

setPrototype.contains = function(item){
  return this._storage[item] !== undefined && true;
};


setPrototype.remove = function(item){
  if(this._storage[item]){
    delete this._storage[item];
  }
};
