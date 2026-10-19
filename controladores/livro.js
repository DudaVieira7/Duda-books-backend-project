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

        if(id && Number(id)){
            const livro = getLivroPorId(id) 
            res.send(livro)  
        }else{
            res.status(422).send('ID inválido!')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try {

        const novoLivro = req.body
        if(req.body.nome){
            insereLivro(novoLivro)
            res.status(201).send('Livro inserido com sucesso!');
        }else{
            res.status(422).send('CAMPO NOME É OBRIGATÓRIO')
        }

     
   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
}


function patchLivro(req, res){
try {
    const id = req.params.id
    const modificar = req.body


    if(id && Number(id)){
        editaLivro(modificar, id)
        res.send('item modificado com sucesso!')

    }else{
        res.status(422).send('ID inválido!')
    }

   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
}


function deleteLivro(req, res){
   try {
    
     const id = req.params.id

     if(id && Number(id)){
        apagarLivro(id)
        res.send('livro deletado com sucesso!')
     }else{
        res.status(422).send('ID inválido!')
     }

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