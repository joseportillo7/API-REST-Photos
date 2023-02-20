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
        res.status(500).json({message: 'Internal server Error'})
    }
})

app.get('/albums',async(req,res)=>{
    try {
        let responsealbums = await axios.get('https://jsonplaceholder.typicode.com/albums')
        let { data } = responsealbums
        res.json(data)
    } catch (error) {
        res.status(500).json({message: 'Internal server Error'})
    }
})

app.get('/users', async(req,res)=>{
    try {
        let responseusers = await axios.get('https://jsonplaceholder.typicode.com/users')
        let { data } = responseusers
        res.json(data)
    } catch (error) {
        res.status(500).json({message: 'Internal server Error'})
    }
})


app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})