import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/index';
import { UserService } from './user.service';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { BillComponent } from './bill/bill.component';
import { HistoryComponent } from './history/history.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BillComponent,
    HistoryComponent,
    NavComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {

    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
