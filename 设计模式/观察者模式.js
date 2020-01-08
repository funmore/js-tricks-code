function ObserverList(){
    this.observerList = [];
  }
  
  ObserverList.prototype.Add = function( obj ){
    return this.observerList.push( obj );
  };
  
  ObserverList.prototype.Empty = function(){
    this.observerList = [];
  };
  
  ObserverList.prototype.Count = function(){
    return this.observerList.length;
  };
  
  ObserverList.prototype.Get = function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  };
  
  ObserverList.prototype.Insert = function( obj, index ){
    var pointer = -1;
  
    if( index === 0 ){
      this.observerList.unshift( obj );
      pointer = index;
    }else if( index === this.observerList.length ){
      this.observerList.push( obj );
      pointer = index;
    }
  
    return pointer;
  };
  
  ObserverList.prototype.IndexOf = function( obj, startIndex ){
    var i = startIndex, pointer = -1;
  
    while( i < this.observerList.length ){
      if( this.observerList[i] === obj ){
        pointer = i;
      }
      i++;
    }
  
    return pointer;
  };
  
  ObserverList.prototype.RemoveAt = function( index ){
    if( index === 0 ){
      this.observerList.shift();
    }else if( index === this.observerList.length -1 ){
      this.observerList.pop();
    }
  };
  
  // Extend an object with an extension
  function extend( extension, obj ){
    for ( var key in extension ){
      obj[key] = extension[key];
    }
  }

  function Subject(){
      this.observers = new ObserverList();
  }

  //Subject 被观察者
  //
  Subject.prototype.AddObserver = function(obsever){
      this.observers.Add(obsever);
  }
  Subject.prototype.RemoveObserver = function(obsever){
      this.observers.RemoveAt(this.observers.IndexOf(obsever,0))
  }
  Subject.prototype.Notify = function(context){
      var observerCount = this.observers.Count();
      for(var i = 0 ; i< observerCount ; i ++){
          this.observers.Get(i).Update(context);
      }
  }


  //Subject 
  // 0. got a observerlist
  // 1. notify  use observer's update
  //
  //Observer
  // 1. subscribe
  // 2. unsubscribe
  // 3. update 