const express = require('express')
const { port } = require('./src/config')

const app = express()

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})