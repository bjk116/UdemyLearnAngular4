import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	userName = '';
	
	getClickStatus() {
		if(this.userName.length>0) {
			return false;
		} else {
			return true;
		}
	}

	resetUsername() {
		this.userName = '';
	}
}