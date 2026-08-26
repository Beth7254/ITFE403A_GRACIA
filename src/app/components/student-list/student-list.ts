import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Footer } from '../footer/footer';
import { ProfileCard } from '../profile-card/profile-card';
import { AnnouncementCard } from '../announcement-card/announcement-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    Footer,
    ProfileCard,
    AnnouncementCard
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  loading = false;

  students = [
    {
      id: 1,
      name: 'Niel Jhon Celocia',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: true,
    },
    {
      id: 2,
      name: 'Jownie Ann Malate',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: false,
    },
    {
      id: 3,
      name: 'Bonna Mae Pitogo',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: true,
    },
    {
      id: 4,
      name: 'Kurt Wojtyle Rizal',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: false,
    },
  ];

  editingStudentName: string | null = null;

  toggleFavorite(student: any) {
    student.favorite = !student.favorite;
    console.log(
      `${student.name} favorite set to ${student.favorite}`
    );
  }

  deleteStudent(index: number) {
    const removed = this.students[index];

    this.students.splice(index, 1);

    console.log(`Deleted student: ${removed.name}`);
  }

  editStudent(student: any) {
    this.editingStudentName = student.name;
    console.log(`Editing ${student.name}`);
  }

  finishLoading() {
    this.loading = false;
  }
}