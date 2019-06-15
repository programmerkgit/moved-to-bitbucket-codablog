import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const m = Math.random();

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: [ './test.component.scss' ],
  host: {
    '[class.p-5]': 'm < 0.9'
  },
  // encapsulation: ViewEncapsulation.Native
})
export class TestComponent implements OnInit {

  m = Math.random();

  constructor() {
  }

  ngOnInit() {
  }


}
