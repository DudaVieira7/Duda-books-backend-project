const fs = require('fs')


const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'))
console.log('Antes de adicionar:', dadosAtuais)
const novoDado = {'id': 3, 'nome': 'Livro maneiro'}

fs.writeFileSync('livros.json', JSON.stringify( [...dadosAtuais,  novoDado]))

console.log(JSON.parse(fs.readFileSync('livros.json')))
