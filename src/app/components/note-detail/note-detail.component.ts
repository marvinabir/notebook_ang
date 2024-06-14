import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class NoteDetailComponent  {
  note: any;
  notes = [
    
    { id: 1, title: ' Note 1', content: 'This is the first  note' },
    { id: 2, title: ' Note 2', content: 'This is the second  note' }
  ];

  constructor(private route: ActivatedRoute) {}

}
