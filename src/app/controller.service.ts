import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  currentFloor: number = 0;
  goals = [];
  transitionFloor: number = 0;

  constructor() { }

  move() {
    if (this.goals.length < 1) {
      return;
    }

    const nextGoal = parseInt(this.goals[0], 10);

    if (nextGoal === this.currentFloor) {
      this.goals.shift();
      this.move();
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
