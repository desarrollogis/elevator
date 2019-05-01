import { Component, Input, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-internal-button',
  templateUrl: './internal-button.component.html',
  styleUrls: ['./internal-button.component.scss']
})
export class InternalButtonComponent implements OnInit {
  @Input() floor: number = 0;

  constructor(public controllerService: ControllerService) {
  }

  ngOnInit() {
  }
}
