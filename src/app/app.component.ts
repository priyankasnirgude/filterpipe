import { Component } from '@angular/core';
import { Iplayer } from './shared/models/players.interface';
import { cricketers } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  searchValue!:string;

  title : string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique iusto, nesciunt dignissimos quos in eum repellat, dolore inventore quod officia fugiat aut. Reprehenderit exercitationem, veritatis vitae consequatur iure alias.`;
  courseObj = {
    title : "Sport",
    players : 12345678,
    rating : 4.89762345,
    releaseDate : new Date(2024, 2, 25)
  }

  playersArray = [
    {
      playername : 'Sachin Tendulkar',
      type : "cricketer",
      age : 51
    },
    {
      playername : 'Virat Kohli',
      type : "cricketer",
      age : 35
    },
    {
      playername : 'Rohit Sharma',
      type : "cricketer",
      age : 36
    }
  ]

  playersArr : Array<Iplayer> = cricketers
}


