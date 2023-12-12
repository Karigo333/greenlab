import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-bacterium-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './bacterium.component.html',
    styleUrl: './bacterium.component.scss'
})

export class BacteriumComponent {
    title = 'Бактеріологічне дослідження';
}