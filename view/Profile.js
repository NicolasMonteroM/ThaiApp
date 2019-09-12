class Profile {

    arrayBotton = [];
    configurationButton = null;
    dualButton = [];

    constructor(){

        var incrementPosX = 0;
        var incrementPosY = 0;
        for (var i = 0; i < 3; i++) {
          {
				this.arrayBotton[i]  = new Botton(60+incrementPosX, 735,25,25,"just line");
			}
			incrementPosX+=115;
    }
    

    for (var i = 0; i < 2; i++) {
      {
    this.dualButton[i]  = new Botton(0, 233+incrementPosY,373,54,"just line");
  }
  incrementPosY+=54;
}

    }

    paint(){

        for (var i = 0; i < this.arrayBotton.length; i++) {
          this.arrayBotton[i].paint();
    }
    

    for (var i = 0; i < this.dualButton.length; i++) {
      this.dualButton[i].paint();
    }
    
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
    
}