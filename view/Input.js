
 class Input {

 
	

	 constructor (  posX, posY) {
        this.posX = posX;
        this.posY = posY;
        var focus = false;
		var text = "";
		this.text = text;
		this.focus = focus;
	}
	
	 paint() {
		if(this.focus) {
			stroke(255,0,0);
			
		}else {
			stroke(0);
		}
		fill(255);
		rect(this.posX,this.posY,200,30);
		
		
		noStroke();
		
	}
	
	 displayText() {
		fill(0);
		textSize(16);
		text(this.text,this.posX+10,this.posY+20);
	}
	
	 displayPassword() {
		var codeSecure = new String();
		for (var i = 0; i < this.text.length(); i++) {
			codeSecure += "*";
		}
		
		fill(0);
		textSize(16);
		text(codeSecure,this.posX+10,this.posY+20);
	}
	
	 getPosX() {
		return posX;
	}

	 setPosX( posX) {
		this.posX = posX;
	}

	 getPosY() {
		return posY;
	}

	 setPosY( posY) {
		this.posY = posY;
	}

	 isFocus() {
		return focus;
	}

	 setFocus( focus) {
		this.focus = focus;
	}

	 getText() {
		return text;
	}

	 setText( text) {
		this.text = text;
	}

}
