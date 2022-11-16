const { Router } = require('express')
const { pegaTodasASPessoas } = require('../controllers/PessoaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.listAllPessoas)
router.get('/pessoas/:id', PessoaController.getPessoa)
router.post('/pessoas', PessoaController.createPessoa)
router.put('/pessoas/:id', PessoaController.updatePessoa)
router.delete('/pessoas/:id', PessoaController.deletePessoa)

module.exports = router