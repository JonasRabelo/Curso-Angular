import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {
  //Variável de média
  media: number = 8;

  nomes: string[] = ['Miguel', 'Jaqueline', 'Samara', 'Ivanete']

  linguagem: string = 'HTML';
}
