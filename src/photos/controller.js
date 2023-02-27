const { PhotoService } = require('./service')

module.exports.Controller = {
    getPhotos: async(req,res)=>{
        try {
            let dataphotos = await PhotoService.Photos()

            res.json(dataphotos)

        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    },
    getPhotoById: async(req,res)=>{
        try {
            let dataphoto = await PhotoService.PhotoById(req.params.id)

            res.json(dataphoto)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    },
    getAlbums: async(req,res)=>{
        try {
            let dataalbums = await PhotoService.Albums(req.params.title)
            res.json(dataalbums)
        } catch (error) {
            res.status(500).json({message: "Internal server error"})   
        }
    },
    getUsers: async(req,res)=>{
        try {
            let datausers = await PhotoService.Users(req.params.na)
            res.json(datausers)
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    }
}