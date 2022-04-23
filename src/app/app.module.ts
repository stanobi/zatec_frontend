import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from 'src/shared/http.module';
import { environment } from '../environments/environment';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    PeopleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule.forRoot({ environment }),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
