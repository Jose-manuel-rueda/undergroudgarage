import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosOcasionComponent } from './vehiculos-ocasion.component';

describe('VehiculosOcasionComponent', () => {
  let component: VehiculosOcasionComponent;
  let fixture: ComponentFixture<VehiculosOcasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosOcasionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosOcasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
