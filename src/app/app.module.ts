import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { InjectedChildComponent } from './injected-child/injected-child.component';
import { OnPushDemoComponent } from './on-push-demo/on-push-demo.component';
import { ChildComponent } from './child/child.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './contador/contador.component';
import { PainelComponent } from './painel/painel.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ComponenteDinamicoComponent } from './componente-dinamico/componente-dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WrapperComponent,
    InjectedChildComponent,
    OnPushDemoComponent,
    ChildComponent,
    FormularioComponent,
    ContadorComponent,
    PainelComponent,
    LifecycleComponent,
    ComponenteDinamicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
