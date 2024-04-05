import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente05',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {
  //Forms Model
  nome: string = '';
  cidade: string = '';

  //Reative Forms Model
  formulario = new FormGroup({
    nome : new FormControl(''),
    cidade : new FormControl('')
  });
}
