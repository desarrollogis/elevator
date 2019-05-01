import { Component, Input, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-external-button',
  templateUrl: './external-button.component.html',
  styleUrls: ['./external-button.component.scss']
})
export class ExternalButtonComponent implements OnInit {
  @Input() floor: number = 0;
  @Input() type: string = '';

  constructor(public controllerService: ControllerService) { }

  ngOnInit() {
  }
}
