const express = require('express')
const { port } = require('./src/config')
const { PhotoAPI } = require('./src/photos')

const app = express()
app.use(express.json())

PhotoAPI(app)

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})