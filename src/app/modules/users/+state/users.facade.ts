import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app-state.model';
import { UsersParameters } from 'src/app/resources/interfaces/users-parameters.interface';
import { AddUsers } from './users.actions';
import { selectUsersCollection } from './users.selectors';

@Injectable()
export class UsersFacade {
  users$ = this.store.select(selectUsersCollection);

  constructor(private store: Store<AppState>) {}

  addUsers(params: UsersParameters): void {
    this.store.dispatch(new AddUsers(params));
  }
}
