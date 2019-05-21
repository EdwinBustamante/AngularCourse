import { Request, Response } from "express";
import Pet from "../model/pet.model";

export let allPets = (req: Request, res: Response) => {
    Pet.find((error: AnalyserNode, pets: any) => {
        if (error) {
            res.send({ error: "hubo un error al obtener mascotas" })
        } else {
            res.send(pets);
        }
    })
    // res.send("Todas las mascotas");
};

export let getPet = (req: Request, res: Response) => {
    let petId = req.params.id;
    Pet.findById(petId, (error: any, petFinder: any) => {
        if (error) {
            res.send({ error: "hubo un error al encontrar el mascota" });
        } else {
            res.send(petFinder);
        }
    });
    // res.send("devuelve una mascota");
};

export let deletePet = (req: Request, res: Response) => {
    let petId = req.params.id;
    Pet.deleteOne({ _id: petId }, (error: any) => {
        if (error) {
            res.send({ error: "hubo un error al eliminar la mascota" });
        } else {
            res.send({error:"Se elimino la mascota correctamente"});
        }
    });
    //res.send("Borrar  mascota");
};

export let addPet = (req: Request, res: Response) => {
    var pet = new Pet(req.body);
    pet.save((error: any, petSave: any) => {
        if (error) {
            res.send({ error: "Hubo un error al insertar la mascota" });
        } else {
            res.send(petSave);
        }

    });

    //  res.send("añadir  mascota");
};

export let updatePet = (req: Request, res: Response) => {
   let petId=req.params.id;//obtengo el id

   let petData = req.body;//Obtengo la mascota a actualizar
   //TIENE TRES ARGUMENTOS ID, DATOS, Y LA RESPUESTA DESPUES DE QUE SE EJECUTE LA FUNCION
   Pet.findByIdAndUpdate(petId,petData,(err:any,petOriginal:any)=>{
       if(err){
           res.send(err)
       }else{
           res.send(petOriginal)
       }
   })
    // res.send("Actualizar  mascota");
};
