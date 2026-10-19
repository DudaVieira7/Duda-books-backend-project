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


function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaLivros))
}



function editaLivro(modificacoes, id){
    let livros = JSON.parse(fs.readFileSync('livros.json')) // sempre tem que usar a lista completa como base inicial para as ações
   const indiceModificado = livros.findIndex(livro => livro.id == id)//Procura dentro da lista qual é a posição (o índice) do livro que tem o id igual ao que você passou.

    const novoConteudo = {...livros[indiceModificado], ...modificacoes} //Pega o livro antigo que estava nessa posição e mistura (...) com as novas modificações que você enviou. Tudo o que você mandou atualizar substitui o valor antigo, e o restante continua igual.

    livros[indiceModificado] = novoConteudo

    fs.writeFileSync('livros.json', JSON.stringify(livros))
   
}


function apagarLivro(id){

    let livros = JSON.parse(fs.readFileSync('livros.json'))
    const livrosFiltrados = livros.filter(livro => livro.id != id) // cria nova lista com os livros que não serão apagados
     
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados))

}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    editaLivro,
    apagarLivro,
}