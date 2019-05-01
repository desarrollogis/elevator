import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-button',
  templateUrl: './internal-button.component.html',
  styleUrls: ['./internal-button.component.scss']
})
export class InternalButtonComponent implements OnInit {
  @Input() type: string = '';

  constructor() {
  }

  ngOnInit() {
  }
}
