const express = require('express')
const { port } = require('./src/config')
const axios = require('axios')

const app = express()
app.use(express.json())


app.get('/photos',async(req,res)=>{
    try {
        let responsephotos = await axios.get('https://jsonplaceholder.typicode.com/photos')
        let { data } = responsephotos;

        res.json(data)
    } catch (error) {
        console.log(error);
    }
})




app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})