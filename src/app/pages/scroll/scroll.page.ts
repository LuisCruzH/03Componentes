import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor() {}

  ngOnInit() {}

  loadData() {
    /* console.log(event); */

    setTimeout(() => {
      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
      }
      const nuevoArr = Array(15);
      this.data.push(...nuevoArr);
      //event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);
  }
}
