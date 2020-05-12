let black, brown, gray, head, hand, body, guitarhand;
let font;
let song;
let headrot = 0,
  handrot = 0,
  heaftoken, hanftoken;
let trust = 0,
  prevtrust = 0,
  trusttoken = false,
  greattoken = false;
let slider, slidervalue = 0;
let starttoken;
let globalr = 10,
  globalg = 10,
  globalb = 10;
let drad, frad, spacex, spacey, jrad, krad;
let dtoken = false,
  ftoken = false,
  spacetoken = false,
  jtoken = false,
  ktoken = false;
let dcolor, fcolor, spacecolor, jcolor, kcolor;
let normal, good, great;
let dpos, fpos, spacepos, jpos, kpos;
let ddir, fdir, spacedir, jdir, kdir;
let lightcolor;
let lighth, lights, lightb;


function preload() {
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
  drad = 0;
  frad = 0;
  jrad = 0;
  krad = 0;
  spacex = 0;
  spacey = 0;
  dpos= new p5.Vector(-500,-500,0);
  fpos= new p5.Vector(-250,-500,0);
  spacepos= new p5.Vector(0,-500,0);
  jpos= new p5.Vector(500,-500,0);
  kpos= new p5.Vector(250,-500,0);
  ddir=new p5.Vector(1,1,0);
  fdir=new p5.Vector(0.5,1,0);
  spacedir = new p5.Vector(0,1,0);
  jdir=new p5.Vector(-1,1,0);
  kdir=new p5.Vector(-0.5,1,0);

  let label = createDiv('brightness');
  label.id('tea');
  label.style('color', 'white');
  label.position(windowWidth - 170, windowHeight / 8 * 6 + 30);
  slider = createSlider(0, 50, 0);

  slider.position(-5, 50);
  slider.parent(label);
  slider.style('transform', 'rotate(270deg)');
  slider.style('width', '80px');

  normal = color(180, 180, 180, 90);
  good = color(52, 146, 235, 100);
  great = color(32, 201, 97, 100);
  dcolor = normal;
  fcolor = normal;
  spacecolor = normal;
  jcolor = normal;
  kcolor = normal;

  lighth=random(360);
  lights=100;
  lightb=100;
  lightcolor = color(lighth, lights, lightb);
  //colorchange
  setInterval(colorchange, 1960/8);
}

function colorchange(){
      lighth=random(360);

}


