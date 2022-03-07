import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDepartamentosComponent } from './page-departamentos.component';

describe('PageDepartamentosComponent', () => {
  let component: PageDepartamentosComponent;
  let fixture: ComponentFixture<PageDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
