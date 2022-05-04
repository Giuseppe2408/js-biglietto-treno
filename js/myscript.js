const prezzokm = 0.21;

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
    // sconto minorenni constante 20%
    const scontominorenni = ((calcoloprezzo * 20) / 100); 
    const virgola = Math.round(scontominorenni).toFixed(2);
    document.getElementById("id_percorso").innerHTML=`Complimenti hai ricevuto uno sconto del 20% il prezzo attuale è: ${calcoloprezzo - scontominorenni}€`;}
// se l'utente è over 65 sconto 40%
    else if (eta > 65) {
    // sconto anziani constante 40%
        const scontoanziani = ((calcoloprezzo * 40) / 100); 
        document.getElementById("id_percorso").innerHTML=`Complimenti hai ricevuto uno sconto del 40% il prezzo attuale è: ${calcoloprezzo - scontoanziani}€`
    }
// altimenti prezzo normale
else {
    document.getElementById("id_percorso").innerHTML=` il prezzo attuale è: ${calcoloprezzo}€`
}