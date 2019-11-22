import { Injectable } from '@angular/core';
import { AppReducerState } from './store/reducers/appReducer';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { HistoryModel } from './model/historyModel';

@Injectable()
export class UserService {
  constructor(private store: Store<AppReducerState>, private http: HttpClient) {

  }
  getAllState() {
    return this.store.select('appReducer');
  }
  updateState(obj) {
    this.store.dispatch({
      type: obj.action
    });
  }
  getPersonInfo(): any {
    return this.http.get("/assets/personInfo.json");
  }
  getHistoryDetails(): any {
    return this.http.get("/assets/historyDetails.json");
  }
}
