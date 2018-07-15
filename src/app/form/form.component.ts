import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form1:any[] = [{
    "type":"button",
    "typeButton": "submit",
    "name":"submit"  },
  {
    "name":"UserName",
    "label":"name",
    "type":"text",
    "value":"name",
    "required": true
  }]

  constructor() { }

  ngOnInit() {
  }

}
