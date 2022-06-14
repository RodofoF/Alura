// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// let criptografar = document.querySelector('.criptografar');
// let descriptografar = document.querySelector('.descriptografar');
// let texto = document.querySelector('.texto');
// let resultadoTexto = document.querySelector(".resultadoTexto");





// function calcular (){ 

//     resultadoFinal = (texto.value).replace(/e/gi, "enter")
//     resultadoFinal = resultadoFinal.replace(/i/gi, "imes")
//     resultadoFinal = resultadoFinal.replace(/a/gi, "ai")
//     resultadoFinal = resultadoFinal.replace(/o/gi, "ober")
//     resultadoFinal = resultadoFinal.replace(/u/gi, "ufat")

//     resultadoTexto.innerHTML = resultadoFinal
    
// }

// function calcular2 (){
//     resultadoFinal = (texto.value).replace(/enter/gi, "e")
//     resultadoFinal = resultadoFinal.replace(/imes/gi, "i")
//     resultadoFinal = resultadoFinal.replace(/ai/gi, "a")
//     resultadoFinal = resultadoFinal.replace(/ober/gi, "o")
//     resultadoFinal = resultadoFinal.replace(/ufat/gi, "u")

//     resultadoTexto.innerHTML = resultadoFinal
// }


let criptografar = document.querySelector('.criptografar');
let descriptografar = document.querySelector('.descriptografar');
let campoTexto = document.querySelector('.texto');
let textoResultado = document.querySelector('.resultado');
let resultadoImagem1 = document.querySelector('.resultadoImagem1');
let resultadoImagem2 = document.querySelector('.resultadoImagem2');
let resultadoImagem3 = document.querySelector('.resultadoImagem3');
let resultadoImagem4 = document.querySelector('.resultadoImagem4');
let botaoCopiar = document.querySelector('.copiar');
let botaoCopiarTablet = document.querySelector('.copiarTablet')
let boxResultado = document.querySelector('.boxResultado');
let boxResultadoTablet = document.querySelector('.boxResultadoTablet');
let box3 = document.querySelector('.box3');


criptografar.addEventListener('click', calcular1)
descriptografar.addEventListener('click', calcular2)

botaoCopiar.addEventListener('click', copiar)

function calcular1() {
    let texto = campoTexto.value
    let resultadoTexto = document.createElement('p')
    resultadoTexto.classList.add('resultadoTexto')
    

    resultadoTexto.textContent = texto;
    

    resultadoImagem1.style.display ="none"
    resultadoImagem2.style.display ="none"
    resultadoImagem3.style.display ="none"
    resultadoImagem4.style.display ="none"
    botaoCopiar.style.display ="block"
    // botaoCopiarTablet.style.display = "block"

    box3.style.marginTop ="60px"


    boxResultado.appendChild(resultadoTexto);
    boxResultadoTablet.appendChild(resultadoTexto);
   
}

function calcular2() {
    alert("você clicou em descriptografar!")
}

// Esta pendente a função. Mais info no trello
function copiar() {
    let textoCopiadoTag = document.querySelector('.resultadoTexto')
    let textoCopiado = textoCopiadoTag.textContent;
    alert(textoCopiado)
    textoCopiadoTag.select();
    document.execCommand('copy')
    // textoCopiadoTag.setSelectionRange(0,99999) //Para mobile
    // navigator.clipboard.writeText(textoCopiado.value)
    // alert(`O texto copiado foi ${textoCopiadoTag.textContent}`)


}