const fs = require('fs')

function getTodosFavoritos(){
    const dados = fs.readFileSync('favoritos.json')
}


function deletaFavoritoPorId(id){
    const livrosFavoritos = fs.readFileSync('favoritos.json')
    const livrosFavoritosFiltrados = livrosFavoritos.filter(livro => livro.id != id )
    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFavoritosFiltrados))

}


function novoLivroFavorito(id){
    const livros = fs.readFileSync('livros.json')
    const favoritos = fs.readFileSync('favoritos.json')
    const livroInseridos = livros.find(livro => livro.id === id)
    const novaListaFavoritos = [...favoritos, livroInseridos]  // faz uma cópia de livros favoritoes e adiciona um novo elemento
    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    novoLivroFavorito,

}


