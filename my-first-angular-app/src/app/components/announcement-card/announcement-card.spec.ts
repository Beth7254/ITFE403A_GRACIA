import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.css',
})
export class AnnouncementCard {

  loading = true;

  announcements = [
    {
      title: 'Enrollment Schedule',
      body: 'Enrollment for the upcoming semester is now open.',
      author: 'Registrars Office',
      date: 'July 15, 2026',
      important: false
    },
    {
      title: 'School Orientation',
      body: 'All students are invited to attend the school orientation.',
      author: 'Ms. Arrienne Diolingo - Ms. Deputy Dean',
      date: 'August 11, 2026',
      important: false
    },
    {
      title: 'Intramurals 2026',
      body: 'Students are encouraged to join the upcoming intramurals.',
      author: 'Student Activities Office',
      date: 'September 1, 2026',
      important: false
    },
    {
      title: 'Campus Safety Reminder',
      body: 'Students are reminded to follow all campus safety guidelines.',
      author: 'SAO Office',
      date: 'September 5, 2026',
      important: false
    },
    {
      title: 'Computer Laboratory Schedule',
      body: 'Please check the updated schedule for computer laboratory use.',
      author: 'Engr. Mark Athony Atadero',
      date: 'September 5, 2026',
      important: false
    },
    {
      title: 'Career Orientation',
      body: 'A career orientation program will be conducted for graduating students.',
      author: 'Guidance Office',
      date: 'November 10, 2026',
      important: false
    },
    {
      title: 'School Holiday',
      body: 'Please take note of the upcoming school holiday.',
      author: 'Fr. Rooney Undar- Dean',
      date: 'October 27, 2026',
      important: false
    },
    {
      title: 'Student Organization Registration',
      body: 'Registration for student organizations is now open.',
      author: 'SAO office',
      date: 'November 6, 2026',
      important: false
    },
    {
      title: 'Clean-Up Drive',
      body: 'Join the school clean-up drive this Friday.',
      author: 'SAO office',
      date: 'November 15, 2026',
      important: false
    },
    {
      title: 'IT Seminar',
      body: 'A seminar about emerging IT technologies will be held next week.',
      author: 'IT Representatives',
      date: 'November 20, 2026',
      important: false
    }
  ];

  students = [
    {
      name: 'Niel Jhon Celocia',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: true
    },
    {
      name: 'Jownie Ann Malate',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: false
    },
    {
      name: 'Bonna Mae Pitogo',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: true
    },
    {
      name: 'Kurt Wojtyle Rizal',
      course: 'BSIT',
      year: '4th Year',
      favorite: false,
      active: false
    }
  ];

  editingStudentName: string | null = null;

  toggleFavorite(student: any) {
    student.favorite = !student.favorite;
    console.log(`${student.name} favorite set to ${student.favorite}`);
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

  togglePin(announcement: any) {
    announcement.important = !announcement.important;
    console.log(`${announcement.title} pinned: ${announcement.important}`);
  }

  deleteAnnouncement(index: number) {
    const removed = this.announcements[index];
    this.announcements.splice(index, 1);
    console.log(`Deleted announcement: ${removed.title}`);
  }

  finishLoading() {
    this.loading = false;
  }

}