import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoNewComponent } from './produto-new/produto-new.component';
import { FormsModule } from '@angular/forms';
import { ProdutoNewModalComponent } from './produto-new-modal/produto-new-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoNewComponent,
    ProdutoNewModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
