import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaPrincipalComponent } from './modules/tela-principal/tela-principal.component';
import { TelaClubLivroComponent } from './modules/tela-club-livro/tela-club-livro.component';
import { TelaFiltroTagsComponent } from './modules/tela-filtro-tags/tela-filtro-tags.component';
import { TelaGamificationComponent } from './modules/tela-gamification/tela-gamification.component';
import { TelaPodcastComponent } from './modules/tela-podcast/tela-podcast.component';
import { TelaLoginComponent } from './modules/tela-login/tela-login.component';
import { TelaLocalizacaoComponent } from './modules/tela-localizacao/tela-localizacao.component';
import { TelaInicialComponent } from './modules/tela-inicial/tela-inicial.component';


const routes: Routes = [
    {
        path: '',
        component: TelaLoginComponent,
    },
    {
        path: 'tela-login',
        component: TelaLoginComponent,
    },
    {
        path: 'tela-localizacao',
        component: TelaLocalizacaoComponent,
    },
    {
        path: 'tela-principal',
        component: TelaPrincipalComponent,
    },
    {
        path: 'tela-inicial',
        component: TelaInicialComponent,
    },
    {
        path: 'tela-club-livro',
        component: TelaClubLivroComponent,
    },
    {
        path: 'tela-filtro-tags',
        component: TelaFiltroTagsComponent,
    },
    {
        path: 'tela-gamification',
        component: TelaGamificationComponent,
    },
    {
        path: 'tela-podcast',
        component: TelaPodcastComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }