

	
	var screen;
	var result="";
	var loginScreen;
	var registerScreen;
	var user;
	var menu;
	var mainload,regisload;

	function preload(){
		mainload = loadImage("../data/first.png");
		regisload = loadImage("../data/register.png");
	}


	function setup() {
        createCanvas(375,812);
		screen = 0;
		loginScreen = new LoginScreen ();
		registerScreen = new RegisterScreen ();
		user = new User();
		menu = new Menu();
	}

	function draw() {
		background(0);
		
		switch(screen) {
		case 0:
			image(mainload,0,0);
			loginScreen.paint();
			
			break;
		case 1:
			fill(0);
			text("puto juan",300,300);
			menu.paint();
			break;
		case 2:
			image(regisload,0,0);
			registerScreen.paint();
			
			break;
		case 3:
			
			break;
		}
		
	//console.log(loginScreen.userName);
	//console.log(loginScreen.userPassword);

	}
	
	function keyPressed() {

		if(keyCode != BACKSPACE) {	
				loginScreen.writeTextInput(key);
		}else {
			loginScreen.eraseTextInput();
		}
		
		if(keyCode!=BACKSPACE) {
			registerScreen.writeTextInput(key);
		}else {
			registerScreen.eraseTextInput();
		}
	}
	
	function mouseClicked() {
		loginScreen.focusInputs(mouseX, mouseY); // funciona el focus
		registerScreen.focusInputs(mouseX, mouseY); //funciona el focus

		if(((mouseX>200 & mouseX<400 & mouseY>350 & mouseY<380) & user.login(loginScreen.userName,loginScreen.userPassword)) || (mouseX>200 & mouseX<400 & mouseY>550 & mouseY<580 & registerScreen.confirmedP(registerScreen.password,registerScreen.confirmedPassword) & screen==2) ) {
			screen=1;
		} // finciona el iniciar sesión

		if((mouseX>200 & mouseX<400 & mouseY>550 & mouseY<580) ) {
			screen=2;
		} // funciona el querer crear usuario
		
		console.log(mouseX, mouseY);
	}

	function mouseMoved() {
		menu.focusBotton(mouseX,mouseY);
	}


