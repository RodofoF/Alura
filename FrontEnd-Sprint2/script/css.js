let loginFormEmailInput = document.querySelector('.login__form-email-input')
let loginFormEmailLabel = document.querySelector('.login__form-email-label')

let loginFormSenhaInput = document.querySelector('.login__form-senha-input')
let loginFormSenhaLabel = document.querySelector('.login__form-senha-label')

loginFormEmailInput.addEventListener('click',desloca)
loginFormSenhaInput.addEventListener('click',desloca)

function desloca (elemento){
    elemento.style.paddingTop = "0px"
    return
}

desloca(loginFormEmailLabel)
desloca(loginFormSenhaLabel)



// loginFormEmailInput.addEventListener('click',deslocaLabelEmail)
// loginFormSenhaInput.addEventListener('click',deslocaLabelSenha)


// function deslocaLabelEmail(){
//     loginFormEmailLabel.style.paddingTop = "0px"
// }
// function deslocaLabelSenha() {
//     loginFormSenhaLabel.style.paddingTop = "0px"

// }