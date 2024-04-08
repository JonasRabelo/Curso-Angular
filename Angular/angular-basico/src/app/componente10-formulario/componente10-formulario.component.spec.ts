import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente10FormularioComponent } from './componente10-formulario.component';

describe('Componente10FormularioComponent', () => {
  let component: Componente10FormularioComponent;
  let fixture: ComponentFixture<Componente10FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente10FormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente10FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
