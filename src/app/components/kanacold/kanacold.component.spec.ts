import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanacoldComponent } from './kanacold.component';

describe('KanacoldComponent', () => {
  let component: KanacoldComponent;
  let fixture: ComponentFixture<KanacoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanacoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanacoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
