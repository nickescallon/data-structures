var HashTable = function(){
  this._limit = 8;
  this._items = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)){
    var bucket = [];
    this._storage.set(i, bucket);
  }

  var pair = [k,v];
  this._storage.get(i).push(pair);
  this._items++;

  var that = this;

  if (this._items / this._limit >= .75) {
    this._limit *= 2;
    debugger;
    this._storage.each(function(value, index, collection){
      if (value){
        for (var i=0; i<value.length; i++){
          that._storage.insert(value[i][0], value[i][1]);
        }
      }
    });
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var i=0; i<bucket.length; i++){
    if (bucket[i][0] === k){
      return bucket[i][1];
    }
  }
  console.log(this._storage.get(i))
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var i=0; i<bucket.length; i++){
    if (bucket[i][0] === k){
      bucket.splice(i,1);
    }
  }
};

