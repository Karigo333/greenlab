import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
  isOpen: boolean = false;
  onTop: boolean = false;
  toTop: number = 0;
  toBottom: number = 160;


  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const topbarHeight = document.getElementsByClassName('topbar')[0].clientHeight;
    const navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight;
    
    if (scrollPosition <= 99) {
      this.onTop = false;
      this.toTop = navbarHeight;
    
    } else {
      this.onTop = scrollPosition > 100;
      this.toBottom = topbarHeight + navbarHeight;
    }
  }


  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}