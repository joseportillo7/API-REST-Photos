const express = require('express')
const { Controller } = require('./controller')

const app = express()
app.use(express.json())


app.get('/api/photos', Controller.getPhotos)
app.get('/api/photos/:id', Controller.getPhotoById)
app.get('/api/albums/:title', Controller.getAlbums)
app.get('/api/users/:na', Controller.getUsers)

module.exports = app