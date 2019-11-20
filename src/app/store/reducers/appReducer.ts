import {ACCOUNT_01, ACCOUNT_02 } from '../actions/appActions';

export interface AppReducerState {
  login: boolean;
  user?: string;
}

const initialState: AppReducerState = {
  login: true

};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_01:
      return {
        ...state,
        login: true
      };

    case ACCOUNT_02:
      return {
        ...state,
        login: false
      };
  }
  return state;
}
