import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
})
export class StudentDetail implements OnInit {

  studentId: number | null = null;
  student: any = null;

  students = [
    {
      id: 1,
      name: 'Niel Jhon Celocia',
      course: 'BSIT',
      year: '4th Year',
      active: true,
    },
    {
      id: 2,
      name: 'Jownie Ann Malate',
      course: 'BSIT',
      year: '4th Year',
      active: false,
    },
    {
      id: 3,
      name: 'Bonna Mae Pitogo',
      course: 'BSIT',
      year: '4th Year',
      active: true,
    },
    {
      id: 4,
      name: 'Kurt Wojtyle Rizal',
      course: 'BSIT',
      year: '4th Year',
      active: false,
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.studentId = id ? Number(id) : null;

    this.student = this.students.find(
      student => student.id === this.studentId
    );
  }
}