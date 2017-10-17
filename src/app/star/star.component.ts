import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input()// StarComponent rating属性由其父组件传递给她
  private rating: number = 0;
  private stars: boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i < 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
