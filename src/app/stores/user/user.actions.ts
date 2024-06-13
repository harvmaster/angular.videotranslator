import { createActionGroup, props } from '@ngrx/store';
import { User } from './user.model';

const UserActions = createActionGroup('user', {
  login: props<{ user: User }>(),
  logout: () => ({})
});

