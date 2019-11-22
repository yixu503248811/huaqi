import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HistoryModel } from '../model/historyModel';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyList: Array<HistoryModel>;
  displayLoadingImg: boolean = false;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.displayLoadingImg = true;
    let that = this;
    this.user.getHistoryDetails().subscribe(response => {
      setTimeout(function () {
        that.displayLoadingImg = false;
      }, 1000);
      this.historyList = response;
    });
  }

  refresh() {
    this.getDetails();
  }

}
