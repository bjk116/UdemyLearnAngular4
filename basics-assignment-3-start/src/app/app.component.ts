import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	display = false;
	clicks=[];
	count = 1;

	getInnerText(){
		if(this.display){
			return "Hide Text";
		} else {
			return "Display Text";
		}
	}

	changeDisplay() {
		this.display = (this.display==true) ? false : true;
		this.clicks.push(new Date());
	}
}
