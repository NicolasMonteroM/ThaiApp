class RegisterScreen {
	
	fullName = "";
	email = "";
	password = "";
	confirmedPassword = "";
	arrayInputs = [];

	constructor() {

	   var incrementPosY = 0;

	   for (var i = 0; i < 4; i++) {
		   if(i == i){
			   this.arrayInputs[i]  = new Input(200, 250+incrementPosY, "text");
		   }
		   incrementPosY+=50;
	   }
   }
   
   paint() {
	   for (var i = 0; i < this.arrayInputs.length; i++) {
		   this.arrayInputs[i].paint();
	   }
	   
	   fill(0);
	   rect(200,550,200,30);
	   fill(255);
	   text("Crear Usuario",200+50,550+15);

	   console.log(this.password===this.confirmedPassword);
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

}
