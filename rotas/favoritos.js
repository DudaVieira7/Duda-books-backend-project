const { Router} = require('express');
const { getFavoritos} = require('../controladores/favorito')
const { adicionarNovoFavorito} = require('../controladores/favorito')
const { deleteLivroFavorito} = require('../controladores/favorito')
const router = Router();

router.get('/favoritos', getFavoritos)
router.delete('/:id', deleteLivroFavorito)
router.post('/:id', adicionarNovoFavorito)

module.exports = router