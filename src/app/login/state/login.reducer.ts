import { getEmailId } from './login.actions';
import { initialState } from './login.state';
import { createReducer, on } from '@ngrx/store';


const _loginReducer = createReducer(
    initialState,
    on(getEmailId, (state, action) => {
      console.log(action);
      return {
        ...state,
         emailId: action.getEmailId,
      };
    })
);
export function loginReducer(state, action) {
    return _loginReducer(state, action);
  }