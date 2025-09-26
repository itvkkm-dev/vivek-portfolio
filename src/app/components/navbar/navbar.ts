import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class Navbar implements OnInit {
  ngOnInit(): void {}
  menuOpen = false;
  activeSection = 'hero';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(section: string) {
    this.activeSection = section;
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    this.menuOpen = false;
  }
}
