let black, brown, gray, head,hand,body,guitarhand;
let font;
let song;
let headrot=0, handrot=0, heaftoken, hanftoken;
let trust=0, prevtrust=0, trusttoken=false, greattoken = false;
let slider, slidervalue = 0;
let starttoken;
let globalr=10, globalg=10, globalb=10;
let drad, frad, spacex, spacey,jrad, krad;
let dtoken = false, ftoken=false, spacetoken=false, jtoken=false, ktoken=false;
let dcolor, fcolor, spacecolor, jcolor, kcolor;
let normal, good, great;


function preload(){
  black = loadModel('assets/black.obj');
  brown = loadModel('assets/brown.obj');
  gray = loadModel('assets/gray.obj');
  head = loadModel('assets/head.obj');
  hand = loadModel('assets/hand.obj');
  guitarhand = loadModel('assets/guitarhand.obj');
  body = loadModel('assets/body.obj');
  song = loadSound('assets/kkhouse.wav');
  font = loadFont('assets/Fink-Heavy-Font/FinkHeavy.ttf'); //https://thefontsmagazine.com/font/animal-crossing-font/
}

function setup() {
  frameRate(61);
  createCanvas(windowWidth, windowHeight, WEBGL);
  heaftoken = false;
  hanftoken = false;
  starttoken = false;
  textFont(font);
  drad=0; frad=0; jrad=0; krad=0;
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

  normal = color(180,180,180,90);
  good = color(52, 146, 235,100);
  great = color(32, 201, 97,100);
  dcolor = normal;
  fcolor = normal;
  spacecolor = normal;
  jcolor = normal;
  kcolor = normal;
}




function draw() {
  background(0);
  noStroke();


    d();
    f();
    spaceellipse();
    j();
    k();



for (let i=0; i<8; i+=2){
  if (song.currentTime() >= 1.2+i && song.currentTime() <= 1.6+i) {
    spacetoken = true;
  }
    if (keyIsPressed==true && key==" "){
      if (song.currentTime() >= 1.7+i && song.currentTime() <= 1.8+i) {
        greatscore();
        greattoken = true;
        spacecolor = great;
        setTimeout(function(){spacecolor = normal;},500);
      }
      else if ((song.currentTime() >= 1.5+i && song.currentTime() < 1.7+i)||
              (song.currentTime() > 1.8+i && song.currentTime() <= 2.1+i)){
        goodscore();
        trusttoken = true;
        spacecolor = good;
        setTimeout(function(){spacecolor = normal;},500);
      }
    }
}

for (let i=0; i<6; i+=1){
  if (song.currentTime() >= 8.2+i && song.currentTime() <= 8.4+i) {
    spacetoken = true;
  }
  if (keyIsPressed==true && key==" "){
    if (song.currentTime() >= 8.7+i && song.currentTime() <= 8.8+i) {
      greatscore();
      greattoken = true;
      spacecolor = great;
      setTimeout(function(){spacecolor = normal;},500);
    }
    else if ((song.currentTime() >= 8.5+i && song.currentTime() < 8.7+i)||
            (song.currentTime() > 8.8+i && song.currentTime() <= 9.1+i)){
      goodscore();
      trusttoken = true;
      spacecolor = good;
      setTimeout(function(){spacecolor = normal;},500);
    }
  }
}

if (song.currentTime() >= 13.2 && song.currentTime() <= 13.6) {
  jtoken = true;
  if (keyIsPressed==true && key=="j"){
    if (song.currentTime() >= 13.7 && song.currentTime() <= 13.8) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function(){jcolor = normal;},500);
    }
    else if ((song.currentTime() >= 13.5 && song.currentTime() < 13.7)||
            (song.currentTime() > 13.8 && song.currentTime() <= 14.1)){
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function(){jcolor = normal;},500);
    }
  }
}


if (song.currentTime() >= 13.5 && song.currentTime() <= 13.9) {
  ftoken = true;
  if (keyIsPressed==true && key=="f"){
    if (song.currentTime() >= 14 && song.currentTime() <= 14.1) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function(){fcolor = normal;},500);
    }
    else if ((song.currentTime() >= 13.9 && song.currentTime() < 14)||
            (song.currentTime() > 14.1 && song.currentTime() <= 14.4)){
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function(){fcolor = normal;},500);
    }
  }
}


  if (song.currentTime() >= 15.47 && song.currentTime() <= 15.67) {
    spacetoken = true;

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
  //s(drad);
  fill(dcolor);
  let scircle=circle(50, windowHeight/8-35, drad);
  fill(fcolor);
  let dcircle=circle(130,windowHeight/8-10,frad);
  fill(spacecolor);
  let space=ellipse(255,windowHeight/8+10,spacex, spacey);
  fill(jcolor);
  let kcircle=circle(380,windowHeight/8-10,jrad);
  fill(kcolor);
  let lcircle=circle(455,windowHeight/8-35,krad);
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

  if (heaftoken == false){
    if(headrot>radians(-3)){
      headrot-=radians(0.1);
    }
    else {heaftoken = true;}
  }
  else if (heaftoken == true){
    if(headrot<0){
      headrot+=radians(0.1);
    }
    else {heaftoken = false;}
  }

  if (hanftoken == false){
    if(handrot>radians(-10)){
      handrot-=radians(0.2);
    }
    else {hanftoken = true;}
  }
  else if (hanftoken == true){
    if(handrot<0){
      handrot+=radians(0.2);
    }
    else {hanftoken = false;}
  }

//model stage
  translate(0,65,0);
  fill(255,255,255);
  cylinder(300, 50, 12);
}
