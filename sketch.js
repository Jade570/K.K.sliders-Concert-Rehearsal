let black, brown, gray, head,hand,body,guitarhand;
let font;
let song;
let headrot=0, handrot=0, headtoken, handtoken;
let trust=0;
let slider, slidervalue = 0;
let starttoken;
let globalr=10, globalg=10, globalb=10;

function preload(){
  black = loadModel('assets/black.obj');
  brown = loadModel('assets/brown.obj');
  gray = loadModel('assets/gray.obj');
  head = loadModel('assets/head.obj');
  hand = loadModel('assets/hand.obj');
  guitarhand = loadModel('assets/guitarhand.obj');
  body = loadModel('assets/body.obj');
  song = loadSound('assets/kkhouse.mp3');
  font = loadFont('assets/Fink-Heavy-Font/FinkHeavy.ttf'); //https://thefontsmagazine.com/font/animal-crossing-font/
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  headtoken = false;
  handtoken = false;
  starttoken = false;
  textFont(font);


  let label = createDiv('brightness');
  label.id('tea');
  label.style('color', 'white');
  label.position(windowWidth-170, windowHeight/8*6+30);
  slider = createSlider(0, 50,0);

  slider.position(-5,50);
  slider.parent(label);
  slider.style('transform', 'rotate(270deg)');
  slider.style('width', '80px');
}

function startgame() {
  if (starttoken == false && slidervalue == 50){
      song.play();
      starttoken = true;
  }
}


function draw() {
  background(0);
  noStroke();

  globalr = map(slidervalue, 0,50,10,128);
  globalg = map(slidervalue, 0,50,10,128);
  globalb = map(slidervalue, 0,50,10,128);

  //light;
  ambientLight(globalr, globalg, globalb);
  directionalLight(globalr, globalg, globalb, 0, 0, -1);

  textSize(16);
  fill(255);
  text('kk\'s trust : '+trust, -windowWidth/2+10, -windowHeight/2+20);

  //controller
  push();
  translate(-windowWidth/2, windowHeight/4,0);
  fill(100,100,100);
  rect(0,0, windowWidth, windowHeight/4);
  fill(255,0,0);
  circle(50,windowHeight/8-35,50);
  circle(125,windowHeight/8-10,50);
  ellipse(250,windowHeight/8,150,50);
  circle(375,windowHeight/8-10,50);
  circle(450,windowHeight/8-35,50);
  pop();



//control
  if (keyIsDown(UP_ARROW)){
    if(slidervalue<50){
          slidervalue+=1;
          startgame();
    }
  }
  if (keyIsDown(DOWN_ARROW)){
    if(slidervalue>0){
          slidervalue-=1;
    }
  }
    slider.value(slidervalue);


  //modeling KK slider
  push();
  scale(50);
  rotateX(PI);

  push();
  fill(0,0,0);
  rotateX(headrot);
  model(black);
  pop();

  fill(89, 61, 35);
  model(brown);

  fill(115, 99, 84);
  model(gray);

  fill(255,255,255);
  push();
  rotateX(headrot);
  model(head);
  pop();

  push();
    model(hand);
  rotateY(handrot);

  model(guitarhand);
  pop();

  model(body);
  pop();

  if (headtoken == false){
    if(headrot>radians(-3)){
      headrot-=radians(0.1);
    }
    else {headtoken = true;}
  }
  else if (headtoken == true){
    if(headrot<0){
      headrot+=radians(0.1);
    }
    else {headtoken = false;}
  }

  if (handtoken == false){
    if(handrot>radians(-10)){
      handrot-=radians(0.2);
    }
    else {handtoken = true;}
  }
  else if (handtoken == true){
    if(handrot<0){
      handrot+=radians(0.2);
    }
    else {handtoken = false;}
  }

//model stage
  translate(0,65,0);
  fill(255,255,255);
  cylinder(300, 50, 12);
}
