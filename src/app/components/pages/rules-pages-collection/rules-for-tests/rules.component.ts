import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-rules-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.scss'
})

export class RulesComponent {
    title = 'Правила збіру проб';
}