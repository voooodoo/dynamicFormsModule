import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form1:any[] = [
  {
    "name":"UserName",
    "label":"name",
    "type":"text",
    "class":"form-control-sm",
    "value":"",
    "required": true,
    "id": "UserName",
    "subtitle": "We'll never share your name with anyone else.",
    "placeholder":"name"
  },{
    "name":"userPassword",
    "label":"password",
    "type":"password",
    "value":"",
    "required":true,
    "id": "userPassword"
    },{
      "name":"userSubscribe",
      "label":"subscribe",
      "type":"checkbox",
      "value":false,
      "validators":"",
      "enable":true,
      "id":"userSubscribe",
    },{
      "name":"userEmail",
      "label":"email",
      "type":"email",
      "value":"",
      "required":false,
      "enable":true,
      "id": "userEmail",
      "subtitle": "We'll never share your email with anyone else."
      },
    {
      "name":"userCountry",
      "id":"userCountry",
      "label":"country",
      "type":"select",
      "value":"",
      "options":[
        {"value":"Ukraine" },
        {"value":"The USA"}
      ],
    }, {
      "name":"UserGender",
      "id":"UserGender",
      "label":"gender",
      "type":"radio",
      "value":"",
      "options":[
        {"label":"male","value":"Male", "id":"male"},
        {"label":"female","value":"Female", "id":"female"},
        {"label":"zombie","value":"Zombie", "id":"zombie"}
      ],
      "required":"true"
    }, 
      {
        "type":"button",
        "typeBtn": "submit",
        "name":"submit",
        "value" : "submit",
        "class" : "btn-warning btn-sm",
        "disabledIvalid" : true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
