const express = require('express')

const app = express()

app.get('/test', (req, res) => res.json('Teste no app 01, porta 3333'))
app.get('/teste', (req, res) => res.json('Teste no app 01, porta 3333'))


app.listen(3333, () => console.log('estou rodando na porta 3333'))
