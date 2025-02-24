import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponenteComponent } from './sub-componente.component';

describe('SubComponenteComponent', () => {
  let component: SubComponenteComponent;
  let fixture: ComponentFixture<SubComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
