import { from, Observable } from "rxjs";

import { Mascota } from '../model/Mascota'
import { Especie } from '../model/EspecieEnum'
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Respuesta } from '../model/Respuesta';
@Injectable({
    providedIn: 'root'
})
//inyectamos el servicio
export class MascotaService {
    constructor(private http: HttpClient) {

    }

    //   mascotas: Mascota[] = [
    //   new Mascota("BOBy", "pastor aleman", 56, Especie.PERRO),
    // new Mascota("Firulais", "doverman", 32, Especie.PERRO),
    // new Mascota("TOM", "pastor aleman", 17, Especie.GATO)
    //];
    getMascotas(): Observable<Mascota[]> {
        return this.http.get("http://localhost:8080/pet")
            .pipe(map(jsonData => {
                var mascotas: Mascota[] = [];
                var mascotaJson = jsonData as Array<any>
                mascotaJson.forEach(mascotaJson => {
                    var mascota = new Mascota(
                        mascotaJson['_id'],
                        mascotaJson['nombre'],
                        mascotaJson['raza'],
                        mascotaJson['edad'],
                        mascotaJson['especie']
                    );
                    mascotas.push(mascota)
                });
                return mascotas;
            }));
    }
    adicionarMascota(mascota: Mascota): Observable<Respuesta> {

        return this.http.post("http://localhost:8080/pet", mascota)
            .pipe(map(jsonDataResponse => {
                const response = new Respuesta();
                response.codigoErrror = jsonDataResponse["errorCode"]
                response.mensaje = jsonDataResponse["mensaje"]
                return response;
            }));

        //  this.mascotas.push(mascota)
    }

    //Servicio que recibe el id de la mascota a ser eliminada
    eliminarMascota(id:String): Observable<Respuesta>{
          //request 
        return this.http.delete("http://localhost:8080/pet/"+id)
        .pipe(map(jsonDataResponse => {
            const response = new Respuesta();
            response.codigoErrror = jsonDataResponse["errorCode"]
            response.mensaje = jsonDataResponse["mensaje"]

            return response;
        }));
    }

    getMascota(id:string):Observable<Mascota>{
        return this.http.get("http://localhost:8080/pet/"+id)
            .pipe(map(mascotaJson => {
                
                    var mascota = new Mascota(
                        mascotaJson['_id'],
                        mascotaJson['nombre'],
                        mascotaJson['raza'],
                        mascotaJson['edad'],
                        mascotaJson['especie']
                    );
                 
                return mascota
            }));
    }
    acrtuaalizarMascota(id:string, mascota: Mascota):Observable<Respuesta>{
        return this.http.put("http://localhost:8080/pet/"+id, mascota)
        .pipe(map(jsonDataResponse => {
            const response = new Respuesta();
            response.codigoErrror = jsonDataResponse["errorCode"]
            response.mensaje = jsonDataResponse["mensaje"]

            return response;
        }));
    }
}