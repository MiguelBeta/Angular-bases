import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krilling',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegueta',
    power: 7500
  }
];

  onNewCharacter( character: Character ): void{
    this.characters.push(character);
  }

  onDeleteCharacter(index: number){
    this.characters.splice(index,1);
  }


}