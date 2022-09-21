import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.css']
})
export class ListarEstudiantesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  txtValor:string="";

  estudiantes: any[] = [];
  
  constructor() { }

  addEstudiante()
  {
    this.estudiantes.push({dni:"20051758",apellido:"Laura Espinoza",nombre:"Lucio Rubén",genero:"Masculino",nivel:"Secundaria",grado:"Segundo",seccion:"A"});
  }

  removeEstudiante()
  {
    this.estudiantes.splice(this.estudiantes.length-1,1);
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };


      this.estudiantes=[{dni:"20051758",apellido:"Laura Espinoza",nombre:"Lucio Rubén",genero:"Masculino",nivel:"Secundaria",grado:"Segundo",seccion:"A"}];

      this.dtTrigger.next(null);

  }

}
