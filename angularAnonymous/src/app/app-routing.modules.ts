import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesListComponent} from './notes/notes-list/notes-list.component';
const routes: Routes = [{
 path:'notes', component: NotesListComponent},
 {path:"",pathMatch:"full",redirectTo:"/"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }