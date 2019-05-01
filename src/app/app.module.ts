import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { InternalButtonComponent } from './internal-button/internal-button.component';
import { ExternalButtonComponent } from './external-button/external-button.component';
import { FloorIndicatorComponent } from './floor-indicator/floor-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    ElevatorComponent,
    InternalButtonComponent,
    ExternalButtonComponent,
    FloorIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
