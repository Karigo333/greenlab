import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-diagnostics-plr-ferrets-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './diagnostics-plr-ferrets.component.html',
    styleUrl: './diagnostics-plr-ferrets.component.scss'
})

export class PlrFerretsComponent {
    title = 'Полімеразно - ланцюгова реакція (ПЛР) в режимі реального часу (для тхорів)';
}