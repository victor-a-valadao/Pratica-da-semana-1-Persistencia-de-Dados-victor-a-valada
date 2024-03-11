const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('escola.sqlite', (err) => {
  if(err) {
    return console.error(err.message);
  }
  console.log('Conectado ao banco de dados Escola com sucesso!')

  db.run("CREATE TABLE aluno(matricula int primary key, nome varchar(60), e_mail varchar(40), cidade varchar(60))");
});

db.run("INSERT INTO aluno(matricula, nome, e_mail, cidade) values (1234, 'José da Silva', 'jose@silva.com', 'Serra')");
db.run("INSERT INTO aluno(matricula, nome, e_mail, cidade) values (4254, 'Maria de Jesus', 'maria@jesus.com', 'Colatina')");
db.run("INSERT INTO aluno(matricula, nome, e_mail, cidade) values (6523, 'João Souza', 'joao@souza.com', 'Aracruz')");

db.each("select matricula, nome from aluno", (err, row) => {
  if(err) {
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
});