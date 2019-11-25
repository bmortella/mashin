var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var app = express();

app.use(express.static('../web'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

app.post('/api/users/register', function(req, res) {
   db.run(`
     INSERT INTO users(Email, Senha, Nome, Sobrenome, CPF, CNH) VALUES (?, ?, ?, ?, ?, ?)
   `, [req.body.args.email, req.body.args.password, req.body.args.name, req.body.args.lastname, req.body.args.cpf, req.body.args.cnh])
  res.sendStatus(200)
});

app.post('/api/users/login', function(req,res) {
  let sql = `
    SELECT * FROM users WHERE Email = ? AND Senha = ?
  `;
  let email = req.body.args.email
  let pass = req.body.args.password
  db.get(sql, [email, pass], (err, row) => {
    if (err) {
      return console.log(row.id, row.name);
    }
    return row
    ? res.sendStatus(200)
    : res.sendStatus(403);
  })
  res.sendStatus(200)
});

app.listen(3000, function () {
    db.run(`CREATE TABLE IF NOT EXISTS 
    users(
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Email VARCHAR(50),
      Senha VARCHAR(20),
      Nome VARCHAR(15),
      Sobrenome VARCHAR(15),
      CPF VARCHAR(11),
      CNH VARCHAR(10),
      UNIQUE (Email),
      UNIQUE (CNH),
      UNIQUE (CPF)
    )`)
    console.log('Ready :3000!');
});
