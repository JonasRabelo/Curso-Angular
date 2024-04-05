import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../model/Produto';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ProdutoService } from '../service/produto.service';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


registerLocaleData(ptBr);

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  btnCadastrar : boolean = true;
  constructor(private servico: ProdutoService){}
 
  //Objeto de Produtos
  produtoForm = new FormGroup({
    id    : new FormControl(null, [Validators.required, Validators.min(0)]),
    nome  : new FormControl('', [Validators.required, Validators.minLength(3)]),
    valor : new FormControl(null, [Validators.required, Validators.min(0)])
  });
  
  produtos: Produto[] = [];

  ngOnInit(){
    this.selecionar();
  }


  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.produtos = retorno});
  }

  cadastrar(){
    // Recupera o último ID da lista de produtos
    const ultimoId = this.produtos.length > 0 ? this.produtos[this.produtos.length - 1].id : 0;
    // Incrementa o ID para o próximo
    const novoId = ultimoId + 1;

    // Define o novo ID no formulário antes de enviar
    this.produtoForm.patchValue({ id: novoId });

    this.servico.cadastrar(this.produtoForm.value as Produto).subscribe(retorno => {
      this.produtos.push(retorno);
      this.produtoForm.reset();
    })
  }

  selecionarProduto(indice : number){
    this.produtoForm.setValue({
      id : this.produtos[indice].id,
      nome : this.produtos[indice].nome,
      valor : this.produtos[indice].valor
    });

    this.btnCadastrar = false;
  }

  alterar(){
    this.servico.alterar(this.produtoForm.value as Produto).subscribe(retorno => {
      //Obter o índice do objeto alterado
      let indiceAlterado = this.produtos.findIndex(obj => {
        return this.produtoForm.value.id === obj.id;
      });

      //alterar valor
      this.produtos[indiceAlterado] = retorno;

      this.produtoForm.reset();
      this.btnCadastrar = true;
    });
  }

  remover(){
    this.servico.remover(this.produtoForm.value.id).subscribe(() => {});

    //Obter o índice do vetor que será removido
    let indiceRemovido = this.produtos.findIndex(obj => {
      return obj.id === this.produtoForm.value.id;
    });

    //Remover objeto do vetor
    this.produtos.splice(indiceRemovido, 1);

    this.produtoForm.reset();
    this.btnCadastrar = true;
  }

}
