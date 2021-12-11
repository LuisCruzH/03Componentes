import { Component, OnInit } from '@angular/core';
interface Componente{
icon:string;
name: string;
redirectTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
componentes : Componente[] =[
  {
    icon:'american-football-outline',
    name:'Action Sheet',
    redirectTo:'/action-sheet'
  },
  {
    icon:'alert-circle-outline',
    name:'Alert',
    redirectTo:'/alert'
  },
  {
    icon:'beaker-outline',
    name:'Profile',
    redirectTo:'/avatar'
  },
  {
    icon:'beaker-outline',
    name:'Buttons',
    redirectTo:'/button'
  },
  {
    icon:'card-outline',
    name:'Cards',
    redirectTo:'/card'
  },
  {
    icon:'checkmark-circle-outline',
    name:'CheckBox',
    redirectTo:'/check'
  },
  {
    icon:'calendar-outline',
    name:'Calendario',
    redirectTo:'/date-time'
  },

];

  constructor() { }

  ngOnInit() {
  }

}
