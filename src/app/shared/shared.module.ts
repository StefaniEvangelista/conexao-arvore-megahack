import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { BackComponent } from './components/back/back.component';
import { FooterComponent } from './components/footer/footer.component';
import { SegundoTopoComponent } from './components/segundo-topo/segundo-topo.component';
import { CampoBuscaComponent } from './components/campo-busca/campo-busca.component';




@NgModule({
    declarations: [
        HeaderComponent,
        BackComponent,
        FooterComponent,
        SegundoTopoComponent,
        CampoBuscaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        HeaderComponent,
        BackComponent,
        FooterComponent,
        SegundoTopoComponent,
        CampoBuscaComponent
    ]
})
export class SharedModule { }