function draw() {
  background(0);
  noStroke();




//colorchange();
  push();
  colorMode(HSB);
  lightcolor = color(lighth, lights, lightb);
  pop();
//lightcolor=color('hsb(lighth, lights, lightb)');

  d();
  f();
  spaceellipse();
  j();
  k();





  for (let i = 0; i < 8; i += 2) {
    if (song.currentTime() >= 1.2 + i && song.currentTime() <= 1.6 + i) {
      spacetoken = true;
    }
    if (keyIsPressed == true && key == " ") {
      if (song.currentTime() >= 1.7 + i && song.currentTime() <= 1.8 + i) {
        greatscore();
        greattoken = true;
        spacecolor = great;
        setTimeout(function() {
          spacecolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 1.5 + i && song.currentTime() < 1.7 + i) ||
        (song.currentTime() > 1.8 + i && song.currentTime() <= 2.0 + i)) {
        goodscore();
        trusttoken = true;
        spacecolor = good;
        setTimeout(function() {
          spacecolor = normal;
        }, 500);
      }
    }
  }

  for (let i = 0; i < 6; i += 1) {
    if (song.currentTime() >= 8.2 + i && song.currentTime() <= 8.4 + i) {
      spacetoken = true;
    }
    if (keyIsPressed == true && key == " ") {
      if (song.currentTime() >= 8.7 + i && song.currentTime() <= 8.8 + i) {
        greatscore();
        greattoken = true;
        spacecolor = great;
        setTimeout(function() {
          spacecolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 8.5 + i && song.currentTime() < 8.7 + i) ||
        (song.currentTime() > 8.8 + i && song.currentTime() <= 9.0 + i)) {
        goodscore();
        trusttoken = true;
        spacecolor = good;
        setTimeout(function() {
          spacecolor = normal;
        }, 500);
      }
    }
  }

  if (song.currentTime() >= 13.2 && song.currentTime() <= 13.6) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 13.7 && song.currentTime() <= 13.8) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 13.5 && song.currentTime() < 13.7) ||
      (song.currentTime() > 13.8 && song.currentTime() <= 14.0)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 13.5 && song.currentTime() <= 13.9) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 14 && song.currentTime() <= 14.1) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 13.9 && song.currentTime() < 14) ||
      (song.currentTime() > 14.1 && song.currentTime() <= 14.3)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  for (let i = 0; i < 1.96 * 16; i += 1.96) {
    if (song.currentTime() >= 15.49 + i && song.currentTime() <= 15.67 + i) {
      spacetoken = true;
    }
    if (keyIsPressed == true && key == " ") {
      if (song.currentTime() >= 15.99 + i && song.currentTime() <= 16.1 + i) {

        greatscore();
        greattoken = true;
        fcolor = great;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 15.8 + i && song.currentTime() < 15.97 + i) ||
        (song.currentTime() > 16.1 + i && song.currentTime() <= 16.3 + i)) {
        goodscore();
        trusttoken = true;
        fcolor = good;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      }
    }
  }


  if (song.currentTime() >= 15.7 && song.currentTime() <= 15.8) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.2 && song.currentTime() <= 16.3) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0 && song.currentTime() < 16.2) ||
      (song.currentTime() > 16.3 && song.currentTime() <= 16.5)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1 && song.currentTime() <= 16.2) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 16.6 && song.currentTime() <= 16.7) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4 && song.currentTime() < 16.6) ||
      (song.currentTime() > 16.7 && song.currentTime() <= 16.9)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.43 && song.currentTime() <= 16.53) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93 && song.currentTime() <= 17.03) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73 && song.currentTime() < 16.93) ||
      (song.currentTime() > 17.03 && song.currentTime() <= 17.23)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.8 && song.currentTime() <= 16.9) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3 && song.currentTime() <= 17.4) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1 && song.currentTime() < 17.3) ||
      (song.currentTime() > 17.4 && song.currentTime() <= 17.6)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.17 && song.currentTime() <= 17.27) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67 && song.currentTime() <= 17.77) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47 && song.currentTime() < 17.67) ||
      (song.currentTime() > 17.77 && song.currentTime() <= 17.97)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.67 && song.currentTime() <= 17.77) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17 && song.currentTime() <= 18.27) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97 && song.currentTime() < 18.17) ||
      (song.currentTime() > 18.27 && song.currentTime() <= 18.47)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05 && song.currentTime() <= 18.15) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.55 && song.currentTime() <= 18.65) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35 && song.currentTime() < 18.55) ||
      (song.currentTime() > 18.65 && song.currentTime() <= 18.85)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41 && song.currentTime() <= 18.51) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.91 && song.currentTime() <= 19.01) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71 && song.currentTime() < 18.91) ||
      (song.currentTime() > 19.01 && song.currentTime() <= 19.21)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76 && song.currentTime() <= 18.86) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 19.26 && song.currentTime() <= 19.36) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06 && song.currentTime() < 19.26) ||
      (song.currentTime() > 19.36 && song.currentTime() <= 19.56)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15 && song.currentTime() <= 19.25) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 19.65 && song.currentTime() <= 19.75) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45 && song.currentTime() < 19.65) ||
      (song.currentTime() > 19.75 && song.currentTime() <= 19.95)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.67 + 1.96 && song.currentTime() <= 17.77 + 1.96) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17 + 1.96 && song.currentTime() <= 18.27 + 1.96) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97 + 1.96 && song.currentTime() < 18.17 + 1.96) ||
      (song.currentTime() > 18.27 + 1.96 && song.currentTime() <= 18.47 + 1.96)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05 + 1.96 && song.currentTime() <= 18.15 + 1.96) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.55 + 1.96 && song.currentTime() <= 18.65 + 1.96) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35 + 1.96 && song.currentTime() < 18.55 + 1.96) ||
      (song.currentTime() > 18.65 + 1.96 && song.currentTime() <= 18.85 + 1.96)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41 + 1.96 && song.currentTime() <= 18.51 + 1.96) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.91 + 1.96 && song.currentTime() <= 19.01 + 1.96) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71 + 1.96 && song.currentTime() < 18.91 + 1.96) ||
      (song.currentTime() > 19.01 + 1.96 && song.currentTime() <= 19.21 + 1.96)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76 + 1.96 && song.currentTime() <= 18.86 + 1.96) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 19.26 + 1.96 && song.currentTime() <= 19.36 + 1.96) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06 + 1.96 && song.currentTime() < 19.26 + 1.96) ||
      (song.currentTime() > 19.36 + 1.96 && song.currentTime() <= 19.56 + 1.96)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15 + 1.96 && song.currentTime() <= 19.25 + 1.96) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 19.65 + 1.96 && song.currentTime() <= 19.75 + 1.96) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45 + 1.96 && song.currentTime() < 19.65 + 1.96) ||
      (song.currentTime() > 19.75 + 1.96 && song.currentTime() <= 19.95 + 1.96)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 17.67 + 3.92 && song.currentTime() <= 17.77 + 3.92) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17 + 3.92 && song.currentTime() <= 18.27 + 3.92) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97 + 3.92 && song.currentTime() < 18.17 + 3.92) ||
      (song.currentTime() > 18.27 + 3.92 && song.currentTime() <= 18.47 + 3.92)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05 + 3.92 && song.currentTime() <= 18.15 + 3.92) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.55 + 3.92 && song.currentTime() <= 18.65 + 3.92) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35 + 3.92 && song.currentTime() < 18.55 + 3.92) ||
      (song.currentTime() > 18.65 + 3.92 && song.currentTime() <= 18.85 + 3.92)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41 + 3.92 && song.currentTime() <= 18.51 + 3.92) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 18.91 + 3.92 && song.currentTime() <= 19.01 + 3.92) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71 + 3.92 && song.currentTime() < 18.91 + 3.92) ||
      (song.currentTime() > 19.01 + 3.92 && song.currentTime() <= 19.21 + 3.92)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76 + 3.92 && song.currentTime() <= 18.86 + 3.92) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 19.26 + 3.92 && song.currentTime() <= 19.36 + 3.92) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06 + 3.92 && song.currentTime() < 19.26 + 3.92) ||
      (song.currentTime() > 19.36 + 3.92 && song.currentTime() <= 19.56 + 3.92)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15 + 3.92 && song.currentTime() <= 19.25 + 3.92) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 19.65 + 3.92 && song.currentTime() <= 19.75 + 3.92) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45 + 3.92 && song.currentTime() < 19.65 + 3.92) ||
      (song.currentTime() > 19.75 + 3.92 && song.currentTime() <= 19.95 + 3.92)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.67 + 5.88 && song.currentTime() <= 17.77 + 5.88) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17 + 5.88 && song.currentTime() <= 18.27 + 5.88) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97 + 5.88 && song.currentTime() < 18.17 + 5.88) ||
      (song.currentTime() > 18.27 + 5.88 && song.currentTime() <= 18.47 + 5.88)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05 + 5.88 && song.currentTime() <= 18.15 + 5.88) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.55 + 5.88 && song.currentTime() <= 18.65 + 5.88) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35 + 5.88 && song.currentTime() < 18.55 + 5.88) ||
      (song.currentTime() > 18.65 + 5.88 && song.currentTime() <= 18.85 + 5.88)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41 + 5.88 && song.currentTime() <= 18.51 + 5.88) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.91 + 5.88 && song.currentTime() <= 19.01 + 5.88) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71 + 5.88 && song.currentTime() < 18.91 + 5.88) ||
      (song.currentTime() > 19.01 + 5.88 && song.currentTime() <= 19.21 + 5.88)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76 + 5.88 && song.currentTime() <= 18.86 + 5.88) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 19.26 + 5.88 && song.currentTime() <= 19.36 + 5.88) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06 + 5.88 && song.currentTime() < 19.26 + 5.88) ||
      (song.currentTime() > 19.36 + 5.88 && song.currentTime() <= 19.56 + 5.88)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15 + 5.88 && song.currentTime() <= 19.25 + 5.88) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 19.65 + 5.88 && song.currentTime() <= 19.75 + 5.88) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45 + 5.88 && song.currentTime() < 19.65 + 5.88) ||
      (song.currentTime() > 19.75 + 5.88 && song.currentTime() <= 19.95 + 5.88)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.67 + 7.84 && song.currentTime() <= 17.77 + 7.84) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17 + 7.84 && song.currentTime() <= 18.27 + 7.84) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97 + 7.84 && song.currentTime() < 18.17 + 7.84) ||
      (song.currentTime() > 18.27 + 7.84 && song.currentTime() <= 18.47 + 7.84)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05 + 7.84 && song.currentTime() <= 18.15 + 7.84) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 18.55 + 7.84 && song.currentTime() <= 18.65 + 7.84) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35 + 7.84 && song.currentTime() < 18.55 + 7.84) ||
      (song.currentTime() > 18.65 + 7.84 && song.currentTime() <= 18.85 + 7.84)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41 + 7.84 && song.currentTime() <= 18.51 + 7.84) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.91 + 7.84 && song.currentTime() <= 19.01 + 7.84) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71 + 7.84 && song.currentTime() < 18.91 + 7.84) ||
      (song.currentTime() > 19.01 + 7.84 && song.currentTime() <= 19.21 + 7.84)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76 + 7.84 && song.currentTime() <= 18.86 + 7.84) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 19.26 + 7.84 && song.currentTime() <= 19.36 + 7.84) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06 + 7.84 && song.currentTime() < 19.26 + 7.84) ||
      (song.currentTime() > 19.36 + 7.84 && song.currentTime() <= 19.56 + 7.84)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15 + 7.84 && song.currentTime() <= 19.25 + 7.84) {
    jtoken = true;

  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 19.65 + 7.84 && song.currentTime() <= 19.75 + 7.84) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45 + 7.84 && song.currentTime() < 19.65 + 7.84) ||
      (song.currentTime() > 19.75 + 7.84 && song.currentTime() <= 19.95 + 7.84)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 15.7 + 11.76 && song.currentTime() <= 15.8 + 11.76) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.2 + 11.76 && song.currentTime() <= 16.3 + 11.76) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0 + 11.76 && song.currentTime() < 16.2 + 11.76) ||
      (song.currentTime() > 16.3 + 11.76 && song.currentTime() <= 16.5 + 11.76)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1 + 11.76 && song.currentTime() <= 16.2 + 11.76) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 16.6 + 11.76 && song.currentTime() <= 16.7 + 11.76) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4 + 11.76 && song.currentTime() < 16.6 + 11.76) ||
      (song.currentTime() > 16.7 + 11.76 && song.currentTime() <= 16.9 + 11.76)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 16.43 + 11.76 && song.currentTime() <= 16.53 + 11.76) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93 + 11.76 && song.currentTime() <= 17.03 + 11.76) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73 + 11.76 && song.currentTime() < 16.93 + 11.76) ||
      (song.currentTime() > 17.03 + 11.76 && song.currentTime() <= 17.23 + 11.76)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.93 + 11.76 && song.currentTime() <= 17.03 + 11.76) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73 + 11.76 && song.currentTime() < 16.93 + 11.76) ||
      (song.currentTime() > 17.03 + 11.76 && song.currentTime() <= 17.23 + 11.76)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.8 + 11.76 && song.currentTime() <= 16.9 + 11.76) {
    ftoken = true;
    jtoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3 + 11.76 && song.currentTime() <= 17.4 + 11.76) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1 + 11.76 && song.currentTime() < 17.3 + 11.76) ||
      (song.currentTime() > 17.4 + 11.76 && song.currentTime() <= 17.6 + 11.76)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 17.3 + 11.76 && song.currentTime() <= 17.4 + 11.76) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1 + 11.76 && song.currentTime() < 17.3 + 11.76) ||
      (song.currentTime() > 17.4 + 11.76 && song.currentTime() <= 17.6 + 11.76)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 17.17 + 11.76 && song.currentTime() <= 17.27 + 11.76) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67 + 11.76 && song.currentTime() <= 17.77 + 11.76) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47 + 11.76 && song.currentTime() < 17.67 + 11.76) ||
      (song.currentTime() > 17.77 + 11.76 && song.currentTime() <= 17.97 + 11.76)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 17.67 + 11.76 && song.currentTime() <= 17.77 + 11.76) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47 + 11.76 && song.currentTime() < 17.67 + 11.76) ||
      (song.currentTime() > 17.77 + 11.76 && song.currentTime() <= 17.97 + 11.76)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 15.7 + 13.72 && song.currentTime() <= 15.8 + 13.72) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.2 + 13.72 && song.currentTime() <= 16.3 + 13.72) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0 + 13.72 && song.currentTime() < 16.2 + 13.72) ||
      (song.currentTime() > 16.3 + 13.72 && song.currentTime() <= 16.5 + 13.72)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1 + 13.72 && song.currentTime() <= 16.2 + 13.72) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 16.6 + 13.72 && song.currentTime() <= 16.7 + 13.72) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4 + 13.72 && song.currentTime() < 16.6 + 13.72) ||
      (song.currentTime() > 16.7 + 13.72 && song.currentTime() <= 16.9 + 13.72)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 16.43 + 13.72 && song.currentTime() <= 16.53 + 13.72) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93 + 13.72 && song.currentTime() <= 17.03 + 13.72) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73 + 13.72 && song.currentTime() < 16.93 + 13.72) ||
      (song.currentTime() > 17.03 + 13.72 && song.currentTime() <= 17.23 + 13.72)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.93 + 13.72 && song.currentTime() <= 17.03 + 13.72) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73 + 13.72 && song.currentTime() < 16.93 + 13.72) ||
      (song.currentTime() > 17.03 + 13.72 && song.currentTime() <= 17.23 + 13.72)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.8 + 13.72 && song.currentTime() <= 16.9 + 13.72) {
    ftoken = true;
    jtoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3 + 13.72 && song.currentTime() <= 17.4 + 13.72) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1 + 13.72 && song.currentTime() < 17.3 + 13.72) ||
      (song.currentTime() > 17.4 + 13.72 && song.currentTime() <= 17.6 + 13.72)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 17.3 + 13.72 && song.currentTime() <= 17.4 + 13.72) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1 + 13.72 && song.currentTime() < 17.3 + 13.72) ||
      (song.currentTime() > 17.4 + 13.72 && song.currentTime() <= 17.6 + 13.72)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 17.17 + 13.72 && song.currentTime() <= 17.27 + 13.72) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67 + 13.72 && song.currentTime() <= 17.77 + 13.72) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47 + 13.72 && song.currentTime() < 17.67 + 13.72) ||
      (song.currentTime() > 17.77 + 13.72 && song.currentTime() <= 17.97 + 13.72)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 17.67 + 13.72 && song.currentTime() <= 17.77 + 13.72) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47 + 13.72 && song.currentTime() < 17.67 + 13.72) ||
      (song.currentTime() > 17.77 + 13.72 && song.currentTime() <= 17.97 + 13.72)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 17.67 + 13.72 && song.currentTime() <= 17.77 + 13.72) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17 + 13.72 && song.currentTime() <= 18.27 + 13.72) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97 + 13.72 && song.currentTime() < 18.17 + 13.72) ||
      (song.currentTime() > 18.27 + 13.72 && song.currentTime() <= 18.47 + 13.72)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05 + 13.72 && song.currentTime() <= 18.15 + 13.72) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.55 + 13.72 && song.currentTime() <= 18.65 + 13.72) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35 + 13.72 && song.currentTime() < 18.55 + 13.72) ||
      (song.currentTime() > 18.65 + 13.72 && song.currentTime() <= 18.85 + 13.72)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41 + 13.72 && song.currentTime() <= 18.51 + 13.72) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.91 + 13.72 && song.currentTime() <= 19.01 + 13.72) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71 + 13.72 && song.currentTime() < 18.91 + 13.72) ||
      (song.currentTime() > 19.01 + 13.72 && song.currentTime() <= 19.21 + 13.72)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76 + 13.72 && song.currentTime() <= 18.86 + 13.72) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 19.26 + 13.72 && song.currentTime() <= 19.36 + 13.72) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06 + 13.72 && song.currentTime() < 19.26 + 13.72) ||
      (song.currentTime() > 19.36 + 13.72 && song.currentTime() <= 19.56 + 13.72)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15 + 13.72 && song.currentTime() <= 19.25 + 13.72) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 19.65 + 13.72 && song.currentTime() <= 19.75 + 13.72) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45 + 13.72 && song.currentTime() < 19.65 + 13.72) ||
      (song.currentTime() > 19.75 + 13.72 && song.currentTime() <= 19.95 + 13.72)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 15.7+17.64 && song.currentTime() <= 15.8+17.64) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.2+17.64 && song.currentTime() <= 16.3+17.64) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0+17.64 && song.currentTime() < 16.2+17.64) ||
      (song.currentTime() > 16.3+17.64 && song.currentTime() <= 16.5+17.64)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1+17.64 && song.currentTime() <= 16.2+17.64) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 16.6+17.64 && song.currentTime() <= 16.7+17.64) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4+17.64 && song.currentTime() < 16.6+17.64) ||
      (song.currentTime() > 16.7+17.64 && song.currentTime() <= 16.9+17.64)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.43+17.64 && song.currentTime() <= 16.53+17.64) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93+17.64 && song.currentTime() <= 17.03+17.64) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+17.64 && song.currentTime() < 16.93+17.64) ||
      (song.currentTime() > 17.03+17.64 && song.currentTime() <= 17.23+17.64)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.8+17.64 && song.currentTime() <= 16.9+17.64) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3+17.64 && song.currentTime() <= 17.4+17.64) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+17.64 && song.currentTime() < 17.3+17.64) ||
      (song.currentTime() > 17.4+17.64 && song.currentTime() <= 17.6+17.64)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.17+17.64 && song.currentTime() <= 17.27+17.64) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67+17.64 && song.currentTime() <= 17.77+17.64) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+17.64 && song.currentTime() < 17.67+17.64) ||
      (song.currentTime() > 17.77+17.64 && song.currentTime() <= 17.97+17.64)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 15.7+19.6 && song.currentTime() <= 15.8+19.6) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.2+19.6 && song.currentTime() <= 16.3+19.6) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0+19.6 && song.currentTime() < 16.2+19.6) ||
      (song.currentTime() > 16.3+19.6 && song.currentTime() <= 16.5+19.6)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1+19.6 && song.currentTime() <= 16.2+19.6) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 16.6+19.6 && song.currentTime() <= 16.7+19.6) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4+19.6 && song.currentTime() < 16.6+19.6) ||
      (song.currentTime() > 16.7+19.6 && song.currentTime() <= 16.9+19.6)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 16.43+19.6 && song.currentTime() <= 16.53+19.6) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93+19.6 && song.currentTime() <= 17.03+19.6) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+19.6 && song.currentTime() < 16.93+19.6) ||
      (song.currentTime() > 17.03+19.6 && song.currentTime() <= 17.23+19.6)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.93+19.6 && song.currentTime() <= 17.03+19.6) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+19.6 && song.currentTime() < 16.93+19.6) ||
      (song.currentTime() > 17.03+19.6 && song.currentTime() <= 17.23+19.6)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.8+19.6 && song.currentTime() <= 16.9+19.6) {
    ftoken = true;
    jtoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3+19.6 && song.currentTime() <= 17.4+19.6) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+19.6 && song.currentTime() < 17.3+19.6) ||
      (song.currentTime() > 17.4+19.6 && song.currentTime() <= 17.6+19.6)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 17.3+19.6 && song.currentTime() <= 17.4+19.6) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+19.6 && song.currentTime() < 17.3+19.6) ||
      (song.currentTime() > 17.4+19.6 && song.currentTime() <= 17.6+19.6)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 17.17+19.6 && song.currentTime() <= 17.27+19.6) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67+19.6 && song.currentTime() <= 17.77+19.6) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+19.6 && song.currentTime() < 17.67+19.6) ||
      (song.currentTime() > 17.77+19.6 && song.currentTime() <= 17.97+19.6)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 17.67+19.6 && song.currentTime() <= 17.77+19.6) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+19.6 && song.currentTime() < 17.67+19.6) ||
      (song.currentTime() > 17.77+19.6 && song.currentTime() <= 17.97+19.6)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }




  if (song.currentTime() >= 15.7+21.57 && song.currentTime() <= 15.8+21.56) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.2+21.56 && song.currentTime() <= 16.3+21.56) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0+21.56 && song.currentTime() < 16.2+21.56) ||
      (song.currentTime() > 16.3+21.56 && song.currentTime() <= 16.5+21.56)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1+21.56 && song.currentTime() <= 16.2+21.56) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 16.6+21.56 && song.currentTime() <= 16.7+21.56) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4+21.56 && song.currentTime() < 16.6+21.56) ||
      (song.currentTime() > 16.7+21.56 && song.currentTime() <= 16.9+21.56)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 16.43+21.56 && song.currentTime() <= 16.53+21.56) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93+21.56 && song.currentTime() <= 17.03+21.56) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+21.56 && song.currentTime() < 16.93+21.56) ||
      (song.currentTime() > 17.03+21.56 && song.currentTime() <= 17.23+21.56)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.93+21.56 && song.currentTime() <= 17.03+21.56) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+21.56 && song.currentTime() < 16.93+21.56) ||
      (song.currentTime() > 17.03+21.56 && song.currentTime() <= 17.23+21.56)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.8+21.56 && song.currentTime() <= 16.9+21.56) {
    ftoken = true;
    jtoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3+21.56 && song.currentTime() <= 17.4+21.56) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+21.56 && song.currentTime() < 17.3+21.56) ||
      (song.currentTime() > 17.4+21.56 && song.currentTime() <= 17.6+21.56)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 17.3+21.56 && song.currentTime() <= 17.4+21.56) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+21.56 && song.currentTime() < 17.3+21.56) ||
      (song.currentTime() > 17.4+21.56 && song.currentTime() <= 17.6+21.56)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 17.17+21.56 && song.currentTime() <= 17.27+21.56) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67+21.56 && song.currentTime() <= 17.77+21.56) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+21.56 && song.currentTime() < 17.67+21.56) ||
      (song.currentTime() > 17.77+21.56 && song.currentTime() <= 17.97+21.56)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 17.67+21.56 && song.currentTime() <= 17.77+21.56) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+21.56 && song.currentTime() < 17.67+21.56) ||
      (song.currentTime() > 17.77+21.56 && song.currentTime() <= 17.97+21.56)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }






  if (song.currentTime() >= 17.67+21.56 && song.currentTime() <= 17.77+21.56) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17+21.56 && song.currentTime() <= 18.27+21.56) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97+21.56 && song.currentTime() < 18.17+21.56) ||
      (song.currentTime() > 18.27+21.56 && song.currentTime() <= 18.47+21.56)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05+21.56 && song.currentTime() <= 18.15+21.56) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.55+21.56 && song.currentTime() <= 18.65+21.56) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35+21.56 && song.currentTime() < 18.55+21.56) ||
      (song.currentTime() > 18.65+21.56 && song.currentTime() <= 18.85+21.56)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41+21.56 && song.currentTime() <= 18.51+21.56) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.91+21.56 && song.currentTime() <= 19.01+21.56) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71+21.56 && song.currentTime() < 18.91+21.56) ||
      (song.currentTime() > 19.01+21.56 && song.currentTime() <= 19.21+21.56)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76+21.56 && song.currentTime() <= 18.86+21.56) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 19.26+21.56 && song.currentTime() <= 19.36+21.56) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06+21.56 && song.currentTime() < 19.26+21.56) ||
      (song.currentTime() > 19.36+21.56 && song.currentTime() <= 19.56+21.56)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15+21.56 && song.currentTime() <= 19.25+21.56) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 19.65+21.56 && song.currentTime() <= 19.75+21.56) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45+21.56 && song.currentTime() < 19.65+21.56) ||
      (song.currentTime() > 19.75+21.56 && song.currentTime() <= 19.95+21.56)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }




  if (song.currentTime() >= 15.7+25.49 && song.currentTime() <= 15.8+25.49) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.2+25.49 && song.currentTime() <= 16.3+25.49) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0+25.49 && song.currentTime() < 16.2+25.49) ||
      (song.currentTime() > 16.3+25.49 && song.currentTime() <= 16.5+25.49)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1+25.49 && song.currentTime() <= 16.2+25.49) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 16.6+25.49 && song.currentTime() <= 16.7+25.49) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4+25.49 && song.currentTime() < 16.6+25.49) ||
      (song.currentTime() > 16.7+25.49 && song.currentTime() <= 16.9+25.49)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.43+25.49 && song.currentTime() <= 16.53+25.49) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93+25.49 && song.currentTime() <= 17.03+25.49) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+25.49 && song.currentTime() < 16.93+25.49) ||
      (song.currentTime() > 17.03+25.49 && song.currentTime() <= 17.23+25.49)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.8+25.49 && song.currentTime() <= 16.9+25.49) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3+25.49 && song.currentTime() <= 17.4+25.49) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+25.49 && song.currentTime() < 17.3+25.49) ||
      (song.currentTime() > 17.4+25.49 && song.currentTime() <= 17.6+25.49)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.17+25.49 && song.currentTime() <= 17.27+25.49) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67+25.49 && song.currentTime() <= 17.77+25.49) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+25.49 && song.currentTime() < 17.67+25.49) ||
      (song.currentTime() > 17.77+25.49 && song.currentTime() <= 17.97+25.49)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 15.7+27.45 && song.currentTime() <= 15.8+27.45) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.2+27.45 && song.currentTime() <= 16.3+27.45) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0+27.45 && song.currentTime() < 16.2+27.45) ||
      (song.currentTime() > 16.3+27.45 && song.currentTime() <= 16.5+27.45)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.2+27.45 && song.currentTime() <= 16.3+27.45) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.0+27.45 && song.currentTime() < 16.2+27.45) ||
      (song.currentTime() > 16.3+27.45 && song.currentTime() <= 16.5+27.45)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 16.1+27.45 && song.currentTime() <= 16.2+27.45) {
    ftoken = true;
    jtoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 16.6+27.45 && song.currentTime() <= 16.7+27.45) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4+27.45 && song.currentTime() < 16.6+27.45) ||
      (song.currentTime() > 16.7+27.45 && song.currentTime() <= 16.9+27.45)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 16.6+27.45 && song.currentTime() <= 16.7+27.45) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.4+27.45 && song.currentTime() < 16.6+27.45) ||
      (song.currentTime() > 16.7+27.45 && song.currentTime() <= 16.9+27.45)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 16.43+27.45 && song.currentTime() <= 16.53+27.45) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 16.93+27.45 && song.currentTime() <= 17.03+27.45) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+27.45 && song.currentTime() < 16.93+27.45) ||
      (song.currentTime() > 17.03+27.45 && song.currentTime() <= 17.23+27.45)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 16.93+27.45 && song.currentTime() <= 17.03+27.45) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.73+27.45 && song.currentTime() < 16.93+27.45) ||
      (song.currentTime() > 17.03+27.45 && song.currentTime() <= 17.23+27.45)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 16.8+27.45 && song.currentTime() <= 16.9+27.45) {
    ftoken = true;
    jtoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 17.3+27.45 && song.currentTime() <= 17.4+27.45) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+27.45 && song.currentTime() < 17.3+27.45) ||
      (song.currentTime() > 17.4+27.45 && song.currentTime() <= 17.6+27.45)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 17.3+27.45 && song.currentTime() <= 17.4+27.45) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.1+27.45 && song.currentTime() < 17.3+27.45) ||
      (song.currentTime() > 17.4+27.45 && song.currentTime() <= 17.6+27.45)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 17.17+27.45 && song.currentTime() <= 17.27+27.45) {
    dtoken = true;
    ktoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 17.67+27.45 && song.currentTime() <= 17.77+27.45) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+27.45 && song.currentTime() < 17.67+27.45) ||
      (song.currentTime() > 17.77+27.45 && song.currentTime() <= 17.97+27.45)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 17.67+27.45 && song.currentTime() <= 17.77+27.45) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.47+27.45 && song.currentTime() < 17.67+27.45) ||
      (song.currentTime() > 17.77+27.45 && song.currentTime() <= 17.97+27.45)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }




  if (song.currentTime() >= 46.03 && song.currentTime() <= 46.13) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 46.53 && song.currentTime() <= 46.63) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 16.33 && song.currentTime() < 46.53) ||
      (song.currentTime() > 46.63 && song.currentTime() <= 46.83)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 46.53 && song.currentTime() <= 46.63) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 47.03 && song.currentTime() <= 47.13) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 46.83 && song.currentTime() < 47.03) ||
      (song.currentTime() > 47.13 && song.currentTime() <= 47.33)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }



