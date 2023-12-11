import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-discharge-sampling-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './discharge-sampling.component.html',
    styleUrl: './discharge-sampling.component.scss'
})

export class DischargeSamplingComponent {
    title = 'Відбір випоту (грудного, черевного)';
    
}