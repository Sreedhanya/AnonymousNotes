import { Component, OnInit } from '@angular/core';
import{Notes} from './../notes/notes';
import{NotesService} from './../notes/notes.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
note_list: Array<Notes>;
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.get_all_lists().then(data=>this.note_list=data
    )
     .catch(err=>console.log(err))
  }


}
