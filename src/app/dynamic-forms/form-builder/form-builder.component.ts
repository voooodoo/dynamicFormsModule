import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  
})
export class FormBuilderComponent implements OnInit {

  @Input() formData:any;
  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    let fieldsCtrls = {};
    
    for (let item of this.formData) {
      switch(item.type) {        
      case 'text':
      case 'email':
      case 'password':
      case 'checkbox':
      case 'select':
      case 'radio':
        fieldsCtrls[item.name] = this.fb.control({ 
          value: item.value ||'',
          disabled: item.disabled ? true:false
        });
      }
      
      this.form = this.fb.group( fieldsCtrls );
    }
    console.log(fieldsCtrls);
  }

  onSubmit() {
    console.log(this.form);
  }

}
