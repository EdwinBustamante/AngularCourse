import mongose from "mongoose"
//CONECTAMOS CON MONGODB CON LA AYUDA DE MONGOSE
const uri: string = "mongodb://localhost:27017/local";
mongose.connect(uri, (error: any) => {
    if (error) {
        console.log('hubo un error en la conexxion');
    } else {
        console.log('Se hizo la conexion con mongo');
    }
});

//DEFINIMOS EL SCHEMA PARA MAPEAR
export const PetSchema = new mongose.Schema({
    nombre: { type: String, required: true },
    raza: { type: String, required: true },
    edad: { type: Number, required: true },
    especie: { type: String, required: true },
    fechaIngreso: { type: Date, required: false },
    estado:{type:String, required:true}
});
 //,{collection:'mascotas' }

 //AGREGAMOS EL MODELO
const Pet = mongose.model('Pet',PetSchema)
export default Pet;