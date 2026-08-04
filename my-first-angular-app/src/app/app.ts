import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProfileCard } from './components/profile-card/profile-card';
import { AnnouncementCard } from './components/announcement-card/announcement-card';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    ProfileCard,
    AnnouncementCard,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}