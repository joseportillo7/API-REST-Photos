const axios = require('axios')
const {api_photos, api_albums, api_users} = require('../config')

const DataPhotos = async() =>{
    let responsephotos = await axios.get(api_photos)
    let { data } = responsephotos

    return data
} 

const DataAlbums = async() =>{
    let responsealbums = await axios.get(api_albums)
    let { data } = responsealbums

    return data
} 

const DataUsers = async() =>{
    let responseusers = await axios.get(api_users)
    let { data } = responseusers

    return data
} 

module.exports = {
    DataPhotos,
    DataAlbums,
    DataUsers,
}