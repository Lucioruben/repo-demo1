import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  txtValor:string="";

  notas: any[] = [];

  constructor() { }

  addNota()
  {
    this.notas.push({bimestre:"I",apellido:"Laura Ramos",nombre:"Lucio Rafael",competencia1:"12",competencia2:"15",competencia3:"17",competencia4:"16"});
  }

  removeNota()
  {
    this.notas.splice(this.notas.length-1,1);
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };


      this.notas=[{bimestre:"I",apellido:"Laura Ramos",nombre:"Lucio Rafael",competencia1:"12",competencia2:"15",competencia3:"17",competencia4:"16"}];

      this.dtTrigger.next(null);

  }

}
