// Iniziamo a raccogliere i dati richiesti:
const nameUser = (prompt("Qual è il tuo nome?"));
console.log(nameUser, typeof nameUser);

const surnameUser = (prompt("Qual è il tuo cognome?"));
console.log(surnameUser, typeof surnameUser);

const colorUser = (prompt("Qual è il tuo colore preferito?"));
console.log(colorUser, typeof colorUser);

//Ora che abbiamo tutti i dati andiamo a metterli tutti nella stessa stringa
const passwordUser = nameUser + surnameUser + colorUser + "21";
console.log(passwordUser, typeof passwordUser);

const result = `La tua password personale e super sicura, generata grazie al tuo nome (${nameUser}), al tuo cognome (${surnameUser}) e al tuo colore preferito (${colorUser}) e\': ${passwordUser}`;
console.log(result);

//Infine andiamo a far vedere il risultato al nostro cliente
document.getElementById("message").innerHTML = result;