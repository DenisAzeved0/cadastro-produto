import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoNewModalComponent } from './produto-new-modal.component';

describe('ProdutoNewModalComponent', () => {
  let component: ProdutoNewModalComponent;
  let fixture: ComponentFixture<ProdutoNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
