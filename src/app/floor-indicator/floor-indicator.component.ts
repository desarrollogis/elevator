import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-indicator',
  templateUrl: './floor-indicator.component.html',
  styleUrls: ['./floor-indicator.component.scss']
})
export class FloorIndicatorComponent implements OnInit {
  @Input() floor: number = 0;

  constructor() { }

  ngOnInit() {
  }
}
