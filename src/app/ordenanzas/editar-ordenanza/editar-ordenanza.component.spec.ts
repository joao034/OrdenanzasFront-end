import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenanzaComponent } from './editar-ordenanza.component';

describe('EditarOrdenanzaComponent', () => {
  let component: EditarOrdenanzaComponent;
  let fixture: ComponentFixture<EditarOrdenanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOrdenanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrdenanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
