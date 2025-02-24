import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosForosComponent } from './comentarios-foros.component';

describe('ComentariosForosComponent', () => {
  let component: ComentariosForosComponent;
  let fixture: ComponentFixture<ComentariosForosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosForosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentariosForosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
