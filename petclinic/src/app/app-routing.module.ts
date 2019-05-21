import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotaListComponent } from './mascota/mascota-list/mascota-list.component';
import { MascotaNewComponent } from './mascota/mascota-new/mascota-new.component';
import { MascotaEditComponent } from './mascota/mascota-edit/mascota-edit.component';
import { DueniosListComponent } from './duenios/duenios-list/duenios-list.component';
import { CancionesListComponent } from './canciones/canciones-list/canciones-list.component';
import { MascotaFormComponent } from './mascota/mascota-form/mascota-form.component';

const routes: Routes = [
  {path: "mascotas",component: MascotaListComponent},
  {path: "editar-mascota/:mascotaId",component: MascotaEditComponent},

  {path: "form-mascota/:isEdit",component: MascotaFormComponent},
  {path: "form-mascota/:isEdit/:mascotaId",component: MascotaFormComponent},

  {path: "nueva-mascota",component: MascotaNewComponent},
  {path: "duenios",component: DueniosListComponent},
  { path: "canciones", component: CancionesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
