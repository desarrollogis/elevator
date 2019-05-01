import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnInit {
  events = false;

  constructor(public controllerService: ControllerService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.events) {
      return;
    }

    const elements = document.getElementsByClassName('door');

    for (let i = 0, m = elements.length; i < m; ++i) {
      this.events = true;
      elements[i].addEventListener('transitionend', () => {
        if (this.controllerService.doorStatus === 'open') {
          setTimeout(() => {
            this.controllerService.doorStatus = 'close';
          }, 3000);
        } else {
          this.controllerService.move();
        }
      });
    }
  }
}
