//chiedi all'utente nome cognome colore per generare una psw

//chiedi nome
var nome = prompt("Come ti chiami?");

//chiedi cognome
var cognome = prompt("Qual è il tuo cognome?");

//chiedi colore
var color = prompt("Il tuo colore preferito?");
//genera psw
document.getElementById('psw').innerHTML = nome + cognome + color + "19";
