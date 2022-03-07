import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrdenanzasComponent } from './page-ordenanzas.component';

describe('PageOrdenanzasComponent', () => {
  let component: PageOrdenanzasComponent;
  let fixture: ComponentFixture<PageOrdenanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOrdenanzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrdenanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
