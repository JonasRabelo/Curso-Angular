import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-componente09',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './componente09.component.html',
  styleUrl: './componente09.component.css'
})
export class Componente09Component {
  button01 : number = 0;
  button02 : number = 0;
  button03 : number = 0;
  button04 : number = 0;
  clicksTotals : number = 0;
  visibleTotalClicks : boolean = false;

  incrementButton01(){
    this.button01++;
    this.visibleTotalClicks = false;
  }

  incrementButton02(){
    this.button02++;
    this.visibleTotalClicks = false;
  }
  
  incrementButton03(){
    this.button03++;
    this.visibleTotalClicks = false;
  }

  incrementButton04(){
    this.button04++;
    this.visibleTotalClicks = false;
  }

  sumClicksTotals(){
    this.clicksTotals = this.button01 + this.button02 + this.button03 + this.button04
    this.visibleTotalClicks = true;
  }
}
