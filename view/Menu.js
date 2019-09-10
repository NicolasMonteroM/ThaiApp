class Menu {

    arrayBotton = [];


    constructor(){

        var incrementPosX = 0;

        for (var i = 0; i < 3; i++) {
			if(i == i){
				this.arrayBotton[i]  = new Botton(20+incrementPosX, 500);
			}
			incrementPosX+=175;
		}

    }

    paint(){

        for (var i = 0; i < this.arrayBotton.length; i++) {
            this.arrayBotton[i].paint();
            this.arrayBotton[0].text = "Perfil";
            this.arrayBotton[1].text = "Menu";
            this.arrayBotton[2].text = "Orden";
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