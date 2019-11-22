import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayMessage: boolean = false;
  greetMessage = 'Loading';
  time: string;
  balance: string;
  expend: string;
  income: string;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getPersonInfo().subscribe(response => {
      this.user.getAllState().subscribe(state => {
        if (state.login) {
          this.displayMessage = false;
          this.time = response.time;
          this.balance = response.balance;
          this.expend = response.expend;
          this.income = response.income;
        } else {
          this.displayMessage = true;
          this.greetMessage = '请重新登录已验证身份!';
          this.time = response.time;
          this.balance = '0';
          this.expend = '0';
          this.income = '0';
        }
      });
    });

  }

  setting() {

  }

}
