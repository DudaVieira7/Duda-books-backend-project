const { Router} = require('express');
const { getLivros} = require('../controladores/livro')
const {postLivro} = require('../controladores/livro')
const { patchLivro} = require('../controladores/livro')
const { deleteLivro} = require('../controladores/livro')
const { getLivro} = require('../controladores/livro')
const router = Router();

router.get('/', getLivros)
router.get('/:id', getLivro)


router.post('/',postLivro)

router.patch('/:id',patchLivro)

router.delete('/:id',deleteLivro)

module.exports = router