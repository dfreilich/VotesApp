import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ResultsComponent } from "./results/results.component";
import { SettingsComponent } from "./settings/settings.component";
import { CandidateListComponent } from "./candidate-list/candidate-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,},
  { path: 'results', component: ResultsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}