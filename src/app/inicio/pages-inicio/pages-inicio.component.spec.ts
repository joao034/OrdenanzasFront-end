import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesInicioComponent } from './pages-inicio.component';

describe('PagesInicioComponent', () => {
  let component: PagesInicioComponent;
  let fixture: ComponentFixture<PagesInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
