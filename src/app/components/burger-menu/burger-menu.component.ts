import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface MenuItem {
  title: string;
  link?: string;
  children?: MenuItem[];
  isOpen?: boolean; // Добавлено новое свойство
}


@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
  animations: [
  //   trigger('changeIcon', [
  //     state('open', style({
  //       transform: 'rotate(45deg)',
  //     })),
  //     state('closed', style({
  //       transform: 'rotate(0deg)',
  //     })),
  //     transition('open <=> closed', animate('0.3s ease-in-out')),
  //   ]),
  ],
})
export class BurgerMenuComponent {
  isOpen: boolean = false;

  menuItems: MenuItem[] = [
    { title: 'Головна',
      link: '/'
    },
    {
      title: 'Правила збіру проб ❯',
      children: [
        { title: 'Підготовка тварини до аналізу',
          link: '/preparation' 
        },
        { title: 'Правила збіру проб',
          link: '/rules'
        },
        { title: 'Маркування  проб',
          link: '/marking'
        },
        { title: 'Витратні матеріали',
          link: '/materials'
        },
        { 
          title: 'Відбір ❯',
          children: [
            { title: 'Вибір крові',
              link: '/blood-sampling'
            },
            { title: 'Змив з кон’юнктиви',
              link: '/conjunctiva-sampling'
            },
            { title: 'Змив з носа',
              link: '/nose-sampling'
            },
            { title: 'Зішкріб зі слизової урогенітального тракту, піхви',
              link: '/vagina-sampling'
            },
            { title: 'Зішкріб зі слизової прямої кишки',
              link: '/rectal-sampling'
            },
            { title: 'Змив з ротової порожнини, глотки',
              link: '/oral-sampling'
            },
            { title: 'Відбір випоту (грудного, черевного)',
              link: '/discharge-sampling'
            }
          ]
        }
      ],
      isOpen: false
    },
    {
      title: 'Послуги ❯',
      children: [
        { title: 'Що таке ПЛР?',
          link: '/info'
        },
        { title: 'Прайс лист',
          link: '/'
        },
        { title: 'Діагностика ПЛР ❯',
          children: [
            { title: 'Для котів',
              link: '/diagnostics-plr-cats'
            },
            { title: 'Для собак',
              link: '/diagnostics-plr-dogs'
            },
            { title: 'Для тхорів',
              link: '/diagnostics-plr-ferrets'
            }
          ]
        },
        { title: 'Діагностичні панелі ПЛР ❯',
          children: [
          { title: 'Для котів',
            link: '/diagnostics-panel-cats'
          },
          { title: 'Для собак',
            link: '/diagnostics-panel-dogs'
          }
          ] 
        },
        { title: 'Гормони',
          link: '/hormones'
        },
        { title: 'Генетичні дослідження',
          link: '/genetics'
        },
        { title: 'Бакпосів',
          link: '/batrerium-research'
        },
        { title: 'Маркери запалення (новинка) ❯',
          children: [
            { title: 'Для котів',
              link: '/marker-cats'
            },
            { title: 'Для собак',
              link: '/marker-dogs'
            }
          ]
        }
      ],
      isOpen: false
    },
    { title: 'Як здати аналіз?',
      link: '/guide'
    },
    { title: 'Контакти',
      link: '/contact'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    
  }

  handleItemClick(item: MenuItem) {
    // If the item has children, toggle their visibility
    if (item.children && item.children.length) {
      item.isOpen = !item.isOpen;
    }

    // Add your navigation logic here
    console.log(`Clicked on ${item.title}`);
  }
}