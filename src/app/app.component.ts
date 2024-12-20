import { Component, HostListener, OnInit, Renderer2, ElementRef, Directive, Input, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, Router, RouterModule} from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GuideComponent } from './components/pages/guide/guide.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { BurgerMenuComponent } from '../app/components/burger-menu/burger-menu.component';
import { CommonModule, isPlatformBrowser  } from '@angular/common';


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
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0); // Прокрутка наверх только на клиенте
      }
    });
  }
}