import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorComponent } from './elevator.component';
import { InternalButtonComponent } from '../internal-button/internal-button.component';
import { DoorComponent } from '../door/door.component';

describe('ElevatorComponent', () => {
  let component: ElevatorComponent;
  let fixture: ComponentFixture<ElevatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ElevatorComponent,
        InternalButtonComponent,
        DoorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
