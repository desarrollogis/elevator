import { Component, Input, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-internal-button',
  templateUrl: './internal-button.component.html',
  styleUrls: ['./internal-button.component.scss']
})
export class InternalButtonComponent implements OnInit {
  @Input() floor: string = '';
  label: string = '';

  constructor(public controllerService: ControllerService) {}

  ngOnInit() {
    switch (this.floor) {
      case '-2':
        this.label = '><';
        break;
      case '-1':
        this.label = '<>';
        break;
      default:
        this.label = this.floor;
        break;
    }
  }
}
