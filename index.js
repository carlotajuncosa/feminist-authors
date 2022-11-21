const express = require('express')
const PORT = 3000;
const server = express()
const authorsRoutes = require('./src/api/authors/authors.routes')

const router = express.Router();

server.use('/authors', authorsRoutes)


server.listen(PORT, () => {
    console.log(`Servidor a la espera de órdenes en http://localhost:${PORT}`);
})

router.get('/', (request, response) => {
    return response.send('Servidor funcionando')
})