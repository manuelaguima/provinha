let resFab = document.getElementById('resFab')
let cadastrarFab = document.getElementById('cadastrarFab')

let resAtualFab = document.getElementById('resAtualFab')
let atualizarFab = document.getElementById('atualizarFab')

let resApagarFab = document.getElementById('resApagarFab')
let apagarFab = document.getElementById('apagarFab')

let resFabList = document.getElementById('resFabList')
let listarFab = document.getElementById('listarFab')

cadastrarFab.addEventListener('click', (e)=>{
    e.preventDefault()

    let nome = document.getElementById('nome').value

    const valores = {
        nome: nome
    }

    fetch(`http://localhost:3000/fabricante`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        resFab.innerHTML = ``
        resFab.innerHTML += `<hr>`        
        resFab.innerHTML += `Código: ${dados.codFabricante}   ${dados.nome} <br>`
        resFab.innerHTML += `<hr>`        

    })
    .catch((err)=>{
        console.error('Erro na recepção de dados',err)
    })

})

atualizarFab.addEventListener('click', (e)=>{

    e.preventDefault()

    let codFabricante = Number(document.getElementById('codFabricante').value)
    let nomeAtual = document.getElementById('nomeAtual').value

    const valores = {
        nome: nomeAtual
    }

    fetch(`http://localhost:3000/fabricante/${codFabricante}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        resFab.innerHTML = ``
        resFab.innerHTML += `<hr>`        
        resFab.innerHTML += `Código: ${dados.codFabricante}   Nome: ${dados.nome} <br>`
        resFab.innerHTML += `<hr>`        

    })
    .catch((err)=>{
        console.error('Erro na recepção de dados',err)
    })

})

apagarFab.addEventListener('click', (e)=>{
    e.preventDefault()
    let codFab = Number(document.getElementById('codFab').value)

    fetch(`http://localhost:3000/fabricante/${codFab}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => {
        if (resp.status === 204) {
            resApagarFab.innerHTML = ``
            resApagarFab.innerHTML += `Dados Excluídos com sucesso!`
        }
    })
    .catch((err)=>{
        console.error('Erro na recepção de dados',err)
    })


})

listarFab.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch(`http://localhost:3000/fabricante`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)

        resFabList.innerHTML = ``
        resFabList.innerHTML += `<hr>`
        
        dados.forEach(dad => {
            resFabList.innerHTML += `Código: ${dad.codFabricante} | ${dad.nome} <br>`
            resFabList.innerHTML += `<hr>`
        })
        
    })
    .catch((err)=>{
        console.error('Erro na recepção de dados',err)
    })
})

