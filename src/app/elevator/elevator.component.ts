import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {
  constructor(public controllerService: ControllerService) { }

  ngOnInit() {
  }
}
