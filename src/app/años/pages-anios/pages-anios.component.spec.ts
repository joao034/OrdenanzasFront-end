import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAniosComponent } from './pages-anios.component';

describe('PagesAniosComponent', () => {
  let component: PagesAniosComponent;
  let fixture: ComponentFixture<PagesAniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesAniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesAniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
