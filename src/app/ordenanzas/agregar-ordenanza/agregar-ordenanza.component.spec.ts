import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOrdenanzaComponent } from './agregar-ordenanza.component';

describe('AgregarOrdenanzaComponent', () => {
  let component: AgregarOrdenanzaComponent;
  let fixture: ComponentFixture<AgregarOrdenanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarOrdenanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarOrdenanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
