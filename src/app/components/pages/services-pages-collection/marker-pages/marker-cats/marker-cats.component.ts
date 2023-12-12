import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-marker-cats-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './marker-cats.component.html',
    styleUrl: './marker-cats.component.scss'
})

export class MarkerCatsComponent {
    title = 'Маркери запалення для котів';
}