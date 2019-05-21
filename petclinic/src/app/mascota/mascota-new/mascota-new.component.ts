import { Component, OnInit } from '@angular/core';
import { Especie } from 'src/app/model/EspecieEnum';

import { from } from 'rxjs';
import { Mascota } from 'src/app/model/Mascota';
import { MascotaService } from 'src/app/services/MascotaServices';

import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota-new',
  templateUrl: './mascota-new.component.html',
  styleUrls: ['./mascota-new.component.css']
})
export class MascotaNewComponent implements OnInit {
  especies = Especie;

  mascota: Mascota = {
    id:null,
    nombre: "",
    raza: "Pastor Aleman",
    edad: 0,
    especie: Especie.PERRO,
    fechaIngreso: new Date(),
    estado: "nuevo"

  }

 
  mostrarMensajeError:boolean = false

  //inyectando la clase servico
  constructor(private mascotaService: MascotaService, private router: Router) { }
  
  ngOnInit() {
  }
  guardar() {
    this.mascotaService.adicionarMascota(this.mascota).subscribe((respuesta) => {
      
       if(respuesta.codigoErrror != null){
       this.mostrarMensajeError= true;
       }else{
      //tarea asincrona
      this.router.navigate(['/mascotas']);
       }
    });

//para que el formulario este redefinido
    this.mascota = {
      id: null,
      nombre: "",
      raza: "Pastor Aleman",
      edad: 0,
      especie: Especie.PERRO,
      fechaIngreso: new Date(),
      estado: "nuevo"
    }


    //console.log('nombre' + this.mascota.nombre)
  }
}
