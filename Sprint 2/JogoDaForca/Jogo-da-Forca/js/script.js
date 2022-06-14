let palavrasSecreta = ['ALURA', 'ORACLE', 'JAVASCRIPT', 'PROGRAMAÇAO', 'INTERFACE'];
let tabuleiro = document.querySelector('#forca').getContext('2d');

let palavraSecreta = "";
let letrasErradas = [];
let letras = [];

let erros = 9;

let canvas = document.querySelector('canvas');
let btnDesistir = document.querySelector('.btn-desistir');
let btnNovo = document.querySelector('.btn-novo');

let letrasErradasDiv = document.querySelector('.letras-erradas');

btnNovo.addEventListener('click', novo)
btnDesistir.addEventListener('click', desistir)

function escolherPalavraSecreta () {
    let palavraSelecionada = palavrasSecreta[Math.floor(Math.random() * palavrasSecreta.length)]
    palavraSecreta = palavraSelecionada
    console.log(palavraSecreta);
    return palavraSelecionada

}escolherPalavraSecreta()

function escreverTracinhos () {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = '#0A3871'

    tabuleiro.beginPath();
    let eixo = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500+(eixo*i), 640)
        tabuleiro.lineTo(550+(eixo*i), 640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

escreverTracinhos(escolherPalavraSecreta())

function escreverLetraCorreta(index){
    tabuleiro.font = 'bold 52px Arial'
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = '#0A3871'


    let eixo = 600/palavraSecreta.length

    tabuleiro.fillText(palavraSecreta[index], 505+(eixo*index), 620)
    tabuleiro.stroke()

}

function escreverLetraIncorreta(letra, errosLeft){
    tabuleiro.font = 'bold 40px Arial'
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = '#0A3871';

    tabuleiro.fillText(letra, 535+(40*(10-errosLeft)),710,40)
}

function verificarLetraCorreta(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key);
        return false;
    }
    else {
        letras.push(key.toUpperCase());
        return true;
    }
}

function adicionarLetraCorreta(i){
    palavraSecreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(x){
    if(palavraSecreta.indexOf(x) <= 0){
        erros -= 1;
    }
}

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase()
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for(let i = 0; i < palavraSecreta.length; i++){
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i)
                }
            }
        }
    }else{

    }
}

function novo() {
    alert('Você clicou em novo')
}

function desistir () {
    alert('Você clicou em desistir')
}