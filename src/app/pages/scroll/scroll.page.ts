import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  data: any[] = Array(20);

  constructor() {}

  ngOnInit() {}

  loadData(event){
    console.log(event);
    
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(... nuevoArr);
      event.target.complete();  
    }, 1500);
  }
}
