class Profile {

    arrayBotton = [];
    configurationButton = null;
    dualButton = [];


    constructor(){

        var incrementPosX = 0;
        var incrementPosY = 0;
        for (var i = 0; i < 3; i++) {
          {
				this.arrayBotton[i]  = new Botton(60+incrementPosX, 735,25,25,"alone");
			}
			incrementPosX+=115;
    }
    

    for (var i = 0; i < 2; i++) {
      {
    this.dualButton[i]  = new Botton(0, 233+incrementPosY,373,54,"alone");
  }
  incrementPosY+=54;
}

this.configurationButton = new Botton(318,148,25,25,"alone");

    }

    paint(){

        for (var i = 0; i < this.arrayBotton.length; i++) {
          this.arrayBotton[i].paint();
    }
    

    for (var i = 0; i < this.dualButton.length; i++) {
      this.dualButton[i].paint();
    }

    this.configurationButton.paint();
    
    console.log("esteban universo");
    }

    focusBotton(mouseX,mouseY) {
        for (var i = 0; i < this.arrayBotton.length; i++) {
			if (mouseX >= this.arrayBotton[i].getPosX() && mouseX <= this.arrayBotton[i].getPosX() + 25
					&& mouseY >= this.arrayBotton[i].getPosY() && mouseY <= this.arrayBotton[i].getPosY() + 25) {
				this.arrayBotton[i].setFocus(true);
			} else {
				this.arrayBotton[i].setFocus(false);
			}
    }

    }

      
    enterConfiguration(){
      
      if (((mouseX>=this.configurationButton.getPosX() && mouseX<=this.configurationButton.getPosX() + 327 &&
		 mouseY>= this.configurationButton.getPosY() && mouseY<this.configurationButton.getPosY()+44) ) && screen == 1){
			 screen = 4;
     }
     
    }

    mainBottons(){

      if (((mouseX>=this.arrayBotton[0].getPosX() && mouseX<=this.arrayBotton[0].getPosX() + 327 &&
      mouseY>= this.arrayBotton[0].getPosY() && mouseY<this.arrayBotton[0].getPosY()+44) ) && 
      (screen==1 || screen ==3 || screen== 5)){
        screen = 1;
      }

      if (((mouseX>=this.arrayBotton[1].getPosX() && mouseX<=this.arrayBotton[1].getPosX() + 327 &&
      mouseY>= this.arrayBotton[1].getPosY() && mouseY<this.arrayBotton[1].getPosY()+44) ) && 
      (screen==1 || screen ==3 || screen== 5)){
        screen = 3;
      }

      if (((mouseX>=this.arrayBotton[2].getPosX() && mouseX<=this.arrayBotton[2].getPosX() + 327 &&
      mouseY>= this.arrayBotton[2].getPosY() && mouseY<this.arrayBotton[2].getPosY()+44) ) && 
      (screen==1 || screen ==3 || screen== 5)){
        screen = 5;
      }

    }
    
}