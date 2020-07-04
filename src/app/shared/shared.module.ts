import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { BackComponent } from './components/back/back.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
    declarations: [
        HeaderComponent,
        BackComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        HeaderComponent,
        BackComponent,
        FooterComponent
    ]
})
export class SharedModule { }
