// Criando objeto
let palavras = [
    palavra01 = {
        nome: "HTML",
        categoria: "TECNOLOGIA"
    },
    
    palavra02 = {
        nome: "ORACLE",
        categoria: "EMPRESA"
    },
    
    palavra03 = {
        nome: "ALURA",
        categoria: "ESCOLA"
    },
    
    palavra04 = {
        nome: "PYTHON",
        categoria: "LINGUAGEM"
    },
    
    palavra05 = {
        nome: "JAVASCRIPT",
        categoria: "LINGUAGEM"
    }
]

let palavraSecretaCategoria;
let palavraSecretaSorteada;

let listaDinamica = [];

let tentativas = 6;

function criarPalavraSecreta(){
    // Sorteando um número para relacionar com a palavra e transformando em inteiro com parse
    let indexPalavra = parseInt(Math.random() * palavras.length);
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria

    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
    
    
}criarPalavraSecreta();

function montarPalvraNaTela(){
    let categoria = document.querySelector(".categoria");

    categoria.innerHTML = palavraSecretaCategoria;

    let palavraTela = document.querySelector(".palavra-secreta");

    // palavraTela.innerHTML = palavraSecretaSorteada;
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp" //&nbsp significa espaço vazio para o HTML, Não importa qual é o indice, sempre vai ser um espaço
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i]+ "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i]+ "</div>"
        }
    }

}montarPalvraNaTela();

function veridicaLetraEscolhida (letra) {
    if(tentativas > 0 ){
        mudarStyleLetra(`.tecla-${letra}`)
        comparaListas(letra)
    }

    
    
}
function mudarStyleLetra(tecla) {
    document.querySelector(tecla).style.background = "rgba(10, 56, 113, 1)"
    document.querySelector(tecla).style.color = "#ffffff"
    // alert(`tecla-${letra}`)
}

function comparaListas(letra) {
    let posicao = palavraSecretaSorteada.indexOf(letra)
    if (posicao < 0) {
        tentativas--
        // Troca imagem
        // verificar se ainda tem tentativas

    }
    
}