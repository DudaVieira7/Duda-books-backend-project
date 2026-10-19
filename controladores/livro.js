const { getTodosLivros, getLivroPorId, insereLivro } = require('../servicos/livro');


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


function patchLivros(req, res){
try {
     res.send('Você fez uma requisição do tipo patch')
   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
}


function deleteLivros(req, res){
   try {
     res.send('Você fez uma requisição do tipo patch')
   } catch (error) {
        res.status(500)
        res.send(error.message)
   } 
}





module.exports = {
    getLivros,
    postLivro,
    patchLivros,
    deleteLivros,
    getLivro,
}