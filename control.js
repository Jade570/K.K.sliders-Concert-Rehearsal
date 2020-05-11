/*push();
translate(-windowWidth/2, windowHeight/4,0);
fill(100,100,100);
rect(0,0, windowWidth, windowHeight/4);
fill(255,0,0);
circle(50,windowHeight/8-35,50);
circle(125,windowHeight/8-10,50);
ellipse(250,windowHeight/8,150,50);
circle(375,windowHeight/8-10,50);
circle(450,windowHeight/8-35,50);
pop();*/

function startgame() {
  if (starttoken == false && slidervalue == 50){
      song.play();
      starttoken = true;
  }
}


function s(){
  if (stoken == true){
    if(srad<60){
        srad+=1;
    }
    else{
      srad=0;
      stoken = false;
    }
  }
}

function d(){
  if (dtoken == true){
  if(drad<60){
      drad+=1;
  }
  else{
    drad=0;
    dtoken = false;
  }
}
}

function spaceellipse(){
  if(spacetoken == true){
  if(spacey<60){
      spacey+=1;
      spacex=map(spacey, 0,61,0,183);
  }
  else{
    spacey=0;
    spacex=0;
    spacetoken = false;
  }
}
}

function k(){
  if(ktoken == true){
    if(krad<60){
        krad+=1;
    }
    else{
      krad=0;
      ktoken = false;
    }
  }
}

function l(){
  if (ltoken == true){
    if(lrad<60){
        lrad+=1;
    }
    else{
      lrad=0;
      ltoken = false;
    }
  }
}
