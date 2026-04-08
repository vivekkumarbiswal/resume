import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  contactInfo = {
    phone: '+91 8********0',
    email: 'vivekkumarbiswal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vivek-kumar-biswal-a84856196/',
    github: 'https://github.com/vivekkumarbiswal',
    location: 'Bangalore',
  };

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf';
    link.download = 'VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf';
    link.click();
  }
}
