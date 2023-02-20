const {DataPhotos,DataAlbums,DataUsers} = require('./request')

let arr_data = []

const main_array = async() =>{
    try {
        let dataphotos = await DataPhotos()
        let dataalbums = await DataAlbums()
        let datausers = await DataUsers()

        dataphotos.forEach(photo => {
            dataalbums.forEach(album => {
                datausers.forEach(user => {
                    if(photo.albumId === album.id){
                        if(album.userId === user.id){
                            arr_data.push({
                                "id": photo.id,
                                "title": photo.title,
                                "url": photo.url,
                                "thumbnailUrl": photo.thumbnailUrl,
                                "algum": {
                                    "id": album.id,
                                    "title": album.title,
                                    "user": {
                                        ...user
                                    }
                                }
                            })
                        }
                    }
                });
            });
        });
    
    } catch (error) {
        console.log(error);
    }
}

module.exports.PhotoService = {
    main_array,
}