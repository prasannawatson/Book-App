import { createReducer } from "@ngrx/store"
import { initialState } from "./bookdetails.state"

var _BookdetailsReducer = createReducer(initialState)

export function BookDetailReducer(state, action) {
 return _BookdetailsReducer(state, action)
}