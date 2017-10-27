import { Component, OnInit } from '@angular/core';

@Component({
	//to make it selector by attribute, ex <div app-servers></div>
  // selector: '[app-servers]',
  //To select byclass
  // selector: '.app-servers',
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
