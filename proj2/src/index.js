const express = require('express')

const app = express()

app.get('/test', (req, res) => res.json('Teste no app 02, porta 4444'))
app.get('/teste', (req, res) => res.json('Teste no app 02, porta 4444'))

app.listen(4444, () => console.log('estou rodando na porta 4444'))
