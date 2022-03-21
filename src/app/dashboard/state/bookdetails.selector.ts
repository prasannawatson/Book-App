import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookDetailsState } from "./bookdetails.state";

const getBookDetailState = createFeatureSelector<BookDetailsState>('bookDetails');

export const getBookDetail = createSelector(getBookDetailState, (state) =>{
    return state.bookDetails;
})