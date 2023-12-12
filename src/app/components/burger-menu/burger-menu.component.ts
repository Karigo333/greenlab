import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface MenuItem {
  title: string;
  children?: MenuItem[];
  isOpen?: boolean; // Добавлено новое свойство
}


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
  isOpen: boolean = false;

  menuItems: MenuItem[] = [
    { title: 'Home' },
    { title: 'About' },
    {
      title: 'Services',
      children: [
        { title: 'Web Development' },
        { title: 'Mobile App Development' },
        { title: 'UI/UX Design' }
      ],
      isOpen: false // Исправление: добавлено начальное значение isOpen для подменю
    },
    { title: 'Contact' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  handleItemClick(item: MenuItem) {
    // If the item has children, toggle their visibility
    if (item.children && item.children.length) {
      item.isOpen = !item.isOpen;
    }

    // Add your navigation logic here
    console.log(`Clicked on ${item.title}`);
  }
}