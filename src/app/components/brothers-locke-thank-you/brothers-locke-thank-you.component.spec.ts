import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrothersLockeThankYouComponent } from './brothers-locke-thank-you.component';

describe('BrothersLockeThankYouComponent', () => {
  let component: BrothersLockeThankYouComponent;
  let fixture: ComponentFixture<BrothersLockeThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrothersLockeThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrothersLockeThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
