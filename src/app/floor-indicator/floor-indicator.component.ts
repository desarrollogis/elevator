import { Component, Input, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-floor-indicator',
  templateUrl: './floor-indicator.component.html',
  styleUrls: ['./floor-indicator.component.scss']
})
export class FloorIndicatorComponent implements OnInit {
  constructor(private controllerService: ControllerService) { }

  ngOnInit() {
  }
}
