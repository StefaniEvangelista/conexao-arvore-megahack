import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './modules/tela-principal/tela-principal.component';
import { TelaLoginComponent } from './modules/tela-login/tela-login.component';
import { TelaPodcastComponent } from './modules/tela-podcast/tela-podcast.component';
import { TelaClubLivroComponent } from './modules/tela-club-livro/tela-club-livro.component';
import { TelaInicialComponent } from './modules/tela-inicial/tela-inicial.component';
import { TelaFiltroTagsComponent } from './modules/tela-filtro-tags/tela-filtro-tags.component';
import { TelaGamificationComponent } from './modules/tela-gamification/tela-gamification.component';
import { TelaLocalizacaoComponent } from './modules/tela-localizacao/tela-localizacao.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UltimosVistosComponent } from './modules/ultimos-vistos/ultimos-vistos.component';



@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    TelaLoginComponent,
    TelaPodcastComponent,
    TelaClubLivroComponent,
    TelaInicialComponent,
    TelaFiltroTagsComponent,
    TelaGamificationComponent,
    TelaLocalizacaoComponent,
    UltimosVistosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
