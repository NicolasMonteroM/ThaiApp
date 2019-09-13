class Menu {

    arrayBotton = [];
    menusBotton = [];
    menusBotton2 = [];

    constructor(){
        var incrementPosX2 = 0;


    
    for (var i = 0; i < 2; i++) {
				this.menusBotton[i]  = new Botton(25+incrementPosX2, 200,150,200,"just line");
			
			incrementPosX2+=25;
    }
    
    for (var i = 0; i < 2; i++) {
				this.menusBotton2[i]  = new Botton(25+incrementPosX2, 432,150,200, "just line");

			incrementPosX2+=25;
		}


    }

    paint(){

        for (var i = 0; i < this.menusBotton.length; i++) {
            this.menusBotton[i].paint();   
    }

    for (var i = 0; i < this.menusBotton2.length; i++) {
      this.menusBotton2[i].paint();   
}
    
    }

    focusBotton(mouseX,mouseY) {
        for (var i = 0; i < this.arrayBotton.length; i++) {
			if (mouseX >= this.arrayBotton[i].getPosX() && mouseX <= this.arrayBotton[i].getPosX() + 200
					&& mouseY >= this.arrayBotton[i].getPosY() && mouseY <= this.arrayBotton[i].getPosY() + 30) {
				this.arrayBotton[i].setFocus(true);
			} else {
				this.arrayBotton[i].setFocus(false);
			}
		}
    }
    
}