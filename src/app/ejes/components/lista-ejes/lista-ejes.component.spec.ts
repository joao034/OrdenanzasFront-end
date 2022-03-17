import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEjesComponent } from './lista-ejes.component';

describe('ListaEjesComponent', () => {
  let component: ListaEjesComponent;
  let fixture: ComponentFixture<ListaEjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
