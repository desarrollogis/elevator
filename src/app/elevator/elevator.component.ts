import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {
  events = false;

  constructor(public controllerService: ControllerService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.events) {
      return;
    }

    const elements = document.getElementsByClassName('elevator');

    for (let i = 0, m = elements.length; i < m; ++i) {
      this.events = true;
      elements[i].addEventListener('transitionend', () => {
        this.controllerService.currentFloor = this.controllerService.transitionFloor;
        this.controllerService.move();
      });
    }
  }
}
