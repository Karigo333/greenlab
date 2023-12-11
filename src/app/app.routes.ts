import { Routes } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GuideComponent } from './components/pages/guide/guide.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PreparationComponent } from './components/pages/rules-pages-collection/preparation/preparation.component';
import { RulesComponent } from './components/pages/rules-pages-collection/rules-for-tests/rules.component';
import { MarkingComponent } from './components/pages/rules-pages-collection/marking/marking.component';
import { MaterialsComponent } from './components/pages/rules-pages-collection/materials/materials.component';
import { BloodSamplingComponent } from './components/pages/rules-pages-collection/selection-pages-collection/blood-sampling/blood-sampling.component';
import { ConjunctivaSamplingComponent } from './components/pages/rules-pages-collection/selection-pages-collection/conjunctiva-sampling/conjunctiva-sampling.component';
import { NoseSamplingComponent } from './components/pages/rules-pages-collection/selection-pages-collection/nose-sampling/nose-sampling.component';
import { VaginaSamplingComponent } from './components/pages/rules-pages-collection/selection-pages-collection/vagina-sampling/vagina-sampling.component';
import { RectalSamplingComponent } from './components/pages/rules-pages-collection/selection-pages-collection/rectal-sampling/rectal-sampling.component';
import { OralSamplingComponent } from './components/pages/rules-pages-collection/selection-pages-collection/oral-sampling/oral-sampling.component';
import { DischargeSamplingComponent } from './components/pages/rules-pages-collection/selection-pages-collection/discharge-sampling/discharge-sampling.component';
import { InfoComponent } from './components/pages/services-pages-collection/info/info.component';
import { PlrCatsComponent } from './components/pages/services-pages-collection/diagnostics-pages-collection/diagnostics-plr-cats/diagnostics-plr-cats.component';
import { PlrDogsComponent } from './components/pages/services-pages-collection/diagnostics-pages-collection/diagnostics-plr-dogs/diagnostics-plr-dogs.component';
import { PlrFerretsComponent } from './components/pages/services-pages-collection/diagnostics-pages-collection/diagnostics-plr-ferrets/diagnostics-plr-ferrets.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'guide', component: GuideComponent },
    { path: 'preparation', component: PreparationComponent},
    { path: 'rules', component: RulesComponent},
    { path: 'marking', component: MarkingComponent},
    { path: 'materials', component: MaterialsComponent},
    { path: 'blood-sampling', component: BloodSamplingComponent},
    { path: 'conjunctiva-sampling', component: ConjunctivaSamplingComponent},
    { path: 'nose-sampling', component: NoseSamplingComponent},
    { path: 'vagina-sampling', component: VaginaSamplingComponent},
    { path: 'rectal-sampling', component: RectalSamplingComponent},
    { path: 'oral-sampling', component: OralSamplingComponent},
    { path: 'discharge-sampling', component: DischargeSamplingComponent},
    { path: 'info', component: InfoComponent},
    { path: 'diagnostics-plr-cats', component: PlrCatsComponent},
    { path: 'diagnostics-plr-dogs', component: PlrDogsComponent},
    { path: 'diagnostics-plr-ferrets', component: PlrFerretsComponent},

    { path: '**', component: NotFoundComponent}
];
