import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-rectal-sampling-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './rectal-sampling.component.html',
    styleUrl: './rectal-sampling.component.scss'
})

export class RectalSamplingComponent {
    title = 'Зішкріб зі слизової прямої кишки';
    
}