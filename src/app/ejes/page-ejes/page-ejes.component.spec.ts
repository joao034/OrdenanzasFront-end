import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEjesComponent } from './page-ejes.component';

describe('PageEjesComponent', () => {
  let component: PageEjesComponent;
  let fixture: ComponentFixture<PageEjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEjesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
