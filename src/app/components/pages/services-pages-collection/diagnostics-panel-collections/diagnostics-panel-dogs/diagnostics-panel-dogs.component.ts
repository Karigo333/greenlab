import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-diagnostics-panel-dogs-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './diagnostics-panel-dogs.component.html',
    styleUrl: './diagnostics-panel-dogs.component.scss'
})

export class DPDogsComponent {
    title = 'Діагностичні панелі (рекомендовані) для собак';

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle('Діагностичні панелі для собак - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}