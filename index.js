const express = require('express')
const { port } = require('./src/config')
const { PhotoAPI } = require('./src/photos')
const {PhotoService} = require('./src/photos/service')

const app = express()
app.use(express.json())

PhotoAPI(app)

console.log(PhotoService.main_array());


app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})