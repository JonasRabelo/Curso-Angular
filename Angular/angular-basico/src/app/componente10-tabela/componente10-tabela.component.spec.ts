import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente10TabelaComponent } from './componente10-tabela.component';

describe('Componente10TabelaComponent', () => {
  let component: Componente10TabelaComponent;
  let fixture: ComponentFixture<Componente10TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente10TabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente10TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
