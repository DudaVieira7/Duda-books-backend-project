const { Router} = require('express');
const { getLivros} = require('../controladores/livro')
const {postLivro} = require('../controladores/livro')
const { patchLivros} = require('../controladores/livro')
const { deleteLivros} = require('../controladores/livro')
const { getLivro} = require('../controladores/livro')
const router = Router();

router.get('/', getLivros)
router.get('/:id', getLivro)


router.post('/',postLivro)

router.patch('/:id',patchLivros)

router.delete('/:id',deleteLivros)

module.exports = router