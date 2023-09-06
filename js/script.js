/*
1. creo la variabile nome;
2. creo la variabile cognome;
3. creo la variabile colore;
4. creo un risultato;
5. stampo sulla pagina l'output;
*/


const name = prompt("Inserisci il tuo nome");
const nametrim = name.trim();
const surname = prompt("Inserisci il tuo cognome");
const color = prompt("Dimmi il tuo colore preferito");


const passwordResult = nametrim + surname + color + "23";

document.getElementById('password').innerHTML =  passwordResult;