import { createAction, props } from "@ngrx/store";

export const getEmailId = createAction('get', props<{getEmailId: string}>())