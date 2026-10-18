const { Router} = require('express');
const { getLivros} = require('../controladores/livro')
const router = Router();

router.get('/', getLivros)


router.post('/',(req, res) =>{
   try {
     res.send('Você fez uma requisição do tipo post')
   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
})

router.patch('/',(req, res)=>{
   try {
     res.send('Você fez uma requisição do tipo patch')
   } catch (error) {
        res.status(500)
        res.send(error.message)
   }
})

router.delete('/',(req, res)=>{
    try {
        res.send('Você fez uma requisição do tipo delete')
    } catch (error) {
       res.send(error.message) 
    }
})

module.exports = router