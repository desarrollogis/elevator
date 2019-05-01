import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  currentFloor: number = 0;

  constructor() { }

  move(floor: number) {
    this.currentFloor = floor;
  }
}
