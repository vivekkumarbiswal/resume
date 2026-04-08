import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  contactInfo = {
    phone: '+91 8********0',
    email: 'vivekkumarbiswal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vivek-kumar-biswal-a84856196/',
    github: 'https://github.com/vivekkumarbiswal',
    location: 'Bangalore',
  };

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf';
    link.download = 'VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf';
    link.click();
  }
}
