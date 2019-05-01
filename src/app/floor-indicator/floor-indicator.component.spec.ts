import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorIndicatorComponent } from './floor-indicator.component';

describe('FloorIndicatorComponent', () => {
  let component: FloorIndicatorComponent;
  let fixture: ComponentFixture<FloorIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
