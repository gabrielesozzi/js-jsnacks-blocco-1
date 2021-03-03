// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// Creo array vuoto

var emptyArray = [];

// Chiedo all'utente di inserire numero per sei volte

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  console.log(numero);
  if (numero %2 != 0) {
   emptyArray.push (numero)
   console.log(emptyArray);
  }
}
