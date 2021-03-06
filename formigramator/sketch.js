




function createP5 (){
    var graph;
    canvas = new p5(function (p) {
      p.setup = function (){
        p.createCanvas(1600, 600);
        var getinput

          getinput = document.getElementById("direct-input").value;
          var array = getinput.split(/\r?\n/);




        var smoothinginput = document.getElementById("smoothinginput").value;


        if(smoothinginput==''){
          smoothinginput = 0;
        }else if(!isNumber(smoothinginput)){
          document.getElementById("smoothinginput").value = '';
          document.getElementById("smoothinginput").placeholder = "Error! Smoothing parameter must be a positive integer."
        }else{
          smoothinginput = parseInt(smoothinginput);
        }


        graph = new Graph(array,smoothinginput);
        p.background(255,255,255);
        graph.createFormigram(p,300,40,1000,450,graph.dynamicGraph);
      }
      p.draw = function(){
    /*
      for(var i = 0;i<)
        if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  )*/

     }
    }, "canvas-div");


}

function preload(){
  txtInput = loadStrings("edges.txt");
}

function setup() {

  //drawButtons(20, 40, 650, 150,graph.sliderValue);
  zoom = 1;
  currentMouseX = 100;
  currentMouseY = 0;
  fixedX = 600;
  fixedY = 250;

}

function draw() {


  scale(1);
  //translate(currentMouseX,currentMouseY);
    background(255,255,255);
  //graph.createGraph(20, 40, 650, 150);
  graph.createFormigram(230,40+200,1000,150,graph.dynamicGraph,graph.sliderValue);

  //graph.sliderValue = slider.value();



}

function keyPressed() {
  clear();
  if (keyCode === 38) {

    zoom +=.2 ;


  } else if (keyCode === 40) {

    zoom -=.2 ;


  }

}

function mousePressed(){
  currentMouseX = ((600-mouseX));
  currentMouseY = ((250-mouseY));
}


function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}


function Graph(input,smoothParameter){

this.dynamicGraph = computeDynamicGraph(input,smoothParameter);

}
