import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectosAcademicosComponent } from './aspectos-academicos.component';

describe('AspectosAcademicosComponent', () => {
  let component: AspectosAcademicosComponent;
  let fixture: ComponentFixture<AspectosAcademicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AspectosAcademicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AspectosAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
