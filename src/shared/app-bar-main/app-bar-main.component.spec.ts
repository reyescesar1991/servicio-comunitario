import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarMainComponent } from './app-bar-main.component';

describe('AppBarMainComponent', () => {
  let component: AppBarMainComponent;
  let fixture: ComponentFixture<AppBarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBarMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
