import { Component, OnInit } from '@angular/core';
import {PatientsService} from './patients.service';
import {Observable} from 'rxjs/Rx';
// import * as $ from 'jquery';
// import * as DataTable from 'datatables.net';
// import {DataTable} from 'datatables.net';
declare var $: any;


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit {

  public patients;
  constructor(private _patientsService: PatientsService) { }

  ngOnInit() {
    this.getPatients();
  }
  getPatients() {
   this._patientsService.getPatients().subscribe(
     data => { this.patients = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }
  ngAfterViewInit(){
    $(document).ready(function() {
      // $('#example2').DataTable({
      //   'paging'      : true,
      //   'lengthChange': false,
      //   'searching'   : true,
      //   'ordering'    : true,
      //   'info'        : true,
      //   'autoWidth'   : false
      // })
      $('#example2').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://dev.dietme.it/wp-json/dm/v1/dm-patient",
            "type": "GET",
            // "dataType": "jsonp",
            "beforeSend": function(xhr){
              xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kZXYuZGlldG1lLml0IiwiaWF0IjoxNTIyMzU5NjI0LCJuYmYiOjE1MjIzNTk2MjQsImV4cCI6MTUyMjk2NDQyNCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMyJ9fX0.SULKygyviCuP9csdcvECIl-ZaRSpmknU_INJr5aPjSY");
            }
          },
        "columns": [
           { "data": "name" },
           { "data": "surname" },
           { "data": "city" },
           { "data": "telephone" },
           { "data": "note" },
        ]
      });
    });
  }

}
