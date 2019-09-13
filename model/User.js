
 class User {

	usuario= "";
	email= "";
	password= "";
	confirmedpassword= "";

	  constructor(usuario,email,password,confirmedpassword) {
		this.usuario = usuario;
		this.email = email;
		this.password = password;
		this.confirmedpassword = confirmedpassword;

	}
	
	  login( userName, userPassword) {
		if(userName===("123") && userPassword===("123")) {
			return true;
		} else {
	}
}

getUsuario() {
	return this.usuario;
}

 setUsuario( usuario) {
	this.usuario = usuario;
}

getEmail() {
	return this.email;
}

 setEmail( email) {
	this.email = email;
}

getPassword() {
	return this.password;
}

 setPassword( password) {
	this.password = password;
}

getConfirmedPassword() {
	return this.confirmedpassword;
}

 setConfirmedPassword( confirmedpassword) {
	this.confirmedpassword = confirmedpassword;
}

}
