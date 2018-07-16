import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [HttpService]
})
export class FormComponent implements OnInit {
  
  formJSON:any[];
    
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data:any[]) => this.formJSON=data);
  }

  onClick() {
    console.log(this.formJSON);
  }
}
