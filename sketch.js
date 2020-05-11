let black, brown, gray, head,hand,body,guitarhand;
let font;
let song;
let headrot=0, handrot=0, headtoken, handtoken;
let trust=0;
let slider, slidervalue = 0;
let starttoken;
let globalr=10, globalg=10, globalb=10;
let srad, drad, spacex, spacey,krad, lrad;
let stoken = false, dtoken=false, spacetoken=false, ktoken=false, ltoken=false;

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
  frameRate(61);
  createCanvas(windowWidth, windowHeight, WEBGL);
  headtoken = false;
  handtoken = false;
  starttoken = false;
  textFont(font);
  srad=0; drad=0; krad=0; lrad=0;
  spacex=0; spacey=0;

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




function draw() {
  background(0);
  noStroke();


    s();
    d();
    spaceellipse();
    k();
    l();



for (let i=0; i<8; i+=2){
  if (song.currentTime() >= 0.7+i && song.currentTime() <= 1.1+i) {
    spacetoken = true;
  }
}
for (let i=0; i<6; i+=1){
  if (song.currentTime() >= 7.7+i && song.currentTime() <= 8.1+i) {
    spacetoken = true;
  }
}

if (song.currentTime() >= 12.7 && song.currentTime() <= 13.1) {
  ktoken = true;
}
if (song.currentTime() >= 13 && song.currentTime() <= 13.4) {
  dtoken = true;
}


  if (song.currentTime() >= 14.95 && song.currentTime() <= 15.11) {
    stoken = true;
  }



  globalr = map(slidervalue, 0,50,10,128);
  globalg = map(slidervalue, 0,50,10,128);
  globalb = map(slidervalue, 0,50,10,128);

  //light;
  ambientLight(globalr, globalg, globalb);
  directionalLight(globalr, globalg, globalb, 0, 0, -1);

  textSize(16);
  fill(255);
  text('kk\'s trust : '+ trust, -windowWidth/2+10, -windowHeight/2+20);

  //controller
  push();
  translate(-windowWidth/2, windowHeight/4,0);
  fill(100,100,100);
  rect(0,0, windowWidth, windowHeight/4);
  fill(255,0,0);
  circle(50,windowHeight/8-35,61);
  circle(130,windowHeight/8-10,61);
  ellipse(255,windowHeight/8+10,183,61);
  circle(380,windowHeight/8-10,61);
  circle(455,windowHeight/8-35,61);
  //s(srad);
  fill(0,0,0,90);
  let scircle=circle(50, windowHeight/8-35, srad);
  let dcircle=circle(130,windowHeight/8-10,drad);
  let space=ellipse(255,windowHeight/8+10,spacex, spacey);
  let kcircle=circle(380,windowHeight/8-10,krad);
  let lcircle=circle(455,windowHeight/8-35,lrad);
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
