import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-marking-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './marking.component.html',
    styleUrl: './marking.component.scss'
})

export class MarkingComponent {
    title = 'Маркування проб';
}