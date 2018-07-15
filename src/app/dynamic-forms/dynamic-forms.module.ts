import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RenderFormComponent } from './render-form/render-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [FormBuilderComponent, RenderFormComponent],
  exports: [FormBuilderComponent]
})
export class DynamicFormsModule { }
