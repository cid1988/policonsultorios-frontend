import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'policonsultorios';

  constructor(private route: Route){

  }

  goToRoom = () => {
    this.route.navigate(['/', uuidv4()]);
  }
}
