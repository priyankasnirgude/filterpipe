import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/players.interface';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: Iplayer[], searchVal : string){

    console.log(value);
    console.log(searchVal);
    
    if(!searchVal){
      return value
    }
    if(!value){
      return []
    }

    let filterArr = value.filter(player => {
      return player.team.toLowerCase().includes(searchVal)
    })

    return filterArr
    

  }

}
