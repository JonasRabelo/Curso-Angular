import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
    selector: 'app-componente06',
    standalone: true,
    templateUrl: './componente06.component.html',
    styleUrl: './componente06.component.css',
    imports: [CommonModule, MediaPipe]
})
export class Componente06Component {
  //texto
  nome: string = 'Jonas';

  //Obj
  obj : any = {'nome': 'Jonas', 'idade': 260};

  //vetor de objetos
  alunos: any = [
    {'nome': 'Jonas', 'nota1': 8, 'nota2': 9},
    {'nome': 'Julio', 'nota1': 7, 'nota2': 8},
    {'nome': 'Letícia', 'nota1': 3, 'nota2': 2},
    {'nome': 'Ricardo', 'nota1': 7, 'nota2': 7}
  ];
}
