const express = require('express')


// Crear router
const router = express.Router()

// Añadimos rutas
router.get('/', (request, response) => {
    return response.send('Server funcionando')
})

router.get('/one', (request, response) => {
    return response.send('Author One')
})

module.exports = router