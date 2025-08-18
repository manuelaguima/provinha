let resLivro = document.getElementById('resLivro')
let formCadastrarLivro = document.getElementById('formCadastrarLivro')

formCadastrarLivro.addEventListener('submit',(e)=>{
    e.preventDefault()

    let titulo = document.getElementById('titulo').value
    let quantidade = Number(document.getElementById('quantidade').value)
    let autor = document.getElementById('autor').value

    const dados = {
        titulo: titulo,
        quantidade: quantidade,
        autor: autor
    }
    resLivro.innerHTML = ''

    fetch('http://localhost:3000/livro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      })
      .then(resp => resp.json())
      .then(valores => {
        console.log(valores)
        resLivro.innerHTML += `Codigo do livro: ${valores.codLivro} <br> `
        resLivro.innerHTML += `Titulo do livro: ${valores.titulo} <br> `
        resLivro.innerHTML += `Quantidade de livro: ${valores.quantidade} <br> `
        resLivro.innerHTML += `Autor do livro: ${valores.autor} <br> `
      })
      .catch((err) => {
        console.error('Erro ao cadastrar livros', err)
      })
})