let resAluno = document.getElementById('resAluno')
let cadastrarAluno = document.getElementById('cadastrarAluno')

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
    resFab.innerHTML += `Código: ${dados.codAluno}   ${dados.nome} <br>`
    resFab.innerHTML += `<hr>`        

})
.catch((err)=>{
    console.error('Erro na recepção de dados',err)
})


