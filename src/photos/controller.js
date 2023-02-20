const { PhotoService } = require('./service')

module.exports = {
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
    }
}