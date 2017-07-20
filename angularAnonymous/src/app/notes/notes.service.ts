import { Injectable } from '@angular/core';
import{ Http } from '@angular/http';
import{Notes} from './Notes';
import "rxjs";
@Injectable()
export class NotesService {

  constructor(private http: Http) 
  {
    
   }
   add(note : Notes)
   {
    return this.http.post("/",note).
     map(data=> data.json()).toPromise();
   }
get_all_lists()
{
 return this.http.get("/show").map(data=>data.json()).toPromise();
}
}
