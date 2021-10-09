import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BalanceGeneralComponent } from "./balance-general.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [BalanceGeneralComponent],
    imports:[
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule
    ],
    exports:[
        BalanceGeneralComponent
    ]
})
export class BalanceGeneralModule{}