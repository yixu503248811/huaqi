import { Injectable } from '@angular/core';
import { AppReducerState } from './store/reducers/appReducer';
import { Store } from '@ngrx/store';

@Injectable()
export class UserService {
  constructor(private store: Store<AppReducerState>) {

  }
  getAllState() {
    return this.store.select('appReducer');
  }
  updateState(obj) {
    this.store.dispatch({
      type: obj.action
    });
  }
  getPersonInfo() {
    return {
      "time": "08/2019",
      "expend": "1,833.16",
      "income": "147.49",
      "balance": "6,666.66"
    };
  }
}
