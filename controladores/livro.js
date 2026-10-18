const { getTodosLivros } = require("../servicos/livro")
const { getLivroPorId} = require('../servicos/livro')


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

function postLivros(req, res){
    try {
     res.send('Você fez uma requisição do tipo post')
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
    postLivros,
    patchLivros,
    deleteLivros,
    getLivro,
}