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
import { ScrollService } from './components/services/scroll.service';
import { isPlatformBrowser } from '@angular/common';



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
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {
  @ViewChild('topbar', { static: false }) topbar!: ElementRef;
  isTopbarVisible: boolean = true;
  topbarHeight: number = 0;

  constructor(
    private scrollService: ScrollService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.scrollService.getIsTopbarVisible().subscribe(visible => {
      this.isTopbarVisible = visible;
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.topbarHeight = this.topbar.nativeElement.offsetHeight;
      this.scrollService.setTopbarHeight(this.topbarHeight);

      // Установка CSS переменной для высоты топбара
      this.renderer.setStyle(document.documentElement, '--topbar-height', `${this.topbarHeight}px`);
    }
  }
}