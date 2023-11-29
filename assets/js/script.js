$(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200 ) {  
          $('#scrollUp').css('right','5px'); 
      } else { 
          $('#scrollUp').removeAttr( 'style' ); 
      }
  });
});

$("input").intlTelInput({
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});

/*document.getElementById("email2").addEventListener("input", function() {
	var paragrapheErreur = document.getElementById("erreur");
 
	if (this.value != document.getElementById("email").value) {
		paragrapheErreur.innerHTML = "Les deux adresses email ne correspondent pas";
	} else {
		paragrapheErreur.innerHTML = "";
	}
});​

document.forms["inscription"].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;
 
	// Traitement cas par cas (input unique)
	if (inputs["email"].value != "primfx@p.com") {
		erreur = "Adresse email incorrecte";
	}
 
	// Traitement générique
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
			break;
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
});

document.getElementById("inscription").addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this.getElementsByTagName("input");
 
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
 
 
	var pseudo = document.getElementById("pseudo");
	var email = document.getElementById("email");
	var email2 = document.getElementById("email2");
	var mdp = document.getElementById("mdp");
  var str = document.getElementById("mdp").value; 
 
	if (!mdp.value) {
		erreur = "Veuillez renseigner un mot de passe";
	}
	if (!email.value) {
		erreur = "Veuillez renseigner un email";
	}
	if (!pseudo.value) {
		erreur = "Veuillez renseigner un pseudo";
	} 
	
});*/

/*if (str.match( /[0-9]/g) && 
                    str.match( /[A-Z]/g) && 
                    str.match(/[a-z]/g) && 
                    str.match( /[^a-zA-Z\d]/g) &&
                    str.length >= 10) {
                erreur = "<p style='color:green'>Mot de passe fort.</p>"; 
                     } else {
                erreur = "<p style='color:red'>Mot de passe faible.</p>"; 
        } 
	*/