class Menu {


    menusBotton = [];
    menusBotton2 = [];
    changesPlatos;

    constructor(){
      var incrementPosX = 0;
        var incrementPosX2 = 0;


    
    for (var i = 0; i < 2; i++) {
				this.menusBotton[i]  = new Botton(25+incrementPosX, 200,150,200,"just line");
			
			incrementPosX+=160;
    }
    
    for (var i = 0; i < 2; i++) {
				this.menusBotton2[i]  = new Botton(25+incrementPosX2, 432,150,200, "just line");

			incrementPosX2+=160;
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

  

    enterPlatos(){
      if( (mouseX>this.menusBotton[0].getPosX() & mouseX<this.menusBotton[0].getPosX()+150 & mouseY>this.menusBotton[0].getPosY() & mouseY<this.menusBotton[0].getPosY()+ 200 ) && screen==3 ) {
        this.changesPlatos=0;
        console.log("putos");
      }
      if( (mouseX>this.menusBotton[1].getPosX() & mouseX<this.menusBotton[1].getPosX()+150 & mouseY>this.menusBotton[1].getPosY() & mouseY<this.menusBotton[1].getPosY()+ 200 ) && screen==3 ) {
        this.changesPlatos=1;
      }
      if( (mouseX>this.menusBotton2[0].getPosX() & mouseX<this.menusBotton2[0].getPosX()+150 & mouseY>this.menusBotton2[0].getPosY() & mouseY<this.menusBotton2[0].getPosY()+ 200 ) && screen==3 ) {
        this.changesPlatos=2;
      }
      if( (mouseX>this.menusBotton2[1].getPosX() & mouseX<this.menusBotton2[1].getPosX()+150 & mouseY>this.menusBotton2[1].getPosY() & mouseY<this.menusBotton2[1].getPosY()+ 200 ) && screen==3 ) {
        this.changesPlatos=3;

        console.log("putos");
      }
      
    }

    getChangesPlatos(){
      return this.changesPlatos;
    }

    
    
}