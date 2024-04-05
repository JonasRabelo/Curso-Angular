import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {

  //Função para exibir uma mensagem
  mensagem(){
    alert('Hello Word!')
  }

  //Variável contendo uma linguagem
  linguagem: string = "HTML";

  //Variável lógica
  condicao: boolean = true;

  inverteColor(){
    this.condicao = !this.condicao;
  }

  //Lista de aprovados
  lista: string[] = ['Aprovado', 'Reprovado', 'Aprovado'];
}
