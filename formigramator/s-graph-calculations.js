
function computeDynamicGraph(input,smoothParameter){
  var data = new clustersOverTime();
  data.createTime(0);
  var inputs = [];
  var graphVertex = parseVertexSet(input[0]);
  var graphEdge = parseEdgeSet(graphVertex,input[1]);


  data.add(0,graphEdge);
  var lineNumber = 2;
    while(input[lineNumber]!="EOF"){
      inputs[lineNumber] = parseBody(input[lineNumber]);
      lineNumber++;
    }

  for(var i = 2;i<inputs.length;i++){
    var time = inputs[i][0];
    var option =  inputs[i][1];
    var point1 =  inputs[i][2];
    var point2 =  inputs[i][3];
    if(!data.alreadyCreated(time)){
      var copiedCluster = data.clustersInTime[time-1].copyCluster();
      if(data.clustersInTime[time]==null){
        data.clustersInTime[time] = [];
        data.add(time,copiedCluster);
      }

    }

    if(option =='C'){
  data.clustersInTime[time].connectPoint(point1,point2);
}else if((option =='B')){
  data.clustersInTime[time].breakPoint(point1,point2);
}else if((option =='A')){
  data.clustersInTime[time].addPoint(point1);
}else if((option =='R')){
  data.clustersInTime[time].removePoint(point1);
}else if((option == 0)){

}
else{
  assert(false);
}
}




  var smoothedFormigramData = smoothFunction(data,smoothParameter);

  var formigramData3 = [];

  formigramData3 = convertFormigramFromConnectedComponents(smoothedFormigramData);



  return formigramData3;
}

function connect(data){
  var arr = [];
  var maximum = 0;
  for(var i = 0;i<data.length;i++){
    if(maximum<data[i].length){
      maximum  = data[i].length;
    }
  }
  for(var i = 0;i<maximum;i++){
    arr[i] = [];
  }

  for(var i = 0;i<maximum;i++){
    for(var j = 0;j<maximum;j++){
      var max = -2;
      for(var k = 0;k<data.length;k++){
        if(data[k][i]!=null&&data[k][i][j]!=null&&data[k][i][j]>max){
          max = data[k][i][j];
        }

      }
      arr[i][j] = max;

    }
  }
  return arr
}

function convertFormigramFromConnectedComponents(data){
  var formigramData = [];
  for(var i = 0;i<data.length;i++){
    formigramData[i] = [];
  }

  for(var i = 0;i<data.length;i++){
    for(var j = 0;j<data[i].length;j++){
      for(var k = 0;k<data[i][j].length;k++){
        var u = data[i][j][k]-1;
        formigramData[i][u] = data[i][j][0];
      }
    }
  }

  return formigramData;

}


function smoothFunction(formigramData,smoothParameter){
  var smoothedFormigramData = [];
  var current = 0;


  for(var i = 0;i<formigramData.clustersInTime.length;i++){
    var partialFormigramData = [];

    var left = max(current-smoothParameter,0);
    var x = current+smoothParameter;
    var y = formigramData.clustersInTime.length-1;

    var right = min(x,y);
    var index = left;
    for(var j = left;j<=right;j++){
      var temp = partialFormigramData.length;
      partialFormigramData[temp] = formigramData.clustersInTime[index].adjacencyMatrix;
      index++;
    }

    smoothedFormigramData[current] = connect(partialFormigramData);
    current++;
  }

  var smoothedConnectedFormigramData = [];
  for(var i = 0;i<formigramData.clustersInTime.length;i++){
    smoothedConnectedFormigramData[i] = connectedComponentsAlgorithm(smoothedFormigramData[i]);
  }

  return smoothedConnectedFormigramData;
}


function contains(arr,number){
  var low = 0;
  var high = arr.length-1;


    while (low <= high) {
        var mid = int((low + high) / 2);
        if (arr[mid] < number) {
            low = mid + 1;
        } else if (arr[mid] > number) {
            high = mid - 1;
        } else if (arr[mid] == number) {
            return true;
            break;
        }
    }
    return false;
}

function covertAdjacencyMatrix(adjacencyMatrix){

  var formigramData = [];

  for(var i = 0;i<adjacencyMatrix.length;i++){
    for(var j = 0;j<adjacencyMatrix.length;j++){
      if(adjacencyMatrix[i][j]==1){
          if(formigramData[j]==null){
            formigramData[j] = i;
          }else{
            if(formigramData[j]>adjacencyMatrix[i][j]){
              formigramData[j] = adjacencyMatrix[i][j];
            }
          }
      }
    }
  }

  return formigramData;
}


function connectedComponentsAlgorithm(adj) {
  var numVertices = adj.length
  var visited = [];
  for(var i=0; i<numVertices; ++i) {
    if(adj[i][i]==-1){
      visited[i] = true;
    }else{
      visited[i] = false;
    }

  }

  var components = []
  for(var i=0; i<numVertices; ++i) {
    if(visited[i]) {
      continue
    }

    var toVisit = [i]
    var cc = [i+1]
    visited[i] = true
    while(toVisit.length > 0) {
      var v = toVisit.pop()
      var nbhd = adj[v]
      for(var j=0; j<nbhd.length; ++j) {
        var u = j+1;
        if(!visited[j]&&nbhd[j]==1) {
          visited[j] = true;
          toVisit.push(j);
          cc.push(u);
        }
      }
    }

    components.push(cc)

  }

  for(var i = 0;i<components.length;i++){
    components[i].sort(function(a,b){
      if(a<b){
        return -1;
      }else if(a>b){
        return 1;
      }else{
        return 0;
      }
    });
  }

  return components

}
