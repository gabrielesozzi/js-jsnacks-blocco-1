// Chiedi un numero di 4 cifre all’utente e calcola la
// somma di tutte le cifre che compongono il numero.


var numero = prompt("Inserisci un numero")
console.log(numero);

var somma = 0;

for (var i = 0; i < numero.length; i++) {
  var numeroParseInt = parseInt(numero[i]);
  if (!isNaN(numeroParseInt)) {
  somma += numeroParseInt;
  }
}

console.log(somma);
