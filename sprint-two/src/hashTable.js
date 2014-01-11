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

  if (this._items / this._limit >= .75) {
    var holder = [];
    this._storage.each(function(bucket, index, collection){
      if (bucket){
        for (var i=0; i<bucket.length; i++){
          holder.push(bucket[i]);
        }
      }
    });
    this._limit *= 2;
    this._items = 0;
    this._storage = makeLimitedArray(this._limit);
    for (var i = 0; i < holder.length; i++) {
      this.insert(holder[i][0], holder[i][1]);
    }
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

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var i=0; i<bucket.length; i++){
    if (bucket[i][0] === k){
      bucket.splice(i,1);
      this._items--;
    }
  }

  if (this._items / this._limit === 3/16){
    var holder = [];
    this._storage.each(function(bucket, index, collection){
      if (bucket){
        for (var i=0; i<bucket.length; i++){
          holder.push(bucket[i]);
        }
      }
    });
    this._limit /= 2;
    this._items = 0;
    this._storage = makeLimitedArray(this._limit);
    for(var i=0; i<holder.length; i++){
      this.insert(holder[i][0], holder[i][1]);
    }
  }
};

