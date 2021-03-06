
/**
param {char} c - character representation of an input
return {boolean} isNumber - true if @c is a valid digit, else false
*/

function isDigit(c){
  var isDigit = false;
  if(c != null){
    if (c >= '0' && c <= '9') {
      isDigit = true;
  }
 }
 return isDigit;
}

/**
param {string} numString - string representation of an input
return {boolean} isNumber - true if @numString is a valid number, else false
*/

function isNumber(numString){
  var isNumber = true;
  if(numString == null){
   isNumber = false;
 }else{
   for(var i = 0; i<numString.length;i++){
       c = numString.charAt(i);
       if (c < '0' || c > '9') {
         digit = false;
         break;
     }
   }
 }
  return isNumber;
}


function getDigits(string,pos){
  var digitLength = 0;
  while(isDigit(string.charAt(pos+digitLength))){
      digitLength++;
  }
  return string.substring(pos,pos+digitLength);
}


function maxlength(array){
  var max = 0;
  for(var i = 0;i<array.length;i++){
    if(array[i].length>max){
      max = array[i].length;
    }
  }
  return max;
}



function mapToScreen(formigramData){

  var mappedArray = [];
  for(let i = 0;i<formigramData.length;i++){
    var max = maxlength(formigramData);

    var arr = [];
    var arr2 = [];

    for(let j = 0;j<formigramData[i].length;j++){
      if(formigramData[i][j]==null){
        arr[j] = -1;
      }else{
        arr[j] = 0;
      }
    }
    var index = 1;
    for(let j = 0;j<formigramData[i].length;j++){
      var s = formigramData[i][j];

      if(s==null){
        continue;
      }else{
        if(s!=null&&arr[s-1]==0){
          arr2[arr2.length] = [];
          arr[j] = index;
          index++;
        }
        var n = arr[formigramData[i][j]-1];
        arr2[n-1][arr2[n-1].length] = j+1;
      }
    }
    mappedArray[i] = arr2;
}



  return mappedArray;
}

function mapToScreenPoints(mappedArray,startX,startY,sizeX,sizeY,max){
  var mappedArrayPoints = [];
  for(var i = 0;i<mappedArray.length;i++){
    mappedArrayPoints[i] = [];
    let x = map(i,0,mappedArray.length-1,startX,startX+sizeX);
    for(let j = 0;j<mappedArray[i].length;j++){
      let y = map(mappedArray[i][j][0]+1,0,max+3,startY,startY+sizeY);
      mappedArrayPoints[i][j] = [];
      mappedArrayPoints[i][j][0] = x;
      mappedArrayPoints[i][j][1] = y;
      }
    }
    return mappedArrayPoints;
  }




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
