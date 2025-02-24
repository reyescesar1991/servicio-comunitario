import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNuevoComponenteComponent } from './mi-nuevo-componente.component';

describe('MiNuevoComponenteComponent', () => {
  let component: MiNuevoComponenteComponent;
  let fixture: ComponentFixture<MiNuevoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiNuevoComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiNuevoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
