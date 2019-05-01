import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {
  constructor(public controllerService: ControllerService) { }

  ngOnInit() {
  }
}
