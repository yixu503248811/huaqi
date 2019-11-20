import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ACCOUNT_01, ACCOUNT_02 } from '../store/actions/appActions';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  dateList: Array<any>;
  typeList: Array<any>;
  dateModel: string;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.dateList = [
      { value: "2019年8月", id: "1" },
      { value: "2019年9月", id: "2" }
    ];
    this.typeList = [
      { value: "账户01", id: "1" },
      { value: "账户02", id: "2" }
    ];
  }

  changeDate(event) {
    console.log(event)
    console.log(this.dateModel)
    if (event === '1') {
      this.user.updateState({
        action: ACCOUNT_01
      });
    } else {
      this.user.updateState({
        action: ACCOUNT_02
      });
    }
  }

}
