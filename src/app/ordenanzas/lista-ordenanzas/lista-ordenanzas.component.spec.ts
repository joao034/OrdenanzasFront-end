import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenanzasComponent } from './lista-ordenanzas.component';

describe('ListaOrdenanzasComponent', () => {
  let component: ListaOrdenanzasComponent;
  let fixture: ComponentFixture<ListaOrdenanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOrdenanzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrdenanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
