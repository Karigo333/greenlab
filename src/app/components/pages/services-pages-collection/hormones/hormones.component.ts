import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-hormones-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './hormones.component.html',
    styleUrl: './hormones.component.scss'
})

export class HormonesComponent {
    title = 'Гормональні дослідження';

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}