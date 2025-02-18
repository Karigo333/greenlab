import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-materials-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
    ],
    templateUrl: './materials.component.html'
})

export class MaterialsComponent {
    title = 'Витратні матеріали';

    constructor(private titleService: Title) {}
  
    ngOnInit() {
        this.setTitle(this.title + ' - GreenLab');
    }
  
    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    
}