for (let i = 0; i<1.96*5; i+=1.96){
  if (song.currentTime() >= 47.09+i && song.currentTime() <= 47.19+i) {
    spacetoken = true;
  }
  if (keyIsPressed == true && key == "space") {
    if (song.currentTime() >= 47.59+i && song.currentTime() <= 47.69+i) {
      greatscore();
      greattoken = true;
      spacecolor = great;
      setTimeout(function() {
        spacecolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 47.39+i && song.currentTime() < 47.59+i) ||
      (song.currentTime() > 47.69+i && song.currentTime() <= 47.89+i)) {
      goodscore();
      trusttoken = true;
      spacecolor = good;
      setTimeout(function() {
        spacecolor = normal;
      }, 500);
    }
  }
}


for(let i = 0; i<1.96*4; i+=1.96*2){
  if (song.currentTime() >= 47.42+i && song.currentTime() <= 47.52+i) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 47.92+i && song.currentTime() <= 48.02+i) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 47.72+i && song.currentTime() < 47.92+i) ||
      (song.currentTime() > 48.02+i && song.currentTime() <= 48.22+i)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 47.82+i && song.currentTime() <= 47.92+i) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 48.32+i && song.currentTime() <= 48.42+i) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 48.12+i && song.currentTime() < 48.32+i) ||
      (song.currentTime() > 48.42+i && song.currentTime() <= 48.62+i)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 48.30+i && song.currentTime() <= 48.40+i) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 48.80+i && song.currentTime() <= 48.90+i) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 48.60+i && song.currentTime() < 48.80+i) ||
      (song.currentTime() > 48.90+i && song.currentTime() <= 50.10+i)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 48.54+i && song.currentTime() <= 48.64+i) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 49.04+i && song.currentTime() <= 49.14+i) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 48.84+i && song.currentTime() < 49.04+i) ||
      (song.currentTime() > 49.14+i && song.currentTime() <= 49.34+i)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


    if (song.currentTime() >= 48.80+i && song.currentTime() <= 48.90+i) {
      ftoken = true;
    }
    if (keyIsPressed == true && key == "f") {
      if (song.currentTime() >= 49.30+i && song.currentTime() <= 49.40+i) {
        greatscore();
        greattoken = true;
        fcolor = great;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 49.10+i && song.currentTime() < 49.30+i) ||
        (song.currentTime() > 49.40+i && song.currentTime() <= 49.60+i)) {
        goodscore();
        trusttoken = true;
        fcolor = good;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 48.89+i && song.currentTime() <= 48.99+i) {
      jtoken = true;
    }
    if (keyIsPressed == true && key == "j") {
      if (song.currentTime() >= 49.39+i && song.currentTime() <= 49.49+i) {
        greatscore();
        greattoken = true;
        jcolor = great;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 49.19+i && song.currentTime() < 49.39+i) ||
        (song.currentTime() > 49.49+i && song.currentTime() <= 49.69+i)) {
        goodscore();
        trusttoken = true;
        jcolor = good;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      }
    }
}




