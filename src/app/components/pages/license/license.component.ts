import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SlideshowComponent } from '../../../slideshow/slideshow.component';

@Component({
    selector: 'app-license-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        SlideshowComponent
    ],
    templateUrl: './license.component.html',
    styleUrl: './license.component.scss'
})

export class LicenseComponent {
    title = 'Дозвільні документи';
}