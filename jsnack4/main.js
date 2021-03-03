// In un array sono contenuti i nomi degli invitati alla
// festa del grande Gatsby, chiedi all’utente il suo
// nome e comunicagli se può partecipare o no alla festa.

// Creo array e chiedo il nome all'utente

var listaGatsby = ["Gatsby", "Carraway", "Buchanan", "Baker", "Wilson"]

var ospite = prompt("Qual è il tuo nome?")

// Creo ciclo for

var breakLoop = false;

for (var i = 0; i < listaGatsby.length; i++) {
  if (listaGatsby[i] == ospite) {
  breakLoop = true;
  }
}

// Creo condizione
if (breakLoop) {
  console.log("Benvenuto");
  document.getElementById('esito').innerHTML = "Mr. Gatsby è lieto di darti il benvenuto"
} else {
  console.log("Non puoi entrare");
  document.getElementById('esito').innerHTML = "Sarai mica Tom Buchanan sotto mentite spoglie? Vai via."
}
