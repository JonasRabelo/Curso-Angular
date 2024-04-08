import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  nome : string = 'Jonas';

  media : number = 0;

  calculo(n1 : number, n2 : number){
    return (n1 + n2) / 2
  }
}
