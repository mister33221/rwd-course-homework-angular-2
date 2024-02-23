import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { MainChefComponent } from './main-chef/main-chef.component';
import { CommentsComponent } from './comments/comments.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    MainChefComponent,
    CommentsComponent,
    FormComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
