import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { ResultsComponent } from './results/results.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { AlertDialogComponent } from './alertcomponent/alert.component';
import { VoteComponent } from './vote/vote.component';
import {
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDialog,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterToVoteComponent } from './register-to-vote/register-to-vote.component';
import { IdUploadedComponent } from './id-uploaded/id-uploaded.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    SettingsComponent,
    ResultsComponent,
    CandidateListComponent,
    CandidateInfoComponent,
    PageNotFoundComponent,
    AlertDialogComponent,
    VoteComponent,
    LoginComponent,
    RegisterToVoteComponent,
    IdUploadedComponent,
    LandingPageComponent,
    // CandidateInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent]
})
export class AppModule { }
