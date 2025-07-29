const express = require('express')
const mysql = require('mysql')

const app = express()

const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'desafio_docker_2',
}


const connection = mysql.createConnection(config)

app.get('/', (_, res) => {
  const name = "Gabriel"
  
  connection.query(`INSERT INTO people (name) VALUES ('${name}')`)

  connection.query(`SELECT name FROM people`, (e, results) => {
    res.send(`
        <h1>Full Cycle Rocks!</h1>
        ${!!results.length ? results.map(x => `- ${x.name}<br />`).join('') : ''}
    `)
  })
})

app.listen(port, () => {
  console.log('Aplicação rodando na porta:', port);
})