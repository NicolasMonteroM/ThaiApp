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

    }

    paint(){

        for (var i = 0; i < this.arrayBotton.length; i++) {
		}
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