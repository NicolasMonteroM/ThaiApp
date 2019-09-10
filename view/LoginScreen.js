
 class LoginScreen {

	userName = "";
	userPassword = "";
	arrayInputs = [];


	 constructor() {

		var incrementPosY = 0;

		for (var i = 0; i < 2; i++) {
			if(i == 0){
				this.arrayInputs[i]  = new Input(200, 250+incrementPosY, "text");
			}
			if(i == 1){
				this.arrayInputs[i]  = new Input(200, 250+incrementPosY, "pass");
			}
			incrementPosY+=50;
		}
	}
	
	
	

	 paint( ) { //fin
		
		fill(0);
		rect(200,350,200,30);
		fill(255);
		text("Iniciar Sesion",200+50,350+15);
		
		fill(0);
		rect(200,550,200,30);
		fill(255);
		text("Crear Usuario",200+50,550+15);

		
		for (var i = 0; i < this.arrayInputs.length; i++) {
			this.arrayInputs[i].paint();
		}
	}

	 focusInputs(mouseX,  mouseY) {//nice
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (mouseX >= this.arrayInputs[i].getPosX() && mouseX <= this.arrayInputs[i].getPosX() + 200
					&& mouseY >= this.arrayInputs[i].getPosY() && mouseY <= this.arrayInputs[i].getPosY() + 30) {
				this.arrayInputs[i].setFocus(true);
			} else {
				this.arrayInputs[i].setFocus(false);
			}
		}
	}

	 writeTextInput(key) { //NICE
		 console.log("Holiwis");
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (this.arrayInputs[i].isFocus()) {
				this.arrayInputs[i].setText(this.arrayInputs[i].getText() + key);
			}
		}

		this.userName = this.arrayInputs[0].getText();
		this.userPassword = this.arrayInputs[1].getText();
		
	}

	eraseTextInput() {
		console.log("Putos");
		
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (this.arrayInputs[i].isFocus() ) {
				var indice = this.arrayInputs[i].getText().length - 1;
				this.arrayInputs[i].setText(this.arrayInputs[i].getText().substring(0, indice));
				console.log(indice);
			}
		}
		
	}


	

}
