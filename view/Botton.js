class Botton{

    text = '';  
    focus = false; 

    constructor(posX, posY){
      
        this.posX = posX;
        this.posY = posY;
    
        
    }

    paint() {
        if (this.focus) {
            stroke(0);
            
        }else {
            noStroke();
        }
        fill(0,0,255);
        rect(this.posX,this.posY,165,50,40);
        fill(255);
        noStroke();
        

        //texto del botón
        textAlign(CENTER);
        text(this.text,this.posX+(165/2), this.posY+30);
    
       }
       getPosX() {
		return this.posX;
	}

	 setPosX( posX) {
		this.posX = posX;
	}

	 getPosY() {
		return this.posY;
	}

	 setPosY( posY) {
		this.posY = posY;
	}

	 isFocus() {
		return this.focus;
	}

	 setFocus( focus) {
		this.focus = focus;
	}



      // (mouseX >= this.posX && mouseX <= this.posX + 165) && (mouseY >= this.posY && mouseY <= this.posY + 50)
}