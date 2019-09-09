class RegisterScreen {
	
	 constructor() {
      
	var fullName = "";
	var email = "";
	var password = "";
	var confirmedPassword = "";
	this.fullName = fullName;
	this.email = email;
	this.password = password;
	this.confirmedPassword = confirmedPassword;
	var arrayInputs = new Input(this,this);
	this.arrayInputs = arrayInputs;
		var incrementPosY = 0;
		for (var i = 0; i < arrayInputs.length; i++) {
			arrayInputs[i]  = new Input(p, 200, 250+incrementPosY);
			incrementPosY+=50;
		}
	}
	
	paint() {
		for (var i = 0; i < this.arrayInputs.length; i++) {
			this.arrayInputs[i].paint();
			/*if(i != 1) {
				arrayInputs[0].displayText();
			} else {
				arrayInputs[1].displayPassword();
			}*/
			this.arrayInputs[i].displayText();
		}
		

		rect(200,550,200,30);
		fill(255);
		text("Crear Usuario",200+50,550+15);
	}

	 focusInputs( mouseX,  mouseY) {
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (mouseX >= this.arrayInputs[i].getPosX() && mouseX <= this.arrayInputs[i].getPosX() + 200
					&& mouseY >= this.arrayInputs[i].getPosY() && mouseY <= this.arrayInputs[i].getPosY() + 30) {
				this.arrayInputs[i].setFocus(true);
			} else {
				this.arrayInputs[i].setFocus(false);
			}
		}
	}

	  writeTextInput( key) {
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length()<18) {
				this.arrayInputs[i].setText(this.arrayInputs[i].getText() + key);
			}
		}
		this.fullName= arrayInputs[0].getText();
		this.email= arrayInputs[1].getText();
		this.password= arrayInputs[2].getText();
		this.confirmedPassword= arrayInputs[3].getText();   
		
	}

	 eraseTextInput() {
		
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length()-1>=0) {
				var indice = this.arrayInputs[i].getText().length() - 1;
				this.arrayInputs[i].setText(this.arrayInputs[i].getText().substring(0, indice));
			}
		}
		
	}
	
	 confirmedP( password, confirmedPassword) {
		if(password===("") && confirmedPassword===("")) {
			return true;
		} else {
		return false;}
		
		
		
	}
}
