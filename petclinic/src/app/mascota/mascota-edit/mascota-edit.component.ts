import { Component, OnInit } from '@angular/core';
import { Especie } from 'src/app/model/EspecieEnum';
import { Mascota } from 'src/app/model/Mascota';
import { MascotaService } from 'src/app/services/MascotaServices';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Respuesta } from 'src/app/model/Respuesta';

@Component({
  selector: 'app-mascota-edit',
  templateUrl: './mascota-edit.component.html',
  styleUrls: ['./mascota-edit.component.css']
})
export class MascotaEditComponent implements OnInit {
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

  constructor(private mascotaService: MascotaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(switchMap((params: ParamMap)=>{
     this.mascotaId= params.get("mascotaId");
     
        return this.mascotaService.getMascota(this.mascotaId);
    }))
    .subscribe((mascota:Mascota)=>{
      this.mascota = mascota;

    });
    
      //.subscribe((params: ParamMap) => {

     //   console.log("el id que me enviaste", params.get("mascotaId"));
   //   });
  }
  actualizar(){
    this.mascotaService.acrtuaalizarMascota(this.mascotaId, this.mascota)
    .subscribe((respuesta:Respuesta)=>{
 // console.log("Se actualizo la mascota");
  //tarea asincrona que lleva a otra url o ruta
 this.router.navigate(['/mascotas']);
  
    });
  }

}
