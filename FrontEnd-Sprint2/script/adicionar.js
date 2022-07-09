let adicionarProduto = document.querySelector('.adicionar__form-button')

adicionarProduto.addEventListener('click',adicionar)



function adicionar(){
    // Se chamar o form, conseguimos percorrer o DOM usando o name no input i.e adicionarForm.url
    let adicionarForm = document.querySelector('.adicionar__form');


    var form = obtemForm(adicionarForm)

    var montar =  montarHTML(form)


}
// Criando objeto
function obtemForm(adicionarForm) {
    var produto = {
        url: adicionarForm.url.value,
        categoria: adicionarForm.categoria.value,
        nome: adicionarForm.nome.value,
        preco: adicionarForm.preco.value,
        descricao: adicionarForm.descricao.value
    }
    return produto;
}
//inserindo informações no HTML
function montarHTML(elemento){
    let produtosGrid = document.querySelector('.produtos__grid-flex')
    //Parent element
    let criarProduto = document.createElement('div')
    criarProduto.classList.add('produtos__grid')
    //Child element
    let criarProduto_img = document.createElement('img')
    criarProduto_img.classList.add('produtos__imagem')
    criarProduto_img.setAttribute('src','./assets/img/diversos (6).png')

    let criarProduto_legenda = document.createElement('p')
    criarProduto_legenda.classList.add('produtos__legenda')

    let criarProduto_preco = document.createElement('p')
    criarProduto_preco.classList.add('produtos__preco')

    let criarProduto_link = document.createElement('a')
    criarProduto_link.setAttribute('href', 'item.html')
    criarProduto_link.classList.add('produtos__link-hidden')

    let criarProduto_link_texto = document.createElement('p')
    criarProduto_link_texto.classList.add('produtos__link')
    
    criarProduto_link.textContent = elemento.url 
    criarProduto_link_texto.textContent = "Ver produto" 
    criarProduto_legenda.textContent = elemento.nome 
    criarProduto_preco.textContent = elemento.preco 
    // criarProduto_img.textContent = url 
    // criarProduto_url.textContent = url 
    // criarProduto_url.textContent = url 

    criarProduto.appendChild(criarProduto_img)
    criarProduto.appendChild(criarProduto_legenda)
    criarProduto.appendChild(criarProduto_preco)
    criarProduto.appendChild(criarProduto_link)
    criarProduto_link.appendChild(criarProduto_link_texto)

    // Adicionando produto no GRID
    produtosGrid.appendChild(criarProduto)
}
