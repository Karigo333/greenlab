import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-guide-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet
    ],
    templateUrl: './guide.component.html',
    styleUrl: './guide.component.scss'
})

export class GuideComponent {
    title = 'Правила взяття проб';
}