import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEstudianteComponent } from './estudiantes/new-estudiante/new-estudiante.component';
import { NewFamiliarComponent } from './familiares/new-familiar/new-familiar.component';
import { NewNotaComponent } from './notas/new-nota/new-nota.component';
import { NewPagoComponent } from './pagos/new-pago/new-pago.component';
import { ListarEstudiantesComponent } from './estudiantes/listar-estudiantes/listar-estudiantes.component';
import { ListarFamiliaresComponent } from './familiares/listar-familiares/listar-familiares.component';
import { ListarNotasComponent } from './notas/listar-notas/listar-notas.component';
import { ListarPagosComponent } from './pagos/listar-pagos/listar-pagos.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewEstudianteComponent,
    NewFamiliarComponent,
    NewNotaComponent,
    NewPagoComponent,
    ListarEstudiantesComponent,
    ListarFamiliaresComponent,
    ListarNotasComponent,
    ListarPagosComponent,
    MainHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
