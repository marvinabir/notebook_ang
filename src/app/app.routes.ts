import { Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
// import { EditNoteComponent } from './components/edit-note/edit-note.component';

export const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'create', component: CreateNoteComponent },
  { path: 'notes/:id', component: NoteDetailComponent }
];
