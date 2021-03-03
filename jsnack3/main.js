// Il software deve chiedere per 10 volte all’utente di
// inserire un numero. Il programma stampa la somma di
// tutti i numeri inseriti.


// Creso var somma uguale a zero

var somma = 0;

// Inserisco la var ciclo for

for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  console.log(numero);
  somma = somma + numero;
}

// Stampo somma su console

console.log(somma);
