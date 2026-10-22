import {getTodosFavoritos,deletaFavoritoPorId, novoLivroFavorito} from '../servicos/favorito'


function getFavoritos(req, res){
    try {
       const livros = getTodosFavoritos()
       res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }
    
}




function adicionarNovoFavorito(req, res){
    try {
        const id = req.params.id
        novoLivroFavorito(id)
        res.status(201).send('Livro favorito inserido com sucesso!');
   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
}




function deleteLivroFavorito(req, res){
   try {
    
     const id = req.params.id

     if(id && Number(id)){
        deletaFavoritoPorId(id)
        res.send('livro favorito deletado com sucesso!')
     }else{
        res.status(422).send('ID inválido!')
     }

   } catch (error) {
        res.status(500)
        res.send(error.message)
   } 
}



module.exports ={
    getFavoritos,
    deleteLivroFavorito,
    adicionarNovoFavorito,

}
