import { Component, ElementRef, Directive, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        BurgerMenuComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
// Переменные для управления состоянием dropdown
public dropdownStates: { [key: string]: boolean } = {
    rules: false,
    services: false,
    rulesSub: false,
    servicesSub: false,
    // Добавьте состояние для подменю "Послуги"
    diagnostics: false,
    diagnosticPanels: false,
    inflammationMarkers: false
};

// Метод для переключения состояния конкретного dropdown
toggleDropdown(dropdownKey: string) {
    this.dropdownStates[dropdownKey] = !this.dropdownStates[dropdownKey];
}

// Метод для открытия конкретного dropdown
openDropdown(dropdownKey: string) {
    this.dropdownStates[dropdownKey] = true;
}

// Метод для закрытия конкретного dropdown
closeDropdown(dropdownKey: string) {
    this.dropdownStates[dropdownKey] = false;
}

// Метод для закрытия всех dropdowns
closeAllDropdowns() {
    Object.keys(this.dropdownStates).forEach(key => {
        this.dropdownStates[key] = false;
    });
}
}