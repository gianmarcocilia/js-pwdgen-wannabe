// Raccolta dati
const nome = prompt("Scrivi il tuo Nome:");
console.log(nome);
const cognome = prompt("Scrivi il tuo Cognome:");
console.log(cognome);
const colore = prompt("Scrivi il tuo colore preferito:");
console.log(colore);

// Logica del Programma
const password = nome + cognome + colore + 21;
console.log(password);
const message = `La tua Password (insicurissima) generata è: ${password}`;

// Output
document.getElementById("result").innerHTML = message;

