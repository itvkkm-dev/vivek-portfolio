import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, AfterViewInit {
  showScrollDownButton: boolean = true;
  showScrollToTopButton: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }

  ngAfterViewInit(): void {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    this.showScrollDownButton = scrollY < 50;
    this.showScrollToTopButton = scrollY > 200;
  }

  downloadResume(): void {
    const url = 'assets/images/Vivek Resume.pdf';

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(url, '_blank'); // just open PDF
    } else {
      // desktop download + open
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Vivek Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.open(url, '_blank');
    }
  }
}
