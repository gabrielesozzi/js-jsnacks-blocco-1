// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

// Chiedo all'utente il numero N

var N = parseInt(prompt("Inserisci un numero"))

// Creo il ciclo per calcolare il cubo

for (var i = 0; i <= N; i++) {
  console.log(Math.pow(i, 3));
}
