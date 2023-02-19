function validateName () {
    var nombref = document.getElementById ('nombre');
    var nombrev = /^[A-Za-z\s]+$/;
    var nombre_e = document.getElementById ('Nombre_error')

    if (nombref.value == 0) {
        nombre_e.innerHTML = "Rellene este campo";
        nombref.classList.add ("invalid");
        nombref.classList.add ("error-icon");
        nombref.classList.remove ("valid");
        nombref.classList.remove ("success-icon");
        return false;
    }

    else if (nombrev.test(nombrev.value)) {
        nombref.classList.remove ("invalid");
        nombref.classList.remove ("error-icon");
        nombre_e.innerHTML ="";
        nombref.classList.add ("valid");
        nombref.classList.add ("success-icon");
        return true;
    }

    else {
        nombre_e.innerHTML = "Nombre inválido";
        errorName.classList.add ("invalid");
        errorName.classList.add ("error-icon");
        errorName.classList.remove ("valid");
        errorName.classList.remove ("success-icon");
        return false;
    }

}

function validateEmail(){
	var emailf = document.getElementById('email');
	var emailv =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var email_e = document.getElementById('email_error');

	if(emailf.value == 0){
		email_e.innerHTML = "Rellene este campo";
		emailf.classList.add("invalid");
		emailf.classList.add("error-icon");
        emailf.classList.remove ("valid");
        emailf.classList.remove ("success-icon");
		return false; 
	}

	else if(emailv.test(emailf.value) ){
		emailf.classList.remove("invalid");
		emailf.classList.remove("error-icon");
		email_e.innerHTML = "";
		emailf.classList.add("valid");
		emailf.classList.add("success-icon");
		return true; 
	}
    
	else {
		email_e.innerHTML = "Email inválido";
		emailf.classList.add("invalid");
		emailf.classList.add("error-icon");
        emailf.classList.remove ("valid");
        emailf.classList.remove ("success-icon");
		return false; 
	}
} 

function validatePassword () {
    var passwordf = document.getElementById ('contraseña');
    var passwordv = /^[\s\S]{8,15}$/;
    var password_e = document.getElementById ('contraseña_error');

    if (passwordf.value == 0) {
        password_.innerHTML = "Rellene este campo";
        passwordf.classList.add ("invalid");
        passwordf.classList.add ("error-icon");
        passwordf.classList.remove ("valid");
        passwordf.classList.remove ("success-icon");
        return false;
    }

    else if (passwordv.test(passwordf.value)) {
        passwordf.classList.remove ("invalid");
        passwordf.classList.remove ("error-icon");
        password_e.innerHTML = "";
        passwordf.classList.add ("valid");
        passwordf.classList.add ("success-icon");
        return true;
    }

    else {
        password_e.innerHTML = "Debe contener al menos 8 caracteres";
        passwordf.classList.add ("invalid");
        passwordf.classList.add ("error-icon");
        passwordf.classList.remove ("valid");
        passwordf.classList.remove ("success-icon");
	return false;
    }
}

function validateConfirm () {
    var passwordf = document.getElementById ('contraseña');
    var contraseñaf = document.getElementById ('contraseña2');
    var contraseña2_e = document.getElementById ('contraseña_error2');

    if (contraseñaf.value == 0) {
        contraseña2_e.innerHTML = "Rellene este campo";
        contraseñaf.classList.add ("invalid");
        contraseñaf.classList.add ("error-icon");
        contraseñaf.classList.remove ("valid");
        contraseñaf.classList.remove ("success-icon");
        return false;
    }

    else if (passwordf.value == contraseñaf.value) {
        contraseñaf.classList.remove ("invalid");
        contraseñaf.classList.remove ("error-icon");
        contraseña2_e.innerHTML = "";
        contraseñaf.classList.add ("valid");
        contraseñaf.classList.add ("success-icon");
        return true;
    }

    else {
        contraseña2_e.innerHTML = "Las contraseñas no coinciden";
        contraseñaf.classList.add ("invalid");
        contraseñaf.classList.add ("error-icon");
        contraseñaf.classList.remove ("valid");
        contraseñaf.classList.remove ("success-icon");
        return false;
    }
}

function borderButton(){
	var borderButton = document.getElementById('button');
	    borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	    borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}

borderButton()

function validateForm() {
    if (validateConfirm () && validatePassword () && validateEmail () && validateName ()) {
        alert ("La inscripción ha sido correcta");
        return true; 
    }
    
    else { 
        return false;
    }
    });