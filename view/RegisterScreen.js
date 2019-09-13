class RegisterScreen {
	
	 fullName = "";
	 email = "";
	 password = "";
	 confirmedPassword = "";
	 arrayInputs = [];
	 createUser = null;
	 arrayUsers = [];

	 constructor() {
 
		var incrementPosY = 0;

		for (var i = 0; i < 4; i++) {
			if(i == i){
				this.arrayInputs[i]  = new Input(27, 320+incrementPosY, "text",327,44);
			}
			incrementPosY+=95;
		}

		this.createUser = new Botton(28,685,327,44,"alone");
		this.arrayUsers = new User();
	}
	
	paint() {
		for (var i = 0; i < this.arrayInputs.length; i++) {
			this.arrayInputs[i].paint();
		}

		this.createUser.paint();
		

		
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
			if (this.arrayInputs[i].isFocus()) {
				this.arrayInputs[i].setText(this.arrayInputs[i].getText() + key);
			}
		}

		this.fullName= this.arrayInputs[0].getText();
		this.email= this.arrayInputs[1].getText();
		this.password= this.arrayInputs[2].getText();
		this.confirmedPassword= this.arrayInputs[3].getText();   
		
		this.confirmedP(this.password,this.confirmedPassword);
		
	}

	 eraseTextInput() {
		
		for (var i = 0; i < this.arrayInputs.length; i++) {
			if (this.arrayInputs[i].isFocus() ) {
				var indice = this.arrayInputs[i].getText().length - 1;
				this.arrayInputs[i].setText(this.arrayInputs[i].getText().substring(0, indice));

			}
		}
		
	}
	
	 confirmedP(password,confirmedPassword ) {
		if(password===confirmedPassword) {
			return true;
		} else {
		return false;}	
		
	}

	newUser() {
		if( (mouseX>this.createUser.getPosX() & mouseX<this.createUser.getPosX()+327 & mouseY>this.createUser.getPosY() & mouseY<this.createUser.getPosY()+ 44 ) && this.confirmedP(this.password,this.confirmedPassword)==true ) {
			screen=1;
		}
		
		
	}

	saveUsers(){
		for(var i = 0; i < this.arrayUsers.length; i++){
			this.arrayUsers[i].getArrayUsers = this.arrayInputs[i];
		}
	}

	getArrayUsers() {
		return this.arrayUsers;
	}

	 setText(arrayUsers) {
		this.arrayUsers = arrayUsers;
	}

}
