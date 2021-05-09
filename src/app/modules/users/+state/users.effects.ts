import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AddUsersSuccessPayload } from 'src/app/resources/interfaces/payloads/add-users-success.payload';
import { UsersService } from 'src/app/services/users.service';
import { AddUsers, AddUsersSuccess, UsersActionTypes } from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActionTypes.addUsers),
      switchMap((action: AddUsers) => {
        return this.usersService
          .addUsers(action.payload)
          .pipe(
            map(
              (response: AddUsersSuccessPayload) =>
                new AddUsersSuccess(response)
            )
          );
      })
    )
  );
}
