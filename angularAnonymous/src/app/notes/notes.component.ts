import { Component, OnInit } from '@angular/core';
import{Notes} from './Notes';
import{NotesService} from './notes.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor( private  notes_service: NotesService) { }

  ngOnInit() {
  }
  new_note = new Notes;
  addNote()
  {
  console.log(this.new_note) ;
  this.notes_service.add(this.new_note).then(data=>console.log(data)).catch(err=>console.log(err));
  this.new_note=new Notes; 

  }

}
