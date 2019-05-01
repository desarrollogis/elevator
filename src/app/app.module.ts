import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { ElevatorComponent } from './elevator/elevator.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    ElevatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
