import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


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

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle('Діагностичні панелі для котів - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}