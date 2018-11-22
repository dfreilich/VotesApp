import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ResultsComponent } from './results/results.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    SettingsComponent,
    ResultsComponent,
    CandidateListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
