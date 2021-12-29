import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Batman', 'Superman', 'Mujer Maravilla', 'Flash'];

  constructor() { }

  ngOnInit() {
  }
  doReorder(event: any) {
    console.log(event);

    const itMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itMover);

    event.detail.complete();
    console.log(this.personajes);
  }

}
