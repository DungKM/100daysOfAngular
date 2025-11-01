import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100day';
  name ='angular 9'
  //DATA BINDING
  user = {
    name: 'Dũng',
    age: 10
  }

  handler(){
    console.log("clicked")
  }
}
