import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { CommonModule } from '@angular/common';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Experience, Contact, Projects, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit {
  ngOnInit(): void {
    Aos.init({
      duration: 700,
      once: false,
    });
  }

  ngAfterViewInit(): void {
    Aos.refresh();
  }
}
