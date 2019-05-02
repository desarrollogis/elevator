import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private _doorStatus = 'closed';
  private _goals = [];
  private _currentFloor: number = 0;
  private _transitionFloor: number = 0;

  constructor() { }

  public doorEvent() {
    if (this._doorStatus === 'opening') {
      this._doorStatus = 'open';
      setTimeout(() => {
        if (this._doorStatus === 'open') {
          this._doorStatus = 'closing';
        }
      }, 3000);
      return;
    }
    if (this._doorStatus === 'closing') {
      this._doorStatus = 'closed';
    }
  }

  public open() {
    if (this._doorStatus === 'open') {
      return;
    }
    if (this._transitionFloor !== this._currentFloor) {
      return;
    }
    this._doorStatus = 'opening';
  }

  public close() {
    if (this._doorStatus === 'closed') {
      return;
    }
    this._doorStatus = 'closing';
  }

  private _move() {
    if (this._goals.length < 1) {
      return;
    }
    if (this._doorStatus !== 'closed') {
      return;
    }
    if (this._transitionFloor !== this._currentFloor) {
      return;
    }

    const nextGoal = this._goals[0];

    if (nextGoal === this._currentFloor) {
      this._goals.shift();
      this.open();
      return;
    }
    if (nextGoal < this._currentFloor) {
      this._transitionFloor = this._currentFloor - 1;
    } else {
      this._transitionFloor = this._currentFloor + 1;
    }
  }

  public arrivedToFloor() {
    this._currentFloor = this._transitionFloor;
    this._move();
  }

  private _addGoal(floor: number) {
    if (this._goals.findIndex(element => (element === floor)) > -1) {
      return;
    }
    this._goals.push(floor);
  }

  public go(floor: string) {
    const nFloor = parseInt(floor, 10);

    switch (nFloor) {
      case 0:
      case 1:
      case 2:
      case 3:
        if (nFloor === this._currentFloor) {
          this.open();
        } else {
          this._addGoal(nFloor);
          this._move();
        }
        break;
    }
  }

  public getTransitionFloor() {
    return this._transitionFloor;
  }

  public getDoorStatus() {
    return this._doorStatus;
  }
}
