import { Component, OnInit, ElementRef } from '@angular/core';
import produtos from '../produtos'

declare const $;

@Component({
  selector: 'produto-new-modal',
  templateUrl: './produto-new-modal.component.html',
  styleUrls: ['./produto-new-modal.component.css']
})
export class ProdutoNewModalComponent implements OnInit {

  produto = '';
  descricao = '';
  valor = 0;
  peso = 0;
  produtos = produtos;
  
  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
  }

  show(){
    $(this.getDivModal()).modal('show');
  }

  private getDivModal(): HTMLElement{
    const nativeElement:HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }

  addProduto(){
    this.produtos.push({
      produto:this.produto,
      descricao:this.descricao,
      valor:this.valor,
      peso:this.peso
    });
    this.clearFields();
  }

  clearFields(){
    this.produto = '';
    this.descricao = '';
    this.valor = 0;
    this.peso = 0;
    $(this.getDivModal()).modal('hide');
  }
}
