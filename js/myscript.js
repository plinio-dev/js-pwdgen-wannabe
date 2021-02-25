var nome = prompt("Come ti chiami?")
var cognome = prompt("Qual'è il tuo cognome?")
var colorepreferito = prompt ("Qual'è il tuo colore preferito?")
var messaggio = (nome + cognome + colorepreferito);

document.getElementById('risultato').innerhtml = "27" + messaggio;
