import { Component, OnInit, VERSION } from '@angular/core';
import { data } from './interface/user';

import { CustomeserviceService } from './customeservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private customservice: CustomeserviceService) {}

  apidata: data;
  userdata: any;
  ngOnInit() {
    this.testcustomservice();
  }

  testcustomservice() {
    this.customservice.getAPIData().subscribe((resp) => {
      this.apidata = resp;

      this.userdata = this.apidata.data;
    });
  }
}
