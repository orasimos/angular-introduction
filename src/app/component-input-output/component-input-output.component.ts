import { Component } from '@angular/core';

export interface User {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})
export class ComponentInputOutputComponent {
  userData: User[] = [
    {firstname: "John", lastname: "Doe", age: 20},
    {firstname: "Jane", lastname: "Smith", age: 19},
    {firstname: "Jesus", lastname: "Christ", age: 33},
    {firstname: "Jack", lastname: "Reaper", age: 27}
  ]

  onDeleteUser(index: number) {
    console.log(index);
    this.userData.splice(index, 1);
  }
}
