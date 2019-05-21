import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/Mascota';
import { MascotaService } from '../../services/MascotaServices';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/model/Respuesta';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {
  mascotas: Mascota[];
  //inyectando aqui el servicio
  constructor(private mascotaService: MascotaService, private router : Router) {
   // this.mascotas = mascotaService.getMascotas()
  }
  ngOnInit() {
    this.cargarMascotas();
  }
cargarMascotas(){
  this.mascotaService.getMascotas()
  .subscribe((mascotas)=>{
     console.log("mascota :" + mascotas)
     this.mascotas=mascotas;
  });
}

irNuevaMascota(){
  this.router.navigate(['/nueva-mascota']);
}
eliminarMascota(id: string){
  this.mascotaService.eliminarMascota(id)
  .subscribe((respuesta: Respuesta)=>{
 console.log("se ah eliminado mascota");
  this.cargarMascotas();//para que cargue las mascotas
  }); 

}

}
