import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-vagina-sampling-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './vagina-sampling.component.html',
    styleUrl: './vagina-sampling.component.scss'
})

export class VaginaSamplingComponent {
    title = 'Зішкріб зі слизової урогенітального тракту, піхви';
    
}