import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}