import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RenderFormComponent } from './render-form/render-form.component';
import { InputTextComponent } from './form-items/input-text/input-text.component';
import { InputEmailComponent } from './form-items/input-email/input-email.component';
import { InputPasswordComponent } from './form-items/input-password/input-password.component';
import { CheckboxComponent } from './form-items/checkbox/checkbox.component';
import { SelectComponent } from './form-items/select/select.component';
import { RadioComponent } from './form-items/radio/radio.component';
import { ButtonComponent } from './form-items/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    FormBuilderComponent, 
    RenderFormComponent, 
    InputTextComponent, 
    InputEmailComponent, 
    InputPasswordComponent, 
    CheckboxComponent, 
    SelectComponent, 
    RadioComponent, 
    ButtonComponent
  ],
  exports: [FormBuilderComponent]
})
export class DynamicFormsModule { }
