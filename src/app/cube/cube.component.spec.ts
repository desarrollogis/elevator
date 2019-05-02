import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeComponent } from './cube.component';
import { ElevatorComponent } from '../elevator/elevator.component';
import { FloorIndicatorComponent } from '../floor-indicator/floor-indicator.component';
import { ExternalButtonComponent } from '../external-button/external-button.component';
import { InternalButtonComponent } from '../internal-button/internal-button.component';
import { DoorComponent } from '../door/door.component';

describe('CubeComponent', () => {
  let component: CubeComponent;
  let fixture: ComponentFixture<CubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CubeComponent,
        ElevatorComponent,
        FloorIndicatorComponent,
        ExternalButtonComponent,
        InternalButtonComponent,
        DoorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
