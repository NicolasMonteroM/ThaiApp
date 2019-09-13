

	
	var screen;
	var result="";
	var loginScreen;
	var registerScreen;
	var menu;
	var profile;
	var configuration;
	var mainload,regisload, perload,confload,pedidload;
	var plaload = [4];

	function preload(){
		mainload = loadImage("../data/first.png");
		regisload = loadImage("../data/register.png");
		perload = loadImage("../data/perfil.png");
		confload = loadImage("../data/configuracion.png");
		menuload = loadImage("../data/menu.png");
		pedidload = loadImage("../data/sinPedido.png");
		plaload[0] = loadImage("../data/plato1.png");
		plaload[1] = loadImage("../data/plato2.png");
		plaload[2] = loadImage("../data/plato3.png");
		plaload[3] = loadImage("../data/plato4.png");
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
				
			image(menuload,0,0);
			menu.paint();
			break;

		case 4:

			image(confload,0,0);
			configuration.paint();
			break;

		case 5:
			image(pedidload,0,0)
			break;

		case 6:
			if(menu.getChangesPlatos()==0){
				image(plaload[0],0,0)
			}
			if(menu.getChangesPlatos()==1){
				image(plaload[1],0,0)
			}
			if(menu.getChangesPlatos()==2){
				image(plaload[2],0,0)
			}
			if(menu.getChangesPlatos()==3){
				image(plaload[3],0,0)
			}
			
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
		profile.mainBottons();

		configuration.enterLogin();
		configuration.volver();

		menu.enterPlatos();
		
		
		console.log(mouseX, mouseY);
		console.log(registerScreen.newUser());
		
	}

	function mouseMoved() {
		
		profile.focusBotton(mouseX,mouseY);
		
	}

	


