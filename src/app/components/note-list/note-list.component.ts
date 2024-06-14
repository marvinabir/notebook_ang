import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class NoteListComponent implements OnInit {
  notes = [
    
    { id: 1, title: 'Note 1', content: 'This is the first note' },
    { id: 2, title: 'Note 2', content: 'This is the second note' }
  ];

  constructor() {}

  ngOnInit(): void {}

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
