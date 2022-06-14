// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



let palavraChave = "e _ i _ a _ o _ u"
let palavraTeste = "Test"

for(i=0; i<palavraTeste.length; i++){
    console.log(palavraTeste[i])
    resultadoFinal = palavraTeste.replace(/e/gi, "enter")
    resultadoFinal = resultadoFinal.replace(/i/gi, "imes")
    resultadoFinal = resultadoFinal.replace(/a/gi, "ai")
    resultadoFinal = resultadoFinal.replace(/o/gi, "ober")
    resultadoFinal = resultadoFinal.replace(/u/gi, "ufat")     
}
console.log(resultadoFinal);





