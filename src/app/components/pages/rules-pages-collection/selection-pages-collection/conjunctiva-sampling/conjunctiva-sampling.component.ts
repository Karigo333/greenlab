import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-conjunctiva-sampling-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './conjunctiva-sampling.component.html',
    styleUrl: './conjunctiva-sampling.component.scss'
})

export class ConjunctivaSamplingComponent {
    title = 'Змив з кон’юнктиви';
    
}