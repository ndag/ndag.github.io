
function parseVertexSet(input){
  var connectedPoints = new connectedComponents();
  var pos = 0;
  assert(input.charAt(pos)=='{',"Expected {");
  pos++;
  assert(isDigit(input.charAt(pos))||input.charAt(pos)=='}',"Expected { or }");

  while(isDigit(input.charAt(pos))){
    connectedPoints.addPoint(input.charAt(pos));
    pos++;
    assert(input.charAt(pos)==','||input.charAt(pos)=='}');
    if(input.charAt(pos)==','){
        pos++;
    }
}

assert(input.charAt(pos)=='}',"Expected }");
return connectedPoints;
}


function parseEdgeSet(connectedPoints,input){
  //var clusteredPoints = new clusters();

  var pos = 0;
  assert(input.charAt(pos)=='{',"Expected {");
  pos++;
  assert(input.charAt(pos)=='{'||input.charAt(pos)=='}',"Expected { or }");
  while(input.charAt(pos)=='{'){
    pos++;
    assert(isDigit(input.charAt(pos))||input.charAt(pos)=='}');
    var edges = [];
    while(isDigit(input.charAt(pos))){
      var digitString = getDigits(input,pos);
      var digits = parseInt(digitString);
      edges[edges.length] = digits;
      pos = pos+digitString.length;
      assert(input.charAt(pos)==','||input.charAt(pos)=='}');
      pos++;
   }

    assert(input.charAt(pos)==','||input.charAt(pos)=='}');

    if(edges.length>0){
      for(var i = 0;i<edges.length;i++){
        for(var j = i + 1;j<edges.length;j++){
          connectedPoints.connectEdge(edges[i],edges[j]);
        }
      }
    }

    if(input.charAt(pos)==','){
      pos++;
    }

  }
    assert(input.charAt(pos)=='}',"Expected }");
    return connectedPoints;
}



function parseBody(input){
  var data = [];
  var pos = 0;
  assert(input.charAt(pos)=='t');
  pos++;
  assert(isDigit(input.charAt(pos)));
    var timeString = getDigits(input,pos);
    pos = pos+timeString.length;
    var time = parseInt(timeString);

  assert((input.charAt(pos)==' ' || input.charAt(pos)== ''),input.charAt(pos));
  pos++;

  if(input.charAt(pos)==''){
    return [time,0,0,0];
  }


  assert((input.charAt(pos)=='C'||input.charAt(pos)=='B'||input.charAt(pos)=='A'||input.charAt(pos)=='R' ));
  if(input.charAt(pos)=='\n'){
    return [time,0,0,0];
  }
  var addOrRemove = input.charAt(pos);
  pos++;
  assert((input.charAt(pos)==' '));

  pos++;
  assert((input.charAt(pos)=='{'));
  pos++;
  assert(isDigit(input.charAt(pos)));
  var point1String = getDigits(input,pos);
  pos = pos+point1String.length;
  var point1 = parseInt(point1String);
  assert((input.charAt(pos)==',')||(input.charAt(pos)=='}'));
  if((input.charAt(pos)==',')){
      pos++;
  }
  assert(isDigit(input.charAt(pos))||(input.charAt(pos)=='}'));
  if(isDigit(input.charAt(pos))){
    var point2String = getDigits(input,pos);
    pos = pos+point2String.length;
    var point2 = parseInt(point2String);
    assert((input.charAt(pos)=='}'));
    data[3] = point2;
  }else{
    data[3] = 0;
  }


data[0] = time;
data[1] = addOrRemove;
data[2] = point1;


  return data;
}
