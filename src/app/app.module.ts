import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MnFullpageModule, MnFullpageOptions } from 'ngx-fullpage';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule } from '@angular/material';

import { HomePageComponent } from './components/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { SeriesComponent } from './components/series/series.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { BrothersLockeThankYouComponent } from './components/brothers-locke-thank-you/brothers-locke-thank-you.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { KanacoldComponent } from './components/kanacold/kanacold.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'creators', component: CreatorsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'termsOfUse', component: TermsOfUseComponent},
  {path: 'privacyPolicy', component: PrivacyPolicyComponent },
  {path: 'brothers_locke_thank_you', component: BrothersLockeThankYouComponent},
  {path: 'kanacold', component: KanacoldComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidebarComponent,
    ModalDialogComponent,
    ContactComponent,
    CreatorsComponent,
    SeriesComponent,
    FooterComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    BrothersLockeThankYouComponent,
    PageNotFoundComponent,
    KanacoldComponent
  ],
  entryComponents: [
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MnFullpageModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    keyboardScrolling: true,
    scrollBar: true
  });
}
