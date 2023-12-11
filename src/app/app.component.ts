import { Component, HostListener, OnInit  } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, Router, RouterModule } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GuideComponent } from './components/pages/guide/guide.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

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
    NotFoundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'greenlab';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // window.scrollTo(0, 0);
      }
    });
  }
}