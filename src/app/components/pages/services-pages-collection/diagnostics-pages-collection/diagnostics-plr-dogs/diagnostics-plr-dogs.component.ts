import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-diagnostics-plr-dogs-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './diagnostics-plr-dogs.component.html',
    styleUrl: './diagnostics-plr-dogs.component.scss'
})

export class PlrDogsComponent {
    title = 'Полімеразно - ланцюгова реакція (ПЛР) в режимі реального часу (для собак)';
}