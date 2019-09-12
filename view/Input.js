
 class Input {
	
	focus = false;
	text = "";
	type = null;
	

	 constructor (posX, posY, type, sizex, sizey) {
        this.posX = posX;
        this.posY = posY;
		this.type = type;
		this.sizex = sizex;
		this.sizey = sizey;
	}
	
	 paint() {
		if(this.focus) {
			stroke(255,0,0);
			
		}else {
			stroke(0);
		}

	
		noFill();
		rect(this.posX,this.posY,this.sizex,this.sizey);
		noStroke();


		if(this.type == "text"){	
			this.displayText();
		}
		if(this.type == "pass"){
			this.displayPassword();
		}
		
	}
	
	 displayText() {
		fill(0);
		textSize(20);
		text(this.text,this.posX+10,this.posY+20);
		noFill();
	}
	
	 displayPassword() {
		var codeSecure = new String();
		for (var i = 0; i < this.text.length; i++) {
			codeSecure += "*";
		}
		
		fill(0);
		textSize(16);
		text(codeSecure,this.posX+10,this.posY+20);
		noFill();
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

	 getText() {
		return this.text;
	}

	 setText(text) {
		this.text = text;
	}

}
