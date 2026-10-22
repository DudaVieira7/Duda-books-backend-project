const express = require('express');
const rotaLivro = require('./rotas/livro')
const app = express();
const cors = require('cors')

app.use(express.json()) //recebe pelo body o formato json
app.use(cors({origin: "*"}))

const port = 3000;

app.use('/livros', rotaLivro)

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`);
})