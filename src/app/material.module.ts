import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCommonModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    declarations: [],
    exports: MATERIAL_MODULES,
})
export class MaterialModule { }