import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesZengakuComponent } from './actividades-zengaku.component';

describe('ActividadesZengakuComponent', () => {
  let component: ActividadesZengakuComponent;
  let fixture: ComponentFixture<ActividadesZengakuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesZengakuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadesZengakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
