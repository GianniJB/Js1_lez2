/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// PROVA 1 con Array

// const numeri = [23, 34];

// Math.max(numeri);

// console.log(numeri);

///////////////////////////////////////////////////////////////////////
// PROVA 2 SENZA CREARE ARRAY

console.log("il numero più grande è", Math.max(23, 34));

//////////////////////////////////////////////////////////////////////
// PROVA 3

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num1 = 4;

if (num1 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num = 10; // Inserire il numero in questa variabile
let operat = num % 5;

if (operat === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 40;
let checkout;

if (totalShoppingCart <= 50) {
  checkout = totalShoppingCart + 10;
} else {
  checkout = totalShoppingCart;
}

console.log("Il totale è di €", checkout);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

//let precedentemente dichiarate
/*
num = 10
num1 = 4
totalShoppingCart = 40
*/

let first;
let second;
let third;

if (num > num1 && num > totalShoppingCart) {
  first = num;
} else if (num > num1 || num > totalShoppingCart) {
  second = num;
} else if (num < num1 && num < totalShoppingCart) {
  third = num;
}

if (num1 > num && num1 > totalShoppingCart) {
  first = num1;
} else if (num1 > num || num1 > totalShoppingCart) {
  second = num1;
} else if (num1 < num && num1 < totalShoppingCart) {
  third = num1;
}

if (totalShoppingCart > num && totalShoppingCart > num1) {
  first = totalShoppingCart;
} else if (totalShoppingCart > num || totalShoppingCart > num1) {
  second = totalShoppingCart;
} else if (totalShoppingCart < num && totalShoppingCart < num1) {
  third = totalShoppingCart;
}

console.log(first, second, third);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if (typeof num1 === "number") {
  console.log("Il valore è un numero");
} else {
  console.log("il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//let num1 = 4 (precedentemente dichiarato)

operat = num1 % 2;

if (num1 > 0) {
  console.log("il numero è pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/

// let val = 7

// if (val < 10) {
//   console.log("Meno di 10");
// } else if (val < 5) {
//   console.log("Meno di 5");
// } else (val >= 10) {
//   console.log("Uguale a 10 o maggiore");
// }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let listaNumeri = [];

listaNumeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(listaNumeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

listaNumeri[listaNumeri.length - 1] = 100;

console.log(listaNumeri);
