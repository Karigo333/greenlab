import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  animations: [
    trigger('changeIcon', [
      state('open', style({
        transform: 'rotate(45deg)',
      })),
      state('closed', style({
        transform: 'rotate(0deg)',
      })),
      transition('open <=> closed', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class BurgerMenuComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}