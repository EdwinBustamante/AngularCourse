"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//CONECTAMOS CON MONGODB CON LA AYUDA DE MONGOSE
const uri = "mongodb://localhost:27017/local";
mongoose_1.default.connect(uri, (error) => {
    if (error) {
        console.log('hubo un error en la conexxion');
    }
    else {
        console.log('Se hizo la conexion con mongo');
    }
});
//DEFINIMOS EL SCHEMA PARA MAPEAR
exports.PetSchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    raza: { type: String, required: true },
    edad: { type: Number, required: true },
    especie: { type: String, required: true },
    fechaIngreso: { type: Date, required: false },
    estado: { type: String, required: true }
});
//,{collection:'mascotas' }
//AGREGAMOS EL MODELO
const Pet = mongoose_1.default.model('Pet', exports.PetSchema);
exports.default = Pet;
//# sourceMappingURL=pet.model.js.map