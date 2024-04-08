import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente10-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente10-formulario.component.html',
  styleUrl: './componente10-formulario.component.css'
})
export class Componente10FormularioComponent {
  nome : string = ''
  @Output() funcao = new EventEmitter<string>();

  cadastrarNome(){
    this.funcao.emit(this.nome);
  }
}
