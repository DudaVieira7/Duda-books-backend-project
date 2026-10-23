const fs = require('fs')

console.log('SERVICO NOVO CARREGADO')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function deletaFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    const filtrados = favoritos.filter(livro => livro.id !== id)
    fs.writeFileSync('favoritos.json', JSON.stringify(filtrados))
    return filtrados
}

function novoLivroFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    const livroInserido = livros.find(livro => livro.id === id)

    if (!livroInserido) {
        throw new Error('Livro não encontrado!')
    }

    fs.writeFileSync('favoritos.json', JSON.stringify([...favoritos, livroInserido]))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    novoLivroFavorito,
}