for(let i = 0; i<1.96; i+=1.96*2){
  if (song.currentTime() >= 49.42+i && song.currentTime() <= 49.52+i) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 49.92+i && song.currentTime() <= 50.02+i) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 49.72+i && song.currentTime() < 49.92+i) ||
      (song.currentTime() > 50.02+i && song.currentTime() <= 50.22+i)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 49.79+i && song.currentTime() <= 49.89+i) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 50.29+i && song.currentTime() <= 50.39+i) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 50.09+i && song.currentTime() < 50.29+i) ||
      (song.currentTime() > 50.39+i && song.currentTime() <= 50.59+i)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 50.27+i && song.currentTime() <= 50.37+i) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 50.77+i && song.currentTime() <= 50.87+i) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 50.57+i && song.currentTime() < 50.77+i) ||
      (song.currentTime() > 50.87+i && song.currentTime() <=51.07+i)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }



  if (song.currentTime() >= 50.52+i && song.currentTime() <= 50.62+i) {
    dtoken = true;
  }
  if (keyIsPressed == true && key == "d") {
    if (song.currentTime() >= 51.02+i && song.currentTime() <= 51.12+i) {
      greatscore();
      greattoken = true;
      dcolor = great;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    } else if ((song.currentTime() >=50.82+i && song.currentTime() < 51.02+i) ||
      (song.currentTime() > 51.12+i && song.currentTime() <=51.32+i)) {
      goodscore();
      trusttoken = true;
      dcolor = good;
      setTimeout(function() {
        dcolor = normal;
      }, 500);
    }
  }


    if (song.currentTime() >= 50.76+i && song.currentTime() <= 50.86+i) {
      jtoken = true;
    }
    if (keyIsPressed == true && key == "j") {
      if (song.currentTime() >= 51.26+i && song.currentTime() <=51.36+i) {
        greatscore();
        greattoken = true;
        jcolor = great;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 51.06+i && song.currentTime() < 51.26+i) ||
        (song.currentTime() > 51.36+i && song.currentTime() <= 51.56+i)) {
        goodscore();
        trusttoken = true;
        jcolor = good;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 50.84+i && song.currentTime() <= 50.94+i) {
      ftoken = true;
    }
    if (keyIsPressed == true && key == "f") {
      if (song.currentTime() >= 51.34+i && song.currentTime() <=51.44+i) {
        greatscore();
        greattoken = true;
        fcolor = great;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 51.14+i && song.currentTime() < 51.34+i) ||
        (song.currentTime() > 51.44+i && song.currentTime() <= 51.64+i)) {
        goodscore();
        trusttoken = true;
        fcolor = good;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      }
    }
}









  if (song.currentTime() >= 52.98 && song.currentTime() <= 53.08) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 53.48 && song.currentTime() <= 53.58) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 53.28 && song.currentTime() < 53.48) ||
      (song.currentTime() > 53.58 && song.currentTime() <= 53.78)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 53.34 && song.currentTime() <= 53.44) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >= 53.84 && song.currentTime() <= 53.94) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 53.64 && song.currentTime() < 53.84) ||
      (song.currentTime() >53.94 && song.currentTime() <= 54.14)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >=53.72 && song.currentTime() <= 53.82) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 54.22 && song.currentTime() <= 54.32) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >=54.02 && song.currentTime() < 54.22) ||
      (song.currentTime() > 54.32 && song.currentTime() <= 54.52)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 54.21 && song.currentTime() <= 54.31) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 54.71 && song.currentTime() <= 54.81) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 54.51 && song.currentTime() < 54.71) ||
      (song.currentTime() > 54.81 && song.currentTime() <= 55.01)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }




  if (song.currentTime() >= 54.45 && song.currentTime() <= 54.55) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >=54.95 && song.currentTime() <= 55.05) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 54.75 && song.currentTime() < 54.95) ||
      (song.currentTime() >55.05 && song.currentTime() <= 55.25)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }



