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

  public open() {
    if (this.transitionFloor !== this.currentFloor) {
      return;
    }
    this.doorStatus = 'open';
  }

  public close() {
    if (this.doorStatus === 'open') {
      this.doorStatus = 'close';
    }
  }

  private _move() {
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

  public arrivedToFloor() {
    this.currentFloor = this.transitionFloor;
    this._move();
  }

  private _addGoal(floor: number) {
    if (this.goals.findIndex(element => (element === floor)) > -1) {
      return;
    }
    this.goals.push(floor);
  }

  public go(floor: string) {
    const nFloor = parseInt(floor, 10);

    switch (nFloor) {
      case 0:
      case 1:
      case 2:
      case 3:
        if (nFloor === this.currentFloor) {
          this.open();
        } else {
          this._addGoal(nFloor);
          this._move();
        }
        break;
    }
  }
}
