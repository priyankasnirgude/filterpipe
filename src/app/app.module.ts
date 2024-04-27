import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { agePipe } from './shared/pipes/age.pipe';
import { FilterPlayersPipe } from './shared/pipes/filter-players.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    agePipe,
    FilterPlayersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
