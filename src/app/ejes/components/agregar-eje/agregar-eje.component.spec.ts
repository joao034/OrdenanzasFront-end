import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEjeComponent } from './agregar-eje.component';

describe('AgregarEjeComponent', () => {
  let component: AgregarEjeComponent;
  let fixture: ComponentFixture<AgregarEjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
