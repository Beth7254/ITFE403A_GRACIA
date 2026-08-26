import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
}