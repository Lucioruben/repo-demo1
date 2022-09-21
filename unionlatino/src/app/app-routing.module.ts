import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarEstudiantesComponent } from './estudiantes/listar-estudiantes/listar-estudiantes.component';
import { ListarFamiliaresComponent } from './familiares/listar-familiares/listar-familiares.component';
import { ListarNotasComponent } from './notas/listar-notas/listar-notas.component';
import { ListarPagosComponent } from './pagos/listar-pagos/listar-pagos.component';


const routes: Routes = [
  {
    path: "estudiantes",component:ListarEstudiantesComponent
  },
  {
    path: "familiares",component:ListarFamiliaresComponent
  },
  {
    path: "notas",component:ListarNotasComponent
  },
  {
    path: "pagos",component:ListarPagosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
