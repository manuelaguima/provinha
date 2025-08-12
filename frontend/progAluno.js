let resAluno = document.getElementById('resAluno')
let formCadastrarAluno = document.getElementById('formCadastrarAluno')

formCadastrarAluno.addEventListener('click', (e) => {
  e.preventDefault()

  let nome = document.getElementById('nome').value
  let matricula = Number(document.getElementById('matricula').value)
  let email = document.getElementById('email').value

  const dados = {
    nome: nome,
    matricula: matricula,
    email: email
  }
    resAluno.innerHTML = ''

  fetch('http://localhost:3000/aluno', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  .then(resp => resp.json())
  .then(valores => {
    console.log(valores)
    resAluno.innerHTML += `Aluno cadastrado com sucesso <br>`
    resAluno.innerHTML += `Nome: ${valores.nome}<br>`
    resAluno.innerHTML += `Matricula: ${valores.matricula}<br>`
    resAluno.innerHTML += `Email: ${valores.email}<br>`
  })
  .catch((err) => {
    console.error('Erro ao cadastrar aluno', err)
  })
})