import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEjeComponent } from './editar-eje.component';

describe('EditarEjeComponent', () => {
  let component: EditarEjeComponent;
  let fixture: ComponentFixture<EditarEjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
