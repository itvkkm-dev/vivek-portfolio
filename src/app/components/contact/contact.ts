import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  currentYear: number = new Date().getFullYear();
  contactForm!: FormGroup;
  whatsappLink: string =
    'https://wa.me/7310998140?text=' +
    encodeURIComponent('Hi Vivek, I’d like to get in touch with you.');

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const name = this.contactForm.value.name;
      const subject = encodeURIComponent(this.contactForm.value.subject);
      const message = this.contactForm.value.message;

      const body = encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`);

      const mailtoUrl = `mailto:it.vkkm@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    }
  }
}
