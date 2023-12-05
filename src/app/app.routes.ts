import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { GuideComponent } from './components/guide/guide.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'guide', component: GuideComponent },
    { path: '**', component: NotFoundComponent}
];
