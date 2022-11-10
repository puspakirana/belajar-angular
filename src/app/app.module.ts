import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldUrlComponent } from './hello-world-url.component';
import { HelloWorldUrlInterpolation } from './hello-world-interpolation';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldUrlComponent,
    HelloWorldUrlInterpolation
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
