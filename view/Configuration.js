class Configuration {

    closeSessionButton = null;
    returnButton = null;

    constructor(){

this.closeSessionButton = new Botton(129,313,120,13,"just line");
this.returnButton = new Botton(14,52,13,13,"just line");

    }

    paint(){

    this.closeSessionButton.paint();
    this.returnButton.paint();
    
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

      
    enterLogin(){
      
      if (((mouseX>=this.closeSessionButton.getPosX() && mouseX<=this.closeSessionButton.getPosX() + 120 &&
		 mouseY>= this.closeSessionButton.getPosY() && mouseY<this.closeSessionButton.getPosY()+13) ) && screen==4){
			 screen = 0;
     }
     
    }

    volver(){

        if (((mouseX>=this.returnButton.getPosX() && mouseX<=this.returnButton.getPosX() + 120 &&
        mouseY>= this.returnButton.getPosY() && mouseY<this.returnButton.getPosY()+13) ) && screen==4){
            screen = 1;
    }

    }
    
}