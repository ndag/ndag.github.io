function Graph(input,smoothParameter){

this.dynamicGraph = computeDynamicGraph(input,smoothParameter);

}



Graph.prototype.createGraph = function(startX,startY,sizeX,sizeY){

  this.background(startX,startY,sizeX,sizeY);
  this.xAxis(startX,startY,sizeX,sizeY);
  this.yAxis(startX,startY,sizeX,sizeY);
  this.plotGraph(startX,startY,sizeX,sizeY);
}

Graph.prototype.createFormigram = function(p,startX,startY,sizeX,sizeY,formigramData){


  this.background(p,startX,startY,sizeX,sizeY);
  this.plotFormigram(p,startX,startY,sizeX,sizeY,formigramData);
  this.xAxis(p,startX,startY,sizeX,sizeY);
  this.plotLabels(p,startX,startY,sizeX,sizeY,formigramData);


}

function drawButtons(startX,startY,sizeX,sizeY,sliderValue){
  forwardButton = createButton("FORWARD");
  rewindButton = createButton("REWIND");
  slider = createSlider(1,1000,sliderValue);
  slider.position(310,470);
  forwardButton.position(380,450);
  rewindButton.position(300,450);
}


Graph.prototype.background = function(p,startX,startY,sizeX,sizeY){

  p.noStroke();
  p.fill(255);
  p.rect(startX, startY, sizeX, sizeY)
}

Graph.prototype.yAxis = function(startX,startY,sizeX,sizeY){

  for(let i = 0;i<this.numberOfPoints;i++){
    let nextTick = map(i,0,this.numberOfPoints-1,startY,startY+sizeY);
    stroke(0,0,0);
    line(startX,nextTick,startX+10,nextTick);
    fill(0);
    strokeWeight(0);
    var k = floor(100*(this.minElement + (i+1)*(this.maxElement-this.minElement)/this.numberOfPoints))/100;
    text(k,startX-20,nextTick);
    strokeWeight(1);
  }
  strokeWeight(1);
  stroke(0,0,0);
  line(startX,startY,startX,startY+sizeY);
}

Graph.prototype.xAxis = function(p,startX,startY,sizeX,sizeY){


  for(let i = 0;i<this.dynamicGraph.length;i++){
    let nextTick = map(i,0,this.dynamicGraph.length-1,startX,startX+sizeX);
    p.stroke(0,0,0,63);
    var ticks = sizeY/20;
    for(let j = 0;j<ticks;j++){
      p.line(nextTick,startY+sizeY-10-j*20,nextTick,startY+sizeY-j*20)
    }

  /*  p.line(nextTick,startY+sizeY-10,nextTick,startY+sizeY);
    p.line(nextTick,startY+sizeY-30,nextTick,startY+sizeY-20);
    p.line(nextTick,startY+sizeY-50,nextTick,startY+sizeY-40);
    p.line(nextTick,startY+sizeY-70,nextTick,startY+sizeY-60);
    p.line(nextTick,startY+sizeY-90,nextTick,startY+sizeY-80);
    p.line(nextTick,startY+sizeY-110,nextTick,startY+sizeY-100);
    p.line(nextTick,startY+sizeY-130,nextTick,startY+sizeY-120);
    p.line(nextTick,startY+sizeY-150,nextTick,startY+sizeY-140*/



  }

  var textsize = 30/log(2.72+this.dynamicGraph.length);

    for(let i = 0;i<this.dynamicGraph.length;i++){
      let nextTick = map(i,0,this.dynamicGraph.length-1,startX,startX+sizeX);
      p.fill(0);
      p.strokeWeight(0);
      p.textSize(textsize);
      p.text((i),nextTick-5,startY+sizeY+13);
      p.strokeWeight(1);


  }

  p.strokeWeight(1);
  p.stroke(0,0,0);
  p.line(startX,startY+sizeY,startX+sizeX,startY+sizeY);

}

Graph.prototype.plotGraph = function(startX,startY,sizeX,sizeY){
  for(let i = 0;i<this.pointsInTime.length;i++){
    let color = map(i+1,0,this.pointsInTime.length,0,255);
    stroke(color,(color+90)%255,(color+150)%255);
    for(let j = 1;j<this.pointsInTime[i].length;j++){
      let x1 = map(j,1,this.pointsInTime[i].length,startX,startX+sizeX);
      let x2 = map(j+1,0,this.pointsInTime[i].length-1,startX,startX+sizeX);
      let y1 = map(this.pointsInTime[i][j-1],this.minElement,this.maxElement,startY,startY+sizeY);
      let y2 = map(this.pointsInTime[i][j],this.minElement,this.maxElement,startY,startY+sizeY);
      line(x1,y1,x2,y2);
    }
  }

}
Graph.prototype.plotLabels = function(p,startX,startY,sizeX,sizeY,formigramData){

  var max = maxlength(formigramData);
   var mappedArray = mapToScreen(formigramData);
   var mappedArrayPoints = mapToScreenPoints(mappedArray,startX,startY,sizeX,sizeY,max);
   var textsize = 30/log(2.72+formigramData.length);
   for(var i = 0;i<mappedArray.length;i++){
     for(let j = 0;j<mappedArray[i].length;j++){
       var str = '{';
       for(let k = 0;k<mappedArray[i][j].length;k++){
         str += mappedArray[i][j][k];
         if(k<mappedArray[i][j].length-1){
           str += ',';
         }
       }
       str += '}';
         p.textSize(textsize);
         p.text(str,mappedArrayPoints[i][j][0],mappedArrayPoints[i][j][1]);

     }
   }
 }



Graph.prototype.plotFormigram = function(p,startX,startY,sizeX,sizeY,formigramData,intervalToDraw){

  var max = maxlength(formigramData);
  for(let i = 0;i<max;i++){


    for(let j = 1;j<formigramData.length;j++){

      if(formigramData[j-1][i]==null||formigramData[j][i]==null){
        continue;
      }
        let color = map(i+1,0,formigramData[0].length,0,255);
        p.stroke((color+30)%255,(color+90)%255,(color+150)%255);
        p.strokeWeight(7);
        let x1 = map(j,1,formigramData.length,startX,startX+sizeX);
        let x2 = map(j+1,1,formigramData.length,startX,startX+sizeX);
        let y1 = map(formigramData[j-1][i]+1,0,max+3,startY,startY+sizeY);
        let y2 = map(formigramData[j][i]+1,0,max+3,startY,startY+sizeY);
        p.line(x1,y1,x2,y2);


    }


  }
}
