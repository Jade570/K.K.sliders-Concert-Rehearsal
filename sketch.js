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
}




function draw() {
  background(0);
  noStroke();


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













  if (song.currentTime() >= 17.67+1.96 && song.currentTime() <= 17.77+1.96) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.17+1.96 && song.currentTime() <= 18.27+1.96) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 17.97+1.96 && song.currentTime() < 18.17+1.96) ||
      (song.currentTime() > 18.27+1.96 && song.currentTime() <= 18.47+1.96)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.05+1.96 && song.currentTime() <= 18.15+1.96) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 18.55+1.96 && song.currentTime() <= 18.65+1.96) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.35+1.96 && song.currentTime() < 18.55+1.96) ||
      (song.currentTime() > 18.65+1.96 && song.currentTime() <= 18.85+1.96)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }


  if (song.currentTime() >= 18.41+1.96 && song.currentTime() <= 18.51+1.96) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 18.91+1.96 && song.currentTime() <= 19.01+1.96) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 18.71+1.96 && song.currentTime() < 18.91+1.96) ||
      (song.currentTime() > 19.01+1.96 && song.currentTime() <= 19.21+1.96)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 18.76+1.96 && song.currentTime() <= 18.86+1.96) {
    jtoken = true;
  }
  if (keyIsPressed == true && key == "j") {
    if (song.currentTime() >= 19.26+1.96 && song.currentTime() <= 19.36+1.96) {
      greatscore();
      greattoken = true;
      jcolor = great;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.06+1.96 && song.currentTime() < 19.26+1.96) ||
      (song.currentTime() > 19.36+1.96 && song.currentTime() <= 19.56+1.96)) {
      goodscore();
      trusttoken = true;
      jcolor = good;
      setTimeout(function() {
        jcolor = normal;
      }, 500);
    }
  }

  if (song.currentTime() >= 19.15+1.96 && song.currentTime() <= 19.25+1.96) {
    ktoken = true;
  }
  if (keyIsPressed == true && key == "k") {
    if (song.currentTime() >= 19.65+1.96 && song.currentTime() <= 19.75+1.96) {
      greatscore();
      greattoken = true;
      kcolor = great;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    } else if ((song.currentTime() >= 19.45+1.96 && song.currentTime() < 19.65+1.96) ||
      (song.currentTime() > 19.75+1.96 && song.currentTime() <= 19.95+1.96)) {
      goodscore();
      trusttoken = true;
      kcolor = good;
      setTimeout(function() {
        kcolor = normal;
      }, 500);
    }
  }



    if (song.currentTime() >= 17.67+3.92 && song.currentTime() <= 17.77+3.92) {
      ktoken = true;
    }
    if (keyIsPressed == true && key == "k") {
      if (song.currentTime() >= 18.17+3.92 && song.currentTime() <= 18.27+3.92) {
        greatscore();
        greattoken = true;
        kcolor = great;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 17.97+3.92 && song.currentTime() < 18.17+3.92) ||
        (song.currentTime() > 18.27+3.92 && song.currentTime() <= 18.47+3.92)) {
        goodscore();
        trusttoken = true;
        kcolor = good;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      }
    }

    if (song.currentTime() >= 18.05+3.92 && song.currentTime() <= 18.15+3.92) {
      jtoken = true;
    }
    if (keyIsPressed == true && key == "j") {
      if (song.currentTime() >= 18.55+3.92 && song.currentTime() <= 18.65+3.92) {
        greatscore();
        greattoken = true;
        jcolor = great;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 18.35+3.92 && song.currentTime() < 18.55+3.92) ||
        (song.currentTime() > 18.65+3.92 && song.currentTime() <= 18.85+3.92)) {
        goodscore();
        trusttoken = true;
        jcolor = good;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 18.41+3.92 && song.currentTime() <= 18.51+3.92) {
      dtoken = true;
    }
    if (keyIsPressed == true && key == "d") {
      if (song.currentTime() >= 18.91+3.92 && song.currentTime() <= 19.01+3.92) {
        greatscore();
        greattoken = true;
        dcolor = great;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 18.71+3.92 && song.currentTime() < 18.91+3.92) ||
        (song.currentTime() > 19.01+3.92 && song.currentTime() <= 19.21+3.92)) {
        goodscore();
        trusttoken = true;
        dcolor = good;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      }
    }

    if (song.currentTime() >= 18.76+3.92 && song.currentTime() <= 18.86+3.92) {
      ftoken = true;
    }
    if (keyIsPressed == true && key == "f") {
      if (song.currentTime() >= 19.26+3.92 && song.currentTime() <= 19.36+3.92) {
        greatscore();
        greattoken = true;
        fcolor = great;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 19.06+3.92 && song.currentTime() < 19.26+3.92) ||
        (song.currentTime() > 19.36+3.92 && song.currentTime() <= 19.56+3.92)) {
        goodscore();
        trusttoken = true;
        fcolor = good;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      }
    }

    if (song.currentTime() >= 19.15+3.92 && song.currentTime() <= 19.25+3.92) {
      dtoken = true;
    }
    if (keyIsPressed == true && key == "d") {
      if (song.currentTime() >= 19.65+3.92 && song.currentTime() <= 19.75+3.92) {
        greatscore();
        greattoken = true;
        dcolor = great;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 19.45+3.92 && song.currentTime() < 19.65+3.92) ||
        (song.currentTime() > 19.75+3.92 && song.currentTime() <= 19.95+3.92)) {
        goodscore();
        trusttoken = true;
        dcolor = good;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      }
    }















    if (song.currentTime() >= 15.7+9.8 && song.currentTime() <= 15.8+9.8) {
      dtoken = true;
    }
    if (keyIsPressed == true && key == "d") {
      if (song.currentTime() >= 16.2+9.8 && song.currentTime() <= 16.3+9.8) {
        greatscore();
        greattoken = true;
        dcolor = great;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 16.0+9.8 && song.currentTime() < 16.2+9.8) ||
        (song.currentTime() > 16.3+9.8 && song.currentTime() <= 16.5+9.8)) {
        goodscore();
        trusttoken = true;
        dcolor = good;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 16.1+9.8 && song.currentTime() <= 16.2+9.8) {
      ftoken = true;
    }
    if (keyIsPressed == true && key == "f") {
      if (song.currentTime() >= 16.6+9.8 && song.currentTime() <= 16.7+9.8) {
        greatscore();
        greattoken = true;
        fcolor = great;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 16.4+9.8 && song.currentTime() < 16.6+9.8) ||
        (song.currentTime() > 16.7+9.8 && song.currentTime() <= 16.9+9.8)) {
        goodscore();
        trusttoken = true;
        fcolor = good;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 16.43+9.8 && song.currentTime() <= 16.53+9.8) {
      dtoken = true;
    }
    if (keyIsPressed == true && key == "d") {
      if (song.currentTime() >= 16.93+9.8 && song.currentTime() <= 17.03+9.8) {
        greatscore();
        greattoken = true;
        dcolor = great;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 16.73+9.8 && song.currentTime() < 16.93+9.8) ||
        (song.currentTime() > 17.03+9.8 && song.currentTime() <= 17.23+9.8)) {
        goodscore();
        trusttoken = true;
        dcolor = good;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 16.8+9.8 && song.currentTime() <= 16.9+9.8) {
      ftoken = true;
    }
    if (keyIsPressed == true && key == "f") {
      if (song.currentTime() >= 17.3+9.8 && song.currentTime() <= 17.4+9.8) {
        greatscore();
        greattoken = true;
        fcolor = great;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 17.1+9.8 && song.currentTime() < 17.3+9.8) ||
        (song.currentTime() > 17.4+9.8 && song.currentTime() <= 17.6+9.8)) {
        goodscore();
        trusttoken = true;
        fcolor = good;
        setTimeout(function() {
          fcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 17.17+9.8 && song.currentTime() <= 17.27+9.8) {
      dtoken = true;
    }
    if (keyIsPressed == true && key == "d") {
      if (song.currentTime() >= 17.67+9.8 && song.currentTime() <= 17.77+9.8) {
        greatscore();
        greattoken = true;
        dcolor = great;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 17.47+9.8 && song.currentTime() < 17.67+9.8) ||
        (song.currentTime() > 17.77+9.8 && song.currentTime() <= 17.97+9.8)) {
        goodscore();
        trusttoken = true;
        dcolor = good;
        setTimeout(function() {
          dcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 17.67+5.88 && song.currentTime() <= 17.77+5.88) {
      ktoken = true;
    }
    if (keyIsPressed == true && key == "k") {
      if (song.currentTime() >= 18.17+5.88 && song.currentTime() <= 18.27+5.88) {
        greatscore();
        greattoken = true;
        kcolor = great;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 17.97+5.88 && song.currentTime() < 18.17+5.88) ||
        (song.currentTime() > 18.27+5.88 && song.currentTime() <= 18.47+5.88)) {
        goodscore();
        trusttoken = true;
        kcolor = good;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      }
    }

    if (song.currentTime() >= 18.05+5.88 && song.currentTime() <= 18.15+5.88) {
      jtoken = true;
    }
    if (keyIsPressed == true && key == "j") {
      if (song.currentTime() >= 18.55+5.88 && song.currentTime() <= 18.65+5.88) {
        greatscore();
        greattoken = true;
        jcolor = great;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 18.35+5.88 && song.currentTime() < 18.55+5.88) ||
        (song.currentTime() > 18.65+5.88 && song.currentTime() <= 18.85+5.88)) {
        goodscore();
        trusttoken = true;
        jcolor = good;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      }
    }


    if (song.currentTime() >= 18.41+5.88 && song.currentTime() <= 18.51+5.88) {
      ktoken = true;
    }
    if (keyIsPressed == true && key == "k") {
      if (song.currentTime() >= 18.91+5.88 && song.currentTime() <= 19.01+5.88) {
        greatscore();
        greattoken = true;
        kcolor = great;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 18.71+5.88 && song.currentTime() < 18.91+5.88) ||
        (song.currentTime() > 19.01+5.88 && song.currentTime() <= 19.21+5.88)) {
        goodscore();
        trusttoken = true;
        kcolor = good;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      }
    }

    if (song.currentTime() >= 18.76+5.88 && song.currentTime() <= 18.86+5.88) {
      jtoken = true;
    }
    if (keyIsPressed == true && key == "j") {
      if (song.currentTime() >= 19.26+5.88 && song.currentTime() <= 19.36+5.88) {
        greatscore();
        greattoken = true;
        jcolor = great;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 19.06+5.88 && song.currentTime() < 19.26+5.88) ||
        (song.currentTime() > 19.36+5.88 && song.currentTime() <= 19.56+5.88)) {
        goodscore();
        trusttoken = true;
        jcolor = good;
        setTimeout(function() {
          jcolor = normal;
        }, 500);
      }
    }

    if (song.currentTime() >= 19.15+5.88 && song.currentTime() <= 19.25+5.88) {
      ktoken = true;
    }
    if (keyIsPressed == true && key == "k") {
      if (song.currentTime() >= 19.65+5.88 && song.currentTime() <= 19.75+5.88) {
        greatscore();
        greattoken = true;
        kcolor = great;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      } else if ((song.currentTime() >= 19.45+5.88 && song.currentTime() < 19.65+5.88) ||
        (song.currentTime() > 19.75+5.88 && song.currentTime() <= 19.95+5.88)) {
        goodscore();
        trusttoken = true;
        kcolor = good;
        setTimeout(function() {
          kcolor = normal;
        }, 500);
      }
    }








  globalr = map(slidervalue, 0, 50, 10, 128);
  globalg = map(slidervalue, 0, 50, 10, 128);
  globalb = map(slidervalue, 0, 50, 10, 128);

  //light;
  ambientLight(globalr, globalg, globalb);
  directionalLight(globalr, globalg, globalb, 0, 0, -1);

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
