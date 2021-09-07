/* 
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
 * Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * Creare un array di oggetti di studenti.
 * Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 * Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/ 


// Ogetto che descrive lo studente.
let studente = {
    nome : "Albert",
    cognome : "Einstein",
    eta : 76,
};


// Ciclo for-in che stampa info ogetto.
for ( let proprieta in studente){

    console.log(proprieta + ": ");              // il nome della proprietà
    console.log(studente[proprieta]);           // il valore corrispondente alla stessa proprietà in quell'oggetto
};


//Creare un array di ogetti studenti.
let classe = [
    {
        nome : "Niels",
        cognome : "Bohr",
        eta : 37,
    },

    {
        nome : "Luis",
        cognome : "De Broglie",
        eta : 37,
    },

    {
        nome : "Marie",
        cognome : "Curie",
        eta : 36,
    },
];


// Inserire il primo studente nella classe.
classe.push(studente);

let nuovoStudente = {
    nome : prompt("Inserisca il suo nome"),
    cognome : prompt("Inserisca il suo cognome"),
    eta : parseInt( prompt("Inserisca la sua età") ),
};
classe.push(nuovoStudente);


// Ciclare, stampando nome e cognome.
for ( let i = 0 ; i < classe.length ; i++){
    let studenti = classe[i];
    let nomeStudente = studenti['nome'];
    let cognomeStudente = studenti['cognome'];

    console.log(nomeStudente);
    console.log(cognomeStudente);
};