const express = require('express')
const { Controller } = require('./controller')


const router = express.Router()

module.exports.PhotoAPI = (app) =>{
    router
        .get('', Controller.getPhotos)
        .get('/:id', Controller.getPhotoById)
        .get('/albums/:title', Controller.getAlbums)
        .get('/users/:na', Controller.getUsers)

    app.use('/api/photos',router)
}

