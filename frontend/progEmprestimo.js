// Referências aos elementos da página
let btnCadastrar = document.getElementById('btnCadastrar');
let resCadastrar = document.getElementById('resCadastrar');

let btnListar = document.getElementById('btnListar');
let resListar = document.getElementById('resListar');

let btnAtualizar = document.getElementById('btnAtualizar');
let resAtualizar = document.getElementById('resAtualizar');

let btnApagar = document.getElementById('btnApagar');
let resApagar = document.getElementById('resApagar');

// Cadastrar Empréstimo
btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();

    let dataEmprestimo = document.getElementById('dataEmprestimo').value;
    let codAluno = Number(document.getElementById('codAluno').value);
    let codLivro = Number(document.getElementById('codLivro').value);

    const valores = {
        dataEmprestimo,
        codAluno,
        codLivro
    };

    fetch('http://localhost:3000/emprestimo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados);
        resCadastrar.innerHTML = `
            <hr>
            ID: ${dados.id} | Data: ${dados.dataEmprestimo} | Aluno: ${dados.codAluno} | Livro: ${dados.codLivro}<br>
            <hr>
        `;
    })
    .catch((err) => {
        console.error('Erro ao cadastrar empréstimo', err);
    });
});

// Listar Empréstimos
btnListar.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/emprestimo')
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados);

        resListar.innerHTML = '<hr>';

        dados.forEach(dad => {
            resListar.innerHTML += `
                ID: ${dad.id} | Data: ${dad.dataEmprestimo} | Aluno: ${dad.codAluno} | Livro: ${dad.codLivro}<br>
                <hr>
            `;
        });
    })
    .catch((err) => {
        console.error('Erro ao listar empréstimos', err);
    });
});

// Atualizar Empréstimo
btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault();

    let id = Number(document.getElementById('idEmprestimoAtualizar').value);
    let novaData = document.getElementById('dataEmprestimoAtualizar').value;
    let novoCodAluno = Number(document.getElementById('codAlunoAtualizar').value);
    let novoCodLivro = Number(document.getElementById('codLivroAtualizar').value);

    const valores = {
        dataEmprestimo: novaData,
        codAluno: novoCodAluno,
        codLivro: novoCodLivro
    };

    fetch(`http://localhost:3000/emprestimo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados);
        resAtualizar.innerHTML = `
            <hr>
            Empréstimo atualizado: ID ${dados.id} | Data: ${dados.dataEmprestimo} | Aluno: ${dados.codAluno} | Livro: ${dados.codLivro}<br>
            <hr>
        `;
    })
    .catch((err) => {
        console.error('Erro ao atualizar empréstimo', err);
    });
});

// Apagar Empréstimo
btnApagar.addEventListener('click', (e) => {
    e.preventDefault();

    let id = Number(document.getElementById('idEmprestimoApagar').value);

    fetch(`http://localhost:3000/emprestimo/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => {
        if (resp.status === 204) {
            resApagar.innerHTML = 'Dados excluídos com sucesso!';
        } else if (resp.status === 404) {
            resApagar.innerHTML = '<p style="color:red;">Empréstimo não encontrado.</p>';
        } else {
            resApagar.innerHTML = `<p style="color:red;">Erro: ${resp.status}</p>`;
        }
    })
    .catch((err) => {
        console.error('Erro na recepção de dados', err);
    });
});
