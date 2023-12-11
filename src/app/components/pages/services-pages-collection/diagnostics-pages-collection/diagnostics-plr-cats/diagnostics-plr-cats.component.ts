import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-diagnostics-plr-cats-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './diagnostics-plr-cats.component.html',
    styleUrl: './diagnostics-plr-cats.component.scss'
})

export class PlrCatsComponent {
    title = 'Полімеразно - ланцюгова реакція (ПЛР) в режимі реального часу (для котів)';
}