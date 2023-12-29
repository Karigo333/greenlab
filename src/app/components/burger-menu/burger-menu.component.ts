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
  isOpen = false;
  subMenus: { [key: string]: boolean } = {};

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.closeSubMenus();
  }

  closeMenu() {
    this.isOpen = false;
    this.closeSubMenus();
  }

  toggleSubMenu(subMenuKey: string) {
    this.subMenus[subMenuKey] = !this.subMenus[subMenuKey];
  }

  closeSubMenus() {
    for (const key in this.subMenus) {
      if (this.subMenus.hasOwnProperty(key)) {
        this.subMenus[key] = false;
      }
    }
  }
}