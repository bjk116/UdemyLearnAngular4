import { Component, OnInit } from '@angular/core';

@Component({
	//to make it selector by attribute, ex <div app-servers></div>
  // selector: '[app-servers]',
  //To select byclass
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testServer';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
