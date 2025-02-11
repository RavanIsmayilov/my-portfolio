import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';



@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      this.http.post(`${environment.API_URL}/contact`, this.contactForm.value).subscribe({
        next: () => {
          this.successMessage = 'Your message has been sent successfully!';
          this.errorMessage = '';
          this.contactForm.reset();
        },
        error: (error) => {
          this.errorMessage = error.error.error || 'Message could not be sent, try again!';
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Please enter a valid email!';
    }
  }
}
