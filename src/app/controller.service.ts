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
    if (this.transitionFloor !== this.currentFloor) {
      return;
    }

    const nextGoal = parseInt(this.goals[0], 10);

    if (nextGoal === -1) {
      this.goals.shift();
      this.doorStatus = 'open';
      return;
    }
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

  addGoal(floor: string) {
    if ((this.goals.length > 0) && (this.goals[this.goals.length - 1] === floor)) {
      return;
    }
    this.goals.push(floor);
  }

  go(floor: string) {
    switch (floor) {
      case '-2':
        if (this.doorStatus === 'open') {
          this.doorStatus = 'close';
        }
        return;
      case '0':
      case '1':
      case '2':
      case '3':
        this.addGoal(floor);
      case '-1':
        this.addGoal('-1');
        this.move();
        break;
    }
  }
}
