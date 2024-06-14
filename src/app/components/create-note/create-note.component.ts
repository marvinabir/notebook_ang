import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class CreateNoteComponent {
  noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.noteForm.valid) {
      console.log(this.noteForm.value);
      this.router.navigate(['/']);
    }
  }
}
