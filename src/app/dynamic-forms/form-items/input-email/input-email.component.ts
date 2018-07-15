import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit {

  @Input() item: any;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
