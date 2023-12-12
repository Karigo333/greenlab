import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-marker-dogs-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './marker-dogs.component.html',
    styleUrl: './marker-dogs.component.scss'
})

export class MarkerDogsComponent {
    title = 'Маркери запалення для собак';
}