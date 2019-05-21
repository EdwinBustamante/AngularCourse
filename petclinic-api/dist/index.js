"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const petControler = __importStar(require("./controllers/petController"));
const EspecieEnum_1 = require("./model/EspecieEnum");
const Mascota_1 = require("./model/Mascota");
const app = express_1.default();
const port = 8080; // puerto por defecto
const mascotas = [
    new Mascota_1.Mascota("BoBy", "pastor aleman", 56, EspecieEnum_1.Especie.PERRO),
    new Mascota_1.Mascota("Firulais", "doverman", 32, EspecieEnum_1.Especie.PERRO),
    new Mascota_1.Mascota("TOM", "pastor aleman", 17, EspecieEnum_1.Especie.GATO),
    new Mascota_1.Mascota("TOM", "pastor aleman", 17, EspecieEnum_1.Especie.GATO),
    new Mascota_1.Mascota("TOM", "pastor aleman", 17, EspecieEnum_1.Especie.GATO),
    new Mascota_1.Mascota("TOMASITO", "pastor aleman", 17, EspecieEnum_1.Especie.GATO),
    new Mascota_1.Mascota("JHASPER ", "pastor aleman", 17, EspecieEnum_1.Especie.GATO),
    new Mascota_1.Mascota("JUPITER ", "pastor aleman", 17, EspecieEnum_1.Especie.GATO)
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
//# sourceMappingURL=index.js.map