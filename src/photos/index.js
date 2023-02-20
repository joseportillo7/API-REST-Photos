const express = require('express')
const axios = require('axios')
const { getPhotos, getPhotoById } = require('./controller')


const router = express.Router()

module.exports.PhotoAPI = (app) =>{
    router
        .get('/photos', getPhotos)
        .get('/photos/:id', getPhotoById)

    app.use('/api',router)
}

