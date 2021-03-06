

function connectedComponents(){
  this.adjacencyMatrix = [];
}


connectedComponents.prototype.connectEdge = function(point1,point2){
  point1 = point1-1;
  point2 = point2-1;
  this.adjacencyMatrix[point1][point2] = 1;
  this.adjacencyMatrix[point2][point1] = 1;
}

connectedComponents.prototype.breakEdge = function(point1,point2){
  point1 = point1-1;
  point2 = point2-1;

  this.adjacencyMatrix[point1][point2] = 0;
  this.adjacencyMatrix[point2][point1] = 0;
}

connectedComponents.prototype.addPoint1 = function(point1){
  point1 = point1-1;

  this.adjacencyMatrix[point1] = []
  for(var i = 0;i<this.adjacencyMatrix.length;i++){
    this.adjacencyMatrix[point1][i] = 0;
    this.adjacencyMatrix[i][point1] = 0;
  }
  this.adjacencyMatrix[point1][point1] = 1;
}

connectedComponents.prototype.removePoint1 = function(point1){


  for(var i = 0;i<this.adjacencyMatrix.length;i++){
    this.adjacencyMatrix[point1-1][i] = -1;
    this.adjacencyMatrix[i][point1-1] = -1;
  }
}

connectedComponents.prototype.add = function(point){

  var pos = 0;
  while(pos<this.connectedPoints.length&&this.connectedPoints[pos]<point){
    pos++;
  }
  this.connectedPoints.splice(pos,0,point);
  this.lowestPoint = this.connectedPoints[0];
}

connectedComponents.prototype.add = function(point){

  var pos = 0;
  while(pos<this.connectedPoints.length&&this.connectedPoints[pos]<point){
    pos++;
  }
  this.connectedPoints.splice(pos,0,point);
  this.lowestPoint = this.connectedPoints[0];
}

connectedComponents.prototype.remove = function(point){
  var pos = this.find(point);
  assert(pos>=0,"expected point to be in components");
  this.connectedPoints.splice(pos,1);
  this.lowestPoint = this.connectedPoints[0];

  var removedPoint = new connectedComponents();
  removedPoint.add(point);
  return removedPoint;
}

connectedComponents.prototype.copyCluster = function(){
  var copyClusters = new connectedComponents();

  for(var i = 0;i<this.adjacencyMatrix.length;i++){
    if(this.adjacencyMatrix[i]==null){
      continue;
    }else{
      copyClusters.adjacencyMatrix[i] = [];
    }
    for(var j = 0;j<this.adjacencyMatrix[i].length;j++){
      copyClusters.adjacencyMatrix[i][j] = this.adjacencyMatrix[i][j];
    }
  }

  return copyClusters;
}

connectedComponents.prototype.find = function(point){
  var pos = -1;
  if(this.connectedPoints.length>0){
    var left = 0;
    var right = this.connectedPoints.length-1;
    var middle;
    var stop = 0;
    while(1<right-left&&stop<100){
      stop++;
      middle = floor((right+left)/2);
      if(this.connectedPoints[middle]<point){
        left = middle;
      }else if(this.connectedPoints[middle]>point){
        right = middle;
      }
      else{
        break;
      }
    }
    if(this.connectedPoints[left]==point){
      pos = left;
    }else if(this.connectedPoints[right]==point){
      pos = right;
    }else if (this.connectedPoints[middle]==point){
      pos = middle;
    }
  }
    return pos;
}


connectedComponents.prototype.connectPoint = function(point1,point2){
  this.connectEdge(point1,point2);
}

//order matters
connectedComponents.prototype.breakPoint = function(point1,point2){
      this.breakEdge(point1,point2);

}
connectedComponents.prototype.addPoint = function(point1){
      this.addPoint1(point1);

}
connectedComponents.prototype.removePoint = function(point1){
      this.removePoint1(point1);

}
