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

    const nextGoal = this.goals[0];

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

  private _addGoal(floor: number) {
    if (this.goals.findIndex(element => (element === floor)) > -1) {
      return;
    }
    this.goals.push(floor);
    console.log(this.goals);
  }

  public go(floor: string) {
    const nFloor = parseInt(floor, 10);

    switch (nFloor) {
      case -2:
        if (this.doorStatus === 'open') {
          this.doorStatus = 'close';
        }
        return;
      case 0:
      case 1:
      case 2:
      case 3:
        if (nFloor != this.currentFloor) {
          this._addGoal(nFloor);
        }
      case -1:
        if (this.doorStatus === 'close') {
          this._addGoal(-1);
        }
        this.move();
        break;
    }
  }
}
