import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  theme: 'light' | 'dark' | 'netflix' | 'minecraft' | 'amazon' | 'angular' = 'light';
  showNetflixIntro = false;
  isThemeMenuOpen = false;
  scrollProgress = 0;

  @ViewChild('themeMenuContainer') themeMenuContainer!: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    this.scrollProgress = progress;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isThemeMenuOpen && this.themeMenuContainer && !this.themeMenuContainer.nativeElement.contains(event.target)) {
      this.isThemeMenuOpen = false;
    }
  }
  contactInfo = {
    phone: '+91 8********0',
    email: 'vivekkumarbiswal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vivek-kumar-biswal-a84856196/',
    github: 'https://github.com/vivekkumarbiswal',
    location: 'Bangalore',
  };
  ngOnInit() {
    this.applyTheme(this.theme);
  }


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
