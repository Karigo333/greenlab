import { Component, HostListener, OnInit, Renderer2, ElementRef} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, Router, RouterModule} from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GuideComponent } from './components/pages/guide/guide.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    TopbarComponent,
    HeaderComponent,
    ContactComponent,
    GuideComponent,
    FooterComponent,
    FontAwesomeModule,
    NotFoundComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isSticky = false;
  blockHeight = 60;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition <= 99) {
      this.isSticky = false;
    } else {
      this.isSticky = scrollPosition > 100;
    }
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // window.scrollTo(0, 0);
      }
    });
  }
}