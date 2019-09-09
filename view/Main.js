

	
	var screen;
	var result="";
	var loginScreen;
	var registerScreen;
	var user;
	

	function setup() {
        createCanvas(600,600);
		screen = 0;
		loginScreen = new LoginScreen ();
		registerScreen = new RegisterScreen ();
		user = new User();
	}

	function draw() {
		background(255);
		
		switch(screen) {
		case 0:
			loginScreen.paint();
			
			break;
		case 1:
			fill(0);
			text("puto juan",300,300);
			break;
		case 2:
			registerScreen.paint();
			
			break;
		case 3:
			
			break;
		}
		
	//	console.log(loginScreen.userName);
	//	console.log(loginScreen.userPassword);

		
	}
	
	function keyPressed() {
		if(key!=BACKSPACE) {
			loginScreen.writeTextInput(key);
		}else {
			loginScreen.eraseTextInput();
		}
		
		if(key!=BACKSPACE) {
			registerScreen.writeTextInput(key);
		}else {
			registerScreen.eraseTextInput();
		}
	}
	
	function mousePressed() {
		loginScreen.focusInputs(mouseX, mouseY);
		registerScreen.focusInputs(mouseX, mouseY);
		if((mouseX>200 & mouseX<400 & mouseY>350 & mouseY<380) & user.login(loginScreen.userName,loginScreen.userPassword)) {
			screen=1;
		}
		if((mouseX>200 & mouseX<400 & mouseY>550 & mouseY<580) ) {
			screen=2;
		}
		
		
	}


