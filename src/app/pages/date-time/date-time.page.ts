import { Component, ErrorHandler, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues=[2020, 2021, 2022]
  customPickerOptions = {
    buttons: [
      {
        text:'hola',
        handler: (event) =>{
          console.log(event);
        }
      },
      {
        text:'mundo',
        handler:() =>{
          console.log("Log!");
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(event);
    //recuperar la fecha 
    console.log(new Date (event.detail.value));

  }
}
