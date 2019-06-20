import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.scss' ]
})
export class NavigationComponent implements OnInit {

  @Input() links: { url: string, label?: string }[] = [
    {url: '/', label: 'Home'},
    {url: '/git', label: 'Git'},
    {url: '/bitcoin', label: 'Bitcoin'},
    {url: '/test', label: 'Test'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
