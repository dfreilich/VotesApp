import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ResultsComponent } from "./results/results.component";
import { SettingsComponent } from "./settings/settings.component";
import { CandidateListComponent } from "./candidate-list/candidate-list.component";
import { CandidateInfoComponent } from "./candidate-info/candidate-info.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { VoteComponent } from "./vote/vote.component";
import { LoginComponent } from "./login/login.component";
import { RegisterToVoteComponent } from "./register-to-vote/register-to-vote.component";
import { IdUploadedComponent } from "./id-uploaded/id-uploaded.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'dashboard', component: DashboardComponent,},
  { path: 'results', component: ResultsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'candidate-info/:id', component: CandidateInfoComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register-to-vote', component: RegisterToVoteComponent},
  { path: 'id', component: IdUploadedComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
