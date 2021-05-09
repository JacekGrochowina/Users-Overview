import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/+state/app-state.model';
import { UsersState } from 'src/app/resources/interfaces/state/users-state.interface';

export const selectUsers = (state: AppState) => state.users;

export const selectUsersCollection = createSelector(
  selectUsers,
  (state: UsersState) => state.collection
);
