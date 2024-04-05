import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  //Variável com o caminho da imagem
  imagem:string = 'assets/dia.jpg';

  //Função para alternar a imagem
  alterarImgem(){
    if(this.imagem === 'assets/dia.jpg'){
      this.imagem = 'assets/noite.jpg';
    }else{
      this.imagem = "assets/dia.jpg";
    }
  }

  //Variável para exibir ou ocultar o quadrado
  exibir: boolean = true;

  //Função para exibir ou ocultar o quadrado
  acao(){
    this.exibir = !this.exibir;
  }

  //Vetor de nomes
  nomes: string[] = ['Jonas', 'Joel', 'Oseias', 'Miguel'];
}
