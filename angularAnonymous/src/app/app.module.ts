import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.modules';
import{HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import {NotesService} from './notes/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
