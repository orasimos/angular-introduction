import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chuck } from '../app.interfaces';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
  joke = '';
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    this.http
      .get<Chuck>('https://api.chucknorris.io/jokes/random')
      .subscribe((joke: Chuck) => {
        this.joke = joke.value;
        console.log(joke.value);
      });
  }
}
