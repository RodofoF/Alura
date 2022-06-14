let btnCriptografar = document.querySelector('.criptografar');
let btnDescriptografar = document.querySelector('.descriptografar');
let btnClipboard = document.querySelector('.clipboard2');

let inputBox = document.querySelector('.input-box')

let figuras = document.querySelector('.figuras')
let posicaoFiguras = document.querySelector('.posicao-figuras')

let textarea = document.querySelector('#textarea')





btnCriptografar.addEventListener('click', cripto)
btnDescriptografar.addEventListener('click', descript)
btnClipboard.addEventListener('click', clipboard)

function cripto () {
    // alert("Clicou em Criptografar");
    let texto = inputBox.value

    for(i=0; i<texto.length; i++){
        resultadoFinal = texto.replace(/e/gi, "enter")
        resultadoFinal = resultadoFinal.replace(/i/gi, "imes")
        resultadoFinal = resultadoFinal.replace(/a/gi, "ai")
        resultadoFinal = resultadoFinal.replace(/o/gi, "ober")
        resultadoFinal = resultadoFinal.replace(/u/gi, "ufat")     
    }

    let resultadoTexto = document.createElement('p')
    resultadoTexto.classList.add('resultadoTexto')
    
    resultadoTexto.textContent = resultadoFinal;


    //CSS
    posicaoFiguras.style.display = "none";
    btnClipboard.style.display= "block";

    //HTML
    figuras.appendChild(resultadoTexto);


}

function descript () {
    // alert("Você clicou em Descriptografar")
    let texto = inputBox.value


    for(i=0; i<texto.length; i++){
        resultadoFinal = texto.replace(/enter/gi, "e")
        resultadoFinal = resultadoFinal.replace(/imes/gi, "i")
        resultadoFinal = resultadoFinal.replace(/ai/gi, "a")
        resultadoFinal = resultadoFinal.replace(/ober/gi, "o")
        resultadoFinal = resultadoFinal.replace(/ufat/gi, "u")     
    }

    let resultadoTexto = document.createElement('p')
    resultadoTexto.classList.add('resultadoTexto')
    
    resultadoTexto.textContent = resultadoFinal;


    //CSS
    posicaoFiguras.style.display = "none";
    btnClipboard.style.display= "block";

    //HTML
    figuras.appendChild(resultadoTexto);

    // let resultadoTextoCopiar = document.querySelector('.resultadoTexto')
    // let textoCopia = resultadoTextoCopiar.textContent;
}

function clipboard(){
    let resultadoTextoCopiar = document.querySelector('.resultadoTexto')
    let textoCopia = resultadoTextoCopiar.textContent;
    console.log(textoCopia);
    textarea.value = textoCopia;
    // inputBox.appendChild(textoCopia);
    // inputBox.style.display = 'none';
}

function removerTags(html){
    const data = new DOMParser().parseFromString(html, 'text/html');
    return data.body.textContent || "";
 }