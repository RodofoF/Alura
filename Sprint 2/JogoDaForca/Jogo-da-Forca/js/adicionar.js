// Botões Adicionar
let btnSalvar = document.querySelector('.btn-salvar')
let btnCancelar = document.querySelector('.btn-cancelar')
let inputBox = document.querySelector('.input-box')

btnSalvar.addEventListener('click', salvar);
btnCancelar.addEventListener('click', cancelar);

var palavraChave = ["ORACLE", "ALURA"] 

export function salvar () {
    // console.log(inputBox.value);
    palavraAdd = (inputBox.value).toUpperCase();
    palavraChave.push(palavraAdd);
    console.log(palavraChave);

}

function cancelar () {
    window.location.href = "index2.html";
}