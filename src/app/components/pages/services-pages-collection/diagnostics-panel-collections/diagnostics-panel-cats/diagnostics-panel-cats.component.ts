import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-diagnostics-panel-cats-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './diagnostics-panel-cats.component.html',
    styleUrl: './diagnostics-panel-cats.component.scss'
})

export class DPCatsComponent {
    title = 'Діагностичні панелі (рекомендовані) для котів';
}