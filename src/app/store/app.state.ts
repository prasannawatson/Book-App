
import { BookDetailReducer } from "../dashboard/state/bookdetails.reducer";
import { BookDetailsState } from "../dashboard/state/bookdetails.state";
import { loginReducer } from "../login/state/login.reducer";
import { loginState } from "../login/state/login.state";


export interface AppState{
    emailId: loginState,
    bookDetails: BookDetailsState
}

export const appReducer = {
    emailId: loginReducer,
    bookDetails: BookDetailReducer
}