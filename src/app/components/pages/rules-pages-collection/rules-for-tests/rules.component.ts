import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-rules-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './rules.component.html'

})

export class RulesComponent {
    title = 'Правила збіру проб';

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}