const { getTodosLivros, getLivroPorId, insereLivro, editaLivro, apagarLivro } = require('../servicos/livro');


function getLivros(req, res){
    try {
       const livros = getTodosLivros()
       res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }
    
}

function getLivro(req, res){
    try {
        const id = req.params.id
        const livro = getLivroPorId(id) 

        res.send(livro) 
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try {

        const novoLivro = req.body
        insereLivro(novoLivro)
        res.status(201).send('Livro inserido com sucesso!');
     
   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
}


function patchLivro(req, res){
try {
    const id = req.params.id
    const modificar = req.body

    console.log("ID recebido na URL:", id)
    console.log("O que veio no corpo (req.body):", modificar)

    editaLivro(modificar, id)
    res.send('item modificado com sucesso!')

   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
}


function deleteLivro(req, res){
   try {
     const id = req.params.id
     apagarLivro(id)
     res.send('livro deletado com sucesso!')
   } catch (error) {
        res.status(500)
        res.send(error.message)
   } 
}





module.exports = {
    getLivros,
    postLivro,
    patchLivro,
    deleteLivro,
    getLivro,
}