import { salvar } from "adicionar.js";

// Botões Jogar
let btnNovo = document.querySelector('.btn-novo');
let btnDesistir = document.querySelector('.btn-desistir')

btnNovo.addEventListener('click', novo);
btnDesistir.addEventListener('click', desistir);

function novo () {
    console.log("Você cliclou em novo");
    console.log(palavraChave);
}

function desistir () {
    window.location.href = "index2.html";;
}
