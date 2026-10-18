const fs = require('fs')

function getTodosLivros(){
    const dados = fs.readFileSync('livros.json', 'utf-8')
    console.log("Dados lidos do JSON bruto:", dados) // <--- Vai mostrar no terminal o conteúdo do arquivo
    return JSON.parse(dados)
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
    console.log("Procurando pelo ID:", id, "Tipo do ID:", typeof id) // <--- Mostra o ID que chegou
    
    const livroFiltrado = livros.find(livro => livro.id == id)
    console.log("Livro encontrado:", livroFiltrado) // <--- Mostra o que ele achou
    
    return livroFiltrado
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
}