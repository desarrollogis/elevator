import { Component, Input, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-external-button',
  templateUrl: './external-button.component.html',
  styleUrls: ['./external-button.component.scss']
})
export class ExternalButtonComponent implements OnInit {
  @Input() floor: string = '0';
  @Input() type: string = '';

  constructor(public controllerService: ControllerService) {}

  ngOnInit() {
  }

  click() {
    this.controllerService.go(this.floor);
  }
}