if (song.currentTime() >= 54.70 && song.currentTime() <= 54.80) {
  dtoken = true;
}
if (keyIsPressed == true && key == "d") {
  if (song.currentTime() >= 55.20 && song.currentTime() <= 55.30) {
    greatscore();
    greattoken = true;
    dcolor = great;
    setTimeout(function() {
      dcolor = normal;
    }, 500);
  } else if ((song.currentTime() >= 55.00 && song.currentTime() <55.20) ||
    (song.currentTime() >55.30 && song.currentTime() <= 55.50)) {
    goodscore();
    trusttoken = true;
    dcolor = good;
    setTimeout(function() {
      dcolor = normal;
    }, 500);
  }
}







for (let i = 0; i<1.96*2; i+=(1.96/4)){
  if (song.currentTime() >= 54.95+i && song.currentTime() <= 55.05+i) {
    spacetoken = true;
  }
  if (keyIsPressed == true && key == "space") {
    if (song.currentTime() >= 55.45+i && song.currentTime() <= 55.55+i) {
      greatscore();
      greattoken = true;
      spacecolor = great;
      setTimeout(function() {
        spacecolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 55.25+i && song.currentTime() < 55.45+i) ||
      (song.currentTime() > 55.55+i && song.currentTime() <= 55.75+i)) {
      goodscore();
      trusttoken = true;
      spacecolor = good;
      setTimeout(function() {
        spacecolor = normal;
      }, 500);
    }
  }
}




for (let i = 0; i<1.96; i+=(1.96/8)){
  if (song.currentTime() >= 58.88+i && song.currentTime() <= 58.98+i) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 59.38+i && song.currentTime() <= 59.48+i) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 59.18+i && song.currentTime() < 59.38+i) ||
      (song.currentTime() > 59.48+i && song.currentTime() <= 59.68+i)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 59.13+i && song.currentTime() <= 59.23+i) {
    ftoken = true;
  }
  if (keyIsPressed == true && key == "f") {
    if (song.currentTime() >=59.63+i && song.currentTime() <= 59.73+i) {
      greatscore();
      greattoken = true;
      fcolor = great;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 59.43+i && song.currentTime() < 59.63+i) ||
      (song.currentTime() >59.73+i && song.currentTime() <= 59.93+i)) {
      goodscore();
      trusttoken = true;
      fcolor = good;
      setTimeout(function() {
        fcolor = normal;
      }, 500);
    }
  }
}








