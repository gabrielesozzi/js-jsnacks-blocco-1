// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta,
// poi la parola più lunga.

// Chiedo le parole all'utente

var firstWord = prompt("Inserisci la prima parola");

var secondWord = prompt("Inserisci la seconda parola");

console.log(firstWord.length);
console.log(secondWord.length);

// Inserisco condizione

if (firstWord.length > secondWord.length) {
  console.log(secondWord, firstWord);
} else {
  console.log(firstWord, secondWord);
}
