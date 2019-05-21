import { Component, OnInit, Input } from '@angular/core';
import { MascotaService } from 'src/app/services/MascotaServices';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Mascota } from 'src/app/model/Mascota';
import { Respuesta } from 'src/app/model/Respuesta';
import { Especie } from 'src/app/model/EspecieEnum';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent implements OnInit {

  especies = Especie;
  mascota: Mascota = {
    id: null,
    nombre: "",
    raza: "Pastor Aleman",
    edad: 0,
    especie: Especie.PERRO,
    fechaIngreso: new Date(),
    estado: "nuevo"

  }
  mascotaId: string;
   isEdit: boolean;
   buttonTitle:string;

  constructor(private mascotaService: MascotaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {

        this.isEdit = params.get("isEdit") === "true" ? true : false;
        if (this.isEdit) {
          this.mascotaId = params.get("mascotaId");
          this.buttonTitle="Actualizar";
          return this.mascotaService.getMascota(this.mascotaId);
        } else {
          this.buttonTitle="Crear";
          return of(this.mascota);
        }
      }))

      .subscribe((mascota: Mascota) => {
        this.mascota = mascota;
      });

    //.subscribe((params: ParamMap) => {

    //   console.log("el id que me enviaste", params.get("mascotaId"));
    //   });
  }
  guardar() {
if (this.isEdit){
  this.mascotaService.acrtuaalizarMascota(this.mascotaId, this.mascota)
  .subscribe((respuesta: Respuesta) => {
    // console.log("Se actualizo la mascota");
    //tarea asincrona que lleva a otra url o ruta
    this.router.navigate(['/mascotas']);

  });
}else{
  this.mascotaService.adicionarMascota( this.mascota)
  .subscribe((respuesta: Respuesta) => {
    // console.log("Se actualizo la mascota");
    //tarea asincrona que lleva a otra url o ruta
    this.router.navigate(['/mascotas']);

  });
}
  
  }

}