if (song.currentTime() >= 60.84 && song.currentTime() <= 60.94) {
  dtoken = true;
  ktoken = true;
  spacetoken = true;
}
if (keyIsPressed == true && key == "d") {
  if (song.currentTime() >= 61.34 && song.currentTime() <= 61.44) {
    greatscore();
    greattoken = true;
    dcolor = great;
    setTimeout(function() {
      dcolor = normal;
    }, 500);
  } else if ((song.currentTime() >= 61.14 && song.currentTime() <61.34) ||
    (song.currentTime() >61.44 && song.currentTime() <= 61.64)) {
    goodscore();
    trusttoken = true;
    dcolor = good;
    setTimeout(function() {
      dcolor = normal;
    }, 500);
  }
}
if (keyIsPressed == true && key == "k") {
  if (song.currentTime() >= 61.34 && song.currentTime() <= 61.44) {
    greatscore();
    greattoken = true;
    kcolor = great;
    setTimeout(function() {
      kcolor = normal;
    }, 500);
  } else if ((song.currentTime() >= 61.14 && song.currentTime() < 61.34) ||
    (song.currentTime() > 61.44 && song.currentTime() <=61.64)) {
    goodscore();
    trusttoken = true;
    kcolor = good;
    setTimeout(function() {
      kcolor = normal;
    }, 500);
  }
}
if (keyIsPressed == true && key == "space") {
  if (song.currentTime() >= 61.34 && song.currentTime() <= 61.44) {
    greatscore();
    greattoken = true;
    spacecolor = great;
    setTimeout(function() {
      spacecolor = normal;
    }, 500);
  } else if ((song.currentTime() >= 61.14 && song.currentTime() < 61.34) ||
    (song.currentTime() > 61.44 && song.currentTime() <= 61.64)) {
    goodscore();
    trusttoken = true;
    spacecolor = good;
    setTimeout(function() {
      spacecolor = normal;
    }, 500);
  }
}







  globalr = map(slidervalue, 0, 50, 10, 128);
  globalg = map(slidervalue, 0, 50, 10, 128);
  globalb = map(slidervalue, 0, 50, 10, 128);

  //light;
  ambientLight(globalr, globalg, globalb);
  directionalLight(globalr, globalg, globalb, 0, 0, -1);

  //light control
  if(dcolor==good || dcolor == great){
  spotLight(lightcolor, dpos, ddir, PI/83);
  }
  if(fcolor==good || fcolor == great){
  spotLight(lightcolor, fpos, fdir, PI/83);
  }
  if(spacecolor==good || spacecolor == great){
  spotLight(lightcolor, spacepos, spacedir, PI/83);
  }
  if(jcolor==good || jcolor == great){
  spotLight(lightcolor, jpos, jdir, PI/83);
  }
  if(kcolor==good || kcolor == great){
  spotLight(lightcolor, kpos, kdir, PI/83);
  }


  textSize(16);
  fill(255);
  text('kk\'s trust : ' + trust, -windowWidth / 2 + 10, -windowHeight / 2 + 20);

  //controller
  push();
  translate(-windowWidth / 2, windowHeight / 4, 0);
  fill(100, 100, 100);
  rect(0, 0, windowWidth, windowHeight / 4);
  fill(255, 0, 0);
  circle(50, windowHeight / 8 - 35, 61);
  circle(130, windowHeight / 8 - 10, 61);
  ellipse(255, windowHeight / 8 + 10, 183, 61);
  circle(380, windowHeight / 8 - 10, 61);
  circle(455, windowHeight / 8 - 35, 61);
  //s(drad);
  fill(dcolor);
  let scircle = circle(50, windowHeight / 8 - 35, drad);
  fill(fcolor);
  let dcircle = circle(130, windowHeight / 8 - 10, frad);
  fill(spacecolor);
  let space = ellipse(255, windowHeight / 8 + 10, spacex, spacey);
  fill(jcolor);
  let kcircle = circle(380, windowHeight / 8 - 10, jrad);
  fill(kcolor);
  let lcircle = circle(455, windowHeight / 8 - 35, krad);
  pop();


  //control
  if (keyIsDown(UP_ARROW)) {
    if (slidervalue < 50) {
      slidervalue += 1;
      startgame();
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (slidervalue > 0) {
      slidervalue -= 1;
    }
  }
  slider.value(slidervalue);


  //modeling KK slider
  push();
  scale(50);
  rotateX(PI);

  push();
  fill(0, 0, 0);
  rotateX(headrot);
  model(black);
  pop();

  fill(89, 61, 35);
  model(brown);

  fill(115, 99, 84);
  model(gray);

  fill(255, 255, 255);
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

  if (heaftoken == false) {
    if (headrot > radians(-3)) {
      headrot -= radians(0.1);
    } else {
      heaftoken = true;
    }
  } else if (heaftoken == true) {
    if (headrot < 0) {
      headrot += radians(0.1);
    } else {
      heaftoken = false;
    }
  }

  if (hanftoken == false) {
    if (handrot > radians(-10)) {
      handrot -= radians(0.2);
    } else {
      hanftoken = true;
    }
  } else if (hanftoken == true) {
    if (handrot < 0) {
      handrot += radians(0.2);
    } else {
      hanftoken = false;
    }
  }

  //model stage
  translate(0, 65, 0);
  fill(255, 255, 255);
  cylinder(300, 50, 12);
}
