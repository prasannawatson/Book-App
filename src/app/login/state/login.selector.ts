import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loginState } from "./login.state";

const getEmailId = createFeatureSelector<loginState>('emailId');

export const getEmail =  createSelector(getEmailId, (state) => {
    return state.emailId;
})


