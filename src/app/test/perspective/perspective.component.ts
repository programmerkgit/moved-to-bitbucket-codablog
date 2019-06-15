import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perspective',
  templateUrl: './perspective.component.html',
  styleUrls: [ './perspective.component.scss' ]
})
export class PerspectiveComponent implements OnInit {

  ngClass = {
    'perspective-500': true,
    'perspective-100': false,
    'p-top-left': false
  };
  portClass = {
    'p-top-left': false
  };

  constructor() {
  }

  onClick() {
    this.ngClass[ 'p-top-left' ] = !this.ngClass[ 'p-top-left' ];
    this.ngClass[ 'perspective-100' ] = !this.ngClass[ 'perspective-100' ];
    this.ngClass[ 'perspective-500' ] = !this.ngClass[ 'perspective-500' ];
  }

  ngOnInit() {
  }
}
