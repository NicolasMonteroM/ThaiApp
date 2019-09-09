
 class LoginScreen {



	 constructor() {
        
        var userName = "";
		var userPassword = "";
		this.userName = userName
        this.userPassword = userPassword
		var arrayInputs = new Input(this,this);
		var incrementPosY = 0;
		this.arrayInputs = arrayInputs;
		for (var i = 0; i < arrayInputs.length; i++) {
			arrayInputs[i]  = new Input(200, 250+incrementPosY);
			incrementPosY+=50;
		}
	}
	
	
	

	 paint( ) {
		for (var i = 0; i < this.arrayInputs.length; i++) {
			this.arrayInputs[i].paint();
			if(i != 1) {
				this.arrayInputs[0].displayText();
			} else {
				this.arrayInputs[1].displayPassword();
			}
		}
		

		rect(200,350,200,30);
		fill(255);
		text("Iniciar Sesion",200+50,350+15);
		
		fill(0);
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
		this.userName= this.arrayInputs[0].getText();
		this.userPassword= this.arrayInputs[1].getText();
		
	}

	eraseTextInput() {
		
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length()-1>=0) {
				var indice = this.arrayInputs[i].getText().length() - 1;
				this.arrayInputs[i].setText(this.arrayInputs[i].getText().substring(0, indice));
			}
		}
		
	}


	

}
