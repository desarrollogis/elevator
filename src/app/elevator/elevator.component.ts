import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit {
  floor: number = 0;

  constructor() { }

  ngOnInit() {
  }

  move(floor: number) {
    this.floor = floor;
  }
}
