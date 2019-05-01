import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalButtonComponent } from './external-button.component';

describe('ExternalButtonComponent', () => {
  let component: ExternalButtonComponent;
  let fixture: ComponentFixture<ExternalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
