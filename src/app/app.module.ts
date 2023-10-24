import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemComponent } from './components/problem/problem.component';
import { SolutionIntroComponent } from './components/solution-intro/solution-intro.component';
import { Value1PropComponent } from './components/value1-prop/value1-prop.component';
import { Value2PropComponent } from './components/value2-prop/value2-prop.component';
import { Value3PropComponent } from './components/value3-prop/value3-prop.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProblemComponent,
    SolutionIntroComponent,
    Value1PropComponent,
    Value2PropComponent,
    Value3PropComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
