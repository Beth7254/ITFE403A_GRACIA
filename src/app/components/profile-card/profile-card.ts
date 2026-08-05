import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})

export class ProfileCard {
  studentName = 'Mary Beth Gracia';
  studentNumber = '23017773';
  course = 'BS Information Technology';
  yearLevel = '4th Year';
  section = '___';
  nickname = 'beth';
  grade = '__';
}