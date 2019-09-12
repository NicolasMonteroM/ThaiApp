class Botton{

    text = '';  
    focus = false; 
    type = null;

    constructor(posX, posY, sizex, sizey, type){
      
        this.posX = posX;
        this.posY = posY;
        this.sizex = sizex;
        this.sizey = sizey;
        this.type = type;
    //xxxxxxxxx
        
    }

    paint() {
        if (this.focus) {
            stroke(0);
            
        }else {
            noStroke();
        }

        if(this.type == "alone"){	
			this.displayOption();
		}
		if(this.type == "normal"){
			this.displayButton();
        }
        if(this.type == "just line"){	
			this.displayLine();
		}
		
     
    
       }

       displayOption(){
           noFill();
           rect(this.posX,this.posY,this.sizex,this.sizey);
       }

       displayButton(){
        fill(0,0,255);
        rect(this.posX,this.posY,this.sizex,this.sizey);
        fill(255);
        noStroke();
        textSize(20);
        textAlign(CENTER);
        text(this.text,this.posX+(165/2), this.posY+30);
       }
       
       displayLine(){
           noFill();
           stroke(0);
           rect(this.posX,this.posY,this.sizex,this.sizey);
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

    getSizeX() {
		return this.sizex;
	}

	 setSizeX( sizex) {
		this.sizex = sizex;
	}

	 getSizeY() {
		return this.sizey;
	}

	 setSizeY( sizey) {
		this.sizey = sizey;
	}



      // (mouseX >= this.posX && mouseX <= this.posX + 165) && (mouseY >= this.posY && mouseY <= this.posY + 50)
}