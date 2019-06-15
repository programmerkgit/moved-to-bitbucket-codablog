import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: [ './perspective.component.scss' ]
})
export class PerspectiveComponent implements OnInit {

  ngClass = {
    'transform-z-100px': true,
    'transform-z-200px': false,
  };

  constructor() {
  }


  zoom() {
    this.ngClass[ 'transform-z-100px' ] = !this.ngClass[ 'transform-z-100px' ];
    this.ngClass[ 'transform-z-200px' ] = !this.ngClass[ 'transform-z-200px' ];
  }

  ngOnInit() {
  }
}
