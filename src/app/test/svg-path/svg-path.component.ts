import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-path',
  templateUrl: './svg-path.component.html',
  styleUrls: [ './svg-path.component.scss' ]
})
export class SvgPathComponent implements OnInit {

  data = [
    {
      svg: {
        width: 200,
        height: 200
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
