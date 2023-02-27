const { port } = require('./src/config')
const { PhotoService } = require('./src/photos/service')
const app = require('./src/photos')

/* Function to add data in an array from public API's */
PhotoService.main_array()

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
})