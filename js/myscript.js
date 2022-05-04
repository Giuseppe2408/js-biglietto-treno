const prezzokm = 0.21;
// sconto minorenni constante 20%
const scontominorenni = 20; 
// sconto anziani constante 40%
const scontoanziani = 40;
// calcolo totale prezzo - sconto


// chiedere quanti km vuole fare il passeggero
const percorso = prompt("quanti km devi viaggiare?");
console.log(percorso);
// chiedere età passeggero
const eta = prompt("quanti anni hai?");
console.log(eta);
// calcolare prezzo biglietto passeggero ogni km costa 0.21 euro totale del prezzo
const calcoloprezzo = percorso * prezzokm;
console.log(calcoloprezzo)
// se l'utente è minorenne applicare sconto 20%
if (eta < 18) {
    const sconto1 = calcolaPerc(calcoloprezzo,scontominorenni);
    document.getElementById("id_percorso").innerHTML=`Complimenti hai ricevuto uno sconto del 20% il prezzo attuale è: ${calcoloprezzo - sconto1}`;

}    else if (eta > 65) {
        const sconto2 = calcolaPerc(calcoloprezzo,scontoanziani);
        document.getElementById("id_percorso").innerHTML=`Complimenti hai ricevuto uno sconto del 40% il prezzo attuale è: ${calcolaprezzo - sconto2}`
    }

// se l'utente è over 65 sconto 40%
// altimenti prezzo normale