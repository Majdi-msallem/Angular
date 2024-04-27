import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  firstName = ' Surender';
  defaultVal ='Suren'

  valueToComponent(e:any){
console.log(e.target.value);
  }

  changeValue (e:any){
    console.log(e.target.value);
  }
}
