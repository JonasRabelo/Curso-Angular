import { Component } from '@angular/core';
import { Componente10FormularioComponent } from "../componente10-formulario/componente10-formulario.component";
import { Componente10TabelaComponent } from "../componente10-tabela/componente10-tabela.component";

@Component({
    selector: 'app-componente10',
    standalone: true,
    templateUrl: './componente10.component.html',
    styleUrl: './componente10.component.css',
    imports: [Componente10FormularioComponent, Componente10TabelaComponent]
})
export class Componente10Component {
    nomes : string[] = ['Jonas', 'Estefânia', 'Miguel', 'Daniel', 'Sharon']

    cadastrar(nome : string){
        this.nomes.push(nome);
    }
}
