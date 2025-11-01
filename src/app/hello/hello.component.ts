import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {
    @Input() name: string;
 
    ngOnInit() {
      console.log('Hello init')
    }
    ngOnDestroy(){
      console.log('Hello destroy')
    }
}
