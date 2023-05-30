const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3080;

// Configurações do banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'Games'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

// Configuração do corpo da solicitação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota para receber o formulário
app.post('/formulario', (req, res) => {
  const { IDJOGADOR, NOME, CONSOLE, CATEGORIA, ESTILO} = req.body;

  const query = 'INSERT INTO tabela (IDJOGADOR, NOME, CONSOLE, CATEGORIA, ESTILO) VALUES (?, ?, ?, ?, ?)';
  const values = [nome, console, categoria];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir os dados no banco de dados:', err);
      return;
    }
    console.log('Dados inseridos com sucesso!');
    res.send('Dados inseridos com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
