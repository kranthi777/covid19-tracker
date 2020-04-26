import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesListService } from './countries-list/countries-list-service';
import { AlertComponent } from './countries-list/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountriesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
