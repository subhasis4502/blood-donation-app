import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarReistrationComponent } from './donar-reistration.component';

describe('DonarReistrationComponent', () => {
  let component: DonarReistrationComponent;
  let fixture: ComponentFixture<DonarReistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarReistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarReistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
