"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pet_model_1 = __importDefault(require("../model/pet.model"));
exports.allPets = (req, res) => {
    pet_model_1.default.find((error, pets) => {
        if (error) {
            res.send({ error: "hubo un error al obtener mascotas" });
        }
        else {
            res.send(pets);
        }
    });
    // res.send("Todas las mascotas");
};
exports.getPet = (req, res) => {
    let petId = req.params.id;
    pet_model_1.default.findById(petId, (error, petFinder) => {
        if (error) {
            res.send({ error: "hubo un error al encontrar el mascota" });
        }
        else {
            res.send(petFinder);
        }
    });
    // res.send("devuelve una mascota");
};
exports.deletePet = (req, res) => {
    let petId = req.params.id;
    pet_model_1.default.deleteOne({ _id: petId }, (error) => {
        if (error) {
            res.send({ error: "hubo un error al eliminar la mascota" });
        }
        else {
            res.send({ error: "Se elimino la mascota correctamente" });
        }
    });
    //res.send("Borrar  mascota");
};
exports.addPet = (req, res) => {
    var pet = new pet_model_1.default(req.body);
    pet.save((error, petSave) => {
        if (error) {
            res.send({ error: "Hubo un error al insertar la mascota" });
        }
        else {
            res.send(petSave);
        }
    });
    //  res.send("añadir  mascota");
};
exports.updatePet = (req, res) => {
    let petId = req.params.id; //obtengo el id
    let petData = req.body; //Obtengo la mascota a actualizar
    //TIENE TRES ARGUMENTOS ID, DATOS, Y LA RESPUESTA DESPUES DE QUE SE EJECUTE LA FUNCION
    pet_model_1.default.findByIdAndUpdate(petId, petData, (err, petOriginal) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(petOriginal);
        }
    });
    // res.send("Actualizar  mascota");
};
//# sourceMappingURL=petController.js.map