import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, BurgerMenuComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
    title = 'header';
    navList = false;
}