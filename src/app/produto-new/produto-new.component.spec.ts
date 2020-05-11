import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoNewComponent } from './produto-new.component';

describe('ProdutoNewComponent', () => {
  let component: ProdutoNewComponent;
  let fixture: ComponentFixture<ProdutoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
