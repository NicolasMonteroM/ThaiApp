

	
	var screen;
	var result="";
	var loginScreen;
	var registerScreen;
	var menu;
	var profile;
	var mainload,regisload, perload;

	function preload(){
		mainload = loadImage("../data/first.png");
		regisload = loadImage("../data/register.png");
		perload = loadImage("../data/perfil.png");
	}


	function setup() {
        createCanvas(375,812);
		screen = 1;
		loginScreen = new LoginScreen ();
		registerScreen = new RegisterScreen ();
		menu = new Menu();
		profile = new Profile();
	}

	function draw() {
		background(0);
		
		switch(screen) {
		case 0:
			image(mainload,0,0);
			loginScreen.paint();
			
			break;
		case 1:
			image(perload,0,0);
			text("puto juan",300,300);
			
			break;
		case 2:
			image(regisload,0,0);
			registerScreen.paint();
			
			break;
		case 3:
				menu.paint();
			
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

		if( (mouseX>200 & mouseX<400 & mouseY>550 & mouseY<580 & registerScreen.confirmedP(registerScreen.password,registerScreen.confirmedPassword) & screen==2) ) {
			screen=1;
		} 
		loginScreen.enterSession();// finciona el iniciar sesión, lo manda al profile

		loginScreen.enterRegister(); // funciona el querer crear usuario
		
		console.log(mouseX, mouseY);
		console.log(loginScreen.enterRegister());
	}

	function mouseMoved() {
		menu.focusBotton(mouseX,mouseY); // funciona el focus
	}


