///<reference path="../../typings/index.d.ts"/>

// Import Modules:
import { NgModule } from "@angular/core";

import {
  MdButtonModule, MdCheckboxModule, MdRadioModule,
  MdInputModule, MdIconModule, MdTableModule,
  MdPaginatorModule, MdSortModule, MdSelectModule, MdOptionModule,
  MdTooltipModule

} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule, MdCheckboxModule, MdRadioModule
    , MdInputModule, MdIconModule, MdTableModule, MdPaginatorModule,
    MdSortModule, MdSelectModule, MdOptionModule,
    MdTooltipModule,
  ],
  exports: [
    MdButtonModule, MdCheckboxModule, MdRadioModule
    , MdInputModule, MdIconModule, MdTableModule, MdPaginatorModule,
    MdSortModule, MdSelectModule, MdOptionModule,
    MdTooltipModule,
  ],
})
export class AngularMaterialModule { }