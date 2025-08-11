const Aluno = require('./Aluno');
const Emprestimo = require('./Emprestimo');
const Livro = require('./Livro');

Aluno.hasMany(Emprestimo, {
  foreignKey: 'idAluno', 
  as: 'emprestimoAluno',
  onDelete: 'CASCADE' 
})


Emprestimo.belongsTo(Aluno, {
  foreignKey: 'idAluno',
  as: 'alunoEmprestimo',
 allowNull: false
})


Livro.hasMany(Emprestimo, {
  foreignKey: 'idLivro',
  as: 'emprestimoLivro',
  onDelete: 'CASCADE' 
})


Emprestimo.belongsTo(Livro, {
  foreignKey: 'idLivro',
  as: 'livroEmprestimo',
  allowNull: false
})

module.exports = { Livro, Aluno, Emprestimo }