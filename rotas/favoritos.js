const { Router } = require('express')
const { getFavoritos, postFavorito, deleteLivroFavorito } = require('../controladores/favorito')

const router = Router()

router.get('/', getFavoritos)
router.post('/:id', postFavorito)
router.delete('/:id', deleteLivroFavorito)

module.exports = router