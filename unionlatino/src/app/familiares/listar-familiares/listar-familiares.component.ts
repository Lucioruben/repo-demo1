import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-familiares',
  templateUrl: './listar-familiares.component.html',
  styleUrls: ['./listar-familiares.component.css']
})
export class ListarFamiliaresComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  txtValor:string="";

  familiares: any[] = [];
  
  constructor() { }

  addFamiliar()
  {
    this.familiares.push({tipo:"Padre",dni:"12345678",apellido:"Laura Eulogio",nombre:"Santos",celular:"964906992",direccion:"Av. San Luis MzB L6"});
  }

  removeFamiliar()
  {
    this.familiares.splice(this.familiares.length-1,1);
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };


      this.familiares=[{tipo:"Padre",dni:"12345678",apellido:"Laura Eulogio",nombre:"Santos",celular:"964906992",direccion:"Av. San Luis MzB L6"}];

      this.dtTrigger.next(null);

  }

}
