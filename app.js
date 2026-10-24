const express = require('express')
const cors = require('cors')
const rotaLivro = require('./rotas/livro')
const rotaLivroFavorito = require('./rotas/favoritos')

const app = express()

app.use(express.json()) // recebe pelo body o formato json
app.use(cors({ origin: "*" }))

app.use('/imagens', express.static('imagens')) // libera as fotos da pasta "imagens" pelo endereço http://localhost:3000/imagens/nome-da-foto.jpg

const port = 3000

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaLivroFavorito)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})