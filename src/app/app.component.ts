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
 isDanger = true;
 isWarning = false;
 classes = "box red-border yellow-background"

  handler(){
    console.log("clicked")
  }
}
