import express from "express";

import * as bodyParser from "body-parser";
import * as petControler from "./controllers/petController"

import { Especie } from "./model/EspecieEnum";
import { Mascota } from "./model/Mascota";

const app = express();
const port = 8080; // puerto por defecto

const mascotas: Mascota[] = [
    new Mascota("BoBy", "pastor aleman", 56, Especie.PERRO),
    new Mascota("Firulais", "doverman", 32, Especie.PERRO),
    new Mascota("TOM", "pastor aleman", 17, Especie.GATO),
    new Mascota("TOM", "pastor aleman", 17, Especie.GATO),
    new Mascota("TOM", "pastor aleman", 17, Especie.GATO),
    new Mascota("TOMASITO", "pastor aleman", 17, Especie.GATO),
    new Mascota("JHASPER ", "pastor aleman", 17, Especie.GATO),
    new Mascota("JUPITER ", "pastor aleman", 17, Especie.GATO)
];

//Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// definir la ruta principal para nuestra web page rep recibimos
// res enviamos
// metodo get, post tambien hay todas
app.get("/", (req, res) => {
    // res.send( "Hola Mundo NodeJS-Express !!" );
    res.send("Bienvenido al api de petClinic ");
});

// app.get("/mascota/list", (req, res) => {
//     res.type("json");
//     /// res.send({resultados: mascotas});
//     res.send(mascotas);
// });
//usamos la libreria body parser para usar json 
app.use(bodyParser.json());

// app.post("/mascota/nuevo", (req, res) => {
//     // console.log(req.body);
//     //console.log(req.headers);
//     //console.log(req.ip);

//     const mascotaJson = req.body;
//     const mascota = new Mascota(
//         mascotaJson["nombre"],
//         mascotaJson["raza"],
//         mascotaJson["edad"],
//         mascotaJson["especie"]
//     );
//     mascotas.push(mascota);
//     res.send({
//         "codigoError": null,
//         "mensaje": "se ah creado la mascota"
//     }
//     );
// });

//API PARA PETS LLAMADAS ENDPOINT
app.get("/pet", petControler.allPets);
app.get("/pet/:id", petControler.getPet);
app.post("/pet", petControler.addPet);
app.put("/pet/:id", petControler.updatePet);
app.delete("/pet/:id", petControler.deletePet);

// Inicializamos el server de Express
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
