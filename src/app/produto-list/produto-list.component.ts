import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProdutoNewModalComponent } from '../produto-new-modal/produto-new-modal.component';
import { ChangeDetectorRef } from '@angular/core';
import produtos from '../produtos';
import * as XLSX from 'xlsx';

@Component({
  selector: 'produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  
  @ViewChild(ProdutoNewModalComponent)
  produtoNewModal:ProdutoNewModalComponent;

  produtos = produtos;

  constructor(private changeDetectorRef: ChangeDetectorRef, private element: ElementRef) { }

  ngOnInit(): void {
  }

  openNewModal(){
    this.produtoNewModal.show();
  }


  exportToXLS() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementsByClassName('table')[0]);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    delete(ws['01']);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'produtos.xls');
  };
}
