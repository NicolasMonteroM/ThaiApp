
 class LoginScreen {

	userName = "";
	userPassword = "";
	arrayInputs = [];
	user = new User();
	bottonStartSession = new Botton(25,606,327,44,"just line");
	bottonRegister  = new Botton(212,730,60,13,"alone") ;

	 constructor() {

		var incrementPosY = 0;

		for (var i = 0; i < 2; i++) {
			if(i == 0){
				this.arrayInputs[i]  = new Input(25, 442+incrementPosY, "text",327,44);
			}
			if(i == 1){
				this.arrayInputs[i]  = new Input(25, 442+incrementPosY, "pass",327,44);
			}
			incrementPosY+=62;
		}
	}
	
	
	

	 paint( ) { //fin
		
		this.bottonStartSession.paint();
		
		this.bottonRegister.paint();

	//	console.log(	this.bottonRegister = new Botton(212,730,60,13,"alone"));
		
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

	enterRegister() {
		
		if(mouseX >= this.bottonRegister.getPosX() && mouseX <= this.bottonRegister.getPosX() + 60 
		     && mouseY >= this.bottonRegister.getPosY() && mouseY <= this.bottonRegister.getPosY() + 13 ){
				 screen = 2;
				 console.log("sistemas");
		}
	}

	enterSession() {

		if (((mouseX>=this.bottonStartSession.getPosX() && mouseX<=this.bottonStartSession.getPosX() + 327 &&
		 mouseY>= this.bottonStartSession.getPosY() && mouseY<this.bottonStartSession.getPosY()+44) && this.user.login(this.userName,this.userPassword))){
			 screen = 1;
		 }
	}


	

}
