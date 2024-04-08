import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente10-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente10-tabela.component.html',
  styleUrl: './componente10-tabela.component.css'
})
export class Componente10TabelaComponent {
  @Input() vetor : string[] = [];
}
