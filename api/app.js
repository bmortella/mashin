var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var app = express();

let db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});


app.post('/api/users/register', function(req, res) {
  db.run(`
    INSERT INTO users VALUES (?, ?, ?, ?, ?)
  `, [req.query.email, req.query.senha, req.query.nome, req.query.sobrenome, req.query.cnh])
  res.sendStatus(200)
});

app.use(express.static('../web'))
app.listen(3000, function () {
    db.run(`CREATE TABLE IF NOT EXISTS 
    users(
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Email VARCHAR(50),
      Senha VARCHAR(20),
      Nome VARCHAR(15),
      Sobrenome VARCHAR(15),
      CNH VARCHAR(10),
      UNIQUE (Email),
      UNIQUE (CNH)
    )`)
    console.log('Example app listening on port 3000!');
});
