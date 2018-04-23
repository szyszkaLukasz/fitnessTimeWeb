function sprawdzPole(pole_id,obiektRegex) {

 var obiektPole = document.getElementById(pole_id);
 if(!obiektRegex.test(obiektPole.value)) return (false);
 else return (true);
}

function oblicz() {

obiektWiek = /[0-9]/;
obiektWzrost = /[0-9]/;
if (!sprawdzPole("wiek",obiektWiek))
{ ok=false;
 document.getElementById("wiek_error").innerHTML="Wpisz poprawnie wiek!";
}
else document.getElementById("wiek_error").innerHTML="";
if (!sprawdzPole("wzrost",obiektWzrost))
{ ok=false;
 document.getElementById("wzrost_error").innerHTML="Wpisz poprawnie wzrost!";
}
else document.getElementById("wzrost_error").innerHTML="";
if (!sprawdzPole("waga",obiektWzrost))
{ ok=false;
 document.getElementById("waga_error").innerHTML="Wpisz poprawnie wagę!";
}
else document.getElementById("waga_error").innerHTML="";
if (!sprawdzPole("waist",obiektWzrost))
{ ok=false;
 document.getElementById("waist_error").innerHTML="Wpisz poprawnie obwód!";
}
else document.getElementById("waist_error").innerHTML="";
if (!sprawdzPole("loins",obiektWzrost))
{ ok=false;
 document.getElementById("loins_error").innerHTML="Wpisz poprawnie obwód!";
}
else document.getElementById("loins_error").innerHTML="";





    var talia = parseInt(document.getElementById('waist').value);
    var biodra = parseInt(document.getElementById('loins').value);
    var whr = document.getElementById('whr');
    whr.value = talia / biodra;
    if (whr.value >= 0.8) {
        document.getElementsByTagName('div')[8].innerHTML = "Otyłość androidalna , twoja sylwetka jest typu: jabłko.";
	}
    else if(whr.value<0.8){
	
        document.getElementsByTagName('div')[8].innerHTML = "Otyłość androidalna , twoja sylwetka jest typu: gruszka.";
    }
	
	var waga = parseInt(document.getElementById('waga').value);
	var wzrost = parseInt(document.getElementById('wzrost').value);
	var bmi = document.getElementById('bmi');
	bmi.value = (waga/(wzrost*wzrost))*(10000);
	if(bmi.value <18.5)
	{
		document.getElementsByTagName('div')[9].innerHTML = "Niedowaga";
	}
	else if (bmi.value>18.5 && bmi.value<25) {
		document.getElementsByTagName('div')[9].innerHTML = "Wartość prawidłowa";
	}
	else if (bmi.value>25) {
		document.getElementsByTagName('div')[9].innerHTML = "Nadwaga";
	}

	var nmc = document.getElementById('masa');
	nmc.value=wzrost-100-(wzrost-150)/4;

	localStorage.setItem('waga.value');
	
}



