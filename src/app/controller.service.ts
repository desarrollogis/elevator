import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  goals = [];
  currentFloor: number = 0;
  doorStatus = 'close';
  transitionFloor: number = 0;

  constructor() { }

  move() {
    if (this.goals.length < 1) {
      return;
    }
    if (this.doorStatus === 'open') {
      return;
    }

    const nextGoal = parseInt(this.goals[0], 10);

    if (nextGoal === this.currentFloor) {
      this.goals.shift();
      this.doorStatus = 'open';
      return;
    }
    if (nextGoal < this.currentFloor) {
      this.transitionFloor = this.currentFloor - 1;
    } else {
      this.transitionFloor = this.currentFloor + 1;
    }
  }

  go(floor: number) {
    this.goals.push(floor);
    this.move();
  }
}
