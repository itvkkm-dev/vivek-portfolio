import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    { title: 'Project One', description: 'An Angular app with Bootstrap UI.', link: '#' },
    { title: 'Project Two', description: 'Responsive dashboard built with Angular.', link: '#' },
    { title: 'Project Three', description: 'A portfolio site using Angular.', link: '#' },
  ];
}
