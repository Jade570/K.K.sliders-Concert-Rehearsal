function startgame() {
  if (starttoken == false && slidervalue == 50){
      song.play();
      starttoken = true;
  }
}


function d(){
  if (dtoken == true){
    if(drad<=60){
        drad+=2;
    }
    else{
      drad=0;
      dtoken = false;
    }
  }
}

function f(){
  if (ftoken == true){
  if(frad<=60){
      frad+=2;
  }
  else{
    frad=0;
    ftoken = false;
  }
}
}

function spaceellipse(){
  if(spacetoken == true){
  if(spacey<=60){
      spacey+=2;
      spacex=map(spacey, 0,61,0,183);
  }
  else{
    setTimeout(function(){
      spacey=0;
      spacex=0;
      spacetoken = false;
    }, 50);
  }
}
}

function j(){
  if(jtoken == true){
    if(jrad<=60){
        jrad+=2;
    }
    else{
      jrad=0;
      jtoken = false;
    }
  }
}

function k(){
  if (ktoken == true){
    if(krad<=60){
        krad+=2;
    }
    else{
      krad=0;
      ktoken = false;
    }
  }
}

function greatscore(){
  if(trust == prevtrust && greattoken == true){
          trust+=300;
          setTimeout(function(){
            prevtrust=trust;
            greattoken = false;
          }, 100);
        }
      }

function goodscore(){
  if(trust == prevtrust && trusttoken == true){
      trust+=100;
      setTimeout(function(){
        prevtrust=trust;
        trusttoken = false;
      }, 600);
    }
}
