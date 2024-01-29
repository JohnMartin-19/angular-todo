import  { Component  } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl:  './app.component.html',
  standalone: true
})

export class TodoItem  {
  constructor(public task :string, public complete : boolean = false) {
    
  }


}
