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

  ngAfterViewChecked() {
    const elements = document.getElementsByClassName('elevator');

    console.log(elements.length);
    for (let i = 0, m = elements.length; i < m; ++i) {
      elements[i].addEventListener('transitionend', () => {
        this.controllerService.currentFloor = this.controllerService.transitionFloor;
        this.controllerService.move();
      });
    }
  }
}
