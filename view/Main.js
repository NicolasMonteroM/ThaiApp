

	
	var screen;
	var result="";
	var loginScreen;
	var registerScreen;
	var menu;
	var profile;
	var configuration;
	var mainload,regisload, perload,confload;

	function preload(){
		mainload = loadImage("../data/first.png");
		regisload = loadImage("../data/register.png");
		perload = loadImage("../data/perfil.png");
		confload = loadImage("../data/configuracion.png");
		menuload = loadImage("../data/menu.png");
	}


	function setup() {
        createCanvas(375,812);
		screen = 0;
		loginScreen = new LoginScreen ();
		registerScreen = new RegisterScreen ();
		menu = new Menu();
		profile = new Profile();
		configuration = new Configuration();

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
			profile.paint();
			break;

		case 2:
			image(regisload,0,0);
			registerScreen.paint();
			break;

		case 3:
				
			image(menload,0,0);
			menu.paint();
			break;

		case 4:

			image(confload,0,0);
			configuration.paint();
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

		
		loginScreen.enterSession();// finciona el iniciar sesión, lo manda al profile

		loginScreen.enterRegister(); // funciona el querer crear usuario

		profile.enterConfiguration(); // funciona el querer entrar a configuracion

		configuration.enterLogin();

		
		
		console.log(mouseX, mouseY);
		console.log(loginScreen.enterRegister());
	}

	function mouseMoved() {
		menu.focusBotton(mouseX,mouseY); // funciona el focus
		profile.focusBotton(mouseX,mouseY);
		
	}


