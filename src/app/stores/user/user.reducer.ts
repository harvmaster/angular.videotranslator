import { createReducer, on } from '@ngrx/store';

import { User } from './user.model';

import UserActions from './user.actions';

export const initialState: User = {
  id: '',
  email: '',
  auth: {
    accessToken: ''
  }
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.login, (state, { user }) => ({ ...state, ...user })),
  on(UserActions.logout, () => initialState)
);