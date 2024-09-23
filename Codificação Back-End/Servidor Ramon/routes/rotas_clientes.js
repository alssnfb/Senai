const express = require('express')
const router = express.Router()
const controlador = require('../controllers/controlador_clientes')
const { validadorDeCookie } = require('../middleware/validadorDeCookie')

router.get('', validadorDeCookie, controlador.listClientes)
router.get('/:id', validadorDeCookie, controlador.getClientes)
router.post('', validadorDeCookie, controlador.createClientes)
router.post('/:id', validadorDeCookie, controlador.updateClientes)
router.delete('/:id', validadorDeCookie, controlador.deleteClientes)

module.exports = router;