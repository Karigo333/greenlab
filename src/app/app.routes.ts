import { Routes } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GuideComponent } from './components/pages/guide/guide.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PreparationComponent } from './components/pages/preparation/preparation.component';
import { RulesComponent } from './components/pages/rules-for-tests/rules.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'guide', component: GuideComponent },
    { path: 'preparation', component: PreparationComponent},
    { path: 'rules', component: RulesComponent},


    { path: '**', component: NotFoundComponent}
];
