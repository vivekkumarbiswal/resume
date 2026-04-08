import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  theme: 'light' | 'dark' | 'netflix' | 'minecraft' | 'amazon' | 'angular' = 'light';
  showNetflixIntro = false;
  contactInfo = {
    phone: '+91 8********0',
    email: 'vivekkumarbiswal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vivek-kumar-biswal-a84856196/',
    github: 'https://github.com/vivekkumarbiswal',
    location: 'Bangalore',
  };

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'netflix' | 'minecraft' | 'amazon' | 'angular';
    if (savedTheme) {
      this.theme = savedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark';
    }
    this.applyTheme(this.theme);
  }

  isThemeMenuOpen = false;

  toggleThemeMenu() {
    this.isThemeMenuOpen = !this.isThemeMenuOpen;
  }

  setTheme(selectedTheme: 'light' | 'dark' | 'netflix' | 'minecraft' | 'amazon' | 'angular') {
    if (selectedTheme === 'netflix' && this.theme !== 'netflix') {
      this.triggerNetflixIntro();
    }
    this.theme = selectedTheme;
    this.applyTheme(this.theme);
    this.isThemeMenuOpen = false;
  }

  triggerNetflixIntro() {
    this.showNetflixIntro = true;
    setTimeout(() => {
      this.showNetflixIntro = false;
    }, 1000);
  }

  applyTheme(themeName: string) {
    if (themeName === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeName);
    }
    localStorage.setItem('theme', themeName);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf';
    link.download = 'VivekKumarBiswal_FrontendDeveloper_4Years_Resume.pdf';
    link.click();
  }
}
