



function clustersOverTime(){
  this.clustersInTime = [];
}

clustersOverTime.prototype.add = function(time,clusters){
  this.clustersInTime[time] = clusters;
}

function clusters(){
  this.clusteredComponents = [];
}

clustersOverTime.prototype.createTime = function(time){
  this.clustersInTime[time] = [];
}

clustersOverTime.prototype.alreadyCreated = function(time){
  return this.clustersInTime[time] != null;

}


clusters.prototype.find = function(point){
  var pos = -1;
  for(var i = 0;i<this.clusteredComponents.length;i++){
    if(this.clusteredComponents[i].find(point)>=0){
      pos = i;
      break;
    }
  }
  return pos;
}

clusters.prototype.addCluster = function(cluster){
  this.clusteredComponents.push(cluster);
}





clusters.prototype.addCluster = function(cluster){
  this.clusteredComponents.push(cluster);

}
