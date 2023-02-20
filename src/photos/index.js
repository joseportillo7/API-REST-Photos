const express = require('express')
const axios = require('axios')

const router = express.Router()

module.exports.PhotoAPI = (app) =>{
    router.get('/photos',async(req,res)=>{
        try {
            let responsephotos = await axios.get('https://jsonplaceholder.typicode.com/photos')
            let { data } = responsephotos;
    
            res.json(data)
        } catch (error) {
            res.status(500).json({message: 'Internal server Error'})
        }
    })
    
    router.get('/albums',async(req,res)=>{
        try {
            let responsealbums = await axios.get('https://jsonplaceholder.typicode.com/albums')
            let { data } = responsealbums
            res.json(data)
        } catch (error) {
            res.status(500).json({message: 'Internal server Error'})
        }
    })
    
    router.get('/users', async(req,res)=>{
        try {
            let responseusers = await axios.get('https://jsonplaceholder.typicode.com/users')
            let { data } = responseusers
            res.json(data)
        } catch (error) {
            res.status(500).json({message: 'Internal server Error'})
        }
    })

    app.use('/api',router)
}

