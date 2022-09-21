import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-pagos',
  templateUrl: './listar-pagos.component.html',
  styleUrls: ['./listar-pagos.component.css']
})
export class ListarPagosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  txtValor:string="";

  pagos: any[] = [];

  constructor() { }

  addPago()
  {
    this.pagos.push({dni:"20151515",apellido:"Laura Morales",nombre:"Carlos",matricula:"100",marzo:"250",abril:"250",mayo:"250",junio:"250",julio:"250",agosto:"250",setiembre:"250",octubre:"250",noviembre:"250",diciembre:"250"});
  }

  removePago()
  {
    this.pagos.splice(this.pagos.length-1,1);
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };


      this.pagos=[{dni:"20151515",apellido:"Laura Morales",nombre:"Carlos",matricula:"100",marzo:"250",abril:"250",mayo:"250",junio:"250",julio:"250",agosto:"250",setiembre:"250",octubre:"250",noviembre:"250",diciembre:"250"}];

      this.dtTrigger.next(null);

  }

